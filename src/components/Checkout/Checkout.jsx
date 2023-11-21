import { useState } from "react"
import { useCart } from "../../context/CartContext"
import { getDocs, collection, query, where, documentId, writeBatch, addDoc, Timestamp } from 'firebase/firestore'
import { database } from "../../services/firebase/firebaseConfig"
import CheckoutForm from "../CheckoutForm/CheckoutForm"
// import classes from './Checkout.module.css'

const Checkout = () => {
    const [loading, setLoading] = useState(false)
    const [orderId, setOrderId] = useState('')
    const { cart, total, clearCart } = useCart()

    //lógica correspondiente a la creación de la orden, función que deberé pasar al formulario
    //manejo de promesas usando async-await
    const createOrder = async (userData) => {
        try {
            setLoading(true)

            const objOrder = {
                buyer: { userData
                    // name: 'María Pía Barreiro',
                    // email: 'mpb@gmail.com',
                    // phone: '099123456'
                },
                items: cart,
                total: total, 
                //fecha de compra
                date: Timestamp.fromDate(new Date())
            }
    
            //A la funcion writeBatch le apso la referencia de la base de datos
            const batch = writeBatch(database)
            const outOfStock = []
    
            //necesito el conjunto de ids de los productos en mi cart = array de ids
            const ids = cart.map(prod => prod.id)
    
            //referencia a mi coelccion de productos en mi database
            //documentId es la funcion que hace referencia a la Id del doc
            const productsRef = query(collection(database, 'products'), where(documentId(),'in',ids))
    
            //del QuerySnapshot desestructuro docs que es lo unico que necesito
             const { docs } = await getDocs(productsRef)
    
            //recorro el array 
            docs.forEach(async documentSnapshot => {
                const fields = documentSnapshot.data()
                const stockDb = fields.stock

                // datos a comparar stock vs prod agregado
                const productAddedToCart = cart.find(prod => prod.id === documentSnapshot.id)
                const prodQuantity = productAddedToCart.quantity
    
                //comparacion entre stock y la cantidad de prod que quiere el usuario
                if(stockDb >= prodQuantity) {
                    //funcion update aplicada a batch: actualizo el stock - cantidad agregada
                    batch.update(documentSnapshot.ref, { stock: stockDb - prodQuantity})
                } else {
                    outOfStock.push({ id: documentSnapshot.id, ...fields })
                }
    
                //si hay stock inicio la validacion
                if(outOfStock.length === 0) {
                    const ordersRef = collection(database, 'orders')
    
                    //agrego un doc a coleccion
                    const { id } = await addDoc(ordersRef, objOrder)
                    //ejecuto todas las acciones de batch al hacer commit
                    batch.commit()
                    clearCart()
                    setOrderId(id)
                    console.log(`El id de su orden es ${id}`)
                } else {
                    console.log('No hay stock de algun producto')
                }
            })
        } catch (error) {
            console.error('Hubo un error generando la orden')
        } finally {
            setLoading(false)
        }
    }

    if(loading) {
        return <h1>Se esta generando su orden</h1>
    }

    if (orderId) {
        return (
            <div>
                <h3>El identificador de su orden es: {orderId}</h3>
                <h4>El pedido de llegará en 48h hábiles</h4>
            </div>
        )
    }

    return (
        <>
            <h3>Completá el formulario para registrar tu compra</h3>
            <CheckoutForm/>
        </>
    )
}

export default Checkout

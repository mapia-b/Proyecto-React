import { useState } from "react"
import { useCart } from "../../context/CartContext"
import { getDocs, collection, query, where, documentId, writeBatch, addDoc, Timestamp } from 'firebase/firestore'
import { database } from "../../services/firebase/firebaseConfig"
import CheckoutForm from "../CheckoutForm/CheckoutForm"
import classes from './Checkout.module.css'

const Checkout = () => {
    const [loading, setLoading] = useState(false)
    const [orderId, setOrderId] = useState('')
    const { cart, total, clearCart } = useCart()

    //lógica correspondiente a la creación de la orden, función que deberé pasar al formulario
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
    
            const batch = writeBatch(database)
            const outOfStock = []
    
            const ids = cart.map(prod => prod.id)
    
            const productsRef = query(collection(database, 'products'), where(documentId(),'in',ids))
    
            // getDocs(productsRef).then(QuerySnapshot => {})
            // const QuerySnapshot = await getDocs(productsRef)
    
            const { docs } = await getDocs(productsRef)
    
            docs.forEach(async documentSnapshot => {
                const fields = documentSnapshot.data()
                const stockDb = fields.stock
    
                const productAddedToCart = cart.find(prod => prod.id === documentSnapshot.id)
                const prodQuantity = productAddedToCart.quantity
    
                if(stockDb >= prodQuantity) {
                    batch.update(documentSnapshot.ref, { stock: stockDb - prodQuantity})
                } else {
                    outOfStock.push({ id: documentSnapshot.id, ...fields })
                }
    
                if(outOfStock.length === 0) {
                    const ordersRef = collection(database, 'orders')
    
                    const { id } = await addDoc(ordersRef, objOrder)
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
        return <h1>Se esta generando su orden...</h1>
    }

    if(orderId) {
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

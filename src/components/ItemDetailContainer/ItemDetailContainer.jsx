import ItemDetail from "../ItemDetail/ItemDetail"
import { useState, useEffect } from "react"
import { myProductsById } from "../../asyncmock"
import { useParams } from "react-router-dom"

const ItemDetailContainer = () => {
    const [product, setProduct] = useState (null)
    const [loading, setLoading] = useState(true)

    const { itemId } = useParams()

    useEffect (()=>{
        myProductsById (itemId)
        .then (response => {
            setProduct(response) 
        })
        .catch (error =>{
            console.log(error)
        })
        .finally (()=>{
        setLoading(false)
    })
}, [itemId])
//paso como dependencia itemId

if(loading) {
    return <h2>Cargando la página</h2>
}
if(!product) {
    return <h2>No encontramos el producto que estas buscando</h2>
}

return(
    <section>
         <h3>+ info</h3>
            <ItemDetail {...product}/>
    </section>
)
}

export default ItemDetailContainer
import classes from './ItemListContainer.module.css'
import ItemList from '../ItemList/ItemList'
import useAsync from '../hooks/useAsync'

import { myProducts, myProductsByCategory } from '../../asyncmock'
import { useParams } from 'react-router-dom'


const ItemListContainer =({greeting}) => {
    //useParams para obtener elemento categoryId de la URL
    const {categoryId} = useParams()
    console.log({greeting})
    
    //customHookFunction definida en mi hook
    //si se obtiene el valor de categoryId entonces se llama a la funcion myProductsByCategroy, sino se llama a la funcion myProducts
    const customHookFunction = () => categoryId ? myProductsByCategory(categoryId) : myProducts()
    
    const { data: products, loading, error } = useAsync(customHookFunction, [categoryId])

    if(loading) {
        return <h2>Cargando la página</h2>
               
    }

    if(error) {
        return <h2>Ocurrió un error al cargar los productos, intenta denuevo</h2>
    }

    //si no se muestra ningun producto
    if(products.length === 0) {
        return <h2> Categoría sin stock</h2>
    }

    return(
        <>
            <h3 className={classes.titulo}>{!categoryId ? greeting : (greeting + categoryId)}</h3>
            <ItemList products={products}/>
        </>
    )
}

export default ItemListContainer
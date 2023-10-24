
import ItemList from "../ItemList/ItemList"

const ItemListContainer =({greeting}) => {
    return(
        <>
            <h3>{greeting}</h3>
            <ItemList/>
        </>
    )
}

export default ItemListContainer
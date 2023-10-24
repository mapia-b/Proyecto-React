import classes from './Item.module.css'
import { Link, useNavigate } from "react-router-dom"

//desestructuro las propiedadaes del obj
const Item = ({ id, title, img, price, stock }) => {

    //para manejar la navegacion de mi app
    const navigate = useNavigate()

    const handleClick = (e) => {
        e.stopPropagation()
        console.log('click en el item')
    }

    return (
        <div onClick={handleClick} className={classes.padrecard} >
            <section className={classes.card}>
            <h2 className={classes.articulo}>{title}</h2>
            <img src={img} style={{ width:150}}/>
            <h3 className={classes.stock}>Productos en stock: <strong>{stock}</strong></h3>
            <h4 className="precio">{price}$UYU</h4>
            <button onClick={() => navigate('/item')} className={classes.info}>+ info</button>
            {/* <Link to={`/item/${id}`}>Ver detalle</Link> */}
            </section>
        </div>
    )
}

export default Item
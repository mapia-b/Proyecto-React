import ItemCount from "../ItemCount/ItemCount"
import { useState } from "react"
import classes from './ItemDetail.module.css'


/* CODIGO VISTO EN CLASE, REGISTRADO PARA TENERLO ACCESIBLE PARA PRACTICAR: 
CONTADOR CON BOTON INGRESANDO NUMERO EN INPUT.
// const InputCount = ({ onAdd, stock, initial= 1 }) => {
//     const [count, setCount] = useState(initial)
//     const handleChange = (e) => {
//         if(e.target.value <= stock) {
//             setCount(e.target.value)
//         }
//     }
//     return (
//         <div>
//             <input type='number' onChange={handleChange} value={count}/>
//             <button onClick={() => onAdd(count)}>Agregar al carrito</button>
//         </div>
//     )
// }*/

const ButtonCount = ({ onAdd, stock, initial = 1 }) => {
    const [count, setCount] = useState(initial)

    //funciones para + y - 

    const suma = () => {
        //validacion: no sumar mas que mi stock
        if (count < stock) {
            setCount(prev => prev + 1)
        }

    }

    const rest = () => {
        //validacion: no tener valores menores a 1
        if (count >= 1) {
            setCount(prev => prev - 1)
        }
    }


    return (
        <div>
            <p><strong>{count}</strong></p>
            <section className={classes.btn}>
                <div className={classes.addandrest}>
            <button onClick={rest}>-</button>
            <button onClick={suma}>+</button>
                 </div>
            <button onClick={() => onAdd(count)}>Agregar al carrito</button>
            </section>
        </div>
    )
}

const ItemDetail = ({ id, title, category, img, price, stock, description }) => {
    const [inputType, setInputType] = useState('button')

    const ItemCount = inputType === 'button' ? ButtonCount : InputCount

    const handleOnAdd = (quantity) => {
        console.log(`Se agregó ${quantity} ${title} de la categoria {category}`)
    }

    return (
        <article>
            <header>
                <h3 className={classes.title}> {title}</h3>
            </header>
            <picture>
                <img src={img} alt={title} style={{ width: 300 }} />
            </picture>
            <section>
                <p className={classes.category}>Sección: {category}</p>
                <p className={classes.description}>{description}</p>
                <p className={classes.price}>{price} $UYU </p>
                <p className={classes.id}>Identificador del producto: {id}</p>
            </section>
            <footer>
                <ItemCount stock={stock} onAdd={handleOnAdd} />
            </footer>
        </article>
    )
}

export default ItemDetail


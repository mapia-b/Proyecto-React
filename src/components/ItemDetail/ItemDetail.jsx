
import { useState } from "react"
// import ItemCount 

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
// }

// const ButtonCount = ({ onAdd, stock, initial = 1 }) => {
//     const [count, setCount] = useState(initial)

//     const increment = () => {
//         if(count < stock) {
//             setCount(count + 1)
//         }

//     }

//     const decrement = () => {
//             setCount(count - 1)
//     }

//     return (
//         <div>
//             <p>{count}</p>
//             <button onClick={decrement}>-</button>
//             <button onClick={increment}>+</button>
//             <button onClick={() => onAdd(count)}>Agregar al carrito</button>
//         </div>
//     )
// }

const ItemDetail = ({ id, name, category, img, price, stock, description }) => {
    // const [inputType, setInputType] = useState('button')

    // const ItemCount = inputType === 'button' ? ButtonCount : InputCount

    // const handleOnAdd = (quantity) => {
    //     console.log(`se agregaron ${quantity} ${name}`)
    // }

    return (
        <article>
            <button onClick={() => setInputType(inputType === 'input' ? 'button' : 'input')}>
                Cambiar contador
            </button>
            <header>
                <h3> {name}</h3>
            </header>
            <picture>
                <img src={img} alt={name} style={{ width: 100 }} />
            </picture>
            <section>
                <p>Categoria: {category}</p>
                <p>Descripción: {description}</p>
                <p>Precio: {price} $UYU </p>
            </section>
            <footer>
                <ItemCount stock={stock} onAdd={handleOnAdd} />
            </footer>
        </article>
    )
}

export default ItemDetail


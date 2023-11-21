import { CartContext } from '../../context/CartContext'
import cart from './assets/cart.svg'
import { useContext } from 'react'
import { Link } from 'react-router-dom'

const CartWidget = () => {
    const { totalQuantity } = useContext(CartContext)

    console.log (totalQuantity)

   
    return (
        <div>
            <Link to='/cart'>
                <img src={cart} style={{ width: 30, height: 30 }} alt="carrito de compras" />
                {totalQuantity}
              
            </Link>
        </div>
    )
}

export default CartWidget
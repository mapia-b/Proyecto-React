import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import classes from './Cart.module.css'

const Cart = () => {
    const { cart, clearCart, totalQuantity, total } = useCart();

    return (
        <div className={classes.container}>
            <h3>Este es tu carrito de compras:</h3>
            <div className={classes.cart}>
                {cart.map(prod => (
                    <div key={prod.id} className={classes.prod}>
                        <h3>{prod.name}</h3>
                        <img src={prod.img} alt={prod.title} style={{ width: 100 }} />
                        <p>Precio: ${prod.price}</p>
                        <p>Cantidad: {prod.quantity || 0}</p>
                    </div>
                ))}
            </div>
            <h4>Productos en carrito: {totalQuantity}</h4>
            <h4>Total: ${total}</h4>
            <button onClick={() => clearCart()}>Vaciar carrito</button>
            <Link to='/checkout' style={{ fontSize: 'larger', marginTop: '20px' }}>Checkout</Link>
        </div>
    );
};

export default Cart;
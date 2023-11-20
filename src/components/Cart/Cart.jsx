import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

const Cart = () => {
    const { cart, clearCart, totalQuantity, total } = useCart();

    return (
        <div>
            <h3>Este es tu carrito de compras:</h3>
            <div>
                {cart.map(prod => (
                    <div key={prod.id}>
                        <h3>{prod.name}</h3>
                        <img src={prod.img} alt={prod.title} style={{ width: 100 }} />
                        <p>Precio: ${prod.price}</p>
                        <p>Cantidad: {prod.quantity || 0}</p>
                    </div>
                ))}
            </div>
            <h4>Cuantos productos tengo? {totalQuantity}</h4>
            <h4>precio TOTAL: ${total}</h4>
            <button onClick={() => clearCart()}>Vaciar carrito</button>
            <Link to='/checkout'>Checkout</Link>
        </div>
    );
};

export default Cart;
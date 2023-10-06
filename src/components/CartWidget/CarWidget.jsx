import cart from './assets/cart.svg'

const CartWidget = () => {
    return(
        <div>
            <img src={cart} style={{width:30, height:30}} alt="carrito de compras" />
            <button style={{backgroundColor:'rgba(116, 41, 228, 0.253)'}}>
                0
            </button>
        </div>
    )
}

export default CartWidget
import classes from './NavBar.module.css'
import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {
    return (
        <nav>
            <h1>Casa Franca</h1>
            <button className={classes.boton}>Cocina</button>
            <button className={classes.boton}>Living-comedor</button>
            <button className={classes.boton}>Baño</button>
            <button className={classes.boton}>En cerámica</button>
           <button className={classes.boton + " " + classes.sale}>SALE</button>
        </nav>
    )
}

export default NavBar
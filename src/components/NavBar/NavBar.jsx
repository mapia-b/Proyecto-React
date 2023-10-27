import classes from './NavBar.module.css'
import CartWidget from '../CartWidget/CartWidget'
import { NavLink, useNavigate } from 'react-router-dom'
// import logo from './assets/logo.svg' NO PUDE IMPORTAR LA IMAGEN NO SE PORQUE

const NavBar = () => {
    return (
        <>
            <nav>
                <NavLink to='/' className={classes.title}>Casa Franca</NavLink>
                
                <section>  
                    <NavLink to='/category/cocina' className={({isActive})=> isActive ? classes.active : classes.boton}>Cocina</NavLink>     
                    <NavLink to='/category/living' className={({isActive})=> isActive ? classes.active : classes.boton}>Living</NavLink>     
                    <NavLink to='/category/baño' className={({isActive})=> isActive ? classes.active : classes.boton}>Baño</NavLink>     
                    <NavLink to='/category/ceramica' className={({isActive})=> isActive ? classes.active : classes.boton}>Cerámica</NavLink>     
                    <NavLink to='/category/sale' className={({isActive})=> isActive ? classes.active : classes.sale}>SALE</NavLink>     

                    {/* <button className={classes.boton}>Cocina</button>
                    <button className={classes.boton}>Living-comedor</button>
                    <button className={classes.boton}>Baño</button>
                    <button className={classes.boton}>En cerámica</button>
                    <button className={classes.boton + " " + classes.sale}>SALE</button> */}
                </section>
            </nav>
            <CartWidget />
        </>
    )
}

export default NavBar
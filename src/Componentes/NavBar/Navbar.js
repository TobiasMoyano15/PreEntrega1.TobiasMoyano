import Cartwidget from "../CartWidget/CartWidget";
import  "./NavBar.css"
import { NavLink, Link } from "react-router-dom";
const NavBar = () => {
    return (
        <nav className="NavBar">
            <h1>Good Sneakers</h1>
            <div>
                <NavLink to = {'/categoria/Novedades'} className={({isActive}) => isActive ? 'ActiveOption' : 'option'}>Novedades</NavLink>
                <NavLink to = {'/categoria/Stock Diario'} className={({isActive}) => isActive ? 'ActiveOption' : 'option'}>Stock Diario</NavLink>
                <NavLink to = {'/categoria/Seleccion De Lujo'} className={({isActive}) => isActive ? 'ActiveOption' : 'option'}>Seleccion De Lujp</NavLink>
            </div>
           <Cartwidget/>
        </nav>
    )
}

export default NavBar;
import './CartWidget.css'
import cart from './assets/zapatillas.png'
import { useContext } from 'react'
import { CartContext } from '../../Context/CartContext'
import { Link } from 'react-router-dom'


const Cartwidget = () => {
    const {totalQuantity} = useContext(CartContext)
    return (
        <link to='/cart' className='CartWidget' style={{display:totalQuantity > 0 ? 'block':'none'}}>
            <img className='CartImg' src={cart} alt='cartwidget'/>
        </link>
    )
}
export default Cartwidget
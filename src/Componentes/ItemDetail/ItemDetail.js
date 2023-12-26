import "./ItemDetail.css"
import { useState } from "react"
import ItemCount from "../ItemCount/ItemCount"
import { Link } from "react-router-dom"
import { CartContext } from "../../Context/CartContext"

const ItemDetail = ({id,nombre,categoria,descripcion,img,precio,stock}) => {
    const [quantityAdded, setQuantityAdded] = useState(0)
    
    const {addItem} = useState(CartContext)

    const handleOnADd = (quantity) => {
        setQuantityAdded(quantity)

        const item = {
            id,nombre,precio
        }
        addItem(item,quantity)
    }
    


    return(
        <article className="CardItem">
            <header className="Header">
                <h2 className="ItemHeader">
                    {nombre}
                </h2>
            </header>
            <picture>
                <img src={img} alt={nombre} className="ItemImg"/>
            </picture>
            <section>
                <p className="Info">
                    Categoria: ${categoria}
                </p>
                <p className="Info">
                    Descripcion: {descripcion}
                </p>
                <p className="Info">
                    precio: ${precio}
                </p>
            </section>
            <footer className="ItemFooter">
                {
                    quantityAdded > 0 ? (
                        <Link to= '/cart' className='Option'>Terminar Compra</Link>
                    ) : (
                <ItemCount initial={1} stock={stock} onAdd={handleOnADd}/>
                    )
                }
            </footer>
        </article>

    )
}
export default ItemDetail
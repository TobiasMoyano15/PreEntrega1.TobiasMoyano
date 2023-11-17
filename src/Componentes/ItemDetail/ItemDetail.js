import ItemDetail from "./ItemDetail.css"
import ItemCount from "../ItemCount/ItemCount"

const ItemDetail = ({id,nombre,categoria,descripcion,img,precio,stock}) => {

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
                <ItemCount initial={1} stock={stock} onAdd={quantity => console.log('Cantidad Agregada',quantity)}/>
            </footer>
        </article>

    )
}
export default ItemDetail
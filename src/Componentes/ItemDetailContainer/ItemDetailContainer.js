import { getProductosByid } from "../../asynMock"
import { useState, useEffect } from "react"
import ItemDetailContainer from "../ItemDetailContainer.css"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"

const ItemDetailContainer = () => {
    const [productos, setProductos] = useState(null)

    const { ItemId } = useParams()

    useEffect(() => {
        getProductosByid(ItemId)
            .then(response => {
                setProductos(response)
            })
            .catch(error => {
                console.error(error);
            })

    }, [ItemId])





    return (
        <div className="ItemDetailContainer">
            <ItemDetail {...productos} />
        </div>
    )
}

export default ItemDetailContainer
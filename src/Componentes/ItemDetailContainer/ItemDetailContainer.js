import './ItemDetailContainer.css'
import { useState, useEffect } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"
import { getDoc, doc } from 'firebase/firestore'
import { db } from '../../firebase/firebaseConfig'


const ItemDetailContainer = () => {
    const [productos, setProductos] = useState(null);
    const [loading, setLoading] = useState(true);

    const { ItemId } = useParams();

    useEffect(() => {
        setLoading(true);

        const docRef = doc(db, 'productos', ItemId);

        getDoc(docRef)
            .then(response => {
                const data = response.data();
                const productosAdapted = { id: response.id, ...data };
            })
            .catch(error => {
                console.log(error);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [ItemId]);

    // Mueve la exportación al nivel superior del módulo
};

export default ItemDetailContainer;
import { useState,useEffect } from "react"
import ItemList from '..ItemList/ItemList'
import { useParams } from "react-router-dom"
import { getDocs,collection,query,where, doc } from "firebase/firestore"
import { db } from "../../firebase/firebaseConfig"

const ItemListContainer = ({greeting}) => {
    const [productos,setProductos] = useState([])
    const [loading,setLoading] = useState(true)

    const{categoriaId}= useParams()
    
    useEffect(() => {
        setLoading(true)

        const collectionRef = categoriaId
        ? query(collection(db,'productos')),where('categoria','==',categoriaId)
        : collection(db,'productos')

        getDocs(collectionRef)
        .then(response => {
            const productosAdapted = response.docs.map(doc => {
                const data = doc.data()
                return{id:doc.id,...data}
            })
        }
          setProductos(productosAdapted)
        })
        .catch (error => {
            console.log(error)
        })
        .finally(() => {
            setLoading(false)
        })
    }

export default ItemListContainer
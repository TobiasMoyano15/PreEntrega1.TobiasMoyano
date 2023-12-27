import { useState,useEffect } from "react"
import ItemList from '../ItemList/ItemList'
import { useParams } from "react-router-dom"
import { getDocs,collection,query,where, doc } from "firebase/firestore"
import {db} from "../../firebase/firebaseConfig"

const ItemListContainer = ({ greeting }) => {
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);
  
    const { categoriaId } = useParams();
  
    useEffect(() => {
      setLoading(true);
  
      const collectionRef = categoriaId
        ? query(collection(db, 'productos'))
        : where('categoria', '==', categoriaId); // Aquí faltaba el punto y coma (;)
  
      getDocs(collectionRef)
        .then((response) => {
          const productosAdapted = response.docs.map((doc) => {
            const data = doc.data();
            return { id: doc.id, ...data };
          });
          setProductos(productosAdapted);
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          setLoading(false);
        });
    }, [categoriaId]); // Agrega categoriaId como dependencia del efecto
  
    return (
      <div>
        {/* Aquí puedes usar productos para renderizar tu lista de productos */}
        {productos.map((producto) => (
          <div key={producto.id}>{/* Renderiza el producto aquí */}</div>
        ))}
      </div>
    );
  };
  
  export default ItemListContainer;
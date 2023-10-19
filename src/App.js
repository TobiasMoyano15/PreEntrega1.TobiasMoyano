import './App.css';
import NavBar from '../Componentes/NavBar/Navbar';
import ItemListContainer from './ItemListContainer/ItemListContainer';

function App() {
  return(
    <div>
      <NavBar/>
      <ItemListContainer greeting={"Bienvenidos Sneakers"}/>
    </div>
  )

}
export default App;

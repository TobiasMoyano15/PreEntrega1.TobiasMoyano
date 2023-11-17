import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import NavBar from './Componentes/NavBar/Navbar';
import ItemListContainer from './Componentes/ItemListContainer/ItemListContainer';
import './App.css';
import './Componentes/NavBar/Navbar.css'
import ItemCount from './Componentes/ItemCount/ItemCount'
import ItemDetailContainer from './Componentes/ItemDetailContainer/ItemDetailContainer';




function App() {
  return(
    <div className='App'> 
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path='/' element={<ItemListContainer/>}/>
      <Route path='/categoria/:categoriaId' element={<ItemListContainer/>}/>
      <Route path='Item/:ItemId' element={<ItemDetailContainer/>}/>
      <Route path='*' element={<h1>404 NOT FOUND</h1>}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}
export default App;

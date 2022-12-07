import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemListContainer from './componentes/ItemListContainer';
import Navbar from './componentes/NavBar';
import ItemDetailContainer from './componentes/ItemDetailContainer';
import Error404 from './componentes/Error404'; 



function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path={"/"} element={<ItemListContainer/>}/>
        <Route path={"/categoria/:id"} element={<ItemListContainer/>}/>
        <Route path={"/item/:id"} element={<ItemDetailContainer/>}/>
        <Route path={"*"} element={<Error404/>}/>
      </Routes>

      </BrowserRouter>
    </>
  );
}

export default App;

import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemListContainer from './componentes/ItemListContainer';
import Navbar from './componentes/NavBar';
import ItemDetailContainer from './componentes/ItemDetailContainer';
import Error404 from './componentes/Error404';
import Cart from './componentes/Cart';
import CartContextProvider from './componentes/context/CartContext';
import Footer from './componentes/extras/Footer';
import CheckOut from './componentes/CheckOut';


function App() {
  return (
    <div>
      <CartContextProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path={"/"} element={<ItemListContainer />} />
            <Route path={"/categoria/:id"} element={<ItemListContainer />} />
            <Route path={"/item/:id"} element={<ItemDetailContainer />} />
            <Route path={"/cart"} element={<Cart />} />
            <Route path={"checkOut"} element={<CheckOut/>} />
            <Route path={"*"} element={<Error404 />} />
          </Routes>
          <Footer/>
        </BrowserRouter>
      </CartContextProvider>
    </div>
  );
}

export default App;

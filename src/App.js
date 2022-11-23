import './App.css';
import ItemListContainer from './componentes/ItemListContainer';
import Navbar from './componentes/NavBar';


function App() {
  return (
    <>
      <Navbar/>
      
      <ItemListContainer greeting={"!Bienvenido a la pagina de pollo frito¡"} />
    </>
  );
}

export default App;

import { useParams } from "react-router-dom";
import {useState, useEffect} from "react";
import arrayProductos from "./Json/productos.json"
import ItemList from "./ItemList";

const ItemListContainer = () => {

    const [items, setItem] = useState([])
    const {id} = useParams();

    useEffect(() => {
        const promesa = new Promise ((resolve, reject) =>{
            setTimeout(() =>{
                resolve(id ? arrayProductos.filter(product => product.categoria === id) : arrayProductos);
            }, 200);
        });
        promesa.then((data) => {
            setItem(data);
        })
    }, [id]);






    return (
        
        <div className="itemListContainer">
            <ItemList items={items}/>
        </div>
        
    )
}

export default ItemListContainer;



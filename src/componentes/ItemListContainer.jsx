import { useParams } from "react-router-dom";
import { Loader } from "./Loader";

import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";

const ItemListContainer = () => {

    const [loading, setLoading] = useState(true)
    const [items, setItems] = useState([])
    const { id } = useParams();

    //_______________________ carga de mi coleccion de productos desde .Json
    /*     useEffect(() => {
            const promesa = new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve(id ? arrayProductos.filter(product => product.categoria === id) : arrayProductos);
                }, 3000);
            });
            promesa.then((data) => {
                setItem(data);
                setLoading(false)
            })
        }, [id]); */




    //________________________ carga de coleccion de productos a firestore
    /*     useEffect(() => {
    
            const db = getFirestore();
            const itemsCollection = collection(db, "items");
            
            arrayProductos.forEach((item) => {
                addDoc(itemsCollection, item);
            })
    
        }, []); */



    useEffect(() => {
        const db = getFirestore();
        const itemsCollection = collection(db, "items");

        const q = id ? query(itemsCollection, where("categoria", "==", id)) : itemsCollection



        getDocs(q).then((snaoShot) => {
            setItems(snaoShot.docs.map((doc) =>
                ({ id: doc.id, ...doc.data() })
            ));
            setLoading(false);

        });
    }, [id]);


    return (

        <div>
            {loading ? <Loader/> : 
            <div className="itemListContainer">
                <ItemList items={items} />
            </div>}
        </div>
    )
}

export default ItemListContainer;



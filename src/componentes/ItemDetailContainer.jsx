import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { Loader } from "./Loader";
import ItemDetail from "./ItemDetail";
const ItemDetailContainer = () => {

    const [loading, setLoading] = useState(true)
    const [item, setItem] = useState([]);
    const { id } = useParams();

    /* METODO EN EL QUE TRAIA LOS PRODUCTOS DE UN .Json */

/*     useEffect(() => {
        const promesa = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(arrayProductos.find(item => item.id === parseInt(id)))
            }, 2000);
        });

        promesa.then((data) => {
            setItem(data);
            setLoading(false);
        })
    }, [id]); */


    /* METODO EN EL Q FILTRO MIS PRODUCTOS DESDE FIRESTORE */

    useEffect(() => {
        const db = getFirestore();
        const item = doc(db, "items", id);
        getDoc(item).then((snapShot) => {
            if (snapShot.exists()) {
                setItem({id:snapShot.id, ...snapShot.data()});
                setLoading(false);
            } else {
                console.log("el producto no existe!");
            }
        });
    }, [id]);




    return (

        <div>
            {
                loading
                    ?
                    <Loader />
                    :
                    <div className="ItemDetailContainer">
                        <ItemDetail item={item} />
                    </div>
            }
        </div>
    )
}

export default ItemDetailContainer;
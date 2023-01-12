import React from 'react'
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { useEffect, useState } from 'react';

const Documento = () => {

    const[producto, setProducto] = useState({});

    useEffect(() => {
        const db = getFirestore();
        const item = doc(db, items);
        getDoc(item).then((snapShot) => {
            if (snapShot.exists()){
                console.log(snapShot.data());
            }else {
                console.log("el producto no existe");
            }
        });
    }, []);

    return (
        <div>

        </div>
    )
}

export default Documento
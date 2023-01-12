import  React, { useState, useEffect } from "react";
import ItemCount from "./ItemCount";
import { CartContext } from "./context/CartContext";
import { useContext } from "react";


const ItemDetail = ({ item }) => {

    const {addItem} = useContext(CartContext);
    const [itemStock, setitemStock] = useState(0);


    const onAdd = (quantity) => {
        setitemStock(itemStock - quantity);
        addItem(item, quantity);
    }

    useEffect(() => {
        setitemStock(item.stock);
    }, [item]);



    return (

            <div className="card mb-3 shadow-lg ItemDetail" >
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={item.image} className="img-fluid rounded-start" alt={item.name} />
                    </div>
                    <div className="col-md-8 bodyItem">
                        <div className="card-body">
                            <h5 className="card-title fw-bold text-decoration-underline">{item.name}</h5>
                            <p className="card-text">{item.descripcion}</p>
                            <p className="card-text fw-semibold"><small>$ {item.price}</small></p>
                            <ItemCount stock={item.stock} onAdd={onAdd} />
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default ItemDetail;
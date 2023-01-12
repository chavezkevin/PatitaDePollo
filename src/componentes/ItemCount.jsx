import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom";

const ItemCount = ({ stock, onAdd }) => {



    const [counter, setCounter] = useState(1);
    const [ itemStock, setitemStock] = useState(stock);
    const[vendido, setvendido] = useState(false);

    const decrementarStock = () => {
        if (counter > 1) {
            setCounter(counter - 1);
        }
    }

    const incrementarStock = () => {
        if (counter < itemStock) {
            setCounter(counter + 1);
        }
    }

    const addToCart = (quantity) => {
        if (counter <= itemStock) {
            setCounter(1);
            setitemStock(itemStock - quantity);
            setvendido(true);
            onAdd(quantity);
        }
    }

    useEffect(() => {
        setitemStock(stock);
    }, [stock])


    return (
        <>
            <div className="contContador">
                <div className="btn-group" role="group" aria-label="Basic mixed styles example">

                    <button onClick={decrementarStock} type="button" className="btn btn-danger">-</button>

                    <span className="numeroContador">{counter}</span>

                    <button onClick={incrementarStock} type="button" className="btn btn-success">+</button>
                </div>

                {vendido ?

                <button type="button" className="m-2 btn btn-primary"><Link className="text-decoration-none fw-bold text-dark" to={"/cart"}>terminar compra</Link></button>

                : <button type="button" className="btn btn-primary m-2 fw-bold text-dark" onClick={() => {addToCart(counter) }}>Agregar al carrito</button>

                }
            </div>
        </>
    )
}

export default ItemCount;



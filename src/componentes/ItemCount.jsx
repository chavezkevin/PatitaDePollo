import React, { useState, useEffect } from "react"

const ItemCount = ({ initial, stock, onAdd }) => {

    const [count, setCount] = useState(parseInt(initial))

    const decrease = () => {

        setCount(count - 1);
    }

    const increase = () => {

        setCount(count + 1)
    }

    useEffect (() => {
        setCount(parseInt(initial))

    }, [initial])

    return (
        <>
            <div>
                <div className="btn-group" role="group" aria-label="Basic mixed styles example">

                    <button disabled={count <= 1} onClick={decrease} type="button" className="btn btn-danger">-</button>

                    <span className="numeroContador">{count}</span>

                    <button disabled={count >= stock} onClick={increase} type="button" className="btn btn-success">+</button>
                </div>
                <button disabled={stock <= 0} onClick={()=> onAdd(count)} type="button" className="btn btn-primary">AGREGAR AL CARRITO</button>
            </div>
        </>
    )
}

export default ItemCount;
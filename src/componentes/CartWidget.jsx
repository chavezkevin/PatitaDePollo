import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./context/CartContext";

const CartWidget = () => {

    const {cartTotal} = useContext(CartContext);

    return(
        <>
        <Link to={"/cart"} className="btn btn-info">
            <img className="m-2" src={"/imagenes/cart4.svg"} alt="carrito" width="40" />
            <span>{cartTotal()}</span>
        </Link>
        </>
    )

}

export default CartWidget;
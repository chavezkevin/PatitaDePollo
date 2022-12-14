import React from "react";
import { Link } from "react-router-dom";

const Item = ({ item }) => {

    return (
        <div className="item">
            <div className="card medidasCard">
                <img src={item.image} className="card-img-top img-fluid" alt={item.name} />
                <div className="card-body bodyItem">
                    <h5 className="card-title text-decoration-underline">{item.name}</h5>
                    <p className="card-text">$ {item.price}</p>
                    <Link to={"/item/" + item.id}>
                        <button type="button" className="btn btn-info"> Ver detalles</button>
                    </Link>
                </div>
            </div>
        </div>
    )

}

export default Item;
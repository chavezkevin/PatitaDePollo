import React from "react";
import '../index.css';

const ItemListContainer = ({greeting}) => {
    return (
        <div className="greeting">
            {greeting}
        </div>
    )
}

export default ItemListContainer;



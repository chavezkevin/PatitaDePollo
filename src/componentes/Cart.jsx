import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { CartContext } from './context/CartContext';

const Cart = () => {

    const { cart, cartTotal, removeItem, clear, sumTotal } = useContext(CartContext);

    console.log(cart);

    if (cartTotal() === 0) {
        return (
            <div className="modal-dialog carritoBasio">
                <h2>Tu carrito</h2>
                <div className="modal-body">
                    <div className="alert alert-danger d-flex align-items-center justify-content-center" role="alert">
                        <div>
                            No se encontraron productos dentro de tu carrito
                        </div>
                    </div>
                </div>
            </div>
        )
    }


    return (
        <div className='carrito shadow-lg card'>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>
                            <Link className='btn btn-danger' onClick={clear}>
                                Vaciar carrito
                            </Link>
                        </th>
                        <th scope="col">producto</th>
                        <th scope="col">cantidad</th>
                        <th scope="col">precio</th>
                    </tr>
                </thead>
                <tbody>
                    {cart.map(item => (
                        <tr key={item.id}>
                            <td><img src={item.image} alt={item.name} width={80} /></td>
                            <td>
                                {item.name}
                            </td>
                            <td >
                                {item.quantity}
                            </td>
                            <td>
                                $ {item.quantity * item.price}
                            </td>

                            <td>
                                <Link onClick={() => { removeItem(item.id) }}>
                                    <img src={"/imagenes/trash3.svg"} alt="" />
                                </Link>
                            </td>
                        </tr>
                    ))
                    }
                    <br />
                    <tr>
                        <td className='text-decoration-underline text-end'>Total a pagar</td>
                        <td className='text-end'>$ {sumTotal()}</td>
                        <td className='text-end'>
                            <Link to={"/checkOut"} className='btn btn-success'>
                            finalizar compra
                            </Link>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )

}

export default Cart
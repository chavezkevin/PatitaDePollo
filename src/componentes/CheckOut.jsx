import { addDoc, collection, getFirestore, updateDoc, doc } from 'firebase/firestore';
import React, { useContext } from 'react'
import { useState } from 'react';
import { CartContext } from './context/CartContext';


const CheckOut = () => {

    const { cart, sumTotal, clear } = useContext(CartContext);

    const [nombre, setNombre] = useState("");
    const [telefono, setTelefono] = useState("");
    const [email, setEmail] = useState("");
    const [orderId, setOrderId] = useState("");

    const generarOrden = () => {
        const fecha = new Date();
        const order = {
            buyer: { name: nombre, phone: telefono, email: email },
            items: cart.map(item => ({ id: item.id, title: item.name, price: item.price })),
            total: sumTotal(),
            order_date: `${fecha.getFullYear()}-${fecha.getMonth() + 1}-${fecha.getDate()} ${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`
        };

        console.log(order)


        const db = getFirestore();
        const ordersCollection = collection(db, "orders");
        addDoc(ordersCollection, order).then((snapShot) => {
            setOrderId(snapShot.id);
            const generateOrder = doc(db, "orders", snapShot.id);
            updateDoc(generateOrder, { total: order.total * 1.21 });
            clear()
        });
    }


    return (
        <div>
            <div className='checkOut'>



                <div>
                    <form>
                        <div classname="formularioCompra">
                            <div className='input-group mb-3'>
                                <span for="nombre" className="input-group-text">nombre</span>
                                <input type="text" className="form-control" placeholder="Ej: kevin chavez" aria-label="Username" aria-describedby="basic-addon1" onInput={(e) => { setNombre(e.target.value) }} />
                            </div>
                            <div className='input-group mb-3'>
                                <span for="telefono" className="input-group-text">telefono</span>
                                <input type="text" className="form-control" placeholder="Ej: 3512185128" aria-label="Username" aria-describedby="basic-addon1" onInput={(e) => { setTelefono(e.target.value) }} />
                            </div>
                            <div className='input-group mb-3'>
                                <span for="email" className="input-group-text">email</span>
                                <input type="text" className="form-control" placeholder="Ej: kevinChavez@gmail.com" aria-label="Username" aria-describedby="basic-addon1" onInput={(e) => { setEmail(e.target.value) }} />
                            </div>
                            <div>
                                <button type="button" className="btn btn-success" onClick={generarOrden}>crear orden de compra</button>
                            </div>
                        </div>
                    </form>
                </div>



                <tbody className='resumenCompra'>
                    {cart.map(item => (
                        <tr key={item.id} >
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


                        </tr>
                    ))}

                    <tr>
                        <td colSpan={2}>&nbsp;</td>
                        <td>total a pagar <b /></td>
                        <td>$ {sumTotal()} <b /></td>
                    </tr>

                    
                    <div className='codigoOrden bg-warning'>
                        {orderId !== "" ? <div >el codigo de su orden es: <b>{orderId}</b></div> : ""}
                    </div>
                </tbody>
            </div>




        </div>
    )
}

export default CheckOut;
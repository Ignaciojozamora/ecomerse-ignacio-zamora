import React from "react";
import { Link, useParams } from "react-router-dom";

function OrderDetails(){
    const {orderid} = useParams()
return (<div>
    <h1 className='centrar'>Gracias por tu Compra</h1>
    <p className='centrar'>Este es el id de tu compra: {orderid}</p>
    <div className='centrar'>
    <Link to="/">
        <button  className='btn'>Volver Al Inicio</button>
    </Link>
    </div>
    </div>
)
}
export default OrderDetails;

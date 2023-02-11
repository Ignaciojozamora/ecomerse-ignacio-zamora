import React from "react";
import { useParams } from "react-router-dom";

function OrderDetails(){
    const {orderid} = useParams()
return (<div>
    <h1>Gracias por tu Compra</h1>
    <p>Este es el id de tu compra: {orderid}</p>
    </div>
)
}
export default OrderDetails;
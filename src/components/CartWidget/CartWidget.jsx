import "./cartwidget.css" 



import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
const CartWidget = () => {
    return (
        <div className="cwcontainer">
        <span>5</span>
        <FaShoppingCart  className="cwidget"/>
        </div>
);
};

export default CartWidget;

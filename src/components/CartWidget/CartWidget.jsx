import "./cartwidget.css" 
import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { useContext } from "react";
import { cartContext } from "../../storage/cartContext";



const CartWidget = () => {
    const {getTotalItems} = useContext(cartContext)


    return (
        <div className="cwcontainer">
        <span className="csnumber">
            {getTotalItems()}
        </span>
        <FaShoppingCart  className="cwidget"/>
        </div>
);
};

export default CartWidget;

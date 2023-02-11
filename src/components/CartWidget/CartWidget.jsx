import "./cartwidget.css" 
import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { useContext } from "react";
import { cartContext } from "../../storage/cartContext";
import { Link } from "react-router-dom";



const CartWidget = () => {
    const {cart, getTotalItems} = useContext(cartContext)

if (cart.length > 0)
    return (
        <Link to="/cart">
        <div className="cwcontainer">
        <span className="csnumber">
            {getTotalItems()}
        </span>
        <FaShoppingCart  className="cwidget"/>
        </div>
        </Link>
);
else {
    return (
        <>
        </>
    )
}
};

export default CartWidget;

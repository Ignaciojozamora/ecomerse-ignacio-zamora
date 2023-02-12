import React from 'react'
import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { createBuyOrder } from '../../services/firebase';
import { cartContext } from '../../storage/cartContext';
import { ButtonChild } from '../Button/Button';
import FlexWrapper from '../flexWrapper/FlexWrapper';
import "./cartcontainer.css"
import CartForm from "./CartForm";



function CartContainer(){
    const { cart, removeFromCart, getTotalPriceInCart, getTotalPriceItem, clearCart} = useContext(cartContext)

    const navigateTo = useNavigate();

    async function handleCheckout(userData) {
        const items = cart.map((product) => ({
            id: product.id,
            title: product.title,
            price: product.price,
            count: product.quantity,
        }));
        
        //1. modelo de orden de compra
        const order = {
            buyer: userData,
            items: items,
            date: new Date(),
            total: 1000,
        };
        console.log(order);
        //2. Enviarla a firebase.js
        let id = await createBuyOrder(order);
        console.log(order);
        navigateTo(`/thank-you/${id}`)
        clearCart()
    }


    if (cart.length > 0) {
    return (
        <div>
            <table className="cartList">
        <thead className="cartList_head">
            <tr className="cartList_row">
            <th>Miniatura</th>
            <th>Titulo</th>
            <th>Precio</th>
            <th>Cantidad</th>
            <th>Remover</th>
            <th>Total</th>
            </tr>
        </thead>
        <tbody>
            {cart.map((product) => (
            <tr key={product.id} className="cartList_row">
                <td>
                <img height={50} src={product.imgurl} alt={product.title} />
                </td>
                <td>{product.title}</td>
                <td>$ {product.price}</td>
                <td>{product.quantity}</td>
                <td>
                <ButtonChild color="#c63224" onTouch={()=>removeFromCart(product.id)}>
                    X
                </ButtonChild>
                </td>
                <th className='total'>${getTotalPriceItem(product)}</th>
            </tr>
            ))}
        </tbody>
        </table>
        <div className="cartList_detail">
        <h4>El total de tu compra es de $ {getTotalPriceInCart()}</h4>
        <CartForm onSubmit={handleCheckout}></CartForm>
        </div>
        </div>
    )}
    else {
        return (
            <div>
                
            <h1 className='centrar'>No tenes nada agregado a tu carrito</h1>
            <FlexWrapper>
            <Link to="/">
            <button className="btn">Volver Al Inicio</button>
            </Link>
            </FlexWrapper>
            </div>
        )
    }
}



export default CartContainer;
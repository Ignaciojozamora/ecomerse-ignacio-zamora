import React from 'react'
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { createBuyOrder } from '../../services/firebase';
import { cartContext } from '../../storage/cartContext';
import { ButtonChild } from '../Button/Button';
import FlexWrapper from '../flexWrapper/FlexWrapper';
import "./cartcontainer.css"



function CartContainer(){
    const { cart, removeFromCart, getTotalPriceInCart, getTotalPriceItem } = useContext(cartContext)

    async function handleCheckout(evt) {
        const items = cart.map((product) => ({
          id: product.id,
          title: product.title,
          price: product.price,
          count: product.count,
        }));
    
        //1. modelo de orden de compra
        const order = {
          buyer: {
            name: "Santiago",
            email: "s@s.com",
            phone: 123456,
          },
          items: items,
          date: new Date(),
          total: 1000,
        };
    
        //2. Enviarla a firebase.js
        let id = await createBuyOrder(order);
        console.log(id);
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
        </div>
        <button className='btn' onClick={handleCheckout}>Finalizar Compra</button>
        </div>
    )}
    else {
        return (
            <div>
                
            <h1 className='cart-text'>No tenes nada agregado a tu carrito</h1>
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
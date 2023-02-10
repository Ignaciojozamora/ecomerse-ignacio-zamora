import React, { useState, useEffect } from "react";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { getSingleItem } from "../../services/mockAsyncServices"
import { cartContext } from "../../storage/cartContext";
import { ButtonChild } from "../Button/Button";
import ItemCount from "../itemCount/ItemCount";
import "./itemdetail.css";



function ItemDetail() {
    const [product, setProduct] = useState([]);
    let {itemid} = useParams();
    const {addItem} = useContext(cartContext);

/* Funcion para agragar al carrito */
function handleAddToCart(count){
    if (count > 0) {
        
    product.quantity = count
    addItem(product, count)
    }
    else {
        alert("no podes agregar 0 productos")
    }
/* validar count 0 no agregar */

}



useEffect(() => {
    getSingleItem(itemid)
        .then((respuesta) => {
        setProduct(respuesta);
        })
        .catch((error) => alert(`Error: ${error}`));
    }, [itemid]);

    return (
    
    <div className="card-detail_main">
    <div className="card-detail_img">
        <img src={product.imgurl} alt={product.title} />
    </div>
    <div className="card-detail_detail">
        <h1>{product.title}</h1>
        <h2 className="priceTag">$ {product.price}</h2>
        <small>{product.detail}</small>
    </div>
    <ItemCount onAddToCart={handleAddToCart}/>
    <ButtonChild>Ir al carrito</ButtonChild>
    </div>
    );
}

export default ItemDetail;
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getSingleItem } from "../../services/mockAsyncServices"
import { ButtonChild } from "../Button/Button";
import ItemCount from "../itemCount/ItemCount";
import "./itemdetail.css";


function ItemDetail() {
  const [product, setProduct] = useState([]);
  let { itemid } = useParams();

/* Funcion para agragar al carrito */
function handleAddToCart(){

/* validar count 0 no agregar */
    alert(`Agregaste ${product.title} al carrito`);
}



useEffect(() => {
    getSingleItem(itemid)
        .then((respuesta) => {
        setProduct(respuesta);
        })
        .catch((error) => alert(`Error: ${error}`));
    }, []);

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
    <ItemCount onTouch={handleAddToCart}/>
    <ButtonChild >Ir al carrito</ButtonChild>
    </div>
    );
}

export default ItemDetail;
import React, { useState, useEffect } from "react";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { getSingleItem } from "../../services/firebase"
import { cartContext } from "../../storage/cartContext";
import { ButtonChild } from "../Button/Button";
import { Link } from "react-router-dom";
import ItemCount from "../itemCount/ItemCount";
import Loader from "../Loader/Loader";
import "./itemdetail.css";



function ItemDetail() {
    const [product, setProduct] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isInCart, setIsInCart] = useState(false)
    let {itemid} = useParams();
    const {addItem} = useContext(cartContext);

/* Funcion para agragar al carrito */
function handleAddToCart(count){
    if (count > 0) {
        setIsInCart(true)
    product.quantity = count
    addItem(product, count)
    }
    else {
        alert("no podes agregar 0 productos")
    }


}



useEffect(() => {
    getSingleItem(itemid)
        .then((respuesta) => {
        setProduct(respuesta);
        setIsLoading(false)
        })
        .catch((error) => alert(`Error: ${error}`));
    }, [itemid]);

    return (
    <div>

{isLoading ? (
        <Loader color="#3c6df1" size={1920} /> 
    ) : (
        <div className="card-detail_main">
        <div className="card-detail_img">
        <img src={product.imgurl} alt={product.title} />
        </div>
        <div className="card-detail_detail">
        <h1>{product.title}</h1>
        <h2 className="priceTag">$ {product.price}</h2>
        <small>{product.detail}</small>
        </div>

    {!isInCart ? (
    <ItemCount onAddToCart={handleAddToCart}/>
    ) : (

    <Link to="/cart">
    <ButtonChild>Ir al carrito</ButtonChild>
    </Link>)}
    </div>
      )}
    
    </div>
    );
}

export default ItemDetail;
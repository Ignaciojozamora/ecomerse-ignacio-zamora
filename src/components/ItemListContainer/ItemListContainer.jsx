import React, { useState, useEffect } from "react";
import "./itemlistcontainer.css";
import getItems from "../../services/mockAsyncServices";
import ItemList from "../ItemList/ItemList";


const ItemListContainer = () => {
    const [products, setProducts] = useState([]);

    useEffect( () => {
    getItems().then((respuesta) => { 
        console.log(respuesta)
        setProducts(respuesta)
    });
}, [])

    return (
        
        <div className="itemlistcontainer">
            <ItemList products={products}/>
        </div>
);
};

export default ItemListContainer;


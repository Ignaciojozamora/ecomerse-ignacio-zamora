import "./itemlistcontainer.css"
import React, { useState, useEffect } from "react";
import getItems, { getItemsByCategory } from "../../services/mockAsyncServices";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

function ItemListContainer() {
    const [products, setProducts] = useState([]);

    let { idcategory } = useParams();
    console.log (idcategory)

    useEffect(() => {
        if (idcategory !== undefined) {
            getItemsByCategory(idcategory).then((respuesta) => {
            setProducts(respuesta);
            console.log("esto es por categoria");
          });
        } else {
          getItems().then((respuesta) => {
            setProducts(respuesta);
            console.log("esto es por item id");
            
          });
        }
      }, []);





return (
    <>
    <div className="itemlistcontainer">
        <ItemList products={products} />
    </div>
    </>
);
}

export default ItemListContainer;

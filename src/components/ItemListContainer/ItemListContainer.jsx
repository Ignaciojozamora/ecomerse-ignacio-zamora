import "./itemlistcontainer.css"
import React, { useState, useEffect } from "react";
import getItems, { getItemsByCategory } from "../../services/mockAsyncServices";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

function ItemListContainer() {
    const [products, setProducts] = useState([]);

    let {categoryid} = useParams();
    console.log (categoryid)

    useEffect(() => {
        if (categoryid !== undefined) {
            getItemsByCategory(categoryid).then((respuesta) => {
            setProducts(respuesta);
            console.log("esto es por categoria");
        });
        } else {
        getItems().then((respuesta) => {
            setProducts(respuesta);
            console.log("esto es por item id");
            
        });
        }
    }, [categoryid]);


return (
    <>
    <div className="itemlistcontainer">
        <ItemList products={products} />
    </div>
    </>
);
}

export default ItemListContainer;

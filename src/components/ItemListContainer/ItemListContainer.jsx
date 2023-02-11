import "./itemlistcontainer.css"
import React, { useState, useEffect } from "react";
import { getItemsByCategory } from "../../services/firebase";
import {getItems} from "../../services/firebase";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import Loader from "../Loader/Loader";


function ItemListContainer() {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    let {categoryid} = useParams();

    useEffect(() => {
        if (categoryid !== undefined) {
            getItemsByCategory(categoryid).then((respuesta) => {
            setProducts(respuesta);
            setIsLoading(false)
        });
        } else {
        getItems().then((respuesta) => {
            setProducts(respuesta);
            
            setIsLoading(false)
        });
        }
    }, [categoryid]);


return (
    <>
    <div>
      {isLoading ? (
        <Loader color="#3c6df1" size={1920} />
      ) : (
        <ItemList products={products} />
      )}
    </div>
    </>
);
}

export default ItemListContainer;

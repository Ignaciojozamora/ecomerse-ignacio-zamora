import "./itemlistcontainer.css"
import React, { useState, useEffect } from "react";
import Item from "../Item/Item";
import getItems, { getItemsByCategory } from "../../services/mockAsyncServices";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

function ItemListContainer() {
    const [products, setProducts] = useState([]);

    let { categoryid } = useParams();
    console.log (categoryid)

    useEffect(() => {
        if (categoryid) {
          getItems(categoryid).then((respuesta) => {
            setProducts(respuesta);
          });
        } else {
          getItems().then((respuesta) => {
            console.log(respuesta);
            setProducts(respuesta);
          });
        }
      }, []);




      /* async function getProducts() {
    if (!idcategory) {
    try {
        let response = await getItems();
        setProducts(response);
    } 
    catch (error) {
        alert(error);
    }
    } else {
    let response = await getItemsByCategory(idcategory);
    setProducts(response);
    }
}

useEffect(() => {
    getProducts();
}, []);
 */
return (
    <>
    <div className="itemlistcontainer">
        <ItemList products={products} />
    </div>
    </>
);
}

export default ItemListContainer;

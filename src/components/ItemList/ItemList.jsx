import React from "react";
import Item from "../Item/Item";


function ItemList(props) {
    return (
<div className="itemlistcontainer">
{props.products.map((item) => (
            <Item
                key={item.id}
                id={item.id}
                title={item.title}
                price={item.price}
                detail={item.detail}
                imgurl={item.imgurl} 
            />
            ))}
</div>
    );
}




export default ItemList;
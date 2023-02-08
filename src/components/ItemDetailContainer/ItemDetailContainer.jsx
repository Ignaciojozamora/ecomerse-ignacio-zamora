import React from "react";

import { ButtonChild } from "../Button/Button";
import ItemCount from "../itemCount/ItemCount";
import ItemDetail from "../ItemDetail/ItemDetail";



function ItemDetailContainer() {
  
    return (
    
    <ItemDetail>
    <ItemCount/>
    <ButtonChild>Ir al carrito</ButtonChild>
    </ItemDetail>
    );
}

export default ItemDetailContainer;
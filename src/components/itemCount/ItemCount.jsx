import { useState } from "react";
import { ButtonChild } from "../Button/Button";
import "./itemcount.css";

function ItemCount( props ) {
  const [count, setCount] = useState(0);

  function handleAdd() {
    // Agregar validación de stock
    setCount(count + 1);
  }

  function handleSubstract() {
    if (count > 0){
    setCount(count - 1);}


  }

  return (
    <div className="itemcount_container">
      <small>Agrega la cantidad de procutos a comrpar</small>
      <div className="itemcount_control">
        <ButtonChild onClick={handleSubstract}>
          -
        </ButtonChild>
        <span className="itemcount_count">{count}</span>
        <ButtonChild  onClick={handleAdd}>
          +
        </ButtonChild>
      </div>

      <div className="itemcount_btns">
        <ButtonChild onClick={props.onClick}>
          Agregar al carrito
        </ButtonChild>
      </div>
    </div>
  );
}

export default ItemCount;



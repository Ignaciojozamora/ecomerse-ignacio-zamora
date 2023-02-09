import React from "react";
import "./item.css";
import { ButtonChild } from "../../components/Button/Button";
import ToggleButton from "../ToggleButton/TogleButton";
import { Link } from "react-router-dom";

function Item({ id, title, price, detail, imgurl }) {
  const urlDetail = `/item/${id}`;


  return (
    
      <div className="item-card">
        <ToggleButton icon="♥" />
        <div className="item-card_header">
          <h2>{title}</h2>
        </div>
        <div className="item-card_img">
        <Link to={urlDetail}>
          <img src={imgurl} alt="imagen"></img>
          </Link>
        </div>

        <div className="item-card_detail">
          <h4>$ {price}</h4>
          <small>{detail}</small>
        </div>
        <Link to={urlDetail}>
        <ButtonChild>Ver detalle</ButtonChild>
        </Link>
      </div>
    
  );
}

export default Item;
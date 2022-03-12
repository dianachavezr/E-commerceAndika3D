import React from "react";
import { NavLink } from "react-router-dom";
import { useCart } from "react-use-cart";

import "./cardTienda.css";

const CardTienda = (props) => {
  const { addItem } = useCart();

  return (
    <div className="cardTienda">
      <div className="cardTiendaImgBox">
        <img src={props.img} alt="" className="cardTiendaImg" />
      </div>
      <h3 className="cardTiendaTitle">{props.title}</h3>
      <div className="cardTiendaParagraphBox">
        <p className="cardTiendaParagraph">{props.description}</p>
      </div>
      <p className="cardTiendaPrice">Precio: ${props.price}</p>
      <NavLink to="/product">
        <button className="btnVer">Ver Más</button>
      </NavLink>
      <button className="btnAdd" onClick={() => addItem(props.item)}>
        Añadir al carrito
      </button>
    </div>
  );
};

export default CardTienda;

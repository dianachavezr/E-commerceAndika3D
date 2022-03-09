import React from "react";
import Keycup from "../../assets/keycup.png";
import { NavLink } from "react-router-dom";
import DogTonge from "../../assets/dogTonge.png";
import DogCombo from "../../assets/dogCombo.png";
import "./cardTienda.css";

const cardTienda = () => {
  let change;
  return (
    <div className="cardTiendaContainer">
      <div className="cardTienda">
        <div className="cardTiendaImgBox">
          <img src={Keycup} alt="" className="cardTiendaImg" />
        </div>
        <h3 className="cardTiendaTitle">Keycaps</h3>
        <p className="cardTiendaParagraph">
          Dale un vistazo a nuestras colecciones de KeyCaps. Pregunta también
          por diseños personalizados
        </p>
        <p className="cardTiendaPrice">Precio:$12.000</p>
        <NavLink to="/product">
          <button onClick={change} className="btnVer">
            Ver Más
          </button>
        </NavLink>
        <button>Añadir al carrito</button>
      </div>
    </div>
  );
};

export default cardTienda;

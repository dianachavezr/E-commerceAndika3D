import React from "react";
import './cardsHome.css'
import CardHome from "./CardHome";
import Brush from "../../assets/brush.png";
import Box from "../../assets/box.png";
import Diamond from "../../assets/diamond.png";

const CardsHome = () => {
  return (
    <div className="cardsHome">
      <CardHome
        image={Brush}
        title="Pintado a mano"
        description="Todos nuestros productos son 100% pintados a mano"
      />

      <CardHome
        image={Box}
        title="Envío gratis"
        description="Para todo Bogotá y municipios aledaños"
      />

      <CardHome
        image={Diamond}
        title="Calidad garantizada"
        description="Fabricados con materiales de alta resistencia y durabilidad"
      />
    </div>
  );
};

export default CardsHome;

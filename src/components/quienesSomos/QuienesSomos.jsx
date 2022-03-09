import React from "react";
import "./quienesSomos.css";
import Dogs from '../../assets/dogs.png'

const QuienesSomos = () => {
  return (
    <div className="quienesSomosContainer">

        <div className="quienesSomosParragraphBox">
        <h2 className="quienesSomosTitle" id="quienes">Quienes somos:</h2>
        <p className="quienesSomosParagraph">
      
        Somos una empresa colombiana dedicada a ofrecer un amplio catálogo de
        productos y servicios manufacturados y llevados a cabo a partir de la
        combinación entre arte y la tecnología (impresión 3D) En Andika3D nos
        enfocamos en prestar suma atención a los detalles de cada una de las
        piezas s que realizamos y constantemente aplicamos mejora continua a
        todos nuestros procesos
      </p>
      </div>
      <div className="quienesSomosImageBox">
      <img className="quienesSomosImage" src={Dogs} alt="dogs" />
      </div>

    </div>
  );
};

export default QuienesSomos;

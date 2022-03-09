import React from "react";
import "./nuestraEmpresa.css";
import Dream from "../../assets/dream.png";

const NuestraEmpresa = () => {
  return (
    <div className="nuestraEmpresaContainer">
      <div className="nuestraEmpresaImageBox">
        <img className="nuestraEmpresaImage" src={Dream} alt="dream" />
      </div>

      <div className="nuestraEmpresaParragraphBox">
        <h2 className="nuestraEmpresaTitle" id="quienes">Nuestra empresa:</h2>
        <p className="nuestraEmpresaParagraph">
          Andika3D es un emprendimiento que nace en el 2020 a raíz de la
          pandemia, La cuarentena y los problemas económicos. Esta situación nos
          obligó a potenciar nuestras habilidades en el arte y la ingeniería
          para materializarlas en una idea empresarial.
        </p>
      </div>
    </div>
  );
};

export default NuestraEmpresa;

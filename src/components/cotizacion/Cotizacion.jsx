import React from "react";
import "./cotizacion.css";
import WhatsappLogo from '../../assets/whatsapp1.png'

const Cotizacion = () => {
  return (
    <div className="cotizacionContainer">
        <div className="cotizacionBox">
      <h3 className="cotizacionTitle">
        ¿Necesitas realizar alguna cotización personalizada?
      </h3>
      <p className="cotizacionParagraph">
        Puedes contactarnos:<br/>  vía correo electrónico
        andika3dcol@gmail.com. <br/><br/>
        <span className="whatsappParagraph">
        Conversa con nosotros vía whatsapp   
        <a href="https://api.whatsapp.com/send?phone=[57][3208458431]&text=Hola%20estoy%20interesado(a)%20en%20 conocer%20más%20acerca%20de%20sus%20productos" target="blank"><img src={WhatsappLogo} alt="whatsapp logo" className="whatsappImg"/></a>
        </span>

        <br/> Recuerda,
        nuestros horarios son: Lunes a Viernes de 9 am – 8pm y Sábados de 10 am
        a 5 pm. <br/> Estamos siempre atentos para ayudarte.
      </p>
      </div>
    </div>
  );
};

export default Cotizacion;

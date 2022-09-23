import React from "react";
import "./footer.css";
import FacebookLogo from "../../assets/facebook.png";
import TikTokkLogo from "../../assets/tiktok.png";
import InstagramLogo from "../../assets/instagram.png";

const Footer = () => {
  return (
    <div className="footerContainer">
      <div className="footerRedes">
        <h5 className="footerTitle">Nuestras Redes</h5>
        <div className="footerRedesImages">
          <a href="https://www.facebook.com/profile.php?id=100083570172316" target="_blank">
            <img
              src={FacebookLogo}
              alt="facebook logo"
              className="footerRedesImg"
            />
          </a>
          <a href="https://www.tiktok.com/@andika3d" target="_blank">
            <img
              src={TikTokkLogo}
              alt="tiktok logo"
              className="footerRedesImg"
            />
          </a>
          <a href="https://www.instagram.com/andika3d/" target="_blank">
            <img
              src={InstagramLogo}
              alt="instagram logo"
              className="footerRedesImg"
            />
          </a>
        </div>
      </div>
      <div className="footerNosotros">
        <h5 className="footerTitle">Sobre Nosotros</h5>
        <p>
          Combinamos el arte y la <br />
          tecnología para darte la <br />
          mejor calidad en todos <br />
          nuestros productos
        </p>
      </div>
      <div className="footerInformes">
        <h5 className="footerTitle">Mayores Informes</h5>
        <p>
          +57 3208458431
          <br /> andika3dcol@gmail.com <br />L a V - 9am a 8pm
          <br /> S - 10am a 5pm <br /> Bogotá - Colombia
        </p>
      </div>
      <div className="footerEnlaces">
        <h5 className="footerTitle">Enlaces Importantes</h5>
        <p>
          Política de privacidad
          <br /> Detalles de envío <br /> Términos y condiciones
        </p>
      </div>
    </div>
  );
};

export default Footer;

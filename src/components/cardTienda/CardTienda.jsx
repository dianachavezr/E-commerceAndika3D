import React, { useState } from "react";
import { useCart } from "react-use-cart";
import ReactCardFlip from "react-card-flip";
import "./cardTienda.css";

const CardTienda = (props) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };
  const { addItem } = useCart();

  return (
    <>
    {/*Front card Begining*/}
      <ReactCardFlip
        isFlipped={isFlipped}
        flipDirection="horizontal"
        flipSpeedBackToFront="1"
        flipSpeedFrontToBack="1"
      >
        <div>
          <div className="cardTienda">
            <div className="cardTiendaImgBox">
              <img src={props.img} alt="" className="cardTiendaImg" />
            </div>
            <h3 className="cardTiendaTitle">{props.title}</h3>
            <div className="cardTiendaParagraphBox">
              <p className="cardTiendaParagraph">{props.description}</p>
              <p className="cardTiendaParagraph">Tamaño: {props.size}</p>
            </div>
            <p className="cardTiendaPrice">Precio: ${props.price} COP</p>

            <button className="btnVer" onClick={handleClick}>
              Ver Más
            </button>

            <button className="btnAdd" onClick={() => addItem(props.item)}>
              Añadir al carrito
            </button>
          </div>
        </div>

        <div>
          <div className="cardTienda2">
            <h3 className="cardTienda2Title">{props.title}</h3>
            <div className="cardTienda2Box">
              <div className="cardTienda2ImgBox">
                <img src={props.img2} alt="" className="cardTienda2Img" />
              </div>

              <div className="cardTienda2ParagraphBox">
              <p className="cardTienda2Paragraph">
                  <span>Tamaño:</span> {props.size}
                </p>
                <p className="cardTienda2Paragraph">
                  <span>Precio: </span>${props.price} COP
                </p>

                <p className="cardTienda2Paragraph">
                  <span>Descripción: </span>
                  {props.description2}
                </p>
              </div>
            </div>
            {/*Front card End*/}
            {/*Back card Begining*/}
            <div className="cardTienda2Box">
              <div className="cardTienda2ParagraphBox">
              
                <p className="cardTienda2Paragraph">
                  <span>Material: </span>
                  {props.material}
                </p>
                <p className="cardTienda2Paragraph">{props.description3}</p>
                <p className="cardTienda2Paragraph">
                  <span>Especificaciones: </span>
                  {props.specifications}
                </p>
                <p className="cardTienda2Paragraph">
                  <span>Tamaño: </span>
                  {props.size2} 
                </p>
                <p className="cardTienda2Paragraph">
                  <span>Precio: </span>
                   ${props.price2} pedido bajo demanda
                </p>
              </div>
              <div className="cardTienda2ImgBox">
                <img src={props.img3} alt="" className="cardTienda2Img" />
              </div>
            </div>
            <div className="cardTienda2Buttons">
              <button className="btnVer" onClick={handleClick}>
                Volver
              </button>

              <button className="btnAdd" onClick={() => addItem(props.item)}>
                Añadir al carrito
              </button>
            </div>
          </div>
        </div>
        {/*Back card End*/}
      </ReactCardFlip>
    </>
  );
};

export default CardTienda;

import React from "react";
import CardTienda from "../cardTienda/CardTienda";
import dataProducts from "../cardTienda/dataProducts";
import Filters from "../filters/Filters";
import "./tienda.css";

const TiendaContainer = () => {
  return (
    <div className="">
      <Filters />
      <div className="cardTiendaContainer">
        {dataProducts.productData.map((item, index) => (
          <CardTienda
            img={item.img}
            title={item.title}
            description={item.description}
            price={item.price}
            item={item}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default TiendaContainer;

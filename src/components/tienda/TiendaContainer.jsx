import React, { useState } from "react";
import CardTiendaPrueba from "../cardTienda/CardTiendaPrueba";
import dataProducts from "../cardTienda/dataProducts";
import Filters from "../filters/Filters";
import "./tienda.css";

const TiendaContainer = () => {


  return (
    <div className="">
      
      <Filters />
      <div className="cardTiendaContainer">
        {dataProducts.productData.map((item, index) => (
          <CardTiendaPrueba
            img={item.img}
            img2={item.img2}
            img3={item.img3}
            title={item.title}
            description={item.description}
            description2={item.description2}
            description3={item.description3}
            specifications={item.specifications}
            price={item.price}
            size={item.size}
            material={item.material}
            item={item}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default TiendaContainer;

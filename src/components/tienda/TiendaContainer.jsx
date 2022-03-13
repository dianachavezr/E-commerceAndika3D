import React, { useState, useEffect } from "react";
import CardTiendaPrueba from "../cardTienda/CardTiendaPrueba";
import dataProducts from "../cardTienda/dataProducts";
import "./tienda.css";

const TiendaContainer = () => {
  const [filter, setFilter] = useState("");
  const searchText = (event) => {
    setFilter(event.target.value);
  };
  console.log(filter);

  let data = dataProducts.productData.filter((item) => {
    return Object.keys(item).some((key) =>
      item[key]
        .toString()
        .toLowerCase()
        .includes(filter.toString().toLowerCase())
    );
  });

  const [data1, setData1] = useState("");

  return (
    <div className="tiendaContainer">
      <div className="filtersContainer">
        <div className=""></div>
        <button className="btnFilter" onClick={() => setData1("")}>
          Todos
        </button>
        <button className="btnFilter" onClick={() => setData1("MegaPet")}>
          MegaPet
        </button>
        <button className="btnFilter" onClick={() => setData1("Retrato")}>
          Retrato
        </button>
        <button className="btnFilter" onClick={() => setData1("ChiquiPet")}>
          ChiquiPet
        </button>
        <button className="btnFilter" onClick={() => setData1("MemoryPet")}>
          MemoryPet
        </button>
        <button className="btnFilter" onClick={() => setData1("Combos")}>
          Combos
        </button>
        <button className="btnFilter" onClick={() => setData1("Otros")}>
          Otros
        </button>
      

        <div className="searchBarContainer">
          <input
            type="text"
            className="searchBarContainerInput"
            placeholder="Buscar"
            value={filter}
            onChange={searchText.bind(this)}
          />
        </div>
      </div>

      <div className="cardTiendaContainer">
        {data.map((item, index) => {
          if (item.category === data1 || data1 === "") {
            return (
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
            );
          }
        })}
      </div>
    </div>
  );
};

export default TiendaContainer;

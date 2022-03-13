import React, { useState, useEffect } from "react";
import CardTienda from "../cardTienda/CardTienda";
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
      {/*BEGIN FILTERS*/}
      <div className="filtersContainer">
      <div className="searchBarContainer">
          <input
            type="text"
            className="searchBarContainerInput"
            placeholder="Buscar"
            value={filter}
            onChange={searchText.bind(this)}
          />
        </div>
        <div className="btnFilterContainer">
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
        </div>
        </div>
        {/*END FILTERS*/}

    {/*BEGIN RESUMEN COMPRA TABLE*/}
      <div className="cardTiendaContainer">
        {data.map((item, index) => {
          if (item.category === data1 || data1 === "") {
            return (
              <CardTienda
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
                price2={item.price2}
                size2={item.size2}
                material={item.material}
                item={item}
                key={index}
              />
              
            );
          }
        })}
      </div>
      {/*END RESUMEN COMPRA TABLE*/}
    </div>
  );
};

export default TiendaContainer;

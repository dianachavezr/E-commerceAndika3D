import React from "react";
import SearchBar from "../searchBar/SearchBar";
import "./filters.css";

const Filters = () => {
  return (
    <>
      <h2 className="filtersTitle">FILTROS</h2>
      <div className="filtersContainer">
        <div className="">
          <form action="">
            <select name="filter" id="filter" className="filtersSelect">
              <option value="orden por defecto">Orden por defecto</option>
              <option value="orden por popularidad">
                Orden por popularidad
              </option>
              <option value="orden por categoría">Orden por categoría</option>
              <option value="orden por precio de menor a mayor">
                Orden por precio de menor a mayor
              </option>
              <option value="orden por precio de mayor a menor">
                Orden por precio de mayor a menor
              </option>
            </select>
          </form>
        </div>
        <SearchBar />
      </div>
    </>
  );
};

export default Filters;

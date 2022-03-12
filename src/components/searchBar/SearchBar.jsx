import React, { useState } from "react";
import { initialState } from "react-use-cart";
import "./searchBar.css";
import dataProducts from "../cardTienda/dataProducts";


const SearchBar = () => {
  const [filter, setFilter] = useState("");
  
  const searchText = (event) =>{
      setFilter(event.target.value);
  }
  console.log(filter)

  let data = dataProducts.productData.filter(item =>{
    return Object.keys(item).some(key=>
        item[key].toString().toLowerCase().includes(filter.toString().toLowerCase())
      )
  });

  return (
    <div className="searchBarContainer">
      <input
        type="text"
        className="searchBarContainerInput"
        placeholder="Buscar"
        value={filter}
        onChange={searchText.bind(this)}
      />

    </div>
    
  );
};

export default SearchBar;

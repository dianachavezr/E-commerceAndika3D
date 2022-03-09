import React, { useState } from "react";
import "./navbar.css";
import Logo from "../../assets/Logo.svg";
import Bag from "../../assets/bag.png";
import NavbarHamburguer from "../navbarHamburguer/NavbarHamburguer";
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [clicked, setClicked] = useState(false);
  console.log(clicked);
  const handleClick = () => {
    //Cuando es true pasa a false y vicebersa
    setClicked(!clicked);
  };

  return (
    <div className="navContainer">
      <nav className="nav">
        <div className="navLogo">
        <NavLink to="/"> <img src={Logo} /></NavLink>
        </div>

        <div className={`navLinks ${clicked ? "active" : ""}`}>
        <NavLink to="/">Inicio</NavLink>
        <NavLink to="/quienes">Quienes somos</NavLink>
        <NavLink to="/tienda">Tienda</NavLink>
        </div>
        <div className="navHamburguer">
          <NavbarHamburguer clicked={clicked} handleClick={handleClick} />
        </div>
        <NavLink to="/carrito"><img className="navBag" src={Bag} /></NavLink>
        <div className={`navBackground ${clicked ? "active" : ""}`}></div>
      </nav>
    </div>
  );
};

export default Navbar;

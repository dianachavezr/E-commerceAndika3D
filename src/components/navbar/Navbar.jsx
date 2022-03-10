import React, { useState } from "react";
import "./navbar.css";
import Logo from "../../assets/Logo.svg";
import Bag from "../../assets/bag.png";
import NavbarHamburguer from "../navbarHamburguer/NavbarHamburguer";
import { NavLink } from "react-router-dom";
import { useCart } from "react-use-cart";

const Navbar = () => {
  const {
    isEmpty,
    totalUniqueItems,
    items,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();

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
          <NavLink to="/">
            {" "}
            <img src={Logo} />
          </NavLink>
        </div>
 
        <div className={`navLinks ${clicked ? "active" : ""}`}>
          <NavLink to="/">Inicio</NavLink>
          <NavLink to="/quienes">Quienes somos</NavLink>
          <NavLink to="/tienda">Tienda</NavLink>
        </div>

        <div className="navHamburguer">
          <NavbarHamburguer clicked={clicked} handleClick={handleClick} />
        </div>
        <div>
        <figure className=" image fade">
          
          <NavLink to="/carrito" style={{ textDecoration: "none" }}>
            <h5 style={{ color: "var(--blue)" }} className="navArticles">
              Artículos: {totalItems} ${cartTotal}
            </h5>
          </NavLink>
          <figcaption>
            <NavLink to="/carrito" style={{ textDecoration: "none", color: "var(--black" }} >
              Ir al resumen del carrito
              <div className="">
               Artículos: {totalItems} <br/> ${cartTotal}
               </div>
            </NavLink>
          </figcaption>
          </figure>
        </div>
        
        <figure className=" image fade">
          <NavLink to="/carrito">
            <img className="navBag" src={Bag} />
          </NavLink>
          <figcaption>
            <NavLink to="/carrito" style={{ textDecoration: "none", color: "var(--black" }} >
              Ir al resumen del carrito
              <div className="">
               Artículos: {totalItems} <br/>  ${cartTotal}
               </div>
            </NavLink>
          </figcaption>
        </figure>
       
        <div className={`navBackground ${clicked ? "active" : ""}`}></div>
     
      </nav>
    </div>
  );
};

export default Navbar;

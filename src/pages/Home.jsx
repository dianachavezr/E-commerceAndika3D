import React from "react";
import Cotizacion from "../components/cotizacion/Cotizacion";
import NuestraEmpresa from "../components/nuestraEmpresa/NuestraEmpresa";
import QuienesSomos from "../components/quienesSomos/QuienesSomos";
import Sect1Home from "../components/sect1Home/Sect1Home";
import CardsHome from "../components/cardsHome/CardsHome";
import CarouselHome from "../components/carouselHome/CarouselHome";
import Navbar from "../components/navbar/Navbar";

import Sect1HomePrueba from "../components/sect1Home/Sect1HomePrueba";

const Home = () => {
  return (
    <>
       <Navbar />    
      <Sect1HomePrueba />
      <CardsHome />
      <CarouselHome />
      <QuienesSomos />
      <NuestraEmpresa />
      <Cotizacion />
 
    </>
  );
};

export default Home;

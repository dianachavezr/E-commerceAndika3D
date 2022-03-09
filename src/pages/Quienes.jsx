import React from 'react'
import Navbar from '../components/navbar/Navbar';
import NuestraEmpresa from "../components/nuestraEmpresa/NuestraEmpresa";
import QuienesSomos from "../components/quienesSomos/QuienesSomos";
import Footer from '../components/footer/Footer';

const Quienes = () => {
  return (
    <div>
        <Navbar />
      <QuienesSomos />
      <NuestraEmpresa />
      <Footer />
    </div>
  )
}

export default Quienes

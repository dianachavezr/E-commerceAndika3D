import Navbar from "../src/components/navbar/Navbar";
import Footer from "../src/components/footer/Footer";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Tienda from "./pages/Tienda";
import ResumenCompra from "./pages/ResumenCompra";
import Producto from "./pages/Producto";
import Quienes from "./pages/Quienes";


function App() {
  return (
    <div className="App">

      <>

      <Routes>        
        <Route exact path="/" element={<Home />} />
        <Route path="/quienes" element={<Quienes />} />
        <Route path="/tienda" element={<Tienda />} />
        <Route path="/carrito" element={<ResumenCompra />} />
        <Route path="/product" element={<Producto />} />
      </Routes>
 
   
      </>
    </div>
  );
}

export default App;
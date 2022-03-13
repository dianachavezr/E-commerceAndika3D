
import Footer from "../src/components/footer/Footer";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Tienda from "./pages/Tienda";
import ResumenCompra from "./pages/ResumenCompra"
import Quienes from "./pages/Quienes";
import {CartProvider} from "react-use-cart"
import Navbar from "./components/navbar/Navbar";



function App() {
  return (
    <div className="App">

      <>
      <Navbar />
      <CartProvider>
    
      <Routes>        
        <Route exact path="/" element={<Home />} />
        <Route path="/quienes" element={<Quienes />} />
        <Route path="/tienda" element={<Tienda />} />
        <Route path="/carrito" element={<ResumenCompra />} />

  
      </Routes>
      </CartProvider>
      <Footer />
   
      </>
      
     
    </div>
  );
}

export default App;

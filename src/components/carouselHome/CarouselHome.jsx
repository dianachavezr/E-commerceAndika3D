import React, { useRef, useState } from "react";
import { NavLink } from "react-router-dom";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

import "./carouselHome.css";
import Keycup from "../../assets/keycup1.png";
import MegaPetConejo from "../../assets/megapetConejo/megapetConejo3.jpg";
import Retrato3dPerro from "../../assets/retrato3dPerro/retratoPerro3.jpg";
import MemoryPetPerro from "../../assets/memoryPetDog/memoryPet2.png";
import ChiquiPetConejo from "../../assets/chiquipetConejo/chiquiPetConejo1.jpg";
import ComboPerro5 from "../../assets/combo5Perro/comoPerro5.1.jpg";

const CarouselHome = () => {
  return (
    <div className="caroulselHomeContainer">
      <h2 className="caroulselHomeContainerTitle">Nuestros Productos</h2>
      <Swiper
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
        slidesPerView={1}
        spaceBetween={20}
        slidesPerGroup={1}
        loop={true}
        loopFillGroupWithBlank={true}
 
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="slideContainer">
            <div className="slideImgBox">
              <img src={MegaPetConejo} alt="Megapet Conejo" className="slideImgCards" />
            </div>
            <h3 className="slideTitle">MegaPets</h3>
            <div className="slideParagraphBox">
              <p className="slideParagraph">
                Escultura de animal de compañía, donde combinamos lo mejor de la
                impresión 3D con la creación artística
              </p>
            </div>

            <NavLink to="/tienda">
              <button className="btnVer">Ver Más</button>
            </NavLink>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slideContainer">
            <div className="slideImgBox">
              <img src={Retrato3dPerro} alt="Retrato Perro" className="slideImgCards" />
            </div>
            <h3 className="slideTitle">Retratos 3D</h3>
            <div className="slideParagraphBox">
              <p className="slideParagraph">
                Portaretrato de animales de compañía, donde replicamos la
                cabecita de tu mejor amigo
              </p>
            </div>
            <NavLink to="/tienda">
              <button className="btnVer">Ver Más</button>
            </NavLink>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="slideContainer">
            <div className="slideImgBox">
              <img src={MemoryPetPerro} alt="Memory Pet" className="slideImgCards" />
            </div>
            <h3 className="slideTitle">Memory Pets</h3>
            <div className="slideParagraphBox">
              <p className="slideParagraph">
                Memorial para plasmar los mejores momentos con tu mascota.
              </p>
            </div>
            <NavLink to="/tienda">
              <button className="btnVer">Ver Más</button>
            </NavLink>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="slideContainer">
            <div className="slideImgBox">
              <img src={ChiquiPetConejo} alt="Chiquipet" className="slideImgCards" />
            </div>
            <h3 className="slideTitle">Chiqui Pets</h3>
            <div className="slideParagraphBox">
              <p className="slideParagraph">
                Accesorio con la carita de tu mejor amigo.
              </p>
            </div>
            <NavLink to="/tienda">
              <button className="btnVer">Ver Más</button>
            </NavLink>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="slideContainer">
            <div className="slideImgBox">
              <img src={Keycup} alt="KeyCup" className="slideImgCards" />
            </div>
            <h3 className="slideTitle">Keycaps</h3>
            <div className="slideParagraphBox">
              <p className="slideParagraph">
                Dale un vistazo a nuestras colecciones de KeyCaps. Pregunta
                también por diseños personalizados
              </p>
            </div>

            <NavLink to="/tienda">
              <button className="btnVer">Ver Más</button>
            </NavLink>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="slideContainer">
            <div className="slideImgBox">
              <img src={ComboPerro5} alt="Combo" className="slideImgCards" />
            </div>
            <h3 className="slideTitle">Combos</h3>
            <div className="slideParagraphBox">
              <p className="slideParagraph">
                Adquiere versiones variadas de tu mejor amigo.
              </p>
            </div>
            <NavLink to="/tienda">
              <button className="btnVer">Ver Más</button>
            </NavLink>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default CarouselHome;

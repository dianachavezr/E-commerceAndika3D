import React, { useRef, useState } from "react";
import { NavLink } from 'react-router-dom';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

import "./carouselHome.css";
import Keycup from "../../assets/keycup.png";
import DogTonge from "../../assets/dogTonge.png";
import DogCombo from "../../assets/dogCombo.png";



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
        pagination={{
          clickable: true,
        }}
        /* autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}*/
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="slideImgBox">
            <img src={Keycup} alt="" className="slideImg" />
          </div>
          <h3 className="slideTitle">Keycaps</h3>
          <p className="slideParagraph">
            Dale un vistazo a nuestras colecciones de KeyCaps. Pregunta también
            por diseños personalizados
          </p>
          <NavLink  to="/product"> 
            <button className="btnVer">Ver Más</button>
          </NavLink >
        </SwiperSlide>
        <SwiperSlide>
          <div className="slideImgBox">
            <img src={DogTonge} alt="" className="slideImg" />
          </div>
          <h3 className="slideTitle">Accesorios Artísticos</h3>
          <p className="slideParagraph">
            Enamórate de nuestros accesorios artísticos con estilo y diseño
            único
          </p>
          <NavLink to="/product"> 
            <button className="btnVer">Ver Más</button>
          </NavLink>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slideImgBox">
            <img src={DogCombo} alt="" className="slideImg" />
          </div>
          <h3 className="slideTitle">MegaPets</h3>
          <p className="slideParagraph">
            Figuras totalmente personalizadas de tu Mascota
          </p>
          <NavLink to="/product"> 
            <button className="btnVer">Ver Más</button>
          </NavLink>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slideImgBox">
            <img src={Keycup} alt="" className="slideImg" />
          </div>
          <h3 className="slideTitle">Keycaps</h3>
          <p className="slideParagraph">
            Dale un vistazo a nuestras colecciones de KeyCaps. Pregunta también
            por diseños personalizados
          </p>
          <NavLink to="/product"> 
            <button className="btnVer">Ver Más</button>
          </NavLink>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slideImgBox">
            <img src={DogTonge} alt="" className="slideImg" />
          </div>
          <h3 className="slideTitle">Accesorios Artísticos</h3>
          <p className="slideParagraph">
            Enamórate de nuestros accesorios artísticos con estilo y diseño
            único
          </p>
          <NavLink to="/product"> 
            <button className="btnVer">Ver Más</button>
          </NavLink>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slideImgBox">
            <img src={DogCombo} alt="" className="slideImg" />
          </div>
          <h3 className="slideTitle">MegaPets</h3>
          <p className="slideParagraph">
            Figuras totalmente personalizadas de tu Mascota
          </p>
          <NavLink to="/product"> 
            <button className="btnVer">Ver Más</button>
          </NavLink>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slideImgBox">
            <img src={Keycup} alt="" className="slideImg" />
          </div>
          <h3 className="slideTitle">Keycaps</h3>
          <p className="slideParagraph">
            Dale un vistazo a nuestras colecciones de KeyCaps. Pregunta también
            por diseños personalizados
          </p>
          <NavLink to="/product"> 
            <button className="btnVer">Ver Más</button>
          </NavLink>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slideImgBox">
            <img src={DogTonge} alt="" className="slideImg" />
          </div>
          <h3 className="slideTitle">Accesorios Artísticos</h3>
          <p className="slideParagraph">
            Enamórate de nuestros accesorios artísticos con estilo y diseño
            único
          </p>
          <NavLink to="/product"> 
            <button className="btnVer">Ver Más</button>
          </NavLink>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slideImgBox">
            <img src={DogCombo} alt="" className="slideImg" />
          </div>
          <h3 className="slideTitle">MegaPets</h3>
          <p className="slideParagraph">
            Figuras totalmente personalizadas de tu Mascota
          </p>
          <NavLink to="/product"> 
            <button className="btnVer">Ver Más</button>
          </NavLink>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default CarouselHome;

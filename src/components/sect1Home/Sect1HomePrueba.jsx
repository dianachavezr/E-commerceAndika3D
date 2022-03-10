import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
// Import Swiper styles
import "swiper/css";

import "./sect1Home.css";
import Dog from "../../assets/dogAngel.png";
import Dogs from "../../assets/dogs.png";
import Dream from "../../assets/dream.png";
import { NavLink } from "react-router-dom";

const Sect1HomePrueba = () => {
  return (
    <div className="sect1Home">
      <div className="sect1HomeLeft">
        <h1 className="sect1HomeLeftTitle">Productos de Calidad</h1>
        <p className="sect1HomeLeftParagraph">
          {" "}
          Combinamos lo mejor del arte y la tecnología 3D
        </p>
        <NavLink to="/tienda">
          {" "}
          <button className="btnIrtienda">Ir a la tienda</button>
        </NavLink>
      </div>

      <div className="sect1HomeRight">
        <div className="sect1HomeRightContainer">
          <div className="sect1HomeRightSlide">
          <Swiper
      
        loop={true}
        loopFillGroupWithBlank={true}
   
        autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}

        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
              <SwiperSlide>
                <img src={Dog} alt="Dog" />
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <img src={Dogs} alt="Dogs" />
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <img src={Dream} alt="Dream" />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sect1HomePrueba;

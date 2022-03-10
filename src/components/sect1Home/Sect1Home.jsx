import React, {  useEffect, useRef } from "react";
import "./sect1Home.css";
import Dog from "../../assets/dogAngel.png";
import Dogs from "../../assets/dogs.png";
import Dream from "../../assets/dream.png";
import { NavLink } from 'react-router-dom';

const Sect1Home = () => {
  const slideshow = useRef();
  const intervalSlideShow = useRef();

  const next = () => {
    //To check out if slide has children
    if (slideshow.current.children.length > 0) {
      //To obtain firt child element
      const firstElement = slideshow.current.children[0];
      //to establish transition for slide
      slideshow.current.style.transition = `300ms ease-out all`;

      //to make slide move depending on photo size
      const slideSize = slideshow.current.children[0].offsetWidth;

      //To move slideshow
      slideshow.current.style.transform = `translateX(-${slideSize}px)`;

      const transitionSlide = () => {
        //to restart slideshow position
        slideshow.current.style.transition = "none";
        slideshow.current.style.transform = `translateX(0)`;

        //taking first element to the end
        slideshow.current.appendChild(firstElement);

        slideshow.current.removeEventListener('transitionend', transitionSlide);
      };

      //EventListener when animation ends
      slideshow.current.addEventListener("transitionend", transitionSlide);
    }
  };

  const previous = () => {
    console.log("Previous");
    if (slideshow.current.children.length > 0) {
      //to know how many elements has the slideshow
      const index = slideshow.current.children.length - 1;
      //to obtain last slideshow element
      const lastElement = slideshow.current.children[index];

      slideshow.current.insertBefore(lastElement, slideshow.current.firstChild);

      slideshow.current.style.transition = "none";

      const slideSize = slideshow.current.children[0].offsetWidth;
      slideshow.current.style.transform = `translateX(-${slideSize}px)`;

      setTimeout(() =>{
        slideshow.current.style.transition = "300ms ease-out all";
        slideshow.current.style.transform = `translateX(0)`;
      },30)
    }
  };

//Run only when the page rendirize
  useEffect(()=>{
    intervalSlideShow.current = setInterval(()=>{
        next();
      },4000);
      //To eliminate Interval
      slideshow.current.addEventListener('mouseenter', ()=>{
        clearInterval(intervalSlideShow.current);
      });

      //to restart interval
      slideshow.current.addEventListener('mouseleave', ()=>{
        intervalSlideShow.current = setInterval(()=>{
          next();
        },4000);
      });


  },[]);

  return (
    <div className="sect1Home">
      <div className="sect1HomeLeft">
        <h1 className="sect1HomeLeftTitle">Productos de Calidad</h1>
        <p className="sect1HomeLeftParagraph">
          {" "}
          Combinamos lo mejor del arte y la tecnología 3D
        </p>
        <NavLink to="/tienda"> <button className="btnIrtienda">Ir a la tienda</button></NavLink>
      </div>

    
      <div className="sect1HomeRight">
        <div className="sect1HomeRightContainer" ref={slideshow}>
          <div className="sect1HomeRightSlide">
            <img src={Dog} alt="Dog" />
          </div>
          <div className="sect1HomeRightSlide">
            <img src={Dogs} alt="Dogs" />
          </div>
          <div className="sect1HomeRightSlide">
            <img src={Dream} alt="Dream" />
          </div>
        </div>
      </div>
    
    </div>
  );
};

export default Sect1Home;

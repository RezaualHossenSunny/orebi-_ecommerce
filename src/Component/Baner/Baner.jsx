import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import baner from '../../assets/baner.png';
const Baner = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
  return (
    <>
    
      <Slider {...settings}>
        <div >
         <img  src={baner} alt='baner'/>
        </div>

        <div >
         <img src={baner} alt='baner'/>
        </div>

        <div >
         <img src={baner} alt='baner'/>
        </div>
       
     
      </Slider>
    

    </>
  )
}

export default Baner
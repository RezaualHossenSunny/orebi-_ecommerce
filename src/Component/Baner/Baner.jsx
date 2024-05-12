import React, { useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import baner from '../../assets/baner.png';
const Baner = () => {
  const [activeDots, Setactivedots]=useState(0)
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true,
        beforeChange: (prev, next) => {
          Setactivedots(next );
        },
        appendDots: dots => (
          <div
            style={{
           position:"absolute",
           top:"40%",
           left:"150px"
              
            }}
          >
            <ul style={{ margin: "0px"  }}> 
            {
              dots.map((item)=>{
                return <li style={{display:"block", marginTop:"10px"}}>{item} </li>
              })

              
            }
           
             </ul>
          </div>
        ),
        customPaging: i => (
          <div
            style={
              i === activeDots ? 
               {
              width: "30px",
              
              borderRight: "3px #262626 solid",
             paddingTop:"10px",
             paddingBottom:"10px",
             paddingRight:"30px",
             fontFamily:"dm sans",
             color:"#262626",
             fontSize:"14px",
             fontWeight:"400"
            }
               : 
              {
              width: "30px",
            
              borderRight: "3px white solid",
             paddingTop:"10px",
             paddingBottom:"10px",
             paddingRight:"30px",
             fontFamily:"dm sans",
             color:"transparent",
             fontSize:"14px",
             fontWeight:"400"
            }
            }
          >
            0{i + 1}
          </div>
        )
      };
  return (
    <div className='bg-comon w-full'>
    
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
    

    </div>
  )
}

export default Baner
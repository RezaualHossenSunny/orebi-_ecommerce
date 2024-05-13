import React from 'react'
import Container from '../Layout/Container'
import Producat from '../Layout/Producat'
import Flex from '../Layout/Flex'
import Slider from 'react-slick'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6'

const Arrivals = () => {

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className="bg-rgba w-[64px] h-[64px] rounded-full absolute top-[40%] right-[-100px] !flex justify-center items-center "
        style={{ ...style }}
        onClick={onClick}
      >
   <FaArrowRight className='text-2xl  text-white'/>
      </div>
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className="bg-rgba w-[64px] h-[64px] rounded-full absolute top-[40%] left-[-100px] !flex justify-center items-center "
        style={{ ...style}}
        onClick={onClick}
      >
      <FaArrowLeft className='text-2xl  text-white' />
      </div>
    );
  }







  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
    
  };
  return (
    <div className='py-32'>
        <Container>
            <p className=' font-dm text-primary font-bold text-[39px]'>New Arrivals</p>
             
             {/* <Flex className=' gap-x-10'> */}
             <Slider {...settings}>
             <Producat badge={true}/>
             <Producat badge={true}/>
             <Producat badge={true}/>
             <Producat badge={true}/>
             </Slider>
            
             {/* </Flex> */}
            
        </Container>
    </div>
  )
}

export default Arrivals

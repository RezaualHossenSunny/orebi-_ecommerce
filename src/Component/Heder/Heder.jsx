import React, { useEffect, useRef, useState } from 'react'
import Container from '../Layout/Container'
import Flex from '../Layout/Flex'
import { HiBars3BottomLeft } from "react-icons/hi2";
import { FaSearch } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";
import { RxTriangleDown } from "react-icons/rx";
import { TbShoppingCartFilled } from "react-icons/tb";
import Dropdown from '../Layout/Dropdown';
import card from '../../assets/card.png';
import { ImCross } from "react-icons/im";
const Heder = () => {
  const ref =useRef()
  const Userref =useRef()
  const cardref =useRef()

  const [show, setShow] =useState(false);
  const [usershow, setUsershow] =useState(false)
  const [cardshow, setCardshow] =useState(false)
  useEffect(()=>{
  document.body.addEventListener('click',(e)=>{

    if(ref.current.contains(e.target)){
      setShow(true)
    }else{
      setShow(false)
    }

    if(Userref.current.contains(e.target)){
      setUsershow(true)
    }else{
      setUsershow(false)
    }


    if(cardref.current.contains(e.target)){
      setCardshow(true)
    }else{
      setCardshow(false)
    }
  })
  },[])
  return (
    <div className='bg-comon'>
        <Container className='py-10'>
            <Flex className='justify-between'>
            {/* bar */}
                <div className='items-center'>
               <Dropdown className='relative z-50' dropRef={ref}>
               <div className='flex items-center gap-x-3 font-dm text-primary cursor-pointer'>
               <HiBars3BottomLeft className=' text-1xl' />
                <p className='text-sm font-normal'>Shop by Category</p>

         
               </div>
               {
                show &&
                <ul className='absolute top-10  bg-primary w-[263px] text-[#BEBEBE]'>
                  <li className='py-4 px-5 border-b  font-dm text-base border-y-[#2D2D2D]  hover:text-white hover:mx-2.5 ease-in-out duration-300  hover:font-bold'>Accesories</li>
                  <li className='py-4 px-5 border-b font-dm text-base border-y-[#2D2D2D] hover:text-white hover:mx-2.5 ease-in-out duration-300  hover:font-bold'>Furniture</li>
                  <li className='py-4 px-5 border-b font-dm text-base border-y-[#2D2D2D] hover:text-white hover:mx-2.5 ease-in-out duration-300  hover:font-bold'>Electronics</li>
                  <li className='py-4 px-5 border-b font-dm text-base border-y-[#2D2D2D] hover:text-white hover:mx-2.5 ease-in-out duration-300  hover:font-bold'>Clothes</li>
                  <li className='py-4 px-5 border-b font-dm text-base border-y-[#2D2D2D] hover:text-white hover:mx-2.5 ease-in-out duration-300  hover:font-bold'>Bags</li>
                  <li className='py-4 px-5 border-b font-dm text-base border-y-[#2D2D2D] hover:text-white hover:mx-2.5 ease-in-out duration-300  hover:font-bold'>Home Apliance</li>
                </ul>
              }
               </Dropdown>
                </div>

                {/* srach */}
                <div>
                 <div className='flex  relative'>
                 <input placeholder='Search Products' className='tex-sm font-normal font-dm py-4 px-5 w-[601px] outline-none rounded '/>

                 <FaSearch  className='text-xl absolute top-5 right-5'/>

                 </div>
                </div>

     {/* add to card */}
                <div className='flex  items-center  cursor-pointer'>
                <Dropdown className='relative z-50' dropRef={Userref}>
                <div className='flex items-center '>
                    <IoPersonSharp className='text-xl' />
                    <RxTriangleDown className='mt-1 text-xl' />
                    </div>
                    {
                      usershow&&
                <ul className='absolute top-10 right-0  bg-primary w-[200px] text-[#BEBEBE]'>
                  <li className='py-4 px-5 border-b  font-dm text-base border-y-[#2D2D2D]font-bold text-center text-white'>My Account</li>
                  <li className='py-4 px-5 border-b  font-dm text-base border-y-[#2D2D2D]font-bold text-center bg-comon text-primary '>Log Out</li>
              
                </ul>
              }
                </Dropdown>
                 

                 <Dropdown className='relative z-50' dropRef={cardref}>

                 <div className='items-center'>
                    <TbShoppingCartFilled className='text-xl ml-10 ' />
                    </div>

                    {
                      cardshow&&
             <div className='absolute top-10 right-0  bg-comon w-[360px]'>
             <div className='flex  relative border-y-[#2D2D2D]'>
             <div className='w-1/4 py-5 px-5'>
              <img src={card}/>
             </div>
             <div className='w-3/4 py-9 px-5'>
              <p className='font-dm text-primary font-bold  text-sm'>Black Smart Watch</p>
              <p className='font-dm text-primary font-bold  text-sm mt-3'>$44.00</p>
             </div>

             <ImCross className='absolute top-14 right-0 text-center' />

             </div>
             {/* button */}
             <div>
             <p className='px-5 py-3 text-base font-dm '>Subtotal: <span className='font-bold text-primary'>$44.00</span></p>
             
             <div className='flex px-5 py-3 justify-between'>
             <div className='py-4 px-10 w-[150px] border-2 border-[#2B2B2B] hover:bg-primary text-primary hover:text-white rounded'>
             <p className='font-dm text-sm font-bold '>View Cart</p>
             </div>

             <div className='py-4 px-10 w-[150px] border-2 border-[#2B2B2B] hover:bg-primary text-primary hover:text-white rounded'>
             <p className='font-dm text-sm font-bold '>Checkout</p>
             </div>

             </div>
              
             </div>
             

             </div>
              }
  
                 </Dropdown>
              
                

                </div>
            </Flex>
        </Container>

    </div>
  )
}

export default Heder
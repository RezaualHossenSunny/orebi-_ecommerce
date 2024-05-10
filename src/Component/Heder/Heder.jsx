import React, { useEffect, useRef, useState } from 'react'
import Container from '../Layout/Container'
import Flex from '../Layout/Flex'
import { HiBars3BottomLeft } from "react-icons/hi2";
import { FaSearch } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";
import { RxTriangleDown } from "react-icons/rx";
import { TbShoppingCartFilled } from "react-icons/tb";
import Dropdown from '../Layout/Dropdown';
const Heder = () => {
  const ref =useRef()
  const [show, setShow] =useState(false)
  useEffect(()=>{
  document.body.addEventListener('click',(e)=>{

    if(ref.current.contains(e.target)){
      setShow(true)
    }else{
      setShow(false)
    }
  })
  },[])
  return (
    <div className='bg-comon'>
        <Container className='py-10'>
            <Flex className='justify-between'>
            {/* bar */}
                <div>
               <Dropdown  dropRef={ref}>
               <div className='flex items-center gap-x-3 font-dm text-primary'>
               <HiBars3BottomLeft className=' text-1xl' />
                <p className='text-sm font-normal'>Shop by Category</p>

         
               </div>
               {
                show &&
                <ul className='absolute'>
                  <li>ghg</li>
                  <li>ghg</li>
                  <li>ghg</li>
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

     {/* icon */}
                <div className='flex  items-center '>
                    <div className='flex items-center '>
                    <IoPersonSharp className='text-xl' />
                    <RxTriangleDown className='mt-1 text-xl' />

                    <div>
                    <TbShoppingCartFilled className='text-xl ml-10 ' />
                    </div>

                    </div>

                </div>
            </Flex>
        </Container>

    </div>
  )
}

export default Heder
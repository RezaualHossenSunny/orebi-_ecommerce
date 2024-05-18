import React, { useState } from 'react'
import Flex from './Flex';
import { FaPlus } from "react-icons/fa6";

const Leftsidebaritem = ({subdropDown,title,children,color}) => {
  const [show, Setshow]=useState(false);
  const [drop, Setdrop]=useState(subdropDown)
  return (
    <div>
      
    {
        drop ?
        <Flex className='items-center justify-between'>
        <h2 className='cursor-pointer font-dm text-graytext text-base  font-normal border-b border-[#F0F0F0] pb-5' onClick={()=> Setshow(!show)}>
        {
          color &&
          <span className='inline-block w-[10px] h-[10px] rounded-full mr-[10px]'  style={{ background:color }}> </span> 

          
        }  {title} </h2>
        <FaPlus className='text-graytext text-xs' />
     </Flex>
     :
     <h2  className='cursor-pointer font-dm text-graytext text-base  font-normal border-b border-[#F0F0F0] pb-5'> <span className='inline-block w-[10px] h-[10px] rounded-full mr-[10px]'  style={{ background:color }}> </span>   {title}</h2>
    }
   

     {
        show &&
        <div className='border-b border-[#F0F0F0]  pb-5 mb-9'>
          {/* <p>Category 1</p>
          <p>Category 2</p>
          <p>Category 3</p>
          <p>Category 4</p>
          <p>Category 5</p> */}

          {children}
          

          
        </div>
     }
    </div>
  )
}

export default Leftsidebaritem
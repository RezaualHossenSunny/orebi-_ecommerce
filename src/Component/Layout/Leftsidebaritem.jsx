import React, { useState } from 'react'
import Flex from './Flex';
import { IoMdArrowDropdown } from "react-icons/io";

const Leftsidebaritem = ({subdropDown,title,children}) => {
  const [show, Setshow]=useState(false);
  const [drop, Setdrop]=useState(subdropDown)
  return (
    <div>
      
    {
        drop ?
        <Flex className='items-center justify-between'>
        <h2 className='cursor-pointer' onClick={()=> Setshow(!show)}> {title}</h2>
        <IoMdArrowDropdown />
     </Flex>
     :
     <h2>{title}</h2>
    }
   

     {
        show &&
        <div>
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
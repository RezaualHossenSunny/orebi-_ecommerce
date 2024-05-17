import React, { useState } from 'react'
import Flex from './Flex';
import { IoMdArrowDropdown } from "react-icons/io";
import Leftsidebaritem from './Leftsidebaritem';
const Leftsidebarcontent = ({dropDwon}) => {
    const [show, Setshow]=useState(false);
    const [drop, Setdrop]=useState(dropDwon)
  return (
    <div>

    {
        drop ?
        <Flex className='items-center justify-between'>
        <h2 className='cursor-pointer' onClick={()=> Setshow(!show)}>Shop by Category</h2>
        <IoMdArrowDropdown />
     </Flex>
     :
     <h2>Shop by Category</h2>
    }
   

     {
        show &&
        <div>
            <Leftsidebaritem/>
        </div>
     }


       
    </div>
  )
}

export default Leftsidebarcontent
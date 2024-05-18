import React, { useState } from 'react'
import Flex from './Flex';
import { IoMdArrowDropdown } from "react-icons/io";
import Leftsidebaritem from './Leftsidebaritem';
const Leftsidebarcontent = ({dropDwon}) => {
    const [show, Setshow]=useState(dropDwon);
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
            <Leftsidebaritem subdropDown={true} title='Category 1'>
            <p>Demo </p> 
            </Leftsidebaritem>
            {/* <Leftsidebaritem  subdropDown={false} title='Category 2'/>
            <Leftsidebaritem  subdropDown={true} title='Category 1'/>
            <Leftsidebaritem  subdropDown={true} title='Category 1'/>
            <Leftsidebaritem  subdropDown={true} title='Category 1'/> */}
        </div>
     }

     {
        drop == false &&(
          <div>
            <Leftsidebaritem subdropDown={true} title='Category 1'/>
            <Leftsidebaritem  subdropDown={false} title='Category 1'/>
            <Leftsidebaritem  subdropDown={true} title='Category 1'/>
        </div>
        )
      
     }
     


       
    </div>
  )
}

export default Leftsidebarcontent
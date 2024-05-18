import React, { useState } from 'react'
import Flex from './Flex';
import { IoMdArrowDropdown } from "react-icons/io";
import Leftsidebaritem from './Leftsidebaritem';
const Leftsidebarcontent = ({dropDwon,dropTitle}) => {
    const [show, Setshow]=useState(dropDwon);
    const [drop, Setdrop]=useState(dropDwon)
  return (
    <div>

    {
        drop ?
        <Flex className='items-center justify-between mt-[53px] pb-9'>
        <h2 className='cursor-pointer font-dm text-xl font-bold text-primary ' onClick={()=> Setshow(!show)}>{dropTitle}</h2>
        <IoMdArrowDropdown />
     </Flex>
     :
     <h2 className='cursor-pointer font-dm text-xl font-bold text-primary pb-9'>{dropTitle} </h2>
    }
   

     {
        show &&
        <div>
            <Leftsidebaritem subdropDown={true} title='Category 1' >
            <p>Demo </p> 
            </Leftsidebaritem>
            <Leftsidebaritem subdropDown={false} title='Category 2' color="yellow">
            <p>Demo </p> 
            </Leftsidebaritem>
            <Leftsidebaritem subdropDown={false} title='Category 3' color="black">
            <p>Demo </p> 
            </Leftsidebaritem>
            <Leftsidebaritem subdropDown={true} title='Category 4' color="pink">
            <p>Demo </p> 
            </Leftsidebaritem>
            <Leftsidebaritem subdropDown={false} title='Category 5' color="blue">
            <p>Demo </p> 
            </Leftsidebaritem>
        
        </div>
     }

     {
        drop == false &&(
          <div>
          <Leftsidebaritem subdropDown={true} title='Category 1' >
            <p>Demo </p> 
            </Leftsidebaritem>
            <Leftsidebaritem subdropDown={false} title='Category 2' color="yellow">
            <p>Demo </p> 
            </Leftsidebaritem>
            <Leftsidebaritem subdropDown={false} title='Category 3' color="black">
            <p>Demo </p> 
            </Leftsidebaritem>
            <Leftsidebaritem subdropDown={true} title='Category 4' color="pink">
            <p>Demo </p> 
            </Leftsidebaritem>
            <Leftsidebaritem subdropDown={false} title='Category 5' color="blue">
            <p>Demo </p> 
            </Leftsidebaritem>
        </div>
        )
      
     }
     


       
    </div>
  )
}

export default Leftsidebarcontent
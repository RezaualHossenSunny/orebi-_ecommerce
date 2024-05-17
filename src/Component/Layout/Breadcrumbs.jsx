import React from 'react'
import Container from './Container'
import { FaAngleRight } from "react-icons/fa6";
const Breadcrumbs = () => {
  return (
    <div>
        
            <div className='py-[124px]'>
                <h2 className='font-dm text-primay font-bold text-5xl'>Products</h2>
                <p className='py-3 font-dm text-[#767676] font-normal text-sm flex items-center gap-x-3'>Home <FaAngleRight />
                {window.location.pathname.split("/")[1]}</p>
            </div>
       
    </div>
  )
}

export default Breadcrumbs
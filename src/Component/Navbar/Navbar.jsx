import React from 'react'
import logo from '../../assets/Logo.png'
import Flex from '../Layout/Flex'
const Navbar = () => {
  return (
    <div className='max-w-container mx-auto py-8'>
  <Flex className='items-center'>
       {/* logo */}
       <div className='w-1/4'>
        <img src={logo} alt='navbar logo'/>
    </div>

 {/* menu */}
     <div className='w-3/4  '>
        <ul className='flex justify-end gap-x-20 font-dm'>
            <li className='text-primary text-sm font-bold cursor-pointer'>Home</li>
            <li className='text-[#767676] text-sm font-bold not-italic cursor-pointer  hover:text-primary'>Shop</li>
            <li className='text-[#767676] text-sm font-bold not-italic cursor-pointer hover:text-primary'>About</li>
            <li className='text-[#767676] text-sm font-bold not-italic cursor-pointer hover:text-primary'>Contacts</li>
            <li className='text-[#767676] text-sm font-bold not-italic cursor-pointer hover:text-primary'>Journal</li>
        </ul>
     </div>
  </Flex>

 


    
    </div>
  )
}

export default Navbar
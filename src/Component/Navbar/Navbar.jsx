import React from 'react'
import logo from '../../assets/Logo.png'
import Flex from '../Layout/Flex'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='max-w-container mx-auto '>
  <Flex className='items-center py-8'>
       {/* logo */}
       <div className='w-1/4'>
        <img src={logo} alt='navbar logo'/>
    </div>

 {/* menu */}
     <div className='w-3/4  '>
        <ul className='flex justify-end gap-x-20 font-dm'>
            <Link to='/'  className='text-primary text-sm font-bold cursor-pointer'>Home</Link>
            <Link to='/shope'  className='text-[#767676] text-sm font-bold not-italic cursor-pointer  hover:text-primary'>Shop</Link>
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
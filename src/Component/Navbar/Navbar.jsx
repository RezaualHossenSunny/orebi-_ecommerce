import React from 'react'
import logo from '../../assets/Logo.png'
const Navbar = () => {
  return (
    <div className='max-w-container mx-auto py-8'>
    <div className='flex items-center'>

    {/* logo */}
    <div className='w-1/4'>
        <img src={logo} alt='navbar logo'/>
    </div>

 {/* menu */}
     <div className='w-3/4  '>
        <ul className='flex justify-end gap-x-20 font-dm'>
            <li className='text-[#262626] text-sm font-bold cursor-pointer'>Home</li>
            <li className='text-[#767676] text-sm font-bold not-italic cursor-pointer  hover:text-[#262626]'>Shop</li>
            <li className='text-[#767676] text-sm font-bold not-italic cursor-pointer hover:text-[#262626]'>About</li>
            <li className='text-[#767676] text-sm font-bold not-italic cursor-pointer hover:text-[#262626]'>Contacts</li>
            <li className='text-[#767676] text-sm font-bold not-italic cursor-pointer hover:text-[#262626]'>Journal</li>
        </ul>
     </div>


    </div>
    </div>
  )
}

export default Navbar
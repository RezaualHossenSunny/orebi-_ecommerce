import React from 'react'
import logo from '../../assets/Logo.png'
const Navbar = () => {
  return (
    <div className='max-w-container mx-auto py-8'>
    <div className='flex'>

    {/* logo */}
    <div className='w-1/4'>
        <img src={logo} alt='navbar logo'/>
    </div>

 {/* menu */}
     <div className='w-3/4  '>
        <ul className='flex justify-end gap-x-20'>
            <li className='text-[#262626] text-sm font-bold'>Home</li>
            <li>Shop</li>
            <li>About</li>
            <li>Contacts</li>
            <li>Journal</li>
        </ul>
     </div>


    </div>
    </div>
  )
}

export default Navbar
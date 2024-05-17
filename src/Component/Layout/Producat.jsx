import React from 'react'
import p1 from '../../assets/p1.png'
import Badge from './Badge'
import { FaHeart } from "react-icons/fa6";
import { TfiReload } from "react-icons/tfi";
import { TbShoppingCartFilled } from 'react-icons/tb';
import Flex from './Flex';
const Producat = ({ badge }) => {
  return (
    <div className='py-12'>
      <div className='relative overflow-y-hidden group '>

        <img className='w-[100%]' src={p1} />
        {
          badge &&
          <Badge title="New" />
        }
        <div className='bg-white h-[156px] w-full absolute bottom-[-160px] left-0 py-5 px-5 group-hover:bottom-0  duration-700 ease-in-out  '>
          <div className='flex items-center justify-end gap-x-4 '>
          <p className=' font-dm text-[#767676] text-base font-normal'>Add to Wish List</p>
          <FaHeart className="text-xl" />
          </div>
          <div className='flex items-center justify-end gap-x-4 mt-5 '>
          <p className=' font-dm text-[#767676] text-base font-normal'>Compare</p>
          <TfiReload className="text-xl font-bold" />
          </div>
          <div className='flex items-center justify-end gap-x-4 mt-5 '>
          <p className=' font-dm text-[#767676] text-base font-bold'>Add to Cart</p>
          <TbShoppingCartFilled className="text-xl" />
          </div>
        </div>

       

      </div>
      <div  className='py-5'>
        <Flex className='justify-between'>
        <p className='font-dm text-primary font-bold text-xl'>Basic Crew Neck Tee</p>
          <p className='text-base font-dm font-normal text-[#767676]'>$44.00</p>
        </Flex>
        <p className='text-base font-dm font-normal text-[#767676] mt-4'>Black</p>
        </div>
    </div>
  )
}

export default Producat
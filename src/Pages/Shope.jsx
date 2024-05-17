import React, { useState } from 'react'
import Container from '../Component/Layout/Container'
import Breadcrumbs from '../Component/Layout/Breadcrumbs'
import Flex from './../Component/Layout/Flex';
import Pagination from '../Component/Layout/Pagination';


const Shope = () => {
   const [show,setShow]=useState(12)
  const handlechange = (e)=>{
    setShow(e.target.value);
  }


  return (
    <div>


      <Container>
        <Breadcrumbs />


        <Flex className='gap-x-10 mt-32'>
          <div className='w-1/4	'>
            sss
          </div>
          <div className='w-3/4	 relative'>

            {/* show dropdown */}


            <div className='flex gap-x-10 justify-end mb-[60px]'>
              {/* dropdown */}

              <div className='flex items-center gap-x-3.5'>

                <div>
                  <p className='font-dm text-[#776767] text-base font-normal'>Sort by:</p>
                </div>



                <div className='w-[239px]    '>
                  <select id="countries" class="bg-white border border-[#f0f0f0] font-dm text-[#776767] text-base font-normal rounded outline-none   block  w-full p-2.5 ">
                    <option className='' selected>Featured</option>
                    <option value="US">United States</option>
                    <option value="CA">Canada</option>
                    <option value="FR">France</option>
                    <option value="DE">Germany</option>
                  </select>

                </div>
              </div>

              {/* dropdown */}

              {/* show */}

              <div className='flex items-center gap-x-3.5'>

                <div>
                  <p className='font-dm text-[#776767] text-base font-normal'>Show:</p>
                </div>



                <div className='w-[139px]    '>
                  <select onChange={(e)=> handlechange(e)}  id="countries" class="bg-white border border-[#f0f0f0] font-dm text-[#776767] text-base font-normal rounded outline-none   block  w-full p-2.5 ">
                 
                    <option value="12">12</option>
                    <option value="12">24</option>
                    <option value="24">36</option>
                    
                  </select>

                </div>
              </div>
              {/* show */}
            </div>






            <Pagination itemsPerPage={show} />


          </div>
        </Flex>
      </Container>
    </div>
  )
}

export default Shope
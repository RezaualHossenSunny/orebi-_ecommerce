import React from 'react'
import Container from '../Component/Layout/Container'
import Breadcrumbs from '../Component/Layout/Breadcrumbs'
import Flex from './../Component/Layout/Flex';
import Pagination from '../Component/Layout/Pagination';


const Shope = () => {
    // console.log(window.location.pathname.split("/")[1]);
  return (
    <div>
        <Breadcrumbs/>

        <Container>
          <Flex className='gap-x-10 mt-32'>
            <div className='w-1/4	'>
sss
            </div>
            <div className='w-3/4	 relative'>
             <Pagination itemsPerPage={12} />
          
           
            </div>
          </Flex>
        </Container>
    </div>
  )
}

export default Shope
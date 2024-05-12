import React from 'react'
import Container from '../Layout/Container'
import Producat from '../Layout/Producat'
import Flex from '../Layout/Flex'

const Arrivals = () => {
  return (
    <div className='py-32'>
        <Container>
            <p className=' font-dm text-primary font-bold text-[39px]'>New Arrivals</p>
             
             <Flex className=' gap-x-10'>
             <Producat badge={true}/>
             <Producat badge={true}/>
             <Producat badge={true}/>
             <Producat badge={true}/>
             </Flex>
            
        </Container>
    </div>
  )
}

export default Arrivals

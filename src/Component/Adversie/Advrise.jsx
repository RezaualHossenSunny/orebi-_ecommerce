import React from 'react'
import Container from '../Layout/Container'
import Flex from '../Layout/Flex'
import add from '../../assets/Ad_1.jpg'
import add1 from '../../assets/Ad_2.png'
import add2 from '../../assets/Ad_3.png'
const Advrise = () => {
  return (
    <>
        <div className='py-44'>
        <Container>
        <Flex className='justify-between'>
            <div>
                <img src={add}/>
            </div>
            <div>
                <img src={add2}/>
                <img className='mt-10' src={add1}/>
            </div>
        </Flex>
        </Container>
        </div>
    </>
  )
}

export default Advrise
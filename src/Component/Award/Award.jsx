import React from 'react'
import Container from '../Layout/Container'
import award from '../../assets/award.png'
const Award = () => {
  return (
    <div>
        <Container>
            <div className='py-32'>
            <img src={award}/>
            </div>
        </Container>
    </div>
  )
}

export default Award
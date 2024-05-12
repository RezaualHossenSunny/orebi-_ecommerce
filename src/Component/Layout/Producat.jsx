import React from 'react'
import p1 from '../../assets/p1.png'
import Badge from './Badge'
const Producat = ({badge}) => {
  return (
    <div className='py-12'>
<div className='relative'>
    
<img src={p1}/>
{
    badge &&
    <Badge title="New"/>
}

</div>
    </div>
  )
}

export default Producat
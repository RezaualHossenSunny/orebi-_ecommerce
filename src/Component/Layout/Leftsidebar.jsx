import React from 'react'
import Leftsidebarcontent from './Leftsidebarcontent'

const Leftsidebar = () => {
  return (
    <div>
        <Leftsidebarcontent dropDwon={false} dropTitle="Shop by Category"/>
        <Leftsidebarcontent dropDwon={true} dropTitle="Shop by Color" />
        <Leftsidebarcontent dropDwon={true} dropTitle="Shop by Brand" />
        <Leftsidebarcontent dropDwon={false} dropTitle="Shop by Price" />
     
    </div>
  )
}

export default Leftsidebar
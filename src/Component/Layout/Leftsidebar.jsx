import React from 'react'
import Leftsidebarcontent from './Leftsidebarcontent'

const Leftsidebar = () => {
  return (
    <div>
        <Leftsidebarcontent dropDwon={true}/>
        <Leftsidebarcontent dropDwon={false}/>
        <Leftsidebarcontent dropDwon={true}/>
    </div>
  )
}

export default Leftsidebar
import React from 'react'
import Navbar from '../Navbar/Navbar'
import Heder from '../Heder/Heder'
import { Outlet } from 'react-router-dom'

const Rootlayout = () => {
  return (
    <>
        <Navbar/>
        <Heder/>
        <Outlet/>
    </>
  )
}

export default Rootlayout
import React from 'react'
import Navbar from '../Navbar/Navbar'
import Heder from '../Heder/Heder'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'

const Rootlayout = () => {
  return (
    <>
        <Navbar/>
        <Heder/>
        <Outlet/>
        <Footer/>
    </>
  )
}

export default Rootlayout
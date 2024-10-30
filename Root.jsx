import React from 'react'
import Navbar from './src/Components/User/Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './src/Components/User/Footer/Footer'
export default function Root() {
  return (
    <>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </>
  )
}

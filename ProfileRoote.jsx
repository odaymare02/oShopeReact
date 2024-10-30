import React from 'react'
import PNavBar from './src/Components/User/ProfileNavbar/PNavBar'
import { Outlet } from 'react-router-dom'
import Footer from './src/Components/User/Footer/Footer'

export default function ProfileRoote() {
  return (
    <>
    <PNavBar/>
    <Outlet/>
    <Footer/>
    </>
  )
}

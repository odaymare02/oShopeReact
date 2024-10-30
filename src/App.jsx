import React, { useEffect } from 'react'
import { RouterProvider } from 'react-router-dom'
import { Slide, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import router from './Routes/Routes'
import UserContextProvider from './Context/User';
import './index.css'
import Slides from './Components/User/slides/Slides';
import Footer from './Components/User/Footer/Footer';
import CartContextProvider from './Context/Cartc';
export default function App() {
  return (
    <>

    <div className="container">
        <UserContextProvider>
          <CartContextProvider>
            <RouterProvider router={router} />
            <ToastContainer transition={Slide} />
          </CartContextProvider>
        </UserContextProvider>
      </div>
    </>

  )
}

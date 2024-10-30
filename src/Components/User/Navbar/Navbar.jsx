import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import style from "./Navbar.module.css"
import { UserContext } from '../../../Context/User';
import { cartContext } from '../../../Context/Cartc';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Badge, OffcanvasHeader } from 'react-bootstrap';
import img from "./emptyCart.png"
export default function Navbar() {
  const {totalQuantity,cartItems,totalPrice}=useContext(cartContext);
  const [isScrolled, setIsScrolling] = useState(false);
  const { isLogin, UserData, setLogin, setUserData } = useContext(UserContext);
  const [show, setShow] = useState(false);
  // console.log(cartItems);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleScroll = () => {
    if (window.scrollY > 30) {
      setIsScrolling(true);
    } else {
      setIsScrolling(false);
    }
  }
  window.addEventListener('scroll', handleScroll);
  const handleLogout = () => {
    localStorage.removeItem("token");
    setLogin(false);
    setUserData({});
  }
  return (
    <nav className={`navbar navbar-expand-lg fixed-top pt-3 shadow container mt-2 rounded-2 ${isScrolled ?"bg-light" : style.isScrolled} `}>
      <div className="container-fluid">
        <Link  className={`navbar-brand  text-center m-auto ${style.brand}`} href="#">O_Shope</Link>
        <button className="navbar-toggler order-last" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          {
            isLogin ? (
              <ul className="navbar-nav m-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className={`nav-link ${style.navLink}`} aria-current="page">Home</Link>
                </li>
                <li className="nav-item">
                  <Link to={"/orders"} className={`nav-link ${style.navLink}`} href="#">carts</Link>
                </li>
                <li className="nav-item">
                  <Link className={`nav-link ${style.navLink}`} to={"/AllProd"} >products</Link>
                </li>
              </ul>
            ) : (
              <div className="nav-item ms-auto">
                <div className="auth d-flex">
                  <Link className={`${style.no_underline} text-dark btn btn-outline-white `} to={"/login"} > Signin </Link> <Link to={"/register"} className={`${style.no_underline}  btn btn-outline-dark `}>Siginup</Link>
                </div>
              </div>
            )
          }
          </div>
          <div>
          {
            isLogin ? (
              <div className="nav-item">
                <div className="auth d-flex justify-content-center align-items-center gap-4">
                  {/* <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path d="M17.877 16.4848L13.609 12.2168C13.5281 12.1359 13.4227 12.0938 13.3102 12.0938H12.8461C13.9535 10.8105 14.625 9.14062 14.625 7.3125C14.625 3.27305 11.352 0 7.3125 0C3.27305 0 0 3.27305 0 7.3125C0 11.352 3.27305 14.625 7.3125 14.625C9.14062 14.625 10.8105 13.9535 12.0938 12.8461V13.3102C12.0938 13.4227 12.1395 13.5281 12.2168 13.609L16.4848 17.877C16.65 18.0422 16.9172 18.0422 17.0824 17.877L17.877 17.0824C18.0422 16.9172 18.0422 16.65 17.877 16.4848ZM7.3125 12.9375C4.20469 12.9375 1.6875 10.4203 1.6875 7.3125C1.6875 4.20469 4.20469 1.6875 7.3125 1.6875C10.4203 1.6875 12.9375 4.20469 12.9375 7.3125C12.9375 10.4203 10.4203 12.9375 7.3125 12.9375Z" fill="#484848" stroke="#484848" stroke-width="0.0351562" />
                  </svg> */}
                  <div class="dropdown">
                    <button class="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="20" viewBox="0 0 18 20" fill="none" className='me-1'>
                        <path d="M12.5 11.875C11.3789 11.875 10.8398 12.5 9 12.5C7.16016 12.5 6.625 11.875 5.5 11.875C2.60156 11.875 0.25 14.2266 0.25 17.125V18.125C0.25 19.1602 1.08984 20 2.125 20H15.875C16.9102 20 17.75 19.1602 17.75 18.125V17.125C17.75 14.2266 15.3984 11.875 12.5 11.875ZM15.875 18.125H2.125V17.125C2.125 15.2656 3.64062 13.75 5.5 13.75C6.07031 13.75 6.99609 14.375 9 14.375C11.0195 14.375 11.9258 13.75 12.5 13.75C14.3594 13.75 15.875 15.2656 15.875 17.125V18.125ZM9 11.25C12.1055 11.25 14.625 8.73047 14.625 5.625C14.625 2.51953 12.1055 0 9 0C5.89453 0 3.375 2.51953 3.375 5.625C3.375 8.73047 5.89453 11.25 9 11.25ZM9 1.875C11.0664 1.875 12.75 3.55859 12.75 5.625C12.75 7.69141 11.0664 9.375 9 9.375C6.93359 9.375 5.25 7.69141 5.25 5.625C5.25 3.55859 6.93359 1.875 9 1.875Z" fill="#484848" stroke="#484848" stroke-width="0.0390625" />
                      </svg>
                      {
                        UserData.userName
                      }
                    </button>
                    <ul className="dropdown-menu p-2">
                      <div className=" d-flex gap-2  align-items-center justify-content-start my-2">
                      <svg className={`${style.logoutLogo}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464l349.5 0c-8.9-63.3-63.3-112-129-112l-91.4 0c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304l91.4 0C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7L29.7 512C13.3 512 0 498.7 0 482.3z"/></svg>                      
                        <Link className={`${style.no_underline}`} to={"/profile"}>Profile</Link>
                      </div>
                      <div className="logout d-flex gap-2  align-items-center justify-content-start">
                        <svg className={`${style.logoutLogo}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z" /></svg>
                        <Link onClick={handleLogout} className={`${style.no_underline}`} to={"/login"}>Log out</Link>
                      </div>
                    </ul>
                  </div>
                  <Button variant="" onClick={handleShow} className='position-relative' >
      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 18 20" fill="none">
                    <path d="M14 5C14 2.24297 11.757 0 9 0C6.24297 0 4 2.24297 4 5H0.25V16.875C0.25 18.6009 1.6491 20 3.375 20H14.625C16.3509 20 17.75 18.6009 17.75 16.875V5H14ZM9 1.875C10.7231 1.875 12.125 3.27688 12.125 5H5.875C5.875 3.27688 7.27688 1.875 9 1.875ZM15.875 16.875C15.875 17.5643 15.3143 18.125 14.625 18.125H3.375C2.68574 18.125 2.125 17.5643 2.125 16.875V6.875H4V8.4375C4 8.95527 4.41973 9.375 4.9375 9.375C5.45527 9.375 5.875 8.95527 5.875 8.4375V6.875H12.125V8.4375C12.125 8.95527 12.5447 9.375 13.0625 9.375C13.5803 9.375 14 8.95527 14 8.4375V6.875H15.875V16.875Z" fill="#484848" stroke="#484848" stroke-width="0.0390625" />
                  </svg>
                  {
                    totalQuantity>0?
                    <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{totalQuantity}</span>:""
                  }
    <span className="visually-hidden">unread messages</span>
      </Button>
      <Offcanvas show={show} onHide={handleClose} placement="end" >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className='d-flex justify-content-between  w-100'>
            <p>
              Your Cart
            </p>
            <span className='text-secondary'>
              total:{totalPrice}
            </span>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {
            totalQuantity==0?
            <div>Your cart is empty</div>
            :
            <div className="row">
              {
                cartItems?.map(item => (
                  <div key={item.id} className="col-12 mb-3 border-bottom position-relative shadow p-2 rounded-3">
                    {
                      item.details.discount>0?
                              <p className='position-absolute top-0 end-0 translate-middle badge rounded-pill bg-danger'>%{item.details.discount}</p>
                              :""
                    }
                   <div className="d-flex justify-content-center align-items-center gap-2" >
                      <img src={item.details.mainImage.secure_url} alt={item.name} className="w-25 object-fit-contain" />
                        <p className="text-secondary">{item.details.name.substring(0,30)}</p>
                        <div className="prices">
                          {
                            item.details.discount>0?
                            <div className='d-flex justify-content-center align-items-center gap-2'>
                              <p className="">{(item.details.price-  (item.details.price * item.details.discount) / 100).toFixed(2) } </p>
                              <p className="text-muted text-decoration-line-through">{item.details.price} </p>
                            </div>
                            :
                            <span>
                              {item.details.price}
                            </span>
                          }
                        {/* <button onClick={() => removeFromCart(item.id)} className="btn btn-danger">Remove</button> */}
                      </div>
                    </div>
                    <div className='bg-light text-center'>

                    <span  >quantity: {item.quantity}</span>
                    </div>

                  </div>
                ))
              }
            </div>
          }
          
        </Offcanvas.Body>
        <OffcanvasHeader>
          <div className="d-flex justify-content-center w-100 align-items-center border-top pt-1">
           <Link  to={"/orders"} className="btn btn-outline-dark" >
           orderPage
           </Link>
          </div>
        </OffcanvasHeader>
      </Offcanvas>
                </div>
              </div>
            ) : ""
          }

        </div>
      </div>
     
    </nav>

  )
}

import React, { useContext } from 'react'
import { cartContext } from '../../../Context/Cartc'
import  { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css/effect-cards';
import styles from './Styles.module.css'; // Import styles

// import required modules
import { EffectCards } from 'swiper/modules';
import { useFormik } from 'formik';
import * as yup from "yup"
import axios from 'axios';
import { Bounce, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

export default function Check() {
    const navigate=useNavigate();
    const [loader,setLoader]=useState(false);
    const formik=useFormik({
        initialValues: {
            couponName: '',
            address:'',
            phone:'',
        },
        validationSchema: yup.object({
            address: yup.string().required('Address is required'),
            phone: yup.string().required('Phone number is required'),
        }),
        onSubmit: async() => {
            setLoader(true);
            try{
                const {data}=await axios.post("https://ecommerce-node4.onrender.com/order",formik.values,
                    {
                        headers: {
                            'Authorization': 'Tariq__'+localStorage.getItem('token')
                        }
                    }
                )
                if(data.message=="success"){
                    toast.success("Your order is placed successfully", {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                        transition: Bounce,
                    });
                    formik.resetForm();
                    navigat("/home");
                }
                console.log(data)
            }catch(e){
                toast.error(e.response.data.message, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    transition: Bounce,
                    });
            }finally{
                setLoader(false);
            }
        },
    })
    const{cartItems}=useContext(cartContext);
  return (
    <section>
        <div className="title">
            <h2>check out</h2>
        </div>
        {
            cartItems.length===0? <h2>Cart is empty</h2>:
            <>
            <Swiper
            effect={'cards'}
            grabCursor={true}
            modules={[EffectCards]}
            className={styles.swiper}
          >
            {
                cartItems.map(item => (
                    <SwiperSlide key={item.id} className={styles.swiperSlide}>
                        <div className='d-flex flex-column justify-content-center align-items-center'>
                            <img src={item.details.mainImage.secure_url} alt={item.name} className='card-img-top' />
                            <div className="card-body">
                                <h5 className="card-title">{item.details.name.substring(0,10)}</h5>
                                <p className="card-text">quantity: {item.quantity}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))
              
            }
          </Swiper>
          <form className= ' w-75 shadow p-4  rounded-5 mt-5 m-auto' onSubmit={formik.handleSubmit} >
          <div className="form-floating mb-3 w-100">
                    <input
                     type="couponName"
                      className={`form-control `}
                        id="floatingInput"
                         placeholder="name@example.com"
                         name='couponName'
                         value={formik.values.couponName}
                         onChange={formik.handleChange}
                         onBlur={formik.handleBlur}
                          />
                    <label htmlFor="floatingInput">couponName</label>
                    {
                      formik.touched.email && formik.errors.email && (
                        <div className="text-danger">{formik.errors.email}</div>
                      )
                    }
                  </div>
          <div className="form-floating mb-3 w-100">
                    <input
                     type="text"
                      className={`form-control `}
                        id="floatingInput"
                         placeholder="name@example.com"
                         name='address'
                         value={formik.values.address}
                         onChange={formik.handleChange}
                         onBlur={formik.handleBlur}
                          />
                    <label htmlFor="floatingInput">address</label>
                    {
                      formik.touched.address && formik.errors.address && (
                        <div className="text-danger">{formik.errors.address}</div>
                      )
                    }
                  </div>
          <div className="form-floating mb-3 w-100">
                    <input
                     type="couponName"
                      className={`form-control `}
                        id="number"
                         placeholder="name@example.com"
                         name='phone'
                         value={formik.values.phone}
                         onChange={formik.handleChange}
                         onBlur={formik.handleBlur}
                          />
                    <label htmlFor="floatingInput">Phone</label>
                    {
                      formik.touched.phone && formik.errors.phone && (
                        <div className="text-danger">{formik.errors.phone}</div>
                      )
                    }
                  </div>
            <button type="submit" className={`btn btn-outline-dark ${formik.errors.phone||formik.errors.address?"disabled":""} ${loader?"disabled":""} `}>
                {
                    loader? "Loading..." : "Place Order"
                }
            </button>
          </form>
          </>
        }
       
    </section>
  )
}

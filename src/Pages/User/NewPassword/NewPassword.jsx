import React, { useState } from 'react'
import img from "./sendcode.png"
import style from "./NewPassword.module.css"
import { Link, useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import * as yup from "yup";
import axios from 'axios'
import { jwtDecode } from 'jwt-decode'
import { Bounce, toast } from 'react-toastify'
import Loader from '../../../Components/User/Loader/Loader'
export default function NewPassword() {
  const [loader,setloader]=useState(false);
  const [error,setError]=useState(null);
  const navigate=useNavigate();
  const schema=yup.object({
    email:yup.string().email().required('Required'),
    password:yup.string().required('Required').min(3),
    code:yup.string().required('Required').min(4)
  });
  const formik=useFormik({
    initialValues:{
      email:"",
      password:"",
      code:""
    },
    onSubmit:async()=>{
      setloader(true);
      try{
        const {data}=await axios.patch('https://ecommerce-node4.onrender.com/auth/forgotPassword',formik.values);
        console.log(data)
        if(data.message=="success"){
          localStorage.setItem('token',data.token);
          const decode=jwtDecode(data.token);
          formik.resetForm();
          toast.success("Your login is success", {
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
            navigate("/login");
        }
      }catch(e){
        setError(e.message);
      }finally{
        setloader(false);
      }

    },validationSchema:schema

  });
  return (
    <section className='forget'>
      <div className="title text-center mb-5 ">
        Reset Password page
      </div>
      <div className="row d-flex justify-content-center align-items-center" >
        <div className="col-md-6">
          <img src={img} className='' alt="" />
        </div>
        <div className="col-md-6 d-flex justify-content-center align-items-center">
          <form className='w-100' onSubmit={formik.handleSubmit}>
          <div className={`${style.loginTitle} mb-5 text-center`}>
            Oshope
          </div>
            <div>
              <div className="form-floating mb-3">
                <input
                 type="email"
                  className={`form-control ${style['no_border']} `}
                    id="floatingInput"
                     placeholder="name@example.com"
                     name='email'
                     value={formik.values.email}
                     onChange={formik.handleChange}
                     onBlur={formik.handleBlur}
                      />
                <label htmlFor="floatingInput">Email address</label>
                {
                  formik.touched.email && formik.errors.email && (
                    <div className="text-danger">{formik.errors.email}</div>
                  )
                }
              </div>
              <div className="form-floating mb-5">
                <input type="password"
                 className={`form-control ${style.no_border} `}
                   id="floatingPassword"
                    placeholder="Password"
                    name='password'
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur} />
                <label htmlFor="floatingPassword">Password</label>
                {
                  formik.errors.password && formik.touched.password?<div className="text-danger">{formik.errors.password}</div>
                  :""

                }
              </div>
              <div className="form-floating mb-5">
                <input
                 className={`form-control ${style.no_border} `}
                   id="floatingPassword"
                    placeholder="code"
                    name='code'
                    value={formik.values.code}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}/>
                <label htmlFor="floatingPassword">enter code</label>
                {
                  formik.errors.code && formik.touched.code?<div className="text-danger">{formik.errors.code}</div>
                  :""

                }
              </div>
              <div className="buttons d-flex flex-column gap-3">
              <button type='submit' className={`btn text-center bg-dark text-light w-100 ${style.loginbtn}`} > 
              {Loader?"Loading...":"confirm"}
              </button>
              </div>
            </div>

          </form>
        </div>
      </div>
    </section>
  )
}

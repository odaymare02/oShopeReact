import React, { useState } from 'react'
import img from "./sendcode.png"
import { useFormik } from 'formik'
import axios from 'axios';
import * as yup from "yup"
import style from "./SendCode.module.css"
import { Bounce, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
export default function SendCode() {
  const [loader,setloader]=useState(false);
  const [error,setError]=useState(null);
  const navigate=useNavigate();
  const schema=yup.object({
    email: yup.string()
     .email("Invalid email address")
     .required("Email is required"),
  });
  const formik=useFormik({
    initialValues: {
      email: '',
    },
    validationSchema: schema,
    onSubmit:async () => {
      setloader(true);
      try{
        const{data}=await axios.patch("https://ecommerce-node4.onrender.com/auth/sendcode",formik.values);
        console.log(data);
        if(data.message=="success"){
          toast.success("send code", {
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
        navigate("/forgetPass");
      }

      }
      catch(error){
        setError(error.message);
      }finally{
        setloader(false);
      }

    },
  });
  return (
    <section className='forget'>
      <div className="title text-center mb-5">
        sendcode page
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
                  className={`form-control ${style.no_border} `}
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
              <div className="buttons d-flex flex-column gap-3">
              <button type='submit' className={`btn text-center bg-dark text-light w-100 ${style.loginbtn}`} > 
              {
                loader? "Loading..." : "Send Code"
              }
              </button>
              </div>
            </div>

          </form>
        </div>
      </div>
    </section>
  )
}

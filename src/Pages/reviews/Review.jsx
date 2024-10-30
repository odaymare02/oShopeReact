import axios from 'axios';
import { useFormik } from 'formik'
import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import * as yup from "yup"
import Loader from '../../Components/User/Loader/Loader';
import { Bounce, toast } from 'react-toastify';
export default function Review() {
  const {prodId}=useParams();
  const [loader,setLoader]=useState(false);
  const schema = yup.object().shape({
    comment: yup.string().required('Review is required'),
    rating: yup.number().required('Rating is required').min(1).max(5),
  })
  const formik=useFormik({
    initialValues: {
      comment: '',
      rating: '',
    },
    onSubmit: async() => {
      setLoader(true);
      try{
        const {data}=await axios.post(`https://ecommerce-node4.onrender.com/products/${prodId}/review`,formik.values,{
          headers: {
            'Authorization': 'Tariq__'+localStorage.getItem('token')
          }
        });
        console.log(data)
        if(data.message=="success"){
          toast.success("Your review is submitted successfully", {
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
          setLoader(false);
        }
      }catch(e){
        toast.error("Failed to submit review", {
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
        setLoader(false);
      }finally{
        setLoader(false)
      }

    },validationSchema:schema
  })
  if(loader) return <Loader/>
  return (
    <section>
        <div className="title">
            Review
        </div>
        <form onSubmit={formik.handleSubmit} className='shadow rounded-2 p-3' >
          <div className='reviews' >
          <div className=" commnet mb-3">
            <label htmlFor="comment"  >Review</label>
            <textarea className="form-control" id="comment" rows="3" name='comment' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.comment} ></textarea>
            {
              formik.touched.comment && formik.errors.comment && <div className="text-danger">{formik.errors.comment}</div>
            }
          </div>
          <div className="rating mb-3">
          <label htmlFor="rating">rating</label>
          <input className="form-control" id="rating" type='number' name='rating' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.rating} />  
          {
            formik.touched.rating&&formik.touched.comment&&(
              <div className="text-danger">{formik.errors.rating}</div>
            )
          }
          </div>
          </div>
          <button type="submit" className="btn btn-outline-dark ">Submit</button>
        </form>
    </section>
  )
}

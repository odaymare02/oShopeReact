import React, { useContext, useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import style from "./ProductInfo.module.css"
import './ProductInfo.module.css';
import "aos/dist/aos.css"
import Aos  from 'aos';
// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import { Link, useParams } from 'react-router-dom';
import useFetchData from '../../../customeHooks/useFetchData';
import Loader from '../../../Components/User/Loader/Loader';
import { cartContext } from '../../../Context/Cartc';

export default function ProductInfo() {
  useEffect(()=>{
    Aos.init();
  },[])
  const {addToCart,loader}=useContext(cartContext);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const {proId}=useParams();
  const {data,loading,error}=useFetchData(`https://ecommerce-node4.onrender.com/products/${proId}`);
  console.log(data)
  if (loading) return <Loader/>;
  if (error) return <div>Error: {error.message}</div>;
  return (
    <section>
      <div className="title">
        Product Info
      </div>
    <div className="row bg-light g-3 p-2" >
      <div className="col-lg-6 col-md-12"  data-aos="flip-right" data-aos-duration="1500">
        <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={thumbsSwiper ? { swiper: thumbsSwiper } : undefined} 
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        {
          <SwiperSlide className='d-flex justify-content-center align-items-center'>
          <img   className='w-50' src={data?data.product.mainImage.secure_url:""}  />
        </SwiperSlide>
}
        {
           data?.product?.subImages?.map((img) => {
            return (
              <SwiperSlide className='d-flex justify-content-center align-items-center' >
                <img   src={img.secure_url} className='w-50' />
              </SwiperSlide>
            )
          })
        }
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        {
          <SwiperSlide className='d-flex justify-content-center align-items-center' >
          <img  className='w-50' src={data?data.product.mainImage.secure_url:""} />
        </SwiperSlide>
        }
        {
           data?.product?.subImages?.map((img) => {
            return (
              <SwiperSlide className='d-flex justify-content-center align-items-center me-auto' >
                <img  className='w-50'  src={img.secure_url} />
              </SwiperSlide>
            )
          })
        }
      
      </Swiper>
      </div>
      <div className="col-lg-6 col-md-12 p-3 rounded-2 position-relative"data-aos="flip-left" data-aos-duration="1700" >
        <h1>{data?data.product.name:"Product Name"}</h1>
        <p>{data?data.product.description.split(' ').slice(0,50).join(' '):"Product Description"}</p>
        {
        <div className='d-felx justify-centent-center align-items-center mb-3'>
        Price: ${data?
        data.product.discount===0?
        data.product.price:
        <>
          <span className='me-3'>
            {(data.product.price - (data.product.price * data.product.discount) / 100).toFixed(2)}
            </span>
          <span className='text-secondary text-decoration-line-through'>
            $
            {(data.product.price)}
            </span>
            <span className={`${style.discount}`}>
            {data.product.discount>0?
            ` - ${data.product.discount}% off`
            :""}
            </span>

        </>
         :"0"}</div>
            }
            <div className='d-flex gap-2' >
        <button onClick={()=>addToCart(proId)} className={`btn btn-outline-dark ${loader?"disabled":""} `}>
          {
            loader? <span>Loading...</span> :
            <span>Add to Cart</span>
          }
          </button>
          <button className='btn btn-outline-dark'> <Link className='text-decoration-none' to={`/review/${proId}`} >
          Add Review 
          </Link></button>
            </div>
      </div>
    </div>
    
    </section>
  );
}

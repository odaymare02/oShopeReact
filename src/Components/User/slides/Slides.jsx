import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import aloimg from "./slid.jpg"; // Imported image
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import styles from "./s.module.css"; // Import CSS module
// Import required modules
import { Parallax, Pagination, Navigation,Autoplay } from 'swiper/modules';
import MyButton from '../../../reusableComponents/Button/MyButton';
import { Link } from 'react-router-dom';

export default function Slides() {
  return (
    <div className='mt-5'>
      <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
        speed={600}
        autoplay={{
          delay: 1500, // Delay between slides in milliseconds
          disableOnInteraction: false, // Allow interaction with the slider
        }}
        parallax={true}
        pagination={{ clickable: true }}
        modules={[Parallax, Pagination, Navigation,Autoplay]}
        className={styles.swiper}
      >
        <div
          slot="container-start"
          className={styles.parallaxBg} // Use CSS module
          style={{
            backgroundImage: ` linear-gradient(rgb(0, 0, 0,0.5), rgb(0, 0, 0)), url(${aloimg}) `, // Correct usage
          }}
          data-swiper-parallax="-23%"
        ></div>

        <SwiperSlide className={styles.swiperSlide}>
          <div className={`${styles.info} mw-50 `}>
          <div className={styles.title} data-swiper-parallax="-300">
            welcom to Oshope
          </div>
          <div className={styles.subtitle} data-swiper-parallax="-200">
            best offer you need
          </div>
          <div className={styles.text} data-swiper-parallax="-100">
            <button className='btn btn-outline-dark'>
             <Link to={"/AllProd"} className='text-decoration-none text-light ' > shope now </Link> 
            </button>
          </div>
          </div>
         
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <div className={`${styles.info} mw-50 `}>
          <div className={styles.title} data-swiper-parallax="-300">
            welcom to Oshope
          </div>
          <div className={styles.subtitle} data-swiper-parallax="-200">
            best offer you need
          </div>
          <button className='btn btn-outline-dark'>
             <Link to={"/AllProd"} className='text-decoration-none text-light ' > shope now </Link> 
            </button>
          </div>
         
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <div className={`${styles.info} mw-50 `}>
          <div className={styles.title} data-swiper-parallax="-300">
            welcom to Oshope
          </div>
          <div className={styles.subtitle} data-swiper-parallax="-200">
            best offer you need
          </div>
           <button className='btn btn-outline-dark'>
             <Link to={"/AllProd"} className='text-decoration-none text-light ' > shope now </Link> 
            </button>
          </div>
         
        </SwiperSlide>
       

        {/* Add additional slides here */}
        
      </Swiper>
    </div>
  );
}

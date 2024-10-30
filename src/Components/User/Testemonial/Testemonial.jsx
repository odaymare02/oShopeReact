import React, { useEffect } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import imgg from "./tes.jpg"
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// Import required modules
import { Mousewheel, Pagination } from 'swiper/modules';
import "aos/dist/aos.css"
import Aos  from 'aos';
// Import CSS module
import styles from './Testemonial.module.css';
export default function Testemonial() {
    useEffect(()=>{
        Aos.init();
    },[])
  return (
    <section className='tetemonial'>
        <div className="title" data-aos="fade-right" data-aos-duration="1500" >
        This Is What Our Customers Say
        </div>
      <Swiper
        direction={'vertical'}
        slidesPerView={1}
        spaceBetween={30}
        mousewheel={true}
        pagination={{
          clickable: true,
        }}
        modules={[Mousewheel, Pagination]}
        className={`${styles.swiper}`}
      >
        <SwiperSlide className={styles.swiperSlide}>
            <img src={imgg} className={`w-25 h-50`} data-aos="fade-down" data-aos-duration="2000" />
            <div className="info d-flex flex-column gap-2" data-aos="fade-up" data-aos-duration="2000">
            <p className={"w-50 align-self-center"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <div className="rating">
            <svg xmlns="http://www.w3.org/2000/svg" width="95" height="19" viewBox="0 0 95 19" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M11.6646 7.12771L9.5 0L7.33536 7.12771H0L5.93479 11.742L3.73214 19L9.5 14.5146L15.2679 19L13.0652 11.742L19 7.12771H11.6646Z" fill="#FCA120"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M30.6646 7.12771L28.5 0L26.3354 7.12771H19L24.9348 11.742L22.7321 19L28.5 14.5146L34.2679 19L32.0652 11.742L38 7.12771H30.6646Z" fill="#FCA120"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M49.6646 7.12771L47.5 0L45.3354 7.12771H38L43.9348 11.742L41.7321 19L47.5 14.5146L53.2679 19L51.0652 11.742L57 7.12771H49.6646Z" fill="#FCA120"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M68.6646 7.12771L66.5 0L64.3354 7.12771H57L62.9348 11.742L60.7321 19L66.5 14.5146L72.2679 19L70.0652 11.742L76 7.12771H68.6646Z" fill="#FCA120"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M87.6646 7.12771L85.5 0L83.3354 7.12771H76L81.9348 11.742L79.7321 19L85.5 14.5146L91.2679 19L89.0652 11.742L95 7.12771H87.6646Z" fill="#FCA120"/>
</svg>
            </div>
            <p className={styles.customName} > custome name</p>
            </div>
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
            <img src={imgg} className={`w-25 h-50`} />
            <div className="info d-flex flex-column gap-2">
            <p className={"w-50 align-self-center"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <div className="rating">
            <svg xmlns="http://www.w3.org/2000/svg" width="95" height="19" viewBox="0 0 95 19" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M11.6646 7.12771L9.5 0L7.33536 7.12771H0L5.93479 11.742L3.73214 19L9.5 14.5146L15.2679 19L13.0652 11.742L19 7.12771H11.6646Z" fill="#FCA120"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M30.6646 7.12771L28.5 0L26.3354 7.12771H19L24.9348 11.742L22.7321 19L28.5 14.5146L34.2679 19L32.0652 11.742L38 7.12771H30.6646Z" fill="#FCA120"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M49.6646 7.12771L47.5 0L45.3354 7.12771H38L43.9348 11.742L41.7321 19L47.5 14.5146L53.2679 19L51.0652 11.742L57 7.12771H49.6646Z" fill="#FCA120"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M68.6646 7.12771L66.5 0L64.3354 7.12771H57L62.9348 11.742L60.7321 19L66.5 14.5146L72.2679 19L70.0652 11.742L76 7.12771H68.6646Z" fill="#FCA120"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M87.6646 7.12771L85.5 0L83.3354 7.12771H76L81.9348 11.742L79.7321 19L85.5 14.5146L91.2679 19L89.0652 11.742L95 7.12771H87.6646Z" fill="#FCA120"/>
</svg>
            </div>
            <p className={styles.customName} > custome name</p>
            </div>
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
            <img src={imgg} className={`w-25 h-50`} />
            <div className="info d-flex flex-column gap-2">
            <p className={"w-50 align-self-center"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <div className="rating">
            <svg xmlns="http://www.w3.org/2000/svg" width="95" height="19" viewBox="0 0 95 19" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M11.6646 7.12771L9.5 0L7.33536 7.12771H0L5.93479 11.742L3.73214 19L9.5 14.5146L15.2679 19L13.0652 11.742L19 7.12771H11.6646Z" fill="#FCA120"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M30.6646 7.12771L28.5 0L26.3354 7.12771H19L24.9348 11.742L22.7321 19L28.5 14.5146L34.2679 19L32.0652 11.742L38 7.12771H30.6646Z" fill="#FCA120"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M49.6646 7.12771L47.5 0L45.3354 7.12771H38L43.9348 11.742L41.7321 19L47.5 14.5146L53.2679 19L51.0652 11.742L57 7.12771H49.6646Z" fill="#FCA120"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M68.6646 7.12771L66.5 0L64.3354 7.12771H57L62.9348 11.742L60.7321 19L66.5 14.5146L72.2679 19L70.0652 11.742L76 7.12771H68.6646Z" fill="#FCA120"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M87.6646 7.12771L85.5 0L83.3354 7.12771H76L81.9348 11.742L79.7321 19L85.5 14.5146L91.2679 19L89.0652 11.742L95 7.12771H87.6646Z" fill="#FCA120"/>
</svg>
            </div>
            <p className={styles.customName} > custome name</p>
            </div>
        </SwiperSlide>
       
        {/* Add more slides as needed */}
      </Swiper>
    </section>
  );
}

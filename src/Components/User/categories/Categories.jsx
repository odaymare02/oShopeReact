import React from "react";
import useFetchData from "../../../customeHooks/useFetchData";
import style from "./Categories.module.css";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Link } from "react-router-dom";
import Loader from "../Loader/Loader";

export default function Categories() {
  const { data, error, loading } = useFetchData(
    "https://ecommerce-node4.onrender.com/categories/active"
  );
  if (loading) return <Loader />;
  if (error)
    return <div className="alert alert-danger text-center">Error: {error}</div>;
  return (
    <div className="categories mt-5 ">
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={3}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {data?.categories?.map((category) => (
          <SwiperSlide key={category._id}>
            <Link to={`/categoryDetails/${category._id}`}>
              <img
                className={`${style.imgg} ${style.imgCat}`}
                src={category.image.secure_url}
              />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

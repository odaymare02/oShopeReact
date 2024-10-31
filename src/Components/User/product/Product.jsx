import React, { useContext, useEffect, useState } from "react";
import style from "./Product.module.css"; // Ensure correct import path
import "aos/dist/aos.css";
import Aos from "aos";
import imgg from "./alo.jpg";
import { Link } from "react-router-dom";
import useFetchData from "../../../customeHooks/useFetchData";
import axios from "axios";
import { cartContext } from "../../../Context/Cartc";
import Loader from "../Loader/Loader";
export default function Product({ name, price, description, img, id }) {
  const { addToCart, loader } = useContext(cartContext);
  const [hover, sethover] = useState(false);
  const { data, loading } = useFetchData(
    `https://ecommerce-node4.onrender.com/products/${id}`
  );
  const hoverImage =
    data &&
    data.product &&
    data.product.subImages &&
    data.product.subImages.length > 0
      ? data.product.subImages[0].secure_url
      : "";
  return (
    <div
      className="product"
      key={id}
      data-aos="fade-right"
      data-aos-duration="1500"
      onMouseEnter={() => sethover(true)}
      onMouseLeave={() => sethover(false)}
    >
      {loader ? <Loader /> : ""}
      <div
        className={`${style.productBox} p-2 rounded shadow h-100 position-relative ${style.fadedown}`}
      >
        {
          <div className={`${style.img} w-75 shadow-sm m-auto rounded-2 p-2`}>
            <img src={hover ? hoverImage : img} alt="" />
          </div>
        }
        <div
          className={`${style.imgInfo} d-flex justify-content-center align-items-center gap-1 flex-column`}
        >
          <h5 className="mt-2">{name.split(" ").slice(0, 2).join(" ")}</h5>
          <p className="text-secondary">
            {description.substring(0, 80)}
            ...
          </p>
          {data?.product?.discount > 0 ? (
            <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              %{data?.product?.discount}-
            </span>
          ) : (
            ""
          )}
          <div className="price align-self-start">
            {data?.product?.discount > 0 ? (
              <>
                <span className="me-3">
                  ${price - (price * data?.product?.discount) / 100}
                </span>
                <span className="text-muted text-decoration-line-through">
                  ${price}
                </span>
              </>
            ) : (
              <span className="">${price}</span>
            )}
          </div>
        </div>
        <div
          className={`${style.icons} d-flex justify-content-center flex-column gap-3 p-1`}
        >
          <i
            className={`fa-regular fa-heart ${style.faregular} ${style.faheart}  ${style.fadedown}`}
          ></i>
          <i
            onClick={() => addToCart(id)}
            className={`fa-solid fa-cart-plus ${style.fasolid} ${style.facartplus}  ${style.fadedown}`}
          ></i>
          <Link
            to={`/product/${id}`}
            className={`fa-solid fa-circle-info text-decoration-none ${style.fasolid} ${style.facircleinfo}  ${style.fadedown}`}
          ></Link>
        </div>
      </div>
    </div>
  );
}

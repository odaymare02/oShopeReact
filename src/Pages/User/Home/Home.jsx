import React from "react";
import Categories from "../../../Components/User/categories/Categories";
import Slides from "../../../Components/User/slides/Slides";
import Testimonials from "../../../Components/User/Testemonial/Testemonial";
import Product from "../../../Components/User/product/Product";
import Products from "../../../Components/User/Products/Products";
import Service from "../../../Components/User/service/Service";

export default function Home() {
  return (
    <>
      <Slides />
      <Categories />
      <Products />
      <Service />
      <Testimonials />
    </>
  );
}

import React, { useEffect, useState } from "react";
import Product from "../../../Components/User/product/Product";
import Products from "../../../Components/User/Products/Products";
import useFetchData from "../../../customeHooks/useFetchData";
import Loader from "../../../Components/User/Loader/Loader";
import sytle from "./Allprod.module.css";
import axios from "axios";
export default function AllProd() {
  const { data, error, loading } = useFetchData(
    `https://ecommerce-node4.onrender.com/products?page=1&limit=10`
  );
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [sort, setSort] = useState("");
  const [search, setSearch] = useState("");
  const [displayData, setDisplay] = useState([]);
  const [loader, setLoader] = useState(false);
  useEffect(() => {
    if (data) {
      setDisplay(data);
    }
  }, [data]);

  const resetInputs = () => {
    setMinPrice("");
    setMaxPrice("");
    setSort("");
    setSearch("");
    setDisplay(data);
  };
  const handleFilter = async (e) => {
    let url = `https://ecommerce-node4.onrender.com/products?page=1&limit=10`;
    if (maxPrice) {
      url += `&price[lte]=${maxPrice}`;
    }
    if (minPrice) {
      url += `&price[gte]=${minPrice}`;
    }
    if (sort) {
      url += `&sort=${sort}`;
    }
    if (search) {
      url += `&search=${search}`;
    }
    setLoader(true);
    try {
      const { data } = await axios.get(url);
      console.log(data);
      setDisplay(data);
    } catch (e) {
      alert(e.message);
    } finally {
      setLoader(false);
    }
  };

  if (loading || loader) return <Loader />;
  if (error)
    return <div className="alert alert-danger text-ceneter">{error}</div>;
  console.log(displayData);
  return (
    <section>
      <div className="title mt-5">All Products</div>
      <div className={`row g-5 mt-4 bg-light p-2 rounded-4 position-relative `}>
        <div className="co-12 text-center">
          <button className="btn btn-outline-dark" onClick={resetInputs}>
            reset
          </button>
        </div>
        <div className="col-lg-4 col-md-6 col-s-12">
          <div className="sorted d-flex flex-column justify-content-center align-items-center ">
            <div className="dropdown">
              <button
                className="btn btn-outline-secondary dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                SortedBy
              </button>
              <ul className="dropdown-menu">
                <li>
                  <button
                    onClick={handleFilter}
                    onFocus={(e) => setSort(e.target.value)}
                    className="dropdown-item"
                    value={"price"}
                    type="button"
                  >
                    price
                  </button>
                </li>
                <li>
                  <button
                    onClick={handleFilter}
                    onFocus={(e) => setSort(e.target.value)}
                    className="dropdown-item"
                    value={"-price"}
                    type="button"
                  >
                    -price
                  </button>
                </li>
                <li>
                  <button
                    onClick={handleFilter}
                    onFocus={(e) => setSort(e.target.value)}
                    className="dropdown-item"
                    value={"name"}
                    type="button"
                  >
                    name
                  </button>
                </li>
                <li>
                  <button
                    onClick={handleFilter}
                    onFocus={(e) => setSort(e.target.value)}
                    className="dropdown-item"
                    value={"-name"}
                    type="button"
                  >
                    -name
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-s-12 ">
          <div className="minMax d-flex justify-content-between align-items-center gap-2 form-floating">
            <div className="form-floating">
              <input
                className="form-control"
                type="text"
                placeholder="min price"
                id="min"
                onChange={(e) => setMinPrice(e.target.value)}
              />
              <label htmlFor="min">from</label>
            </div>
            <div className="form-floating">
              <input
                className="form-control"
                type="text"
                placeholder="max price"
                id="max"
                onChange={(e) => setMaxPrice(e.target.value)}
              />
              <label htmlFor="max">to</label>
            </div>
            <button className="btn btn-outline-dark" onClick={handleFilter}>
              Filter
            </button>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-s-12">
          <div className="serach d-flex justify-content-center align-items-center gap-2">
            <div className="form-floating  ">
              <input
                className="form-control"
                type="text"
                placeholder="Price"
                onChange={(e) => setSearch(e.target.value)}
                value={search}
                id="floatingInput"
              />
              <label htmlFor="floatingInput">search any product</label>
            </div>
            <button className="btn btn-outline-dark" onClick={handleFilter}>
              search
            </button>
          </div>
        </div>
      </div>
      <div className={`row mt-5 gy-4`}>
        {displayData && displayData.products
          ? displayData.products.map((product) => (
              <div className="col-lg-3 col-md-4 col-sm-6 order-1">
                <Product
                  name={product.name}
                  description={product.description}
                  price={product.price}
                  img={product.mainImage.secure_url}
                  id={product._id}
                />
              </div>
            ))
          : ""}
      </div>
      <div className="row mt-5">
        <div className="col-12"></div>
      </div>
    </section>
  );
}

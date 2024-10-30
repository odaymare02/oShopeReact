import React from 'react';
import useFetchData from '../../../customeHooks/useFetchData';
import Product from '../product/Product';
import Loader from '../Loader/Loader';

export default function Products() {
  const { data, error, loading } = useFetchData(`https://ecommerce-node4.onrender.com/products?page=1&limit=6`);
  if (loading) return<Loader/>;
  if (error) return <div className='alert alert-danger text-center' >Error: {error}</div>;
  return (
    <section>
        <div className="title">
            our products
        </div>
        <div className="row mt-5 gy-4 ">
      {data && data.products ? (
          data.products.map((product) => (
            <div className="col-lg-3 col-md-4 col-sm-6">
         <Product name={product.name} description={product.description} price={product.price} img={product.mainImage.secure_url} id={product._id}  />
        </div>
        ))
      ):"" }
        </div>
    </section>
  );
}

import React from 'react';
import useFetchData from '../../../customeHooks/useFetchData';
import { useParams } from 'react-router-dom';
import Loader from '../../../Components/User/Loader/Loader';
import Product from '../../../Components/User/product/Product';

export default function CategoryDetails() {
  const { catId } = useParams();
  const { data, error, loading } = useFetchData(`https://ecommerce-node4.onrender.com/products/category/${catId}`);

  if (loading) return <Loader />;
  if (error) return <h1>Error: {error}</h1>;
  
  return (
    <section>
      <div className="title">
        Category Details
      </div>
      <div className="row">
        {data && data.products && data.products.length > 0 ? (
          data.products.map(product => (
            <div key={product._id} className="col-lg-3 col-md-4 col-sm-6 mb-4">
              <Product
                name={product.name}
                description={product.description}
                price={product.price}
                img={product.mainImage.secure_url}
                id={product._id}
              />
            </div>
          ))
        ) : (
          <div className="d-flex justify-content-center align-items-center alert alert-danger">
            Doesn't have any product to show
          </div>
        )}
      </div>
    </section>
  );
}

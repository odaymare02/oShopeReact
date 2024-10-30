import React, { useContext, useEffect, useState } from 'react'
import { cartContext } from '../../Context/Cartc';
import Loader from '../../Components/User/Loader/Loader';
import img from "./emptyCart.png"
import { Link } from 'react-router-dom';
import "aos/dist/aos.css"
import Aos  from 'aos';
export default function Order() {
  useEffect(()=>{
    Aos.init();
  },[])
    const {cartItems,increase,decrease,removeFromCart,loader,totalPrice,clearCart,totalQuantity,loaderD,loaderI}=useContext(cartContext);
    const[shiping,setShiping]=useState(15);

     if(loader) return <Loader/>
  return (
    <section>
        <div className="title">
            order Page
        </div>
                {
                    totalQuantity>0?
        <div className="row">
            <div className="col-lg-6" data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine" >
                    <table className="table">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">product</th>
                        <th scope="col">discount</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">price</th>
                        <th scope="col">subtotal</th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                          cartItems.map((item,index)=>(
                              <tr key={index}>
                                  <th scope="row">{index+1}</th>
                                  <td>
                                      <div className='d-flex justify-content-center align-items-center gap-2'>
                                          <div className="img d-flex flex-column">
                                              <img className='w-50 object-fit-contain' src={item.details.mainImage.secure_url} alt={item.details.name} />
                                          <button onClick={()=>removeFromCart(item.productId)} className="btn btn-outline-danger align-self-start">remove</button>
                                          </div>
                                          <p className="text-secondary">{item.details.name.substring(0,30)}</p>
                                      </div>
                  
                                      {/* {item.details.name} */}
                                      </td>
                                      <td className='text-center align-middle' >
                                        {item.details.discount>0?
                                       <span className='text-muted'>%{item.details.discount}</span>
                                        :
                                        ""
}
                                      </td>
                                  <td className='text-center  align-middle' >
                                      <div className='d-flex justify-content-start align-items-center gap-2 border rounded-2' >
                                          <button className={`btn border-end ${item.quantity==1?"disabled border-0 bg-light":""} `} onClick={()=>decrease(item.productId)}>{loaderD?"loading...":"-"}</button>
                                      {item.quantity}
                                          <button onClick={()=>increase(item.productId)} className='btn border-start'>{loaderI?"loading...":"+"}</button>
                                      </div>
                                      </td>
                                  <td className=' align-middle'> {item.details.price-((item.details.price*item.details.discount)/100)}</td>
                                  <td className=' align-middle'>{item.quantity *(item.details.price -((item.details.price*item.details.discount)/100))}</td>
                              </tr>
                          ))
                      }
                    </tbody>
                  </table>
     
            </div>
            <div className="col-lg-6" data-aos="fade-left"
     data-aos-anchor="#example-anchor"
     data-aos-offset="500"
     data-aos-duration="1000" >
                <div className="summary text-center shadow p-3 rounded-2 bg-light ">
                    <h2 className='text-center'>Cart Summary</h2>
                    <button className='btn btn-outline-dark' onClick={clearCart}>clear cart</button>
                    <div className="total">
     <ul className="list-group list-group-flush">
  <li className="list-group-item">

                        <h3>Subtotal: {totalPrice}</h3>
  </li>
  <li className="list-group-item">
                        <h3>Shipping: ${shiping}</h3>
  </li>
</ul>

                        <hr/>
                        <h2>Total: {totalPrice+shiping}</h2>
                       <Link to={"/check"}>
                        <button  className="btn btn-primary">Checkout</button>
                       </Link>
                    </div>                
                </div>
                {/* <h2>Total: {totalPrice}</h2>
                <button className="btn btn-primary">Checkout</button>
                <button className="btn btn-secondary">Continue Shopping</button>
                    </div>                 */}
                </div>
        </div>
                  :
                  <div className='text-center'>
                    <img className='w-50' src={img} alt="empty cart"/>
                  </div>
                }

    </section>
  )
}

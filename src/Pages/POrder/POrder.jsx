import React, { useEffect, useState } from 'react'
import Loader from '../../Components/User/Loader/Loader';
import { Bounce, toast } from 'react-toastify';
import axios from 'axios';

export default function POrder() {
    const [loader,setLoader]=useState(false);
    const [orders,setOrders] = useState([]);
    const getOrders=async ()=>{
        setLoader(true);
        try{
            const {data}=await axios.get("https://ecommerce-node4.onrender.com/order",{
                headers:{
                    Authorization: 'Tariq__'+localStorage.getItem('token')
                }
            })
            setOrders(data.orders);
        }catch(e){
            toast.error(e.response.data.message, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
                });
        }finally{
            setLoader(false);
        }
       }
       useEffect(()=>{
        getOrders();
       },[])
       console.log(orders)
       if(loader){
        return <Loader />
       }
  return (
    <section className='p-4'>
    {/* <div className="title">
       <span className='fs-5'>Welcome {decode.userName}!
          </span> 
    </div> */}
     <h2>Your orders</h2>
     {
        orders.length===0?<h2 className='alert alert-danger' >no orders to display</h2>:
        <table className="table">
<thead>
  <tr>
    <th scope="col">#</th>
    <th scope="col">name</th>
    <th scope="col">final price</th>
    <th scope="col">status</th>
  </tr>
</thead>
<tbody>
   {
      orders.map((order,index)=>(
          <tr key={index}>
              <th scope="row" className='align-middle' >{index+1}</th>
              <td className='d-flex jsutify-content-center aligin-items-center flex-wrap' >
                  {
                      order.products.map((product,index)=>(
                          <div className='' key={index}>
                            {product.productId.name.substring(0,15)}
                          <img src={product.productId.mainImage.secure_url}  className=' w-50' alt="" />
                          </div>
                      ))
                  }
               </td>
              <td className='align-middle' >{order.finalPrice}</td>
              <td className={`align-middle ${order.status=="deliverd"?"text-success":"text-danger"} `} >{order.status}</td>
          </tr>
      ))
   }
</tbody>
</table>
     }

  </section>
  )
}

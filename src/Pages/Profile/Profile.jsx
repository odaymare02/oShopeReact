import React, { useContext, useEffect, useState } from 'react'
import { cartContext } from '../../Context/Cartc'
import axios from 'axios';
import useFetchData from '../../customeHooks/useFetchData';
import Loader from '../../Components/User/Loader/Loader';
import { jwtDecode } from 'jwt-decode';
import { Bounce, toast } from 'react-toastify';
import "./Profile.module.css"
import "aos/dist/aos.css"
import Aos  from 'aos';
export default function Profile() {
    const [loader,setLoader]=useState(false);
    const [orders,setOrders] = useState([]);
    const token=localStorage.getItem('token');
    const decode=jwtDecode(token);

  return (
//     <section className=' bg-dark bg-gradient p-4'>
//       <div className="title">
//          <span className='fs-5'>Welcome {decode.userName}!
//             </span> 
//       </div>
//        <h2>Your orders</h2>
//    <table className="table  table-striped">
//   <thead>
//     <tr>
//       <th scope="col">#</th>
//       <th scope="col">name</th>
//       <th scope="col">final price</th>
//       <th scope="col">status</th>
//     </tr>
//   </thead>
//   <tbody>
//      {
//         orders.map((order,index)=>(
//             <tr key={index}>
//                 <th scope="row">{index+1}</th>
//                 <td>
//                     {
//                         order.products.map((product,index)=>(
//                             <div key={index}>{product.productId.name.substring(0,15)},</div>
//                         ))
//                     }
//                  </td>
//                 <td>{order.finalPrice}</td>
//                 <td>{order.status}</td>
//             </tr>
//         ))
//      }
//   </tbody>
// </table>

//     </section>
<>
    <div className=''>
        <div className="welcome vh-100 text-center d-flex justify-content-center align-items-center" >
            <span className='fs-5 shadow-lg p-3 mb-5 bg-body-tertiary rounded'  >Welcome {decode.userName}!
            </span>
        </div>
    </div>
</>
  )
}

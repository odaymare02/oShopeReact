import axios from 'axios';
import React, { useContext, useEffect } from 'react'
import { cartContext } from '../../../Context/Cartc';

export default function Cart() {
    const {cartItems}=useContext(cartContext);
    console.log(cartItems)
  return (
    <div>
      sas
    </div>
  )
}

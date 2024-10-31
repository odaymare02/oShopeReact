import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import "./Profile.module.css";
import "aos/dist/aos.css";
import Aos from "aos";
export default function Profile() {
  const [loader, setLoader] = useState(false);
  const [orders, setOrders] = useState([]);
  const token = localStorage.getItem("token");
  const decode = jwtDecode(token);

  return (
    <>
      <div className="">
        <div className="welcome vh-100 text-center d-flex justify-content-center align-items-center">
          <span className="fs-5 shadow-lg p-3 mb-5 bg-body-tertiary rounded">
            Welcome {decode.userName}!
          </span>
        </div>
      </div>
    </>
  );
}

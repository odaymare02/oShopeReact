import { jwtDecode } from "jwt-decode";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import style from "./PNavbar.module.css";
export default function PNavBar() {
  const [isScroled, setScrolled] = useState(false);
  const token = localStorage.getItem("token");
  const decode = jwtDecode(token);
  const handlescroll = () => {
    if (window.scrollY > 30) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };
  window.addEventListener("scroll", handlescroll);
  return (
    <nav
      className={`navbar container navbar-expand-lg  fixed-top shadow p-2 rounded mt-4 ${
        isScroled ? style.scroll : "bg-light"
      } `}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to={""}>
          {decode.userName.length > 15
            ? `${decode.userName.slice(0, 15)}...`
            : decode.userName}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className="nav-link active"
                aria-current="page"
                to={"/home"}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/profile/order"}>
                Orders
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/profile/contact"}>
                Contact-us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

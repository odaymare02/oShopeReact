import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="my-5">
      <div className="row mt-5">
        <div className="col-12 text-center">
          <p>
            Copyright © 2024 All rights reserved | This ecommerce is made with{" "}
            <i className="fa-solid fa-heart text-danger" /> by oday_mare
          </p>
        </div>
        <div className="col-12 text-center d-flex justify-content-center align-items-center gap-3">
          <a
            className="text-decoration-none text-dark"
            href="https://www.facebook.com/profile.php?id=100013808106839"
            target="_blank"
          >
            <svg
              width={"20px"}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z" />
            </svg>
          </a>
          <a
            className="text-decoration-none text-dark"
            href="https://www.facebook.com/profile.php?id=100013808106839"
            target="_blank"
          >
            <svg
              width={"20px"}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z" />
            </svg>
          </a>
          <a
            className="text-decoration-none text-dark"
            href="https://www.facebook.com/profile.php?id=100013808106839"
            target="_blank"
          >
            <svg
              width={"20px"}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}

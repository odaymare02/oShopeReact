import React, { useEffect, useState } from "react";
import img from "./register.png";
import { Link, useActionData } from "react-router-dom";
import { useFormik } from "formik";
import style from "./Register.module.css";
import axios from "axios";
import * as yup from "yup";
import "aos/dist/aos.css";
import Aos from "aos";
export default function Register() {
  useEffect(() => {
    Aos.init();
  }, []);
  const [loader, setloader] = useState(false);
  const [error, setError] = useState(null);
  const shcema = yup.object({
    userName: yup.string().required("Name is required"),
    email: yup.string().email("Invalid email").required("Email is required"),
    password: yup
      .string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters long"),
  });
  const formik = useFormik({
    initialValues: {
      userName: "",
      email: "",
      password: "",
    },
    onSubmit: async () => {
      setloader(true);
      try {
        const { data } = await axios.post(
          "https://ecommerce-node4.onrender.com/auth/signup",
          formik.values
        );
        if (data.message == "success") {
          setError(null);
          formik.resetForm();
          window.location.href = "/login";
        }
      } catch (e) {
        setError(e.response.data.message);
      } finally {
        setloader(false);
      }
    },
    validationSchema: shcema,
  });
  return (
    <section className="register">
      <div
        className="title text-center"
        data-aos="fade-right"
        data-aos-duration="1500"
      >
        Register page
      </div>
      <div className="row d-flex justify-content-center align-items-center vh-100">
        <div className="col-md-4" data-aos="fade-left" data-aos-duration="2000">
          <img src={img} className="" alt="" />
        </div>
        <div
          className="col-md-8 d-flex justify-content-center align-items-center"
          data-aos="fade-up"
          data-aos-duration="2500"
        >
          <form className="w-50" onSubmit={formik.handleSubmit}>
            <div className={`${style.loginTitle} mb-5 text-center`}>Oshope</div>
            <div>
              <div className="form-floating mb-3">
                <input
                  type="name"
                  className={`form-control ${style.no_border}`}
                  id="floatingInput"
                  placeholder="name@example.com"
                  name="userName"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                <label htmlFor="floatingInput">enter name</label>
                {formik.touched.name && formik.errors.name && (
                  <div className="text-danger">{formik.errors.name}</div>
                )}
              </div>
              <div className="form-floating mb-3">
                <input
                  type="email"
                  className={`form-control ${style.no_border}`}
                  id="floatingInput"
                  placeholder="name@example.com"
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                <label htmlFor="floatingInput">Email address</label>
                {formik.touched.email && formik.errors.email && (
                  <div className="text-danger">{formik.errors.email}</div>
                )}
              </div>
              <div className="form-floating mb-5">
                <input
                  type="password"
                  className={`form-control ${style.no_border}  `}
                  id="floatingPassword"
                  placeholder="Password"
                  name="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                <label htmlFor="floatingPassword">Password</label>
                {formik.errors.password && formik.touched.password ? (
                  <div className="text-danger">{formik.errors.password}</div>
                ) : (
                  ""
                )}
              </div>
              <div className="buttons d-flex flex-column gap-3">
                <button
                  className={`btn text-center bg-dark text-light w-100 ${style.loginbtn}`}
                  type="submit"
                >
                  {loader ? "Loading..." : "Creat Account"}
                </button>
                <span>
                  <span>
                    Already have an account?
                    <Link className={`${style.LinkDec}`} to={"/login"}>
                      {" "}
                      Login
                    </Link>
                  </span>
                </span>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

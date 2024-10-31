import React, { useContext, useEffect, useState } from "react";
import img from "./login.png";
import style from "./Login.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { Bounce, toast } from "react-toastify";
import { UserContext } from "../../../Context/User";
import "aos/dist/aos.css";
import Aos from "aos";
export default function Login() {
  useEffect(() => {
    Aos.init();
  }, []);
  const [loader, setloader] = useState(false);
  const [error, setError] = useState(null);
  const { isLogin, setLogin, UserData, setUserData } = useContext(UserContext);
  const navigate = useNavigate();
  const schema = yup.object({
    email: yup.string().email().required("Required"),
    password: yup.string().required("Required").min(3),
  });
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async () => {
      setloader(true);
      try {
        const { data } = await axios.post(
          "https://ecommerce-node4.onrender.com/auth/signin",
          formik.values
        );
        console.log(data);
        if (data.message == "success") {
          localStorage.setItem("token", data.token);
          const decode = jwtDecode(data.token);
          setUserData(decode);
          console.log(decode);
          formik.resetForm();
          toast.success("Your login is success", {
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
          setLogin(true);
          navigate("/home");
        }
      } catch (e) {
        console.log(e);
        toast.error(e.message, {
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
        setError(e.message);
      } finally {
        setloader(false);
      }
    },
    validationSchema: schema,
  });
  return (
    <section className="login">
      <div
        className="title text-center mb-5"
        data-aos="fade-right"
        data-aos-duration="1500"
      >
        Login Page
      </div>
      <div className="row d-flex justify-content-center align-items-center">
        <div className="col-md-6" data-aos="fade-up" data-aos-duration="2000">
          <img src={img} className="" alt="" />
        </div>
        <div
          className="col-md-6 d-flex justify-content-center align-items-center"
          data-aos="fade-down"
          data-aos-duration="2500"
        >
          <form className="w-100" onSubmit={formik.handleSubmit}>
            <div className={`${style.loginTitle} mb-5 text-center`}>Oshope</div>
            <div>
              <div className="form-floating mb-3">
                <input
                  type="email"
                  className={`form-control ${style["no_border"]} `}
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
                  className={`form-control ${style.no_border} `}
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
                  type="submit"
                  className={`btn text-center bg-dark text-light w-100 ${style.loginbtn}`}
                >
                  {loader ? "Loading..." : "Login"}
                </button>
                <button className="btn text-center btn-outline-info w-100">
                  <Link className={`${style.LinkDec}`} to={"/register"}>
                    {" "}
                    Register Now
                  </Link>
                </button>
                <Link
                  className={`align-self-end ${style.forgetPass}`}
                  to={"/sendcode"}
                >
                  Forget Password ?
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/User/Home/Home";
import Root from "../../Root";
import Login from "../Pages/User/Login/Login";
import Register from "../Pages/User/Register/Register";
import CategoryDetails from "../Pages/User/CategoryDetails/CategoryDetails";
import ProductInfo from "../Pages/User/ProductInfo/ProductInfo";
import SendCode from "../Pages/User/SendCode/SendCode";
import { ProtectedRouter, PublicRouter } from "../../ProtectedRoutes";
import NewPassword from "../Pages/User/NewPassword/NewPassword";
import Cart from "../Pages/User/cart/Cart";
import Check from "../Pages/User/check/Check";
import ProfileRoote from "../../ProfileRoote";
import AllProd from "../Pages/User/allProduct/AllProd";
import Review from "../Pages/User/reviews/Review";
import Contact from "../Pages/User/Contact-us/Contact";
import POrder from "../Pages/User/POrder/POrder";
import Order from "../Pages/User/order/Order";
import Profile from "../Pages/User/Profile/Profile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: (
          <ProtectedRouter>
            <Home />
          </ProtectedRouter>
        ),
      },
      {
        path: "/home",
        element: (
          <ProtectedRouter>
            <Home />
          </ProtectedRouter>
        ),
      },
      {
        path: "/login",
        element: (
          <PublicRouter>
            <Login />
          </PublicRouter>
        ),
      },
      {
        path: "/register",
        element: (
          <PublicRouter>
            <Register />
          </PublicRouter>
        ),
      },
      {
        path: "/categoryDetails/:catId",
        element: (
          <ProtectedRouter>
            <CategoryDetails />
          </ProtectedRouter>
        ),
      },
      {
        path: "/product/:proId",
        element: (
          <ProtectedRouter>
            <ProductInfo />
          </ProtectedRouter>
        ),
      },
      {
        path: "/sendcode",
        element: (
          <PublicRouter>
            <SendCode />
          </PublicRouter>
        ),
      },
      {
        path: "/forgetPass",
        element: (
          <PublicRouter>
            <NewPassword />
          </PublicRouter>
        ),
      },
      {
        path: "/cart",
        element: (
          <ProtectedRouter>
            <Cart />
          </ProtectedRouter>
        ),
      },
      {
        path: "/orders",
        element: (
          <ProtectedRouter>
            <Order />
          </ProtectedRouter>
        ),
      },
      {
        path: "/check",
        element: (
          <ProtectedRouter>
            <Check />
          </ProtectedRouter>
        ),
      },
      {
        path: "/AllProd",
        element: (
          <ProtectedRouter>
            <AllProd />
          </ProtectedRouter>
        ),
      },
      {
        path: "/review/:prodId",
        element: (
          <ProtectedRouter>
            <Review />
          </ProtectedRouter>
        ),
      },
    ],
  },
  {
    path: "/profile",
    element: <ProfileRoote />,
    children: [
      {
        path: "/profile",
        element: (
          <ProtectedRouter>
            <Profile />
          </ProtectedRouter>
        ),
      },
      {
        path: "/profile/order",
        element: <POrder />,
      },
      {
        path: "/profile/contact",
        element: <Contact />,
      },
    ],
  },
]);
export default router;

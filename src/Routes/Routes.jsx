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
import Categories from "../Components/User/categories/Categories";
import Order from "../Pages/order/Order";
import Check from "../Pages/User/check/Check";
import Profile from "../Pages/Profile/Profile";
import AllProd from "../Pages/allProduct/AllProd";
import ProfileRoote from "../../ProfileRoote";
import POrder from "../Pages/POrder/POrder";
import Contact from "../Pages/Contact-us/Contact";
import Review from "../Pages/reviews/Review";

const router=createBrowserRouter([
    {
        path:"/",
        element:<Root/>,
        children:[
            {
                path:"/",
                element:
                <ProtectedRouter>
                    <Home/>
                </ProtectedRouter>
            },
            {
                path:"/home",
                element:
                <ProtectedRouter>
                    <Home/>
                </ProtectedRouter>
            },
            {
                path:"/login",
                element:
                <PublicRouter>
                    <Login/>
                </PublicRouter>
            },
            {
                path:"/register",
                element:
                <PublicRouter>
                    <Register/>
                </PublicRouter>
            },
            {
                path:"/categoryDetails/:catId",
                element:
                <ProtectedRouter>
                    <CategoryDetails/>
                </ProtectedRouter>
            },
            {
                path:"/product/:proId",
                element:
                <ProtectedRouter>
                    <ProductInfo/>
                </ProtectedRouter>
            },
            {
                path:"/sendcode",
                element:
                <PublicRouter>
                    <SendCode/>
                </PublicRouter>
            },
            {
                path:"/forgetPass",
                element:
                <PublicRouter>
                    <NewPassword/>
                </PublicRouter>
            },
            {
                path:"/cart",
                element:
                <ProtectedRouter>
                    <Cart/>
                </ProtectedRouter>
            },{
                path:"/orders",
                element:
                <ProtectedRouter>
                    <Order/>
                </ProtectedRouter>
            }
            ,{
                path:"/check",
                element:
                <ProtectedRouter>
                    <Check/>
                </ProtectedRouter>
            }
            ,{
                path:"/AllProd",
                element:
                <ProtectedRouter>
                    <AllProd/>
                </ProtectedRouter>
            }
            ,{
                path:"/review/:prodId",
                element:
                <ProtectedRouter>
                    <Review/>
                </ProtectedRouter>
            }
        ]
    },{
        path:"/profile",
        element:<ProfileRoote/>,
        children:[
            {
                path:"/profile",
                element:
                <ProtectedRouter>
                    <Profile/>
                </ProtectedRouter>
            },
            {
                path:"/profile/order",
                element:<POrder/>
            },{
                path:"/profile/contact",
                element:<Contact/>
            }
        ]
    }
])
export default router;
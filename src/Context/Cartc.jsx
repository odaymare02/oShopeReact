import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { Bounce, toast } from "react-toastify";
import Loader from "../Components/User/Loader/Loader";

export const cartContext = createContext();

const CartContextProvider = ({ children }) => {
    const [loader, setLoader] = useState(null);
    const [loaderD, setLoaderD] = useState(null);
    const [loaderI, setLoaderI] = useState(null);
    const [cartItems, setCartItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalQuantity, setTotalQuantity] = useState(0);
    const [cartUpdated, setCartUpdated] = useState(false);  // Track changes to cart
    const token = localStorage.getItem("token");

    const getCart = async () => {
        setLoader(true);
        try {
            const { data } = await axios.get("https://ecommerce-node4.onrender.com/cart/", {
                headers: {
                    Authorization: `Tariq__${token}`
                }
            });
            setCartItems(data.products);
            const price = data.products.reduce(
                (acc, item) =>
                    acc + (item.details.price * item.quantity * (1 - item.details.discount / 100)),
                0
            );
            setTotalPrice(price);
            const qua = data.products.reduce((acc, item) => acc + (item.quantity), 0);
            setTotalQuantity(qua);
        } catch (e) {
            toast.error(e.response?.data?.message || "Error fetching cart data", {
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
    };

    const addToCart = async (id) => {
        setLoader(true);
        try {
            const { data } = await axios.post("https://ecommerce-node4.onrender.com/cart/", {
                productId: id
            }, {
                headers: {
                    Authorization: `Tariq__${token}`
                }
            });
            setCartItems(data.products);
            setCartUpdated(true);  // Mark cart as updated
            toast.success("Success adding to cart", {
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
        } catch (e) {
            toast.error(e.response?.data?.message || "Error adding to cart", {
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
        } finally {
            setLoader(false);
        }
    };

    const increase = async (id) => {
        setLoaderI(true);
        try {
            await axios.patch("https://ecommerce-node4.onrender.com/cart/incraseQuantity", {
                productId: id
            }, {
                headers: {
                    Authorization: `Tariq__${token}`
                }
            });
            setCartUpdated(true);  // Mark cart as updated
        } catch (e) {
            toast.error(e.response?.data?.message || "Error increasing quantity", {
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
        } finally {
            setLoaderI(false);
        }
    };

    const decrease = async (id) => {
        setLoaderD(true);
        try {
            await axios.patch("https://ecommerce-node4.onrender.com/cart/decraseQuantity", {
                productId: id
            }, {
                headers: {
                    Authorization: `Tariq__${token}`
                }
            });
            setCartUpdated(true);  // Mark cart as updated
        } catch (e) {
            toast.error(e.response?.data?.message || "Error decreasing quantity", {
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
        } finally {
            setLoaderD(false);
        }
    };

    const removeFromCart = async (id) => {
        setLoader(true);
        try {
            await axios.patch("https://ecommerce-node4.onrender.com/cart/removeItem", {
                productId: id
            }, {
                headers: {
                    Authorization: `Tariq__${token}`
                }
            });
            setCartUpdated(true);  // Mark cart as updated
        } catch (e) {
            toast.error(e.response?.data?.message || "Error removing from cart", {
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
        } finally {
            setLoader(false);
        }
    };

    const clearCart = async () => {
        setLoader(true);
        try {
            await axios.patch("https://ecommerce-node4.onrender.com/cart/clear", {}, {
                headers: {
                    Authorization: `Tariq__${token}`
                }
            });
            setCartUpdated(true);  // Mark cart as updated
        } catch (e) {
            toast.error(e.response?.data?.message || "Error clearing cart", {
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
        } finally {
            setLoader(false);
        }
    };

    useEffect(() => {
        getCart();
    }, [cartUpdated]);  // Trigger useEffect when cartUpdated changes

    useEffect(() => {
        // Reset cartUpdated state after cart data is fetched
        setCartUpdated(false);
    }, [cartItems]);

    return (
        <cartContext.Provider value={{
            cartItems,
            addToCart,
            loader,
            totalQuantity,
            totalPrice,
            increase,
            decrease,
            removeFromCart,
            clearCart,
            loaderD,
            loaderI
        }}>
            {children}
        </cartContext.Provider>
    );
};

export default CartContextProvider;

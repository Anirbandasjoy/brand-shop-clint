import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import AddProduct from "../components/AddProduct";
import Products from "../components/Products";
import UpdateProduct from "../components/UpdateProduct";
import ProductDetails from "../components/ProductDetails";
import Cart from "../components/Cart";
import axios from "axios";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";




export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/add-product",
                element: <AddProduct />
            },
            {
                path: "/brand/:name",
                element: <Products />
            },
            {
                path: "/update-product/:id",
                element: <UpdateProduct />
            },
            {
                path: "/product-details/:id",
                element: <ProductDetails />
            },
            {
                path: "/cart",
                element: <Cart />,
                loader: () => axios.get("http://localhost:5000/order")
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/register",
                element: <Register />
            }

        ]
    }
])
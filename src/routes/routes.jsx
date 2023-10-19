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
import PribetRoute from "./PribetRoute";
import PageNotFound from "../pages/PageNotFound";




export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <PageNotFound />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/add-product",
                element: <PribetRoute><AddProduct /></PribetRoute>
            },
            {
                path: "/brand/:name",
                element: <Products />
            },
            {
                path: "/update-product/:id",
                element: <PribetRoute><UpdateProduct /></PribetRoute>
            },
            {
                path: "/product-details/:id",
                element: <PribetRoute><ProductDetails /></PribetRoute>
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
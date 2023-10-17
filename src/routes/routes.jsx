import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import AddProduct from "../components/AddProduct";
import Products from "../components/Products";
import UpdateProduct from "../components/UpdateProduct";

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
            }
        ]
    }
])
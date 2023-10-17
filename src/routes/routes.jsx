import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import AddProduct from "../components/AddProduct";
import Products from "../components/Products";

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
            }
        ]
    }
])
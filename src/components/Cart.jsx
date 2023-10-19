
import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { AiOutlineDelete } from 'react-icons/ai'
import { useLoaderData } from "react-router-dom";

const Cart = () => {
    const { data } = useLoaderData();
    const [orderData, setOrderData] = useState(data);


    const handleDelete = async (id) => {
        console.log(id)
        try {
            const { data } = await axios.delete(`http://localhost:5000/order/${id}`)
            if (data.deletedCount > 0) {
                toast.success("Deleted Successfully")
            }
            const filterOrder = orderData.filter((data) => data._id !== id)
            setOrderData(filterOrder)
        } catch (error) {
            console.log(error.message)
            toast.error("Somthing rong")
        }

    }

    return (
        <div className="max-w-6xl mx-auto h-screen dark:text-white mt-5">
            <div className="overflow-x-auto">
                <table className="table  text-center">
                    {/* head */}
                    <thead>
                        <tr className="font-semibold bg-gray-500 text-white">

                            <th>Price</th>
                            <th>Name</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            orderData.map((order) => {
                                return <tr key={order._id} className="hover dark:hover:text-gray-700">

                                    <td>${order.price}</td>
                                    <td>{order.name}</td>
                                    <td className="flex justify-center"><AiOutlineDelete onClick={() => handleDelete(order._id)} className="cursor-pointer" size={25} /></td>
                                </tr>
                            })
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Cart;

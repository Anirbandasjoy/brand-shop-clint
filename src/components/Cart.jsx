import { useState } from "react";
import { FiDelete } from "react-icons/fi";
import { BsPencilSquare } from "react-icons/bs";
import { Link, useLoaderData } from "react-router-dom"

const Cart = () => {
    let count = 0
    const { data } = useLoaderData();
    const [orderData, setOrderData] = useState(data)
    console.log(orderData)
    return (
        <div className="lg:h-screen container mx-auto">
            <div className="overflow-x-auto">
                <table className="table ">
                    {/* head */}
                    <thead className="bg-gray-500 text-white">
                        <tr>
                            <th>Count</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            orderData.map((order) => {
                                return <tr key={order._id} className="hover">
                                    <th>{count = count + 1}</th>
                                    <td className="flex items-center gap-4">
                                        <img src={order.image} className="w-8" alt={order.name} />
                                        {order.name}
                                    </td>
                                    <td>${order.price}</td>
                                    <td className="flex text-center items-center gap-5">
                                        <Link to={`/update-product/${order._id}`} state={order}>
                                            <BsPencilSquare className="cursor-pointer" size={25} />
                                        </Link>
                                        <FiDelete className="cursor-pointer" size={25} />
                                    </td>
                                </tr>

                            })
                        }



                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Cart
import axios from "axios"
import { useEffect, useState } from "react"
import Rating from "react-rating"
import { Link, useLocation } from "react-router-dom"
import { AiOutlineStar, AiTwotoneStar } from 'react-icons/ai'

const Products = () => {
    const [products, setProducts] = useState([])
    const { state } = useLocation();
    const fetchData = async () => {
        try {
            const { data } = await axios.get(`http://localhost:5000/product/${state}`)
            console.log(data)
            setProducts(data)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        fetchData()
    }, [])
    console.log(products)
    return (
        <div className="grid container mx-auto grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {
                products.map((product) => {
                    return <div key={product._id} className="w-full  bg-white border border-gray-200 rounded-lg shadow ">
                        <Link>
                            <img className=" h-96 w-full rounded-t-lg" src={product.image} alt={product.name} />
                        </Link>
                        <div className="px-5 pb-5 mt-4">
                            <Link>
                                <div className="flex  gap-2 ">
                                    <h5 className="text-2xl font-semibold tracking-tight text-gray-900 ">{product.name}</h5>
                                    <h4 className="text-xs font-semibold bg-primary h-fit text-white p-0.5 px-1 rounded-sm ">Electronics</h4>
                                </div>
                                <div className="badge badge-primary rounded-sm">{product.brand}</div>
                            </Link>
                            <div className="flex text-yellow-600 items-center mt-2.5 mb-5">
                                <Rating
                                    initialRating={product.rating}
                                    readonly
                                    emptySymbol={<AiOutlineStar size={20} />}
                                    fullSymbol={<AiTwotoneStar size={20} />}
                                />
                                <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded  ml-3">{product.rating}</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-3xl font-bold text-gray-900 ">${product.price}</span>
                                <div className="space-x-1">
                                    <Link className="text-white  bg-primary rounded-sm hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm px-5 py-2.5 text-center ">Update</Link>
                                    <Link className="text-white bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-sm text-sm px-5 py-2.5 text-center ">Details</Link>
                                </div>
                            </div>
                        </div>
                    </div>

                })
            }
        </div>
    )
}

export default Products
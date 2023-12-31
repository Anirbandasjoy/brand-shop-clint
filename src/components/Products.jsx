import axios from "axios"
import { useEffect, useState } from "react"
import Rating from "react-rating"
import { Link, useLocation } from "react-router-dom"
import { AiOutlineStar, AiTwotoneStar } from 'react-icons/ai'



import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


// import required modules
import { EffectFade, Navigation, Pagination } from 'swiper/modules';

const Products = () => {
    const [products, setProducts] = useState([])
    const { state } = useLocation();
    const fetchData = async () => {
        try {
            const { data } = await axios.get(`https://bran-shop-server.vercel.app/product/${state.name}`)
            setProducts(data)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div className="pb-8">

            {/* banner start  */}

            <div className="mb-10">
                <Swiper
                    spaceBetween={30}
                    effect={'fade'}
                    navigation={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[EffectFade, Navigation, Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <img className='lg:h-[32rem] h-full w-full' src={state.image1} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='lg:h-[32rem] h-full w-full' src={state.image2} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='lg:h-[32rem] h-full w-full' src={state.image3} />
                    </SwiperSlide>

                </Swiper>
            </div>
            {/* banner end */}
            <div className="grid px-2   lg:px-0 container mx-auto grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    products.map((product) => {
                        return <div key={product._id} className="w-full  dark:bg-gray-700 dark:text-white border border-gray-200 rounded-lg shadow ">
                            <div>
                                <img className=" h-96 w-full rounded-t-lg" src={product.image} alt={product.name} />
                            </div>
                            <div className="px-5 pb-5 mt-4">
                                <div>
                                    <div className="flex  gap-2 ">
                                        <h5 className="text-2xl font-semibold tracking-tight  ">{product.name}</h5>
                                        <h4 className="text-xs font-semibold bg-primary h-fit text-white p-0.5 px-1 rounded-sm ">{product.category}</h4>
                                    </div>
                                    <div className="badge badge-primary rounded-sm">{product.brand}</div>
                                </div>
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
                                    <span className="text-3xl font-bold">${product.price}</span>
                                    <div className="space-x-1">
                                        <Link state={product} to={`/update-product/${product._id}`} className="text-white  bg-primary rounded-sm hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm px-5 py-2.5 text-center ">Update</Link>
                                        <Link to={`/product-details/${product._id}`} state={product} className="text-white bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-sm text-sm px-5 py-2.5 text-center ">Details</Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                    })
                }
            </div>
        </div>
    )
}

export default Products
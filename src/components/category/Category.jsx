import axios from "axios"
import { useEffect, useState } from "react"


import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import './category.module.css';

import { Pagination } from 'swiper/modules';
import { Link } from "react-router-dom";


const Category = () => {
    const [categoryData, setCategoryData] = useState([])

    const fetchData = async () => {
        const { data } = await axios.get("http://localhost:5000/category")
        setCategoryData(data)
    }
    useEffect(() => {
        fetchData()
    }, [])
    return (
        <div className="my-20 max-w-7xl mx-auto ">
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 4,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 5,
                        spaceBetween: 50,
                    },
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                {
                    categoryData.map((category, idx) => {
                        return <Link className="" key={idx}>
                            <SwiperSlide key={category._id}>
                                <div className="bg-[#e6f3ff] rounded-full p-6 text-center">
                                    <img className="h-44 mx-auto cursor-pointer rounded-md" src={category.image} alt={category.name} />
                                </div>
                                <h1 className="text-center mt-2 text-xl font-semibold text-blue-400">{category.name}</h1>
                            </SwiperSlide>

                        </Link>
                    })
                }

            </Swiper>
            <h1>hell</h1>
            <h1>hell</h1>
            <h1>hell</h1>
            <h1>hell</h1>
            <h1>hell</h1>
            <h1>hell</h1>
            <h1>hell</h1>
            <h1>hell</h1>
            <h1>hell</h1>
            <h1>hell</h1>
            <h1>hell</h1>
            <h1>hell</h1>
            <h1>hell</h1>
            <h1>hell</h1>
            <h1>hell</h1>
            <h1>hell</h1>
            <h1>hell</h1>
            <h1>hell</h1>
            <h1>hell</h1>
            <h1>hell</h1>
            <h1>hell</h1>
        </div>
    );
}

export default Category
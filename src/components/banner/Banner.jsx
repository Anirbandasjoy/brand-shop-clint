
import image1 from '../../assets/banner/1.jpg'
import image2 from '../../assets/banner/2.jpg'
import image3 from '../../assets/banner/3.jpg'

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './banner.module.css';

// import required modules
import { EffectFade, Navigation, Pagination } from 'swiper/modules';


const Banner = () => {
    return (
        <>
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
                    <img className='h-[32rem] w-full' src={image1} />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='h-[32rem] w-full' src={image2} />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='h-[32rem] w-full' src={image3} />
                </SwiperSlide>

            </Swiper>
        </>
    );
}

export default Banner
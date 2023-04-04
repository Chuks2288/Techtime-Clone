import React from 'react';
import { slides } from '../constants';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function Slide() {
    return (
        <Swiper

            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={3}
            pagination={{ clickable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            className='flex items-center sm:max-w-[4000px] max-w-[2000px] max-h-[250px]'
        >

            {slides.map((slide) => (
                <SwiperSlide
                    className="bg-white rounded-md p-3"
                >
                    <p className='sm:text-[14px] text-[10px] sm:leading-[25px] leading-[15px]'>
                        {slide.content}
                    </p>
                    <div className="flex mt-4">
                        <img src={slide.image} alt="" />
                        <div className="flex-col flex ml-2">
                            <span className='sm:text-[14px] text-[10px] font-bold'>{slide.name}</span>
                            <span className='sm:text-[14px] text-[10px]'>{slide.position}</span>
                        </div>
                    </div>


                </SwiperSlide>
            ))}


            ...
        </Swiper>
    )
}

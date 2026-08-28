"use client"
import React from 'react'
import { Navigation,Autoplay, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/pagination';
import 'swiper/css';

export default function HomeBanner() {
  return (
    <div>
      <Swiper
      modules={[Navigation,Autoplay, Pagination, Scrollbar, A11y]}
      spaceBetween={0}
      slidesPerView={1}
       pagination={{ clickable: true }}
       autoplay={{
          delay: 2000}}
    >
      <SwiperSlide>
        <img src="https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/slider/648e23d4-5e5d-4fd0-b0f7-856ee45c6629-1671388137.jpg" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/slider/541928cd-e696-4c09-9f1c-bc9d7127c451-1671388153.jpg" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/slider/541928cd-e696-4c09-9f1c-bc9d7127c451-1671388153.jpg" alt="" />
      </SwiperSlide>
      
      
      ...
    </Swiper>
    </div>
  )
}

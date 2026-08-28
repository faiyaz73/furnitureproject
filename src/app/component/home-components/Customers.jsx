"use client"
import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/pagination';
import 'swiper/css';

export default function Customers() {
  return (
    <div className="w-full px-4">

  {/* Heading */}
  <div>
    <h2 className="font-bold text-2xl sm:text-3xl text-center my-10">
      What Our Customers Say?
    </h2>
  </div>


  {/* Swiper */}
  <Swiper
    modules={[Navigation, Pagination, Scrollbar, A11y]}
    spaceBetween={20}
    slidesPerView={1}
    pagination={{ clickable: true }}
    className="w-full max-w-[900px] mx-auto"
  >

    {/* ================= SLIDE 1 ================= */}
    <SwiperSlide>

      <div className="flex flex-col items-center text-center px-5 sm:px-16 pb-12">

        {/* Review */}
        <p className="text-gray-600 text-sm sm:text-base leading-7 max-w-[750px]">
         These guys have been absolutely outstanding. Perfect Themes and the best of all that you have many options to choose! Best Support team ever! Very fast responding! Thank you very much! I highly recommend this theme and these people!
        </p>


        {/* Image */}
        <img
          src="https://randomuser.me/api/portraits/men/32.jpg"
          alt="Customer"
          className="
            w-26
            h-26
            sm:w-20
            sm:h-20
            rounded-full
            object-cover
            mt-7
            border-2
            border-[#CA9F7D]
          "
        />


        {/* Name */}
        <h2 className="mt-3 text-lg font-semibold text-gray-800">
          John Smith
        </h2>


        {/* Post */}
        <p className="text-sm text-gray-500 mt-1">
          Customer
        </p>


        {/* Rating */}
        <div className="flex gap-1 mt-3 text-[#CA9F7D] text-lg">
          ★ ★ ★ ★ ★
        </div>

      </div>

    </SwiperSlide>


    {/* ================= SLIDE 2 ================= */}
    <SwiperSlide>

      <div className="flex flex-col items-center text-center px-5 sm:px-16 pb-12">

        <p className="text-gray-600 text-sm sm:text-base leading-7 max-w-[750px]">
         These guys have been absolutely outstanding. Perfect Themes and the best of all that you have many options to choose! Best Support team ever! Very fast responding! Thank you very much! I highly recommend this theme and these people!
        </p>


        <img
          src="https://randomuser.me/api/portraits/women/44.jpg"
          alt="Customer"
          className="
            w-16
            h-16
            sm:w-20
            sm:h-20
            rounded-full
            object-cover
            mt-7
            border-2
            border-[#CA9F7D]
          "
        />


        <h2 className="mt-3 text-lg font-semibold text-gray-800">
          Sarah Williams
        </h2>


        <p className="text-sm text-gray-500 mt-1">
          Customer
        </p>


        <div className="flex gap-1 mt-3 text-[#CA9F7D] text-lg">
          ★ ★ ★ ★ ★
        </div>

      </div>

    </SwiperSlide>


    {/* ================= SLIDE 3 ================= */}
    <SwiperSlide>

      <div className="flex flex-col items-center text-center px-5 sm:px-16 pb-12">

        <p className="text-gray-600 text-sm sm:text-base leading-7 max-w-[750px]">
          These guys have been absolutely outstanding. Perfect Themes and the best of all that you have many options to choose! Best Support team ever! Very fast responding! Thank you very much! I highly recommend this theme and these people!
        </p>


        <img
          src="https://randomuser.me/api/portraits/men/52.jpg"
          alt="Customer"
          className="
            w-16
            h-16
            sm:w-20
            sm:h-20
            rounded-full
            object-cover
            mt-7
            border-2
            border-[#CA9F7D]
          "
        />


        <h2 className="mt-3 text-lg font-semibold text-gray-800">
          David Johnson
        </h2>


        <p className="text-sm text-gray-500 mt-1">
          Customer
        </p>


        <div className="flex gap-1 mt-3 text-[#CA9F7D] text-lg">
          ★ ★ ★ ★ ★
        </div>

      </div>

    </SwiperSlide>

  </Swiper>
  <div className="w-full bg-[#F8F9F9] py-14 px-4">

  <div className="max-w-[700px] mx-auto text-center">

    {/* Heading */}
    <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
      Our Newsletter
    </h2>

    {/* Description */}
    <p className="mt-3 text-sm sm:text-base text-gray-500">
      Get E-mail updates about our latest shop and special offers.
    </p>


    {/* Form */}
    <div className="mt-7 flex flex-col sm:flex-row max-w-[600px] mx-auto">

      <input
        type="email"
        placeholder="Email address..."
        className="
          w-full
          h-12
          border
          border-gray-300
          px-4
          text-sm
          outline-none
          focus:border-[#CA9F7D]
        "
      />

      <button
        className="
          h-12
          px-10
          w-67
          text-[17px]
          rounded-[5]
          bg-[#CA9F7D]
          text-white
          font-semibold
          text-sm
          hover:bg-[#000]
          transition
        "
      >
        Subscribe
      </button>

    </div>

  </div>

</div>
</div>
  )
}

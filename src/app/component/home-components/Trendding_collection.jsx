import React from 'react'
export default function TrendingBanner() {
  return (
    <section
      className="
        relative
        w-full
        h-[680px]
        bg-cover
        bg-center
        bg-no-repeat
        flex
        items-center
        mt-5
      "
      style={{
        backgroundImage:
          "url('https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/home-page/e9234fa4-3ff6-4a6e-a00e-0c9ff26e7b20-1670180400.jpg')",
      }}
    >

      {/* Content */}
      <div className="w-[1120px] mx-auto px-4 hover:scale-105 transition-all
            duration-500">

        {/* Heading */}
        <h1
          className="
            w-fit
            text-4xl
            lg:text-5xl
            font-serif
            font-semibold
            text-gray-900
            cursor-pointer
            transition-all
            duration-500
            
            origin-left
          "
        >
          New Trending Collection
        </h1>

        {/* Subtitle */}
        <p
          className="
            mt-5
            w-fit
            text-xl
            text-gray-700
            cursor-pointer
            
            
            origin-left
          "
        >
          We Believe That Good Design is Always in Season
        </p>

        {/* Button */}
        <button
          className="
            mt-28
            w-[190px]
            h-[45px]
            border-2
            border-[#CA9F7D]
            text-[#CA9F7D]
            text-[15px]
            font-semibold
            transition-all
            rounded
            hover:bg-[#CA9F7D]
            hover:text-white
            
          "
        >
          SHOPPING NOW
        </button>

      </div>

    </section>
  );
}

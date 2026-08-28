import React from "react";

export default function FreeShipping() {
  return (
    <section className="w-full mt-3 bg-[#F8F9F9] py-12 border-1 border-gray-300">

      <div className="w-[80%] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

        {/* Box 1 */}
        <figure className="flex flex-col items-center text-center p-8">

          {/* Circle Icon */}
          <div className="w-20 h-20 rounded-full border-2 border-[#CA9F7D] flex items-center justify-center text-3xl text-[#CA9F7D] transition-all duration-500 hover:bg-[#CA9F7D] hover:text-white hover:scale-110 cursor-pointer">
            🚚
          </div>

          {/* Heading */}
          <h1 className="mt-5 text-xl font-semibold text-gray-800">
            Free Shipping
          </h1>

          {/* Paragraph */}
          <p className="mt-2 text-sm text-gray-500">
            Free shipping on all order
          </p>

        </figure>


        {/* Box 2 */}
        <figure className="flex flex-col items-center text-center p-8">

          {/* Circle Icon */}
          <div className="w-20 h-20 rounded-full border-2 border-[#CA9F7D] flex items-center justify-center text-3xl text-[#CA9F7D] transition-all duration-500 hover:bg-[#CA9F7D] hover:text-white hover:scale-110 cursor-pointer">
            💳
          </div>

          {/* Heading */}
          <h1 className="mt-5 text-xl font-semibold text-gray-800">
            Secure Payment
          </h1>

          {/* Paragraph */}
          <p className="mt-2 text-sm text-gray-500">
            100% secure payment
          </p>

        </figure>


        {/* Box 3 */}
        <figure className="flex flex-col items-center text-center p-8">

          {/* Circle Icon */}
          <div className="w-20 h-20 rounded-full border-2 border-[#CA9F7D] flex items-center justify-center text-3xl text-[#CA9F7D] transition-all duration-500 hover:bg-[#CA9F7D] hover:text-white hover:scale-110 cursor-pointer">
            🔄
          </div>

          {/* Heading */}
          <h1 className="mt-5 text-xl font-semibold text-gray-800">
            Easy Returns
          </h1>

          {/* Paragraph */}
          <p className="mt-2 text-sm text-gray-500">
            Easy returns within 30 days
          </p>

        </figure>

      </div>

    </section>
  );
}
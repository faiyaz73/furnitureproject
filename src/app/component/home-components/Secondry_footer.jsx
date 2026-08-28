import React from "react";
import { FaFacebook, FaTwitterSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { RiYoutubeFill } from "react-icons/ri";

export default function Secondry_footer() {
  return (
    <footer className="w-full border-t border-gray-200 bg-white">

      {/* Main Footer */}
      <section className="w-full">

        <div className="max-w-7xl mx-auto px-9 sm:px-8 lg:px-10 py-12">

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">


            {/* ================= CONTACT US ================= */}

            <figure>
              <h2 className="text-lg font-bold text-gray-800 mb-5">
                Contact Us
              </h2>

              <div className="space-y-3 text-sm text-gray-500">

                <p className="leading-6">
                  Address: Claritas est etiam processus dynamicus
                </p>

                <p>
                  Phone:{" "}
                  <span className="text-gray-700">
                    98745612330
                  </span>
                </p>

                <p>
                  Email:{" "}
                  <span className="text-gray-700">
                    furniture@gmail.com
                  </span>
                </p>

              </div>


              {/* Social Icons */}
              <div className="flex items-center gap-3 mt-6">

                <a
                  href="#"
                  className="w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-[#CA9F7D] hover:text-white hover:border-[#CA9F7D] transition-all duration-300"
                >
                  <FaFacebook size={17} />
                </a>

                <a
                  href="#"
                  className="w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-[#CA9F7D] hover:text-white hover:border-[#CA9F7D] transition-all duration-300"
                >
                  <FaInstagram size={17} />
                </a>

                <a
                  href="#"
                  className="w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-[#CA9F7D] hover:text-white hover:border-[#CA9F7D] transition-all duration-300"
                >
                  <RiYoutubeFill size={19} />
                </a>

                <a
                  href="#"
                  className="w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-[#CA9F7D] hover:text-white hover:border-[#CA9F7D] transition-all duration-300"
                >
                  <FaTwitterSquare size={17} />
                </a>

              </div>

            </figure>


            {/* ================= INFORMATION ================= */}

            <figure>

              <h2 className="text-lg font-bold text-gray-800 mb-5">
                Information
              </h2>

              <div className="flex flex-col gap-3 text-sm text-gray-500">

                <a
                  href="#"
                  className="hover:text-[#CA9F7D] transition-colors duration-300"
                >
                  About Us
                </a>

                <a
                  href="#"
                  className="hover:text-[#CA9F7D] transition-colors duration-300"
                >
                  Contact Us
                </a>

                <a
                  href="#"
                  className="hover:text-[#CA9F7D] transition-colors duration-300"
                >
                  Frequently Questions
                </a>

                <a
                  href="#"
                  className="hover:text-[#CA9F7D] transition-colors duration-300"
                >
                  Privacy Policy
                </a>

                <a
                  href="#"
                  className="hover:text-[#CA9F7D] transition-colors duration-300"
                >
                  Terms & Conditions
                </a>

              </div>

            </figure>


            {/* ================= MY ACCOUNT ================= */}

            <figure>

              <h2 className="text-lg font-bold text-gray-800 mb-5">
                My Account
              </h2>

              <div className="flex flex-col gap-3 text-sm text-gray-500">

                <a
                  href="#"
                  className="hover:text-[#CA9F7D] transition-colors duration-300"
                >
                  My Dashboard
                </a>

                <a
                  href="#"
                  className="hover:text-[#CA9F7D] transition-colors duration-300"
                >
                  Wishlist
                </a>

                <a
                  href="#"
                  className="hover:text-[#CA9F7D] transition-colors duration-300"
                >
                  Cart
                </a>

                <a
                  href="#"
                  className="hover:text-[#CA9F7D] transition-colors duration-300"
                >
                  Checkout
                </a>

                <a
                  href="#"
                  className="hover:text-[#CA9F7D] transition-colors duration-300"
                >
                  Order History
                </a>

              </div>

            </figure>


            {/* ================= TOP RATED PRODUCTS ================= */}

            <figure>

              <h2 className="text-lg font-bold text-gray-800 mb-5">
                Top Rated Products
              </h2>


              {/* Product 1 */}
              <div className="flex gap-4 mb-5">

                <div className="w-20 h-20 shrink-0 overflow-hidden rounded-md bg-gray-100">

                  <img
                    src="https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/products/1617829052195Caroline%20Study%20Tables__.jpg"
                    alt="Leo TV Cabinets"
                    className="w-full h-full object-cover hover:scale-110 transition duration-500"
                  />

                </div>


                <div>

                  <p className="text-xs text-gray-400">
                    TV Units
                  </p>

                  <h3 className="text-sm font-semibold text-gray-700 mt-1">
                    Leo TV Cabinets
                  </h3>

                  <div className="flex flex-wrap gap-2 mt-2">

                    <span className="text-xs text-gray-400 line-through">
                      Rs. 26,000
                    </span>

                    <span className="text-sm font-semibold text-gray-800">
                      Rs. 21,000
                    </span>

                  </div>

                </div>

              </div>


              {/* Product 2 */}
              <div className="flex gap-4">

                <div className="w-20 h-20 shrink-0 overflow-hidden rounded-md bg-gray-100">

                  <img
                    src="https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/products/1617829052195Caroline%20Study%20Tables__.jpg"
                    alt="Modern Table"
                    className="w-full h-full object-cover hover:scale-110 transition duration-500"
                  />

                </div>


                <div>

                  <p className="text-xs text-gray-400">
                    Tables
                  </p>

                  <h3 className="text-sm font-semibold text-gray-700 mt-1">
                    Modern Wooden Table
                  </h3>

                  <div className="flex flex-wrap gap-2 mt-2">

                    <span className="text-xs text-gray-400 line-through">
                      Rs. 8,000
                    </span>

                    <span className="text-sm font-semibold text-gray-800">
                      Rs. 6,500
                    </span>

                  </div>

                </div>

              </div>

            </figure>

          </div>

        </div>

      </section>


      {/* ================= COPYRIGHT ================= */}

     

    </footer>
  );
}
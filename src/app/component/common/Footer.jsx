import React from 'react'

export default function Footer() {
  return (
   <footer className="w-full bg-white border-t border-gray-200 mt-4">
  <div className="w-full max-w-screen-xl mx-auto px-4 py-6 md:py-8">

    {/* Menu */}
    <div className="flex justify-center">

      <ul className="flex flex-wrap justify-center items-center gap-x-10 gap-y-3 text-sm font-medium text-[18px] text-gray-600">

        <li>
          <a
            href="#"
            className="hover:text-[#CA9F7D] transition-colors duration-300"
          >
            About
          </a>
        </li>

        <li>
          <a
            href="#"
            className="hover:text-[#CA9F7D] transition-colors duration-300"
          >
            Privacy Policy
          </a>
        </li>

        <li>
          <a
            href="#"
            className="hover:text-[#CA9F7D] transition-colors duration-300"
          >
            Licensing
          </a>
        </li>

        <li>
          <a
            href="#"
            className="hover:text-[#CA9F7D] transition-colors duration-300"
          >
            Contact
          </a>
        </li>

      </ul>

    </div>


    {/* Line */}
    <hr className="my-6 border-gray-200" />


    {/* Copyright */}
    <div className="text-center">

      <span className="block text-sm text-gray-500">
        © 2026{" "}
        <a
          href="#"
          className="font-medium hover:text-[#CA9F7D] transition"
        >
          Furniture
        </a>
        . All Rights Reserved.
      </span>


      {/* PayPal */}
      <div className="flex justify-center items-center mt-5">

        <img
          src="https://wscubetech.co/Assignments/furniture/public/frontend/img/icon/papyel2.png"
          alt="PayPal"
          className="h-8 w-auto object-contain"
        />

      </div>

    </div>

  </div>
</footer>
  )
}

"use client"
import React from "react";

import chair1 from "../../image/0d588bec-d9a0-4645-8e7a-b49ef67b34be-1670180400.webp";
import chair2 from "../../image/08e20925-4e58-4ad3-bbb9-b037d6da2466-1670180400.webp";
import chair3 from "../../image/08e20925-4e58-4ad3-bbb9-b037d6da2466-1670180400.webp";

export default function HomeLayout() {
  const collections = [
    {
      image: chair1,
      smallTitle: "Design Creative",
      title: "Chair Collection",
    },
    {
      image: chair2,
      smallTitle: "Bestselling Products",
      title: "Chair Collection",
    },
    {
      image: chair3,
      smallTitle: "Onsale Products",
      title: "Chair Collection",
    },
  ];

  return (
    <section className="w-full border-b border-gray-200 py-14">
      <div className="max-w-[1470px] mx-auto px-5">

        <div className="grid grid-cols-1 md:grid-cols-2 border-1  lg:grid-cols-3 gap-8">

          {collections.map((item, index) => (
            <div
              key={index}
              className="relative overflow-hidden group"
            >
              {/* Image */}
              <img
                src={item.image.src}
                alt={item.title}
                className="w-full h-[200px] sm:h-[350px] lg:h-[270px] object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Text */}
              <div className="absolute top-10 left-10 z-10">
                <h3 className="text-lg sm:text-xl font-normal text-black">
                  {item.smallTitle}
                </h3>

                <h1 className="mt-1 text-3xl sm:text-4xl font-bold text-black font-serif">
                  {item.title}
                </h1>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
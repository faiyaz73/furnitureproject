"use client";

import Image from "next/image";
import React, { useState } from "react";

import bookshelf from "../../image/1620077669499Erica Bookshelfs_brown.jpg";
import cabinet from "../../image/16253167208651620078433247Louise Cabinet_.jpg";
import carolineTable from "../../image/1617829052195Caroline Study Tables__.jpg";
import chestOfDrawers from "../../image/1621171973378Isaac Chest of Drawer_.jpg";
import coffeeTable from "../../image/1617828302132Godfrey Coffee Table Set__.jpg";
import mirror from "../../image/1617989633213Winona Mirror__.jpg";
import sofaSet from "../../image/1615225341228Ganthur Sheesham Wood Sofa Set___.jpg";
import tvCabinet from "../../image/1619988418966Leo TV Cabinets.jpg";

const products = {
    featured: [
        [carolineTable, "Nest Of Tables", "Caroline Study Tables", "Rs. 3,000", "Rs. 2,500"],
        [sofaSet, "Sofa", "Ganthur Sheesham Sofa", "Rs. 20,000", "Rs. 17,500"],
        [coffeeTable, "Coffee Table", "Godfrey Coffee Table Set", "Rs. 8,000", "Rs. 6,500"],
        [mirror, "Mirror", "Winona Wall Mirror", "Rs. 3,000", "Rs. 2,200"],
        [tvCabinet, "Living Room", "Leo TV Cabinet", "Rs. 10,000", "Rs. 8,500"],
        [bookshelf, "Office", "Erica Bookshelf", "Rs. 12,000", "Rs. 9,500"],
        [chestOfDrawers, "Bedroom", "Isaac Chest Of Drawers", "Rs. 15,000", "Rs. 12,000"],
        [cabinet, "Cabinet", "Louise Storage Cabinet", "Rs. 18,000", "Rs. 14,999"],
    ],
    newArrivals: [
        [coffeeTable, "New Arrival", "Modern Coffee Table", "Rs. 7,000", "Rs. 5,999"],
        [mirror, "New Arrival", "Minimal Wall Mirror", "Rs. 5,000", "Rs. 4,200"],
        [sofaSet, "New Arrival", "Sheesham Lounge Sofa", "Rs. 18,000", "Rs. 15,500"],
        [cabinet, "New Arrival", "Modern Storage Cabinet", "Rs. 16,000", "Rs. 12,999"],
        [bookshelf, "New Arrival", "Open Wood Bookshelf", "Rs. 12,000", "Rs. 9,999"],
        [chestOfDrawers, "New Arrival", "Compact Bedroom Drawer", "Rs. 14,000", "Rs. 11,200"],
    ],
    onsale: [
        [carolineTable, "On Sale", "Sale Study Table", "Rs. 8,000", "Rs. 5,999"],
        [coffeeTable, "On Sale", "Sale Coffee Table", "Rs. 15,000", "Rs. 10,999"],
        [sofaSet, "On Sale", "Sale Sheesham Sofa", "Rs. 25,000", "Rs. 18,999"],
        [mirror, "On Sale", "Sale Accent Mirror", "Rs. 5,000", "Rs. 3,499"],
        [tvCabinet, "On Sale", "Sale TV Cabinet", "Rs. 30,000", "Rs. 24,999"],
    ],
};

export default function Featured() {
    const [activeTab, setActiveTab] = useState("featured");

    return (
        <section className="mt-5 w-full">
            <div className="mx-auto text-center">
                <div className="mx-auto grid w-full max-w-[700px] grid-cols-1 gap-1 px-4 text-xl sm:grid-cols-3 sm:text-2xl">
                    {[
                        ["featured", "Featured"],
                        ["newArrivals", "New Arrivals"],
                        ["onsale", "On Sale"],
                    ].map(([tab, label]) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`border-3 border-gray-300 p-3 font-semibold transition sm:p-4 ${activeTab === tab ? "text-[#CA9F7D]" : "text-black"
                                }`}
                        >
                            {label}
                        </button>
                    ))}
                </div>
            </div>

            <section className="mx-auto mt-6 grid max-w-[1120px] grid-cols-1 gap-4 p-4 text-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {products[activeTab].map(([image, category, name, oldPrice, price]) => (
                    <Cards
                        key={name}
                        image={image}
                        category={category}
                        name={name}
                        oldPrice={oldPrice}
                        price={price}
                    />
                ))}
            </section>
        </section>
    );
}

function Cards({ image, category, name, oldPrice, price }) {
    return (
        <div className="w-full shadow sm:p-1">
            <figure className="group overflow-hidden rounded-md border border-gray-200 bg-white">
                <div className="relative aspect-[4/3] overflow-hidden sm:aspect-[3/2]">
                    <Image
                        src={image}
                        alt={name}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 25vw"
                        className="object-cover transition duration-500 group-hover:scale-105"
                    />
                    <button
                        aria-label={`Add ${name} to wishlist`}
                        className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white text-gray-600 shadow transition hover:text-red-500"
                    >
                        ♡
                    </button>
                </div>

                <div className="p-4">
                    <p className="text-[12px] uppercase tracking-wide text-gray-500">{category}</p>
                    <h2 className="mt-1 text-[17px] font-semibold text-gray-800">{name}</h2>
                    <div className="mt-3 flex items-center justify-center gap-3">
                        <span className="text-sm text-gray-400 line-through">{oldPrice}</span>
                        <span className="text-lg font-bold text-gray-900">{price}</span>
                    </div>
                    <div className="mt-4 flex items-center gap-2">
                        <button className="flex-1 rounded-md border border-gray-300 py-2.5 text-sm font-medium text-gray-700 transition hover:bg-gray-100">
                            ♡ Wishlist
                        </button>
                        <button className="flex-1 rounded-md bg-black py-2.5 text-sm font-medium text-white transition hover:bg-gray-800">
                            Add to Cart
                        </button>
                    </div>
                </div>
            </figure>
        </div>
    );
}

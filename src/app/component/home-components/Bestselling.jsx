"use client";

import Image from "next/image";
import React, { useState } from "react";

import chestOfDrawers from "../../image/1621171973378Isaac Chest of Drawer_.jpg";
import coffeeTable from "../../image/1617829892944Evan Coffee Table__.jpg";
import displayUnit from "../../image/1608312103476Dorian Shoe Rack_.jpg";
import prayerUnit from "../../image/16253179270591620747711033Hardwell Temple Prayer Unit__.jpg";
import shoeRack from "../../image/1620666061907Gloria Shoe Racks_.jpg";
import sofaBed from "../../image/1615277326496Sapien Sofa Cum Bed__.jpg";
import studyTable from "../../image/1617829052195Caroline Study Tables__.jpg";
import tvCabinet from "../../image/1619988418966Leo TV Cabinets.jpg";
import wallMirror from "../../image/1617989633213Winona Mirror__.jpg";
import bookshelf from "../../image/1620077669499Erica Bookshelfs_brown.jpg";

const products = [
    [coffeeTable, "Coffee Tables", "Evan Coffee Table", "Rs. 2,600", "Rs. 2,300"],
    [prayerUnit, "Prayer Units", "Hardwell Temple Prayer Unit", "Rs. 10,000", "Rs. 9,400"],
    [displayUnit, "Display Unit", "Dorian Shoe Rack", "Rs. 3,500", "Rs. 2,800"],
    [shoeRack, "Shoe Racks", "Gloria Shoe Racks", "Rs. 3,400", "Rs. 2,900"],
    [chestOfDrawers, "Chest Of Drawers", "Isaac Chest Of Drawer", "Rs. 32,000", "Rs. 25,000"],
    [sofaBed, "Sofa Beds", "Sapien Sofa Cum Bed", "Rs. 24,000", "Rs. 19,500"],
    [studyTable, "Study Tables", "Caroline Study Table", "Rs. 8,000", "Rs. 6,500"],
    [tvCabinet, "TV Cabinets", "Leo TV Cabinet", "Rs. 18,000", "Rs. 14,000"],
    [wallMirror, "Mirrors", "Winona Wall Mirror", "Rs. 6,000", "Rs. 4,800"],
    [bookshelf, "Bookshelves", "Erica Bookshelf", "Rs. 12,000", "Rs. 9,500"],
];

const pageSize = 5;

export default function Bestselling() {
    const [page, setPage] = useState(0);
    const [slideDirection, setSlideDirection] = useState("right");
    const pageCount = Math.ceil(products.length / pageSize);
    const visibleProducts = products.slice(page * pageSize, (page + 1) * pageSize);

    const changePage = (direction) => {
        setSlideDirection(direction > 0 ? "right" : "left");
        setPage((currentPage) => (currentPage + direction + pageCount) % pageCount);
    };

    return (
        <section className="w-full border-b border-gray-200 px-4 py-10 sm:px-6 lg:px-10">
            <div className="mx-auto max-w-[1620px]">
                <div className="mb-7 flex items-center gap-4 sm:gap-7">
                    <h2 className="shrink-0 bg-[#3568d4] px-2 py-1 font-serif text-2xl font-bold text-white sm:text-4xl">
                        Bestselling Products
                    </h2>
                    <div className="h-px flex-1 bg-gray-200" />
                    <div className="flex shrink-0 gap-1">
                        <button
                            type="button"
                            onClick={() => changePage(-1)}
                            aria-label="Show previous bestselling products"
                            title="Previous products"
                            className="px-2 text-3xl leading-none text-[#6d4d31] transition hover:text-[#ca9f7d]"
                        >
                            &#8249;
                        </button>
                        <button
                            type="button"
                            onClick={() => changePage(1)}
                            aria-label="Show next bestselling products"
                            title="Next products"
                            className="px-2 text-3xl leading-none text-[#6d4d31] transition hover:text-[#ca9f7d]"
                        >
                            &#8250;
                        </button>
                    </div>
                </div>

                <div
                    key={`${page}-${slideDirection}`}
                    className={`grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 ${slideDirection === "right" ? "animate-slide-in-right" : "animate-slide-in-left"
                        }`}
                >
                    {visibleProducts.map(([image, category, name, oldPrice, price]) => (
                        <article
                            key={name}
                            className="overflow-hidden rounded-md bg-white shadow-[0_8px_22px_rgba(0,0,0,0.14)] transition hover:-translate-y-1"
                        >
                            <div className="relative aspect-[1.45/1] overflow-hidden bg-gray-100">
                                <Image
                                    src={image}
                                    alt={name}
                                    fill
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 20vw"
                                    className="object-cover transition duration-500 hover:scale-105"
                                />
                            </div>
                            <div className="px-4 pb-5 pt-4 text-center">
                                <p className="min-h-6 text-base text-gray-600">{category}</p>
                                <h3 className="mt-3 min-h-12 font-serif text-lg font-bold text-gray-800">{name}</h3>
                                <div className="mt-5 flex items-center justify-center gap-3">
                                    <span className="text-base text-gray-500 line-through">{oldPrice}</span>
                                    <span className="text-lg font-bold text-[#c49778]">{price}</span>
                                </div>
                                <div className="mt-6 flex justify-center gap-1">
                                    <button
                                        type="button"
                                        aria-label={`Add ${name} to wishlist`}
                                        title="Add to wishlist"
                                        className="flex h-12 w-14 items-center justify-center bg-gray-100 text-3xl text-black transition hover:bg-gray-200"
                                    >
                                        &#9825;
                                    </button>
                                    <button
                                        type="button"
                                        className="h-12 flex-1 bg-gray-100 px-3 text-sm font-medium text-gray-600 transition hover:bg-gray-200 sm:text-base"
                                    >
                                        Add To Cart
                                    </button>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}

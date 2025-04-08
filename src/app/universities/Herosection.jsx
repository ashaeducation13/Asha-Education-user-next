'use client'
import Image from "next/image";
import React, { useEffect, useState } from "react";
import search from '../../assets/home/herosection/Search.svg'
import arrow from '../../assets/home/herosection/Arrow.svg'
import UnivCard from "@/components/universities/UnivCard";

const HeroSecetion = ({ data }) => {
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredUniv, setFilteredUniv] = useState(data || []);

    useEffect(() => {
        const term = searchTerm.toLowerCase();
        const filtered = data.filter(item =>
            item.name.toLowerCase().includes(term)
        );
        setFilteredUniv(filtered);
    }, [searchTerm, data]);

    return (
        <>
            <section className="w-full mx-auto text-center lg:py-5 py-3 bg-[#F5F5F5]" style={{ backdropFilter: "blur(44px)" }}>
                <div className="lg:w-[80%] md:w-[90%] mx-auto">
                    <h1 className="leading-[100%] font-normal">
                        <span
                            className="bg-clip-text text-transparent font-playfair font-normal lg:text-[40px] md:text-[32px] text-[26px] leading-[100%]"
                            style={{ backgroundImage: "linear-gradient(90.02deg, #0A0078 2.5%, #FF383B 43.53%)" }}
                        >
                            Top Universities
                        </span>
                        <span className="font-open-sans font-medium lg:text-[40px] md:text-[32px] text-[26px] leading-[40px]"> for</span>
                        <span className="block font-open-sans font-medium lg:text-[40px] md:text-[32px] text-[26px] leading-[40px]">Your Best Education</span>
                    </h1>
                    <p className="font-rubik font-normal lg:text-[16px] md:text-[14px] text-[12px] leading-[24px] pt-3">
                        Committed to guiding students toward the best universities in India.
                    </p>
                </div>

                {/* Search & Browse */}
                <div className="mt-6 flex flex-col md:flex-row justify-center items-center gap-4">
                    <div className="relative w-[80%] md:w-96">
                        <Image
                            src={search}
                            alt="Search"
                            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500"
                        />
                        <input
                            type="text"
                            placeholder="Search for a university..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="pl-12 pr-4 py-3 w-full rounded-md font-inter shadow-md focus:outline-none focus:ring-2 focus:ring-red-500 text-sm md:text-base"
                        />
                    </div>

                    <button
                        className="flex items-center font-inter font-semibold gap-2 text-white lg:px-6 md:px-4 px-2 lg:py-3 py-2 rounded-md shadow-md transition duration-300 lg:text-[14px] text-[12px] leading-[20px]"
                        style={{
                            backgroundImage: "linear-gradient(90deg, #0A0078 5.5%, #FF383B 96.5%)",
                        }}
                        onClick={(e) => e.preventDefault()}
                    >
                        Search
                        <Image src={arrow} alt="Arrow" className="w-[8.4px] h-[8.24px]" />
                    </button>
                </div>
            </section >

            <section className='containers md:py-8 py-6'>
                <div className="flex flex-col gap-10">
                    {filteredUniv.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-6 md:gap-4 gap-2">
                            {filteredUniv.map((item, index) => (
                                <UnivCard key={index} item={item} />
                            ))}
                        </div>
                    ) : (
                        <div className="flex flex-col items-center justify-center text-center text-gray-500 py-16">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-12 h-12 mb-4 text-red-400"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={1.5}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M12 9v2m0 4h.01M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z"
                                />
                            </svg>
                            <p className="text-lg font-semibold">No results found</p>
                            <p className="text-sm mt-1 text-gray-400 max-w-sm">
                                We couldn’t find any universities matching your search. Try a different keyword or check your spelling.
                            </p>
                        </div>

                    )}
                </div>
            </section>

        </>
    );
};

export default HeroSecetion;

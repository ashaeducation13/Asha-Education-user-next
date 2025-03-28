import Image from "next/image";
import React from "react";
// import search from '../../assets/home/herosection/'
import search from '../../assets/home/herosection/Search.svg'
import arrow from '../../assets/home/herosection/Arrow.svg'

const HeroSecetion = () => {
    return (
        <>
            <section
                className=" w-full mx-auto text-center lg:py-5 py-3 bg-[#F5F5F5]"
                style={{ backdropFilter: "blur(44px)" }}
            >
                <div className="lg:w-[80%] md:w-[90%] mx-auto">
                    <h1 className="leading-[100%]  font-normal">
                        <span
                            className="bg-clip-text text-transparent font-playfair font-normal lg:text-[40px] md:text-[32px] text-[26px] leading-[100%]"
                            style={{
                                backgroundImage:
                                    "linear-gradient(90.02deg, #0A0078 2.5%, #FF383B 43.53%)",
                            }}
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
                            placeholder="Search for..."
                            className="pl-12 pr-4 py-3 w-full rounded-md font-inter shadow-md focus:outline-none focus:ring-2 focus:ring-red-500"
                        />
                    </div>

                    <button
                        className="flex items-center font-inter font-semibold gap-2 text-white lg:px-6 md:px-4 px-2 lg:py-3 py-2 rounded-md shadow-md transition duration-300 lg:text-[14px] text-[12px] leading-[20px]"
                        style={{
                            backgroundImage: "linear-gradient(90deg, #0A0078 5.5%, #FF383B 96.5%)",
                        }}
                    >
                        Browse Programs
                        <Image
                            src={arrow}
                            alt="Arrow"
                            className="w-[8.4px] h-[8.24px]"
                        />
                    </button>
                </div>
            </section >
        </>
    );
};

export default HeroSecetion;
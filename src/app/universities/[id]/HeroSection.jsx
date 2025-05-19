'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import img from '../../../assets/universities/inner/heroimg.png';
import amitylogo from '../../../assets/universities/inner/amitylogo.png';

const HeroSection = ({ data }) => {

    return (
        <section className="containers mx-auto py-12 border-b border-[#E3E3E3]">
            {/* Container for Flex Layout */}
            <div className="flex flex-col md:flex-row items-center gap-6">
                {/* Left Section (Text & Logo) */}
                <div className="md:w-1/2 space-y-5">
                    {/* Logo and Online Badge */}
                    <div className="flex items-center space-x-3">
                        <Image src={data.logo} width={400} height={400} alt="Amity University Online" className="h-12 w-auto" />
                        <span className="px-3 py-2 text-xs font-semibold text-red-600 bg-white border border-red-600 rounded-lg">
                            Online
                        </span>
                    </div>

                    {/* University Name */}
                    <h2 className="text-[24px] md:text-[32px] lg:text-[40px] font-medium font-open-sans">
                        <span
                            className="bg-clip-text text-transparent font-playfair"
                            style={{
                                backgroundImage: "linear-gradient(90.02deg, #0A0078 2.5%, #FF383B 43.53%)",
                            }}
                        >
                            {data.name.split(" ").slice(0, -1).join(" ")}
                        </span>{" "}
                        {data.name.split(" ").slice(-1)}
                    </h2>
                    
                    {/* Mobile Image */}
                    <div className="md:w-full block md:hidden">
                        <div className="border-4 border-gray-200 rounded-xl p-2">
                            <Image src={data.cover_image} width={4000} height={4000} alt="University Building" className="rounded-lg w-full max-h-[340px] object-cover" />
                        </div>
                    </div>
                    
                    {/* Description */}
                    <p className="text-[#121212] text-sm leading-[24px] font-inter md:w-[85%] text-[12px] md:text-[14px] lg:text-[16px] text-justify">
                        {data.description_text1}
                    </p>
                </div>

                {/* Right Section (Image) */}
                <div className="md:w-1/2 hidden md:block self-start">
                    <div className="border-4 border-gray-200 rounded-xl p-2">
                        <Image
                            src={data.cover_image}
                            width={40}
                            height={40}
                            alt="University Building"
                           className="rounded-lg w-full md:h-[360px] lg:h-[350px] xl:h-[400px] 2xl:h-[350px] object-cover"
                        />
                    </div>
                </div>
            </div>

            {/* Accreditation Info (Full Width Below) */}
            <p className="mt-8 text-[#121212] text-sm leading-relaxed text-justify md:text-left font-inter text-[12px] md:text-[14px] lg:text-[16px]">
                {data.description_text2}
            </p>
        </section>
    );
};

export default HeroSection;
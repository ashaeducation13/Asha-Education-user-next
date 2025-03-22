
import React from 'react';
import Image from 'next/image';
import img from '../../../assets/universities/inner/heroimg.png';
import amitylogo from '../../../assets/universities/inner/amitylogo.png';


const HeroSection = () => {
    return (
        <section className="containers mx-auto py-12 border-b border-[#E3E3E3]">
            {/* Container for Flex Layout */}
            <div className="flex flex-col md:flex-row items-center gap-6">
                {/* Left Section (Text & Logo) */}
                <div className="md:w-1/2 space-y-5 ">
                    {/* Logo and Online Badge */}
                    <div className="flex items-center space-x-3">
                        <Image src={amitylogo} alt="Amity University Online" className="h-12 w-auto" />
                        <span className="px-3 py-2 text-xs font-semibold text-red-600 bg-white border border-red-600 rounded-lg">
                            Online
                        </span>

                    </div>

                    {/* University Name */}
                    <h2 className="text-3xl font-medium font-playfair">
                        <span
                            className="bg-clip-text text-transparent font-open-sans"
                            style={{
                                backgroundImage: "linear-gradient(90.02deg, #0A0078 2.5%, #FF383B 43.53%)" ,
                            }}
                        >
                            Amity
                        </span> University
                    </h2>

                    {/* Description */}
                    <p className="text-[#121212]text-sm leading-[24px] font-inter w-[75%] text-[16px] text-justify">
                        Bringing together pedagogy, content, and technology, Amity University Online is home to a range of
                        University Grants Commission (UGC) recognized programmes meant for anytime, anywhere learning.
                        It serves students globally with well-researched curriculum, renowned faculty, cutting-edge technology, and industry partnerships.
                    </p>
                </div>

                {/* Right Section (Image) */}
                <div className="md:w-1/2">
                    <div className="border-4 border-gray-200 rounded-xl p-2">
                        <Image src={img} alt="University Building" className="rounded-lg w-full max-h-[340px]" />
                    </div>
                </div>
            </div>

            {/* Accreditation Info (Full Width Below) */}
            <p className="mt-8 text-[#121212]text-sm leading-relaxed text-justify md:text-left font-inter text-[16px] ">
                The country's first university to receive prestigious UGC accreditations for its online
                programmes, Amity University Online is devoted to creating a transformative learning environment.
                In today's world, where content is mobile and accessible anytime, anywhere, learning is truly a click away.
            </p>
        </section>
    );
};

export default HeroSection;

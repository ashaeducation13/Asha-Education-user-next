'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import img from '../../../assets/universities/inner/heroimg.png';
import amitylogo from '../../../assets/universities/inner/amitylogo.png';
import progress from '../../../../public/progress.svg'

const HeroSection = () => {
    
    return (
        <section className="containers mx-auto md:py-12 py-6 border-b border-[#E3E3E3]">
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
                    <p className='font-open-sans font-semibold lg:text-[20px] md:text-[18px] text-[16px] leading-[100%] text-[#121212]'>Amity University Online</p>
                    {/* University Name */}
                    <h2 className="text-[24px] md:text-[32px] lg:text-[40px] font-semibold font-open-sans leading-[40px]">
                        Bachelor of Commerce
                    </h2>
                    <div className="md:w-1/2 block md:hidden">
                        <div className="border-4 border-gray-200 rounded-xl p-2">
                            <Image src={img} alt="University Building" className="rounded-lg w-full max-h-[340px]" />
                        </div>
                    </div>
                    {/* Description */}
                    <p className="text-[#121212]text-sm leading-[24px] font-inter font-normal md:w-[85%] text-[12px] md:text-[14px] lg:text-[16px] text-justify">
                    Bachelor of Commerce (B.COM) is a 3-year (6 semesters) undergraduate programme  designed to develop the students business acumen, financial literacy, and analytical skills.  The career-oriented Bachelor’s degree programme provides a foundation in all aspects of  commerce. After the successful completion of the programme, learners will gain complete  knowledge of contemporary business practices and a refined ability to use critical thinking  to analyze and interpret information to make informed decisions.
                    </p>

                    <button className='flex gap-3 bg-[#FF383B] text-white px-6 py-2 rounded-[8px] font-inter font-semibold lg:text-[14px] text-[12px] leading-[18px]'>
                        <Image src={progress} alt='progress' className='lg:w-4 lg:h-4 h-[14px] w-[14px]'  />
                        Full Details
                        </button>
                </div>

                {/* Right Section (Image) */}
                <div className="md:w-1/2 hidden md:block">
                    <div className="border-4 border-gray-200 rounded-xl p-2">
                        <Image src={img} alt="University Building" className="rounded-lg w-full max-h-[340px]" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
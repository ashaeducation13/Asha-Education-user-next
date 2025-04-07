"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import PartnerCard from "@/components/home/PartnerCard";
import Image from "next/image";

import img1 from '../../assets/home/partnersection/cardimg1.webp'
import img2 from '../../assets/home/partnersection/cardimg2.webp'
import img3 from '../../assets/home/partnersection/cardimg3.webp'
import img4 from '../../assets/home/partnersection/cardimg4.webp'

import logo1 from '../../assets/home/partnersection/dpu.png'
import logo2 from '../../assets/home/partnersection/nmims.png'
import logo3 from '../../assets/home/partnersection/amity.png'
import logo4 from '../../assets/home/partnersection/manipal.png'

import arrow from '../../assets/home/herosection/Arrow.svg'
import arrowright from '../../assets/home/partnersection/darkarrowright.svg'
import { UniversityFetch } from "@/services/api";
import MainForm from "@/components/Forms/MainForm";



const Universities = ({ data }) => {

    const [univ, setUniv] = useState(data || []);
    const [selectedUniversity, setSelectedUniversity] = useState(data?.[0] || null);
    const [showModal, setShowModal] = useState(false);


    return (
        <>
            <div className="relative mx-auto text-center my-10 ">
                <h1 className="text-[20px] md:text-[24px] lg:text-[30px] font-semibold text-gray-900 font-open-sans">
                    Our Prestigious Partner Universities
                </h1>
                <p className="mt-4 text-[12px] md:text-[14px] lg:text-[16px] text-gray-600 w-[82%] md:w-[52%] mx-auto font-inter font-normal leading-[24px]">
                    Explore our network of globally recognized partner universities, offering diverse programs and exceptional academic opportunities for students worldwide
                </p>
            </div>
            <section className="relative py-6 flex justify-between gap-2 md:gap-16 items-start align-center w-[90%] ml-auto">

                {/* Left: University Buttons */}
                <div className="flex flex-col gap-4  md:min-w-[200px]">
                    {univ.map((university) => (
                        <button
                            key={university.id}
                            className={` w-full flex flex-col  md:flex-row items-center text-center justify-start gap-2 px-4 py-2 border rounded-md text-black text-[12px] md:text-[14px] lg:text-[16px]  font-normal transition-all font-rubik md:text-left md:whitespace-nowrap
                                        ${selectedUniversity.id === university.id ? "border-[#0A0078] text-black" : "border-gray-300 bg-white hover:bg-gray-100"}
                                    `}
                            onClick={() => setSelectedUniversity(university)}
                        >
                            <Image
                                src={university.logo}
                                alt={university.name}
                                width={30}
                                height={30}
                                className="object-contain "
                            />
                            <span className="break-words whitespace-normal hidden md:block">{university.name}</span>
                        </button>
                    ))}
                    {/* {universityData.map((university) => (
                        <button
                            key={university.id}
                            className={` w-full flex flex-col  md:flex-row items-center text-center justify-start gap-2  md:px-4 py-2 border rounded-md text-black text-[12px] md:text-[14px] lg:text-[16px]  font-normal transition-all font-rubik md:text-left md:whitespace-nowrap
                                ${selectedUniversity.id === university.id ? "border-[#0A0078] text-black" : "border-gray-300 bg-white hover:bg-gray-100"}
                            `}
                            onClick={() => setSelectedUniversity(university)}
                        >
                            <Image
                                src={university.logo}
                                alt={university.name}
                                className="h-8 w-8 object-contain"
                            />
                            <span className="break-words whitespace-normal">{university.name}</span>
                        </button>
                    ))} */}

                    {/* Desktop Buttons (Hidden on small screens) */}
                    <div className="flex-col justify-between w-full max-w-[640px] mx-auto gap-2 items-center mt-6 hidden md:flex">
                        <Link href="/programs" passHref>
                            <button
                                className="cursor-pointer flex items-center justify-center font-inter font-semibold gap-2 text-white px-4 py-2 rounded-lg shadow-md transition duration-300 text-[14px] w-full"
                                style={{
                                    backgroundImage: "linear-gradient(90deg, #0A0078 5.5%, #FF383B 96.5%)",
                                }}
                            >
                                Browse all Programs
                                <Image
                                    src={arrow}
                                    alt="Arrow"
                                    className="w-[10px] h-[10px]"
                                />
                            </button>
                        </Link>
                        <Link href="/comparison" passHref>

                            <button
                                className="cursor-pointer flex items-center justify-center font-inter font-semibold gap-2 px-4 py-2 rounded-lg shadow-md transition duration-300 text-[14px] w-full border border-gray-300 bg-white hover:bg-gray-100"
                            >
                                Compare Universities
                                <Image
                                    src={arrowright}
                                    alt="Arrow"
                                    className="w-[10px] h-[10px]"
                                />
                            </button>
                        </Link>

                    </div>

                </div>

                {/* Right: Swiper Carousel */}
                <div className="w-full flex justify-end overflow-hidden">
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={0}
                        loop={true}
                        autoplay={{ delay: 1000, disableOnInteraction: false }}
                        breakpoints={{
                            640: { slidesPerView: 1.5 },
                            768: { slidesPerView: 2 },
                            1024: { slidesPerView: 2, spaceBetween: 5 },
                            1440: { slidesPerView: 3.5, spaceBetween: 10 },
                        }}
                        className="w-full"
                    >
                        {selectedUniversity?.programs?.map((course) => (
                            <SwiperSlide key={course.id} className="flex justify-center px-1 py-5">
                                <PartnerCard course={course} onApplyClick={() => setShowModal(true)}  />  {/* Pass as a single prop */}

                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </section>
            <div className="containers flex justify-between w-full max-w-[640px] mx-auto gap-2 items-center py-6 md:hidden">
                <button
                    className="flex items-center justify-center font-inter font-semibold gap-2 text-white px-4 py-2 rounded-lg shadow-md transition duration-300 text-[14px] w-full"
                    style={{
                        backgroundImage: "linear-gradient(90deg, #0A0078 5.5%, #FF383B 96.5%)",
                    }}
                >
                    Browse all Programs
                    <Image
                        src={arrow}
                        alt="Arrow"
                        className="w-[10px] h-[10px]"
                    />
                </button>

                <button
                    className="flex items-center justify-center font-inter font-semibold gap-2 px-4 py-2 rounded-lg shadow-md transition duration-300 text-[14px] w-full border border-gray-300 bg-white hover:bg-gray-100"
                >
                    Compare Universities
                    <Image
                        src={arrowright}
                        alt="Arrow"
                        className="w-[10px] h-[10px]"
                    />
                </button>
            </div>
            {showModal && (
                <div className="fixed inset-0 z-[9999] bg-black/50 bg-opacity-50 flex items-center justify-center">
                    <MainForm onClose={() => setShowModal(false)} />
                </div>
            )}
        </>
    );
};

export default Universities;
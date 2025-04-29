"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import PartnerCard from "@/components/home/PartnerCard";
import Image from "next/image";
import { motion } from "framer-motion"; 
import arrow from "../../assets/home/herosection/Arrow.svg";
import arrowright from "../../assets/home/partnersection/darkarrowright.svg";
import MainForm from "@/components/Forms/MainForm";

const Universities = ({ data }) => {
  const [univ, setUniv] = useState(data || []);
  const [selectedUniversity, setSelectedUniversity] = useState(data?.[0] || null);
  const [showModal, setShowModal] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);

  return (
    <>
      {/* Header Section */}
      <div className="relative mx-auto text-center my-6 md:my-10 px-4">
        <motion.h1
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true, amount: 0.5 }}
          className="text-xl md:text-2xl lg:text-3xl font-semibold text-gray-900 font-open-sans">
          Our Prestigious Partner Universities
        </motion.h1>
        <motion.p
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true, amount: 0.5 }}
          className="mt-3 md:mt-4 text-xs md:text-sm lg:text-base text-gray-600 w-full md:w-3/4 lg:w-1/2 mx-auto font-inter font-normal leading-relaxed">
          Explore our network of globally recognized partner universities,
          offering diverse programs and exceptional academic opportunities for
          students worldwide
        </motion.p>
      </div>

      {/* Main Content Section - Keeping w-[90%] ml-auto as requested */}
      <section className="relative  md:py-6 flex flex-row justify-between gap-4 md:gap-8 lg:gap-16 items-start w-[90%] ml-auto ">
        {/* Left: University Buttons - Keeping visible on all screen sizes */}
        <div className="flex flex-col gap-3 md:min-w-[200px] lg:min-w-[220px]">
          <div className="flex flex-col gap-3 max-h-[280px] overflow-y-auto pr-1 scrollbar-thin">
            {univ.map((university) => (
              <motion.button
                key={university.id}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className={`w-full flex flex-col md:flex-row items-center gap-2 px-1 md:px-3 py-2 border rounded-md text-black text-xs md:text-sm font-normal transition-all font-rubik md:text-left
              ${selectedUniversity?.id === university.id
                    ? "border-[#0A0078] text-black"
                    : "border-gray-300 bg-white hover:bg-gray-100"
                  }`}
                onClick={() => setSelectedUniversity(university)}
              >
                <Image
                  src={university.logo_vertical}
                  alt={university.name}
                  width={30}
                  height={30}
                  className="object-contain flex-shrink-0"
                />
                <span className="break-words">{university.name}</span>
              </motion.button>
            ))}
          </div>

          {/* Desktop Buttons (Hidden on small screens) */}
          <div className="flex-col justify-between w-full gap-3 items-center hidden md:flex mt-3">
            <Link href="/programs" passHref className="w-full">
              <button
                className="cursor-pointer flex items-center justify-center font-inter font-semibold gap-2 text-white px-3 py-2 rounded-lg shadow-md transition duration-300 text-xs md:text-sm w-full"
                style={{
                  backgroundImage:
                    "linear-gradient(90deg, #0A0078 5.5%, #FF383B 96.5%)",
                }}
              >
                Browse all Programs
                <Image src={arrow} alt="Arrow" className="w-3 h-3" />
              </button>
            </Link>
            <Link href="/comparison" passHref className="w-full">
              <button className="cursor-pointer flex items-center justify-center font-inter font-semibold gap-2 px-3 py-2 rounded-lg shadow-md transition duration-300 text-xs md:text-sm w-full border border-gray-300 bg-white hover:bg-gray-100">
                Compare Universities
                <Image
                  src={arrowright}
                  alt="Arrow"
                  className="w-3 h-3"
                />
              </button>
            </Link>
          </div>
        </div>

        {/* Right: Swiper Carousel */}
        <div className="w-full flex justify-end overflow-x-hidden">
          <Swiper
            slidesPerView={1.1}
            spaceBetween={12}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            breakpoints={{
              480: { slidesPerView: 1.2, spaceBetween: 12 },
              640: { slidesPerView: 1.5, spaceBetween: 16 },
              768: { slidesPerView: 2, spaceBetween: 16 },
              1024: { slidesPerView: 2.2, spaceBetween: 20 },
              1280: { slidesPerView: 3, spaceBetween: 24 },
            }}
            className="w-full"
          >
            {selectedUniversity?.programs?.map((course) => (
              <SwiperSlide key={course.id} className="flex justify-center md:pl-4 pb-14">

                <PartnerCard
                  course={course}
                  onApplyClick={(course) => {
                    setSelectedCourse(course);
                    setShowModal(true);
                  }}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Mobile Action Buttons */}
      <div className="containers  mx-auto pb-4 flex justify-between gap-3 items-center md:hidden">
        <Link href="/programs" passHref className="w-1/2">
          <button
            className="flex items-center justify-center font-semibold gap-1 text-white px-2 py-2 rounded-lg shadow transition duration-300 text-xs w-full"
            style={{
              backgroundImage: "linear-gradient(90deg, #0A0078 5.5%, #FF383B 96.5%)",
            }}
          >
            Browse all Programs
            <Image src={arrow} alt="Arrow" className="w-2 h-2" />
          </button>
        </Link>

        <Link href="/comparison" passHref className="w-1/2">
          <button
            className="flex items-center justify-center font-semibold gap-1 px-2 py-2 rounded-lg shadow transition duration-300 text-xs w-full border border-gray-300 bg-white hover:bg-gray-100"
          >
            Compare Universities
            <Image src={arrowright} alt="Arrow" className="w-2 h-2" />
          </button>
        </Link>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
          <div className="w-full max-w-lg">
            <MainForm onClose={() => setShowModal(false)} course={selectedCourse} />
          </div>
        </div>
      )}
    </>
  );
};

export default Universities;
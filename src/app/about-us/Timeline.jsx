"use client";

import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { motion } from "framer-motion";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
// Icons
import arrowForwardIcon from "../../../public/about-us/arrow_forward.svg";
// Images

import Down from "../../../public/about-us/down.svg";
// import DividerWithLabel from "@/components/DividerWithLabel";

function Timeline({data}) {
  const [activeIndex, setActiveIndex] = useState(2);
  const [isMobile, setIsMobile] = useState(false);
  const [isOpen, setIsOpen] = useState(1);

  const swiperRef = useRef;
  const cardsRef = useRef([]);

  const handleClick = (index) => {
    setIsOpen(index === isOpen ? false : index);
  };

  useEffect(() => {
    const checkMobileView = () => {
      if (window.innerWidth < 640) {
        setActiveIndex(1);
      }
      setIsMobile(window.innerWidth < 640);
    };

    checkMobileView();

    // Add event listener for window resize
    window.addEventListener("resize", checkMobileView);

    return () => {
      window.removeEventListener("resize", checkMobileView);
    };
  }, []);

  if (!data) return null;

//   const updatedData = data.map((item, index) => ({
//     ...item,
//     color: colors[index] || item.color,
//   }));

  return (
    <section className="lg:py-[30px] py-6 md:py-[40px]  relative">
      <div className="containers relative">
        <Swiper
          slidesPerView={3.5}
          spaceBetween={20}
          modules={[Navigation]}
          navigation={{
            prevEl: ".custom-prev-arrow",
            nextEl: ".custom-next-arrow",
          }}
          className="mySwiper"
          onSlideChange={(swiper) => {
            console.log("Current Swiper Index:", swiper.activeIndex + 1);
            setActiveIndex(swiper.activeIndex + (isMobile ? 1 : 2));
          }}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 2.5,
              spaceBetween: 10,
            },
            1440: {
              slidesPerView: 2.5,
              spaceBetween: 30,
            },
          }}
        >
          {data.map((item, index) => (
            <SwiperSlide key={index}>
              <TimelineItem
                index={index + 1}
                item={item}
                activeIndex={activeIndex}
                cardRef={(el) => (cardsRef.current[index] = el)}
                // isOpen={isOpen}
                handleClick={handleClick}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        {/* <div className="flex justify-center items-center mt-6 space-x-4">
          <button
            className="custom-prev-arrow p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition-colors"
            onClick={() => swiperRef.current?.swiper.slidePrev()}
          >
            <Image
              src={arrowForwardIcon}
              alt="Previous"
              className="transform rotate-180 w-6 h-6"
            />
          </button>
          <button
            className="custom-next-arrow p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition-colors"
            onClick={() => swiperRef.current?.swiper.slideNext()}
          >
            <Image
              src={arrowForwardIcon}
              alt="Next"
              className="transform w-6 h-6"
            />
          </button>
        </div> */}
      </div>
      {/* <DividerWithLabel className="containers pt-[50px]" /> */}
    </section>
  );
}

const TimelineItem = ({
  index,
  item,
  activeIndex,
  cardRef,
//   isOpen,
  handleClick,
}) => {
  return (
    <div className="timeline-item relative flex flex-col z-10">
      <motion.div
        className={`timeline-index relative flex justify-center items-center w-[40px] h-[40px] rounded-full border-[1px] bg-white cursor-pointer ${
          activeIndex >= index ? "bg-blue-500 text-white" : "border-blue-500"
        }`}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.2, duration: 0.5, ease: "easeOut" }}
      >
        <div
          className={`w-[27px] h-[27px] flex justify-center items-center rounded-full ${
            activeIndex >= index ? "bg-blue-500" : "bg-blue-300"
          }`}
        >
          <span className="text-white font-bold text-[14px]">
            {index < 10 ? `0${index}` : index}
          </span>
        </div>
      </motion.div>
      {index <= activeIndex && (
        <motion.hr
          className="border-0 bg-[#82B1FF] absolute top-[20px] left-[34px] h-[2px]"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{
            duration: 0.5,
            ease: "easeInOut",
          }}
        />
      )}
      <motion.div
        ref={cardRef}
        className="timeline-card rounded-[18px] p-[30px] m-4  relative mt-[20px] shadow-lg"
        style={{
          backgroundColor: item.color,
        }}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: index * 0.3,
          duration: 0.5,
          ease: "easeOut",
        }}
        onClick={() => handleClick(index)}
      >
        {/* <Image
          className="rounded-[8px] w-full h-auto"
          src={item.image}
          alt={item.title}
          width={0}
          height={0}
          sizes="100vw"
        /> */}
        <div className="flex justify-between items-baseline px-[5px] gap-[5px] cursor-pointer">
          <h2 className="lg:text-[36px] md:text-[32px] text-[24px] font-open-sans font-semibold leading-[48px] text-[#575757]">
            {item.title}
          </h2>
          {/* <Image
            className="cursor-pointer"
            src={Down}
            alt="Down arrow"
            width={11}
            height={6}
          /> */}
        </div>
        {/* {isOpen === index && ( */}
          <motion.p
            className="mt-4 lg:text-[16px] md:text-[14px] text-[12px] font-rubik font-normal lg:leading-[24px] md:leading-[21px] leading-[18px] text-[#383838]"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {item.description}
          </motion.p>
        {/* )} */}
      </motion.div>
    </div>
  );
};

export default Timeline;

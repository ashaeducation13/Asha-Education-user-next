"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

// Add any other necessary Swiper styles here
import { Navigation, Pagination } from "swiper/modules";

const studentTestimonials = [
  {
    image: "/about-us/uimage1.jpg",
    logo: "/about-us/unilogo.png",
    description:
      "Lorem ipsum dolor sit amet consectetur eget maecenas sapien fusce egestas risus purus suspendisse turpis volutpat onare imperdiet bibendum eleifend quam feugiat sit semper fames id diam diam nisi mauris netus facilisi semper elementum quis turpis dui viverra nisl.",
    name: "Amit Sharma",
    course: "B.Tech in Computer Science",
  },
  {
    image: "/about-us/uimage1.jpg",
    logo: "/about-us/unilogo.png",
    description:
      "Lorem ipsum dolor sit amet consectetur eget maecenas sapien fusce egestas risus purus suspendisse turpis volutpat onare imperdiet bibendum eleifend quam feugiat sit semper fames id diam diam nisi mauris netus facilisi semper elementum quis turpis dui viverra nisl.",
    name: "Priya Verma",
    course: "MBA in Finance",
  },
  {
    image: "/about-us/uimage1.jpg",
    logo: "/about-us/unilogo.png",
    description:
      "Lorem ipsum dolor sit amet consectetur eget maecenas sapien fusce egestas risus purus suspendisse turpis volutpat onare imperdiet bibendum eleifend quam feugiat sit semper fames id diam diam nisi mauris netus facilisi semper elementum quis turpis dui viverra nisl.",
    name: "Rahul Mehta",
    course: "B.Sc in Biotechnology",
  },
];

const StudentSwiper = () => {
  // Create a ref for the swiper
  const swiperRef = useRef(null);

  const handleNext = () => {
    swiperRef.current.swiper.slideNext();
  };

  const handlePrev = () => {
    swiperRef.current.swiper.slidePrev();
  };

  return (
    <div className="relative">
      {/* Swiper Component */}
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        className="px-10"
        ref={swiperRef} // Attach the swiperRef to the Swiper component
        modules={[Navigation, Pagination]}
      >
        {studentTestimonials.map((student, index) => (
          <SwiperSlide key={index}>
            <div className="flex bg-white text-black rounded-[20px] overflow-hidden shadow-lg w-[70%] mx-auto h-[375px]">
              <div className="w-2/5 px-[20px] pt-[20px]">
                <img
                  src={student.image}
                  alt={student.name}
                  className="w-full h-full object-cover rounded-tl-[8px] rounded-tr-[8px]"
                />
              </div>
              <div className="w-3/5 pt-2 mx-[30px] flex flex-col justify-center">
                <img
                  src={student.logo}
                  alt="University Logo"
                  className="w-[91px] h-[37px] mb-2"
                />
                <p className="text-sm mb-2">{student.description}</p>
                <h3 className="font-semibold text-lg">{student.name}</h3>
                <p className="font-semibold text-sm text-gray-600">
                  {student.course}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Left Navigation Button */}
      <button
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-transparent p-2 cursor-pointer"
        onClick={handlePrev}
      >
        <img
          src="/about-us/Arrow-left.svg" 
          alt="Previous"
          className="w-[40px] h-[40px]"
        />
      </button>

      {/* Right Navigation Button */}
      <button
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-transparent p-2 cursor-pointer"
        onClick={handleNext}
      >
        <img 
          src="/about-us/Arrow-right.svg" 
          alt="Next"
          className="w-[40px] h-[40px]"
        />
      </button>
    </div>
  );
};

function SuccessfullStudents() {
  return (
    <section className="px-[100px] bg-red-500 text-white mt-[100px] py-12">
      <h2
        className="text-4xl font-bold text-center mb-8 bg-clip-text text-transparent"
        style={{
          backgroundImage:
            "linear-gradient(180deg, #FFFFFF 68.84%, #FF383B 117.39%)",
        }}
      >
        Hear from Our <br /> Successful Students
      </h2>
      <StudentSwiper />
    </section>
  ); 
};

export default SuccessfullStudents;

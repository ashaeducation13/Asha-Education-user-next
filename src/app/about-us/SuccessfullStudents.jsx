"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation"; // Import navigation styles
import { Navigation } from "swiper/modules";

import Image from "next/image";
import University from "../../assets/about-us/unilogo.png";
import Uimage from "../../assets/about-us/uimage1.jpg";

const studentTestimonials = [
  {
    image: Uimage,
    logo: University,
    description:
      "Lorem ipsum dolor sit amet consectetur eget maecenas sapien fusce egestas risus purus suspendisse turpis volutpat onare imperdiet bibendum eleifend quam feugiat sit semper fames id diam diam nisi mauris netus facilisi semper elementum quis turpis dui viverra nisl.",
    name: "Amit Sharma",
    course: "B.Tech in Computer Science",
  },
  {
    image: Uimage,
    logo: University,
    description:
      "Lorem ipsum dolor sit amet consectetur eget maecenas sapien fusce egestas risus purus suspendisse turpis volutpat onare imperdiet bibendum eleifend quam feugiat sit semper fames id diam diam nisi mauris netus facilisi semper elementum quis turpis dui viverra nisl.",
    name: "Priya Verma",
    course: "MBA in Finance",
  },
  {
    image: Uimage,
    logo: University,
    description:
      "Lorem ipsum dolor sit amet consectetur eget maecenas sapien fusce egestas risus purus suspendisse turpis volutpat onare imperdiet bibendum eleifend quam feugiat sit semper fames id diam diam nisi mauris netus facilisi semper elementum quis turpis dui viverra nisl.",
    name: "Rahul Mehta",
    course: "B.Sc in Biotechnology",
  },
];

const StudentSwiper = () => {
  return (
    <div className="relative w-full mt-6">
      {/* Swiper Component with built-in navigation */}
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        className="px-10"
        navigation={true} // Enables Swiper's built-in navigation
        modules={[Navigation]}
      >
        {studentTestimonials.map((student, index) => (
          <SwiperSlide key={index}>
            <div className="flex bg-white text-black rounded-[20px] overflow-hidden shadow-lg w-[70%] mx-auto h-[375px]">
              <div className="w-2/5 px-[20px] pt-[20px]">
                <Image
                  src={student.image}
                  alt={student.name}
                  className="w-full h-full object-cover rounded-tl-[8px] rounded-tr-[8px]"
                />
              </div>
              <div className="w-3/5 pt-6 mx-[30px] flex flex-col justify-start">
                <Image
                  src={student.logo}
                  alt="University Logo"
                  className="w-[91px] h-[37px] mb-2"
                />
                <p className="text-sm mb-2 font-inter">{student.description}</p>
                <h3 className="font-semibold text-[16px] leading-[22px] text-grey-600 font-open-sans">{student.name}</h3>
                <p className="font-semibold  text-[16px] leading-[22px] text-black-600 font-open-sans">
                  {student.course}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

function SuccessfulStudents() {
  return (
    <section className="px-[100px] bg-red-500 text-white mt-[100px] py-12">
      <h2
        className="font-open-sans lg:text-[40px] md:text-[32px] text-[24px] leading-[24px] md:leading-[32px] lg:leading-[40px] font-semibold text-center mb-4 bg-clip-text text-transparent"
        style={{
          backgroundImage:
            "linear-gradient(180deg, #FFFFFF 68.84%, #FF383B 117.39%)",
        }}
      >
        Hear from Our <br /> Successful Students
      </h2>
      <p className="text-center font-inter font-normal lg:text-[16px] md:text-[14px] text-[12px] leading-[24px]">98% of students achieved their admission goals.</p>
      <StudentSwiper />
    </section>
  );
}

export default SuccessfulStudents;

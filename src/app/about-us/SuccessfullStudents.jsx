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
    <div className="relative w-full mt-6 px-4 md:px-0">
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        className="px-4 md:px-10" // More balanced padding
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        modules={[Navigation]}
      >
        {studentTestimonials.map((student, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col md:flex-row bg-white text-black rounded-[20px] overflow-hidden shadow-lg w-full max-w-3xl mx-auto min-h-[300px] md:h-auto">
              {/* Image Container */}
              <div className="lg:w-[300px] lg:h-[300px] md:w-[260px] md:h-[320px] h-[180px] w-[290px] px-5 md:pt-5 md:pl-5">
                <Image
                  src={student.image}
                  alt={student.name}
                  width={400}
                  height={400}
                  className="w-full h-full object-cover rounded-b-[8px] md:rounded-t-[8px] md:rounded-tl-[8px]"
                />
              </div>

              {/* Content Container */}
              <div className="w-full md:w-3/5 p-4 md:p-6 flex flex-col">
                <div className="mb-4">
                  <Image
                    src={student.logo}
                    alt="University Logo"
                    width={91}
                    height={37}
                    className="w-[70px] h-[30px] md:w-[91px] md:h-[37px]"
                  />
                </div>

                <div className="flex-grow overflow-y-auto mb-4">
                  <p className="font-normal lg:text-[14px] text-[13px] lg:leading-[22px] leading-[20px] font-inter">
                    {student.description}
                  </p>
                </div>

                <div>
                  <h3 className=" text-[16px] leading-[22px] text-grey-600 font-open-sans">
                    <span className="font-semibold">{student.name}</span>
                    <span className="block font-bold">{student.course}</span>
                  </h3>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* Custom Navigation Buttons */}
        <div className="swiper-button-prev hidden md:block"></div>
        <div className="swiper-button-next hidden md:block"></div>
      </Swiper>
      {/* <style jsx>{`
        .swiper-custom-prev,
        .swiper-custom-next {
          width: 40px;
          height: 40px;
          background-color: white;
          border-radius: 50%;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }
        .swiper-custom-prev::after,
        .swiper-custom-next::after {
          content: "";
          display: block;
          width: 12px;
          height: 12px;
          border: 2px solid #333;
          border-width: 2px 0 0 2px;
        }
        .swiper-custom-prev::after {
          transform: rotate(-45deg) translate(2px, 2px);
        }
        .swiper-custom-next::after {
          transform: rotate(135deg) translate(2px, 2px);
        }
      `}</style> */}
    </div>
  );
};

function SuccessfulStudents() {
  return (
    <section className="md:px-[100px] bg-red-500 text-white  py-12">
      <h2
        className="font-open-sans lg:text-[40px] md:text-[32px] text-[24px] leading-[24px] md:leading-[32px] lg:leading-[40px] font-semibold text-center mb-4 bg-clip-text text-transparent"
        style={{
          backgroundImage:
            "linear-gradient(180deg, #FFFFFF 68.84%, #FF383B 117.39%)",
        }}
      >
        Hear from Our <br /> Successful Students
      </h2>
      <p className="text-center font-inter font-normal lg:text-[16px] md:text-[14px] text-[12px] leading-[24px]">
        98% of students achieved their admission goals.
      </p>
      <StudentSwiper />
    </section>
  );
}

export default SuccessfulStudents;

"use client";
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import University from "../../assets/about-us/unilogo.png";
import Uimage from "../../assets/about-us/uimage1.jpg";
import bg from '../../assets/home/programsection/bg1.svg'
import { TestimonialFetch } from "@/services/api";
import { motion } from "framer-motion";


const studentTestimonials = [
  {
    image: Uimage,
    logo: University,
    description:
      "Asha Education's personalized guidance and support were instrumental in my academic journey.Their expert counsellors helped me select the right university and program, simplifying the entire application process. Thanks to their assistance, I am now pursuing my dream course and feel wellprepared for my future career",
    name: "Amit Sharma",
    course: "B.Tech in Computer Science",
  },
  {
    image: Uimage,
    logo: University,
    description:
      "Asha Education's personalized guidance and support were instrumental in my academic journey.Their expert counsellors helped me select the right university and program, simplifying the entire application process. Thanks to their assistance, I am now pursuing my dream course and feel wellprepared for my future career",
    name: "Priya Verma",
    course: "MBA in Finance",
  },
  {
    image: Uimage,
    logo: University,
    description:
      "Asha Education's personalized guidance and support were instrumental in my academic journey.Their expert counsellors helped me select the right university and program, simplifying the entire application process. Thanks to their assistance, I am now pursuing my dream course and feel wellprepared for my future career",
    name: "Rahul Mehta",
    course: "B.Sc in Biotechnology",
  },
];

const StudentSwiper = ({ data }) => {
  console.log("testim data", data);

  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [testim, setTestim] = useState(data || []);


  return (
    <div className="relative containers w-full mt-6 ">
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        className="px-4 md:px-10"
        modules={[Navigation]}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onSwiper={(swiper) => {
          setTimeout(() => {
            if (swiper && swiper.params?.navigation) {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
              swiper.navigation.init();
              swiper.navigation.update();
            }
          });
        }}
      >
        {testim?.map((student, index) => (
          <SwiperSlide key={index}>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true, amount: 0.4 }} className="flex flex-col md:flex-row bg-white text-black rounded-[20px] overflow-hidden shadow-lg w-full max-w-3xl mx-auto md:min-h-[300px]">
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.4 }} className="md:w-[260px] lg:w-[300px] h-[180px] md:h-[300px] relative">
                <Image
                  src={student.photo_video}
                  alt={student.name}
                  width={400}
                  height={400}
                  className="w-full h-full object-cover md:rounded-tl-[8px]"
                />
              </motion.div>

              <div className="flex-1 p-5 flex flex-col">
                <div className="mb-4">
                  <Image
                    src={student.university.logo}
                    alt="University Logo"
                    width={91}
                    height={37}
                    className="w-[70px] h-[30px]  md:h-[37px]"
                  />
                </div>

                <div className="flex-grow mb-4">
                  <p className="font-normal text-[13px] lg:text-[14px] leading-[20px] lg:leading-[22px] font-inter">
                    {student.description}
                  </p>
                </div>

                <div>
                  <span className="font-semibold">{student.name}</span>
                  <span className="block font-bold">{student.program_name}</span>
                </div>
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation Buttons */}
      <div className="absolute  md:top-1/2 left-[60%] sm:left-[70%] md:-left-18 lg:-left-4 xl:left-2 right-2 md:-right-18 lg:-right-4 xl:right-2 flex justify-between md:-translate-y-1/2 z-10 px-4 md:px-0 mt-6 md:mt-0 mb-4">
        <button
          ref={prevRef}
          className="group w-10 h-10 flex items-center justify-center border-2 border-white rounded-md bg-transparent transition-all hover:bg-white"
        >
          <ArrowLeft className="w-5 h-5 text-white transition-all group-hover:text-red-500" />
        </button>

        <button
          ref={nextRef}
          className="group w-10 h-10 flex items-center justify-center border-2 border-white rounded-md bg-transparent transition-all hover:bg-white"
        >
          <ArrowRight className="w-5 h-5 text-white transition-all group-hover:text-red-500" />
        </button>
      </div>
    </div>
  );
};

function SuccessfulStudents({ data }) {
  return (
    <section className="bg-red-500 text-white md:py-14 pt-6 pb-24  relative lg:my-10 md:my-6"
      style={{
        backgroundImage: `url(${bg.src})`,
        backgroundSize: "cover",
        backgroundPosition: "left",
      }}>
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true, amount: 0.4 }}
        className="font-open-sans text-[24px] md:text-[32px] lg:text-[40px] leading-[32px] md:leading-[40px] lg:leading-[48px] font-semibold text-center mb-4 bg-clip-text text-transparent"
        style={{
          backgroundImage:
            "linear-gradient(180deg, #FFFFFF 68.84%, #FF383B 117.39%)",
        }}
      >
        Reviews and Success Stories <br /> from Our Alumni
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true, amount: 0.4 }} className="text-center font-inter font-normal text-[12px] md:text-[14px] lg:text-[16px] leading-[24px] mb-8">
        98% of students achieved their admission goals.
      </motion.p>
      <StudentSwiper data={data} />
    </section>
  );
}

export default SuccessfulStudents;
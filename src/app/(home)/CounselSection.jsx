"use client";
import HomeForm from "@/components/Forms/HomeForm";
import Card from "antd/es/card/Card";
import React, { useState } from "react";
import Image from "next/image";
import icon1 from "../../assets/topleft.svg";
import icon2 from "../../assets/topright.svg";
import icon3 from "../../assets/bottomleft.svg";
import icon4 from "../../assets/bottomright.svg";
import { VideoContainer } from "../../components/VideoContainer";
// import ReactPlayer from 'react-player';
const video1 = "/videos/vid1.mp4";

const CounselSection = () => {
  return (
    <div className="bg-[white]">
      <section className="containers py-10 relative">
        <Image
          src={icon1}
          alt="Icon 1"
          className="absolute top-[30px] left-[30px] w-8 h-8 hidden md:block"
        />

        {/* Top-right Icon */}
        <Image
          src={icon2}
          alt="Icon 2"
          className="absolute top-[30px] right-[30px] w-8 h-8 hidden md:block"
        />

        {/* Bottom-left Icon */}
        <Image
          src={icon3}
          alt="Icon 3"
          className="absolute bottom-[30px] left-[30px] w-8 h-8 hidden md:block"
        />

        {/* Bottom-right Icon */}
        <Image
          src={icon4}
          alt="Icon 4"
          className="absolute bottom-[30px] right-[30px] w-8 h-8 hidden md:block"
        />

        {/* heading text */}
        <div className="relative containers mx-auto text-center">
          <h1 className="text-[24px] md:text-[36px] lg:text-[48px] font-semibold text-gray-900 font-open-sans">
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(90.02deg, #0A0078 2.5%, #FF383B 43.53%)",
              }}
            >
              Get Free{" "}
            </span>{" "}
            Counselling
          </h1>
          <p className="mt-4 text-[12px] md:text-[14px] lg:text-[16px] text-[#6D758F]  mx-auto font-rubik font-normal leading-[24px]">
            Receive personalized academic guidance at no cost. Our expert
            counsellors are here to help you navigate your educational journey.
            Schedule your free session today.
          </p>
        </div>

        {/* form and video section */}

        <div className="containers w-full py-4 md:p-8 flex flex-col-reverse md:flex-row items-stretch justify-center md:gap-6 lg:gap:8 mx-auto">
          <div className="flex-1 flex flex-col">
            <HomeForm />
          </div>

          <div className="flex-1 flex">
            <VideoContainer
              video={video1}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default CounselSection;

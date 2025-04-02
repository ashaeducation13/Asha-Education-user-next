"use client";
import React from "react";
import Image from "next/image";
import About1 from "../../assets/about-us/asha-about1.jpg";
import play from "../../assets/home/Trustsection/play.svg";
import { useState } from "react";

function HeroSection() {
  const [playVideo, setPlayVideo] = useState(false);
  return (
    <section className="relative containers flex flex-col md:flex-row items-center justify-between xl:px-0 pt-8 md:pt-12 pb-10 md:pb-20">
      {/* Wrapper with fixed width on 1440px screens */}
      <div className="w-full xl:max-w-[1106px] mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Left Side - Text Content */}
        <div className="w-full md:w-1/2 text-center md:text-left px-4 md:px-0 order-2 md:order-1">
          <h1 className="pt-[20px] md:pt-[30px] text-[28px] leading-[32px] md:text-[42px] md:leading-[52px] lg:text-[64px] lg:leading-[70px] font-normal text-[#121212] font-open-sans text-start">
            <span
              className="bg-clip-text text-transparent font-playfair"
              style={{
                backgroundImage:
                  "linear-gradient(90.02deg, #0A0078 2.5%, #FF383B 43.53%)",
              }}
            >
              Building Bright Futures
            </span>{" "}
            Through Education
          </h1>

          <p className="font-normal leading-[18px] md:leading-[21px] lg:leading-[24px] w-full md:w-[80%] lg:w-[70%] text-[12px] md:text-[16px] text-[#121212] font-rubik mt-3 md:mt-4 mb-6 md:mb-8 text-start">
            Asha Education empowers students with personalized counselling and
            top university partnerships, guiding them to academic success. Our
            commitment ensures each student achieves their educational
            aspirations.
          </p>

          <button
            className="font-rubik flex items-center justify-start md:justify-start font-medium gap-2 text-[#FFFFFF] px-6 py-3 rounded-md shadow-md transition duration-300 text-[14px] leading-[20px] mt-4"
            style={{
              backgroundImage:
                "linear-gradient(90deg, #0A0078 5.5%, #FF383B 96.5%)",
            }}
          >
            Talk to a career expert
            <img src="arrow.svg" alt="Arrow" className="w-[12px] h-[12px]" />
          </button>
        </div>

        {/* Right Side - Image */}
        <div className="flex flex-col gap-6 order-1 md:order-2">
          {playVideo ? (
            <ReactPlayer
              url={null}
              width="450px"
              className="rounded-xl shadow-lg"
              controls
            />
          ) : (
            <div
              className="relative w-full max-w-[450px] aspect-square flex items-center justify-center cursor-pointer"
              onClick={() => setPlayVideo(true)}
            >
              <Image
                src={About1}
                alt="Video Thumbnail"
                className="lg:w-[450px] lg:h-[450px] md:w-[300px] md:h-[300px] w-[330px] h-[300px] rounded-xl shadow-lg object-cover md:mt-5 lg:mt-0"
              />
              {/* Play Icon Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <Image
                  src={play}
                  alt="Play Button"
                  className="w-16 h-16 opacity-80"
                />
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Horizontal Line at the Bottom */}
      <div
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 border-t border-transparent 
                   w-full md:w-4/5 lg:w-3/4 xl:w-[1106px]"
        style={{
          borderImageSource:
            "linear-gradient(90deg, #FFFFFF 0%, #FF383B 18.5%, #0A0078 53%, #FF383B 83%, #FFFFFF 100%)",
          borderImageSlice: 1,
          borderWidth: "1px",
          borderStyle: "solid",
        }}
      ></div>
    </section>
  );
}

export default HeroSection;

"use client";
import React from "react";
import Image from "next/image";
import About1 from "../../assets/about-us/asha-about1.jpg";
import play from "../../assets/home/Trustsection/play.svg";
import { useState, useEffect, useRef } from "react";
import float1 from "../../assets/home/herosection/float1.svg";
import float2 from "../../assets/home/herosection/float2.svg";
import float3 from "../../assets/home/herosection/float3.svg";
import float4 from "../../assets/home/herosection/float4.svg";
import float5 from "../../assets/home/herosection/float5.svg";
import float6 from "../../assets/home/herosection/float6.svg";
import float7 from "../../assets/home/herosection/float7.svg";
import float8 from "../../assets/home/herosection/float8.svg";
import { VideoContainer } from "@/components/VideoContainer";
import Link from "next/link";

const video = "/videos/vid3.mp4";

function HeroSection() {
  const [playVideo, setPlayVideo] = useState(false);
  const floatingElementsRef = useRef([]);
  const mainContentRef = useRef(null);

  // Simple floating animation effect
  useEffect(() => {
    const elements = floatingElementsRef.current;
    if (!elements.length) return;

    const animations = elements.map((el, index) => {
      // Create random animation parameters for more natural movement
      const duration = 3 + Math.random() * 4; // 3-7 seconds
      const xMovement = 8 + Math.random() * 12; // 8-20px
      const yMovement = 8 + Math.random() * 12; // 8-20px
      const delay = index * 0.3; // Stagger the animations

      // Create and start the animation
      return el.animate(
        [
          { transform: `translate(0, 0)` },
          { transform: `translate(${xMovement}px, ${yMovement}px)` },
          { transform: `translate(${-xMovement}px, ${-yMovement}px)` },
          { transform: `translate(0, 0)` },
        ],
        {
          duration: duration * 1000,
          iterations: Infinity,
          direction: "alternate",
          easing: "ease-in-out",
          delay: delay * 1000,
        }
      );
    });

    return () => {
      animations.forEach((anim) => anim.cancel());
    };
  }, []);

  // Add a ref to each floating element
  const addToRefs = (el) => {
    if (el && !floatingElementsRef.current.includes(el)) {
      floatingElementsRef.current.push(el);
    }
  };
  return (
    <section className="relative lg:py-20 py-10 text-center overflow-hidden">
      {/* Floating SVGs on the left - Same as original */}
      <div className="absolute z-0 left-[-16vw] md:left-[-3vw] lg:left-[-1vw] top-[-2vw] md:top-0 h-[65%] sm:h-[85%] lg:h-full pointer-events-none w-[40%] md:w-[30%] max-w-screen-lg mx-4 ">
        <Image
          ref={addToRefs}
          src={float1}
          alt="Floating Element"
          className="absolute top-0 left-[5vw] md:left-[4vw] lg:left-0 w-[66%] min-[430px]:w-[56%] 2xl:w-[40%]"
        />
        <Image
          ref={addToRefs}
          src={float2}
          alt="Floating Element"
          className="absolute top-1/3 sm:top-1/4 left-[12vw] md:left-[14vw] lg:left-[12vw] w-[38%] min-[430px]:w-[28%] 2xl:w-[20%]"
        />
        <Image
          ref={addToRefs}
          src={float3}
          alt="Floating Element"
          className="absolute bottom-1/4 left-[18vw] md:left-[24vw] lg:left-[18vw] w-[49%] lg:w-[39%] 2xl:w-[28%] hidden sm:block"
        />
        <Image
          ref={addToRefs}
          src={float4}
          alt="Floating Element"
          className="absolute bottom-0 sm:bottom-[20px] left-[8vw] md:left-[8vw] lg:left-[5vw] w-[39%] min-[430px]:w-[36%] lg:w-[30%] 2xl:w-[25%]"
        />
      </div>

      {/* Floating SVGs on the right - Same as original */}
      <div className="absolute z-0 right-[-16vw] lg:right-[-4vw] md:right-[-10vw] top-[-2vw] h-[65%] sm:h-[85%] lg:h-full pointer-events-none w-[40%] md:w-[30%] max-w-screen-lg mx-4">
        <Image
          ref={addToRefs}
          src={float5}
          alt="Floating Element"
          className="absolute top-0 right-[5vw] md:right-[8vw] lg:right-[2vw] w-[52%] min-[430px]:w-[42%] 2xl:w-[30%]"
        />
        <Image
          ref={addToRefs}
          src={float6}
          alt="Floating Element"
          className="absolute top-1/3 sm:top-1/4 right-[12vw] md:right-[14vw] lg:right-[10vw] w-[42%] min-[430px]:w-[36%] 2xl:w-[28%]"
        />
        <Image
          ref={addToRefs}
          src={float7}
          alt="Floating Element"
          className="absolute bottom-1/4 right-[18vw] md:right-[20vw] lg:right-[18vw] w-[40%] 2xl:w-[28%] hidden sm:block"
        />
        <Image
          ref={addToRefs}
          src={float8}
          alt="Floating Element"
          className="absolute bottom-0 right-[8vw] md:right-[4vw] lg:right-[2vw] w-[52%] min-[430px]:w-[52%] 2xl:w-[35%]"
        />
      </div>

      {/* Your existing content - Modified container */}
      <div className="containers relative mx-auto px-4 max-w-7xl">
        <div className="flex flex-col md:flex-row items-stretch justify-between ">
          {/* Left Side - Text Content */}
          <div className="w-full md:w-1/2 text-center md:text-left order-2 md:order-1">
            <h1 className="pt-[20px] md:pt-[30px] text-[28px] leading-[32px] md:text-[42px] md:leading-[100%] lg:text-[64px] lg:leading-[70px] font-normal text-[#121212] font-open-sans text-start">
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
            <Link href='/contact-us' >
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
            </Link>
          </div>

          {/* Right Side - Video */}
          <div className="w-full md:w-1/2 flex items-center justify-center order-1 md:order-2">
            <div className="w-[330px] h-[300px] md:w-[300px] md:h-[300px] lg:w-[470px] lg:h-[500px]">
              <VideoContainer video={video} />
            </div>
          </div>
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

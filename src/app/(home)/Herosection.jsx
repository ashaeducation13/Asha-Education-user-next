"use client";

import HeroCarousel from "@/components/home/HeroCarousel";
import React, { useEffect, useRef } from "react";
import Image from "next/image";

import float1 from '../../assets/home/herosection/float1.svg'
import float2 from '../../assets/home/herosection/float2.svg'
import float3 from '../../assets/home/herosection/float3.svg'
import float4 from '../../assets/home/herosection/float4.svg'
import float5 from '../../assets/home/herosection/float5.svg'
import float6 from '../../assets/home/herosection/float6.svg'
import float7 from '../../assets/home/herosection/float7.svg'
import float8 from '../../assets/home/herosection/float8.svg'
import search from '../../assets/home/herosection/Search.svg'
import arrow from '../../assets/home/herosection/Arrow.svg'
import fog from '../../assets/home/herosection/fog.svg'

const Hero = () => {
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
          { transform: `translate(0, 0)` }
        ],
        {
          duration: duration * 1000,
          iterations: Infinity,
          direction: "alternate",
          easing: "ease-in-out",
          delay: delay * 1000
        }
      );
    });

    return () => {
      animations.forEach(anim => anim.cancel());
    };
  }, []);

  // Add a ref to each floating element
  const addToRefs = (el) => {
    if (el && !floatingElementsRef.current.includes(el)) {
      floatingElementsRef.current.push(el);
    }
  };

  return (
    <section className="containers relative py-20 px-6 md:px-12 text-center overflow-hidden">
      {/* Background Blur Effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,_rgba(241,241,241,1)_26%,_rgba(255,255,255,0)_64%)]"></div>

      <div className="relative z-0 max-w-4xl mx-auto" ref={mainContentRef}>
        {/* Floating SVGs on the left */}
        <div className="absolute left-[-12vw] md:left-[-8vw] lg:left-[-10vw] top-0 h-full pointer-events-none w-[40%] md:w-[30%] max-w-screen-lg mx-4">

          <Image
            ref={addToRefs}
            src={float1}
            alt="Floating Element"
            className="absolute top-10 left-[5vw] md:left-[8vw] lg:left-[2vw] w-12 md:w-26"
          />
          <Image
            ref={addToRefs}
            src={float2}
            alt="Floating Element"
            className="absolute top-1/4 left-[12vw] md:left-[14vw] lg:left-[9vw] w-12 md:w-20"
          />
          <Image
            ref={addToRefs}
            src={float3}
            alt="Floating Element"
            className="absolute bottom-1/4 left-[8vw] md:left-[10vw] lg:left-[16vw] w-12 md:w-24"
          />
          <Image
            ref={addToRefs}
            src={float4}
            alt="Floating Element"
            className="absolute bottom-0 left-[18vw] md:left-[22vw] lg:left-[5vw] w-10 md:w-20"
          />
        </div>

        {/* Floating SVGs on the right */}
        <div className="absolute right-[-12vw] md:right-[-6vw] lg:right-[-10vw] top-0 h-full pointer-events-none w-[40%] md:w-[30%] max-w-screen-lg mx-4">

          <Image
            ref={addToRefs}
            src={float5}
            alt="Floating Element"
            className="absolute top-0 right-[5vw] md:right-[8vw] lg:right-[2vw] w-12 md:w-24"
          />
          <Image
            ref={addToRefs}
            src={float6}
            alt="Floating Element"
            className="absolute top-1/4 right-[12vw] md:right-[14vw] lg:right-[8vw] w-12 md:w-24"
          />
          <Image
            ref={addToRefs}
            src={float7}
            alt="Floating Element"
            className="absolute bottom-1/4 right-[8vw] md:right-[10vw] lg:right-[15vw] w-12 md:w-28"
          />
          <Image
            ref={addToRefs}
            src={float8}
            alt="Floating Element"
            className="absolute bottom-0 right-[18vw] md:right-[22vw] lg:right-[6vw] w-10 md:w-28"
          />
        </div>
        {/* Heading */}
        <h1 className="text-4xl md:text-[64px] font-normal text-gray-900 z-10">
          <span
            className="bg-clip-text text-transparent font-playfair"
            style={{
              backgroundImage: "linear-gradient(90.02deg, #0A0078 2.5%, #FF383B 43.53%)",
            }}
          >
            Empowering
          </span>{" "}
          Your Academic Dreams with <span className="font-bold">India's Top </span> Universities
        </h1>

        {/* Subheading */}
        <p className="mt-4 text-[16px] text-gray-600 w-[50%] mx-auto font-inter font-normal leading-[24px]">
          Explore top undergraduate, postgraduate, and specialized programs with expert guidance.
        </p>

        {/* Search & Browse */}
        <div className="mt-6 flex flex-col md:flex-row justify-center items-center gap-4">
          <div className="relative w-full md:w-96">
            <Image
              src={search}
              alt="Search"
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500"
            />
            <input
              type="text"
              placeholder="Search for..."
              className="pl-12 pr-4 py-3 w-full rounded-md font-inter shadow-md focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          <button
            className="flex items-center font-inter font-semibold gap-2 text-white px-6 py-3 rounded-md shadow-md transition duration-300 text-[14px]"
            style={{
              backgroundImage: "linear-gradient(90deg, #0A0078 5.5%, #FF383B 96.5%)",
            }}
          >
            Browse Programs
            <Image
              src={arrow}
              alt="Arrow"
              className="w-[8.4px] h-[8.24px]"
            />
          </button>
        </div>
      </div>

      {/* Carousel */}
      <div className="mt-16 mb-14  mx-auto">
        <HeroCarousel />
      </div>

      {/* Foggy Bottom Effect using SVG */}
      <Image
        src={fog}
        alt="Fog Effect"
        className="absolute bottom-[42px] 2xl:bottom-[-82px] left-0 w-full h-auto pointer-events-none z-20"
      />
    </section>
  );
};

export default Hero;
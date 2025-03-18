"use client";

import HeroCarousel from "@/components/home/HeroCarousel";
import React, { useEffect, useRef } from "react";

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
    <section className="relative py-20 px-6 md:px-12 text-center overflow-visible">
      {/* Background Blur Effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,_rgba(241,241,241,1)_26%,_rgba(255,255,255,0)_64%)]"></div>

      <div className="relative z-10 max-w-4xl mx-auto" ref={mainContentRef}>
        {/* Floating SVGs on the left */}
        <div className="absolute left-0 top-0 h-full pointer-events-none" style={{ width: "120%", left: "-350px" }}>
          <img
            ref={addToRefs}
            src="/home/herosection/float1.svg"
            alt="Floating Element"
            className="absolute top-0 left-0 w-20 md:w-28 opacity-80"
          />
          <img
            ref={addToRefs}
            src="/home/herosection/float2.svg"
            alt="Floating Element"
            className="absolute top-1/4 left-64 w-16 md:w-24 opacity-70"
          />
          <img
            ref={addToRefs}
            src="/home/herosection/float3.svg"
            alt="Floating Element"
            className="absolute bottom-1/4 left-16 w-16 md:w-28 opacity-80"
          />
          <img
            ref={addToRefs}
            src="/home/herosection/float4.svg"
            alt="Floating Element"
            className="absolute bottom-0 left-80 w-14 md:w-20 opacity-60"
          />
        </div>

        {/* Floating SVGs on the right */}
        <div className="absolute right-0 top-0 h-full pointer-events-none" style={{ width: "120%", right: "-350px" }}>
          <img
            ref={addToRefs}
            src="/home/herosection/float5.svg"
            alt="Floating Element"
            className="absolute top-0 right-16 w-20 md:w-28 opacity-80"
          />
          <img
            ref={addToRefs}
            src="/home/herosection/float6.svg"
            alt="Floating Element"
            className="absolute top-1/4 right-80 w-16 md:w-24 opacity-70"
          />
          <img
            ref={addToRefs}
            src="/home/herosection/float7.svg"
            alt="Floating Element"
            className="absolute bottom-1/4 right-24 w-16 md:w-28 opacity-80"
          />
          <img
            ref={addToRefs}
            src="/home/herosection/float8.svg"
            alt="Floating Element"
            className="absolute bottom-0 right-96 w-14 md:w-28 "
          />
        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-[64px] font-normal text-gray-900">
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
            <img
              src="/home/herosection/Search.svg"
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
            <img
              src="/home/herosection/Arrow.svg"
              alt="Arrow"
              className="w-[8.4px] h-[8.24px]"
            />
          </button>
        </div>
      </div>

      {/* Carousel */}
      <div className="mt-16 mb-14 max-w-[90%] mx-auto">
        <HeroCarousel />
      </div>

      {/* Foggy Bottom Effect using SVG */}
      <img
        src="/home/herosection/fog.svg"
        alt="Fog Effect"
        className="absolute bottom-0 left-0 w-full h-auto pointer-events-none z-20"
      />
    </section>
  );
};

export default Hero;
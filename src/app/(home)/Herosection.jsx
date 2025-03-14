"use client";

import React from "react";

const Hero = () => {
  return (
    <section className="relative py-20 px-6 md:px-12 text-center">
      {/* Background Blur Effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,_rgba(241,241,241,1)_26%,_rgba(255,255,255,0)_64%)]"></div>

      <div className="relative z-10 max-w-4xl mx-auto">
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
          Your Academic Dreams with <span className="font-bold">India’s Top </span> Universities
        </h1>

        {/* Subheading */}
        <p className="mt-4 text-[16px] text-gray-600 w-[50%] mx-auto font-inter font-normal leading-[24px]">
          Explore top undergraduate, postgraduate, and specialized programs with expert guidance.
        </p>

        {/* Search & Browse */}
        <div className="mt-6 flex flex-col md:flex-row justify-center items-center gap-4">
          <input
            type="text"
            placeholder="Search for..."
            className="px-4 py-3 w-full md:w-96 rounded-md font-inter shadow-md focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          <button className="bg-[#FF383B] text-white px-6 py-3 rounded-md shadow-md hover:bg-red-700 transition duration-300">
            Browse Programs
          </button>
        </div>

        {/* Carousel (Placeholder) */}
        <div className="mt-10 bg-gray-300 rounded-lg h-48 flex items-center justify-center">
          <span className="text-gray-600">[Carousel Placeholder]</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;

import React from "react";
import Image from "next/image";

function HeroSection() {
  return (
    <section className="flex items-center justify-between px-[100px] h-[400px] ">
      {/* Left Side - Text Content */}
      <div className="w-1/2">
        <h1 className="text-[64px] leading-[70px] font-semibold text-gray-900">
          <span
            className="bg-clip-text text-transparent font-playfair"
            style={{
              backgroundImage:
                "linear-gradient(90.02deg, #0A0078 2.5%, #FF383B 43.53%)",
            }}
          >
            Shaping Futures <br/>
          </span>{" "}
          One Student at a  <br/> Time
        </h1>

        <p className="w-[50%] text-[16px] leading-[24px] text-black-600 font-rubik mt-[10px]">
          Committed to guiding students toward the best universities in India.
        </p>

        <button
          className="flex items-center font-inter font-semibold gap-2 text-white px-6 py-3 rounded-md shadow-md transition duration-300 text-[14px] mt-4"
          style={{
            backgroundImage: "linear-gradient(90deg, #0A0078 5.5%, #FF383B 96.5%)",
          }}
        >
          Take To Career Experts
          <img
            src="/herosection/Arrow.svg"
            alt="Arrow"
            className="w-[8.4px] h-[8.24px]"
          />
        </button>
      </div>

      {/* Right Side - Image */}
      <div className="w-1/2 h-[330px] absolute left-[802px]">
        <img
          src="/about-us/asha-about1.jpg"
          alt="Hero Section"
          className="w-[370px] h-[330px] object-cover rounded-lg"
        />
      </div>

      <div 
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3/4 border-t border-transparent mb-[220px]"
        style={{
          borderImageSource: "linear-gradient(90deg, #FFFFFF 0%, #FF383B 18.5%, #0A0078 53%, #FF383B 83%, #FFFFFF 100%)",
          borderImageSlice: 1,
          borderWidth: "1px",
          borderStyle: "solid"
        }}
      ></div>
    </section>
  );
}

export default HeroSection;

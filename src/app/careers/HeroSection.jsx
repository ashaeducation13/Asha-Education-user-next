import React from "react";
import Image from "next/image";


function HeroSection() {
  return (
    <section className="flex items-center justify-between  px-[100px] h-[400px]">
      {/* Left Side - Text Content */}
      <div className="w-1/2">
        <div className="inline-block px-[12px] py-[4px]  border rounded-[8px] border-red-500 mb-6">
          <p className="text-[12px] leading-[24px] text-red-500">We are Hiring!</p>
        </div>
        <h1 className="text-[40px] leading-[40px] font-semibold text-gray-900">
          <span
            className="bg-clip-text text-transparent font-playfair"
            style={{
              backgroundImage:
                "linear-gradient(90.02deg, #0A0078 2.5%, #FF383B 43.53%)",
            }}
          >
            Be Part
          </span>{" "}
          Of Our <br /> Mission
        </h1>

        <p className="w-[50%] text-[16px] leading-[24px] text-black-600 font-rubik mt-[10px]">
          We’re here to help! Reach out for inquiries about admissions, courses, or partnerships.
        </p>
      </div>

      {/* Right Side - Image */}
      <div className="w-1/2 absolute top-[156px] left-[802px]">
        <img
           src="/careers/asha-career1.jpg"
          alt="Hero Section"
          className="w-[526px] h-[188px]  object-cover rounded-lg"
        />
      </div>
    </section>
  );
}

export default HeroSection;

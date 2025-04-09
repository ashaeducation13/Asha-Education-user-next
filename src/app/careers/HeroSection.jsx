import React from "react";
import Image from "next/image";
import Career1 from "../../assets/careers/asha-career1.jpg";

function HeroSection() {
  return (
    <section className="containers flex flex-col lg:flex-row items-center justify-between mx-auto h-auto lg:h-[300px]">
      {/* Left Side - Text Content */}
      <div className="w-full mb-6 lg:mb-0">
        <div className="inline-block px-[12px] py-[4px] border rounded-[8px] border-red-500 mb-6">
          <p className="text-[12px] leading-[24px] text-red-500">We are Hiring!</p>
        </div>
        <h1 className="font-playfair text-[32px] lg:text-[40px] leading-[40px] font-regular text-gray-900">
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

        <p className="font-inter w-full lg:w-[60%] text-[16px] leading-[24px] text-black-600 font-rubik mt-[10px]">
          We’re here to help! Reach out for inquiries about admissions, courses, or partnerships.
        </p>
      </div>

      {/* Right Side - Image */}
      <div className="w-full">
        <Image
          src={Career1}
          alt="Hero Section"
          className="w-full h-[200px] object-cover rounded-lg"
        />
      </div>
    </section>
  );
}

export default HeroSection;

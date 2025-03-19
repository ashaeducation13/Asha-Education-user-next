import React from "react";
import Image from "next/image";
import About1 from "../../assets/about-us/asha-about1.jpg";

function HeroSection() {
  return (
    <section className="relative flex flex-col lg:flex-row items-center justify-between px-6 md:px-12 lg:px-24 xl:px-0 pt-12 pb-24">
      {/* Wrapper with fixed width on 1440px screens */}
      <div className="w-full xl:max-w-[1106px] mx-auto flex flex-col lg:flex-row items-center justify-between">
        
        {/* Left Side - Text Content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h1 className=" pt-[30px] text-[40px] leading-[50px] md:text-[50px] md:leading-[60px] xl:text-[64px] xl:leading-[70px] font-regular text-gray-900">
            <span
              className="bg-clip-text text-transparent font-playfair"
              style={{
                backgroundImage:
                  "linear-gradient(90.02deg, #0A0078 2.5%, #FF383B 43.53%)",
              }}
            >
              Shaping Futures <br />
            </span>{" "}
            One Student at a <br /> Time
          </h1>

          <p className="font-ru w-[80%] md:w-[60%] lg:w-[50%] text-[14px] md:text-[16px] leading-[22px] md:leading-[24px] text-black-600 font-rubik mt-3">
            Committed to guiding students toward the best universities in India.
          </p>

          <button
            className="font-rubik flex items-center justify-center lg:justify-start font-inter font-semibold gap-2 text-white px-6 py-3 rounded-md shadow-md transition duration-300 text-[14px] mt-4 mx-auto lg:mx-0"
            style={{
              backgroundImage:
                "linear-gradient(90deg, #0A0078 5.5%, #FF383B 96.5%)",
            }}
          >
            Talk To Career Experts
            <img
              src="/herosection/Arrow.svg"
              alt="Arrow"
              className="w-[10px] h-[10px]"         
            />
          </button>
        </div>

        {/* Right Side - Image */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end mt-6 lg:mt-0">
          <Image
            src={About1}
            alt="Hero Section"
            className="w-[300px] md:w-[350px] lg:w-[370px] h-[456px] object-cover rounded-lg"
          />
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

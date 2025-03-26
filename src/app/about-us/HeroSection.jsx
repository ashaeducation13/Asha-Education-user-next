import React from "react";
import Image from "next/image";
import About1 from "../../assets/about-us/asha-about1.jpg";

function HeroSection() {
  return (
    <section className="relative w-[90%] lg:w-[80%] mx-auto flex flex-col md:flex-row items-center justify-between xl:px-0 pt-8 md:pt-12 pb-10 md:pb-20">
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
              Shaping Futures <br />
            </span>{" "}
            One Student at a <br /> Time
          </h1>

          <p className="font-normal leading-[18px] md:leading-[21px] lg:leading-[24px] w-full md:w-[80%] lg:w-[70%] text-[12px] md:text-[16px] text-[#121212] font-rubik mt-3 md:mt-4 mb-6 md:mb-8 text-start">
            Committed to guiding students toward the best universities in India.
          </p>

          <button
            className="font-rubik flex items-start justify-start md:justify-start font-medium gap-2 text-[#FFFFFF] px-6 py-3 rounded-md shadow-md transition duration-300 text-[14px] leading-[20px] mt-4"
            style={{
              backgroundImage:
                "linear-gradient(90deg, #0A0078 5.5%, #FF383B 96.5%)",
            }}
          >
            Talk to a career expert
            <img
              src="arrow.svg"
              alt="Arrow"
              className="w-[12px] h-[12px]"         
            />
          </button>
        </div>

        {/* Right Side - Image */}
        <div className="w-full md:w-[45%] max-w-[500px] h-[250px] md:h-[350px] lg:h-[450px] flex justify-center md:justify-end mt-8 md:mt-0 order-1 md:order-2">
          <Image
            src={About1}
            alt="Hero Section"
            className="w-full h-full object-cover rounded-[20px]"
            priority
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

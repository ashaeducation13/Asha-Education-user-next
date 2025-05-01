import React from "react";
import Image from "next/image";
import Career1 from "../../assets/careers/asha-career1.jpg";

function HeroSection() {
  return (
    <section className="containers flex flex-col lg:flex-row items-center justify-between mx-auto h-auto lg:h-[300px]">
      {/* Left Side - Text Content */}
      <div className="w-full my-6 lg:mb-0">

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

        <p className="font-inter w-full lg:w-[80%] text-[16px] leading-[24px] text-black-600 font-rubik mt-[10px]">
          At Asha Education, we are dedicated to creating a dynamic, inclusive workplace that champions innovation, teamwork, and continuous professional development. As a trusted educational consultancy, we are always looking for passionate individuals who are committed to empowering students and supporting their academic and career journeys. Join us in making a meaningful impact in the lives of learners around the world.
        </p>
      </div>

      {/* Right Side - Image */}
      <div className="w-full">
        <Image
          src={Career1}
          alt="Hero Section"
          className="w-full h-[260px] object-cover rounded-lg"
        />
      </div>
    </section>
  );
}

export default HeroSection;

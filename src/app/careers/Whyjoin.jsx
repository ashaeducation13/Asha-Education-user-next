'use client';
import React from "react";
import { motion } from "framer-motion";

const cardData = [
  {
    title: "Impactful Work",
    icon: "/about-us/cardicon.svg",
    description: "Make a real difference by guiding students on their educational journeys and helping them reach their full potential.",
  },
  {
    title: "Professional Development",
    icon: "/about-us/cardicon.svg",
    description: "Grow with us through continuous learning, skill-building opportunities, and clear pathways for career advancement in the education sector.",
  },
  {
    title: "Collaborative Culture",
    icon: "/about-us/cardicon.svg",
    description: "Join a supportive, inclusive team that values diverse perspectives, open communication, and meaningful collaboration.",
  },
];

function Whyjoin() {
  return (
    <section className="containers relative py-3 md:py-6 text-[#121212] ">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }} className="font-open-sans md:text-[32px] text-[21px] whitespace-nowrap leading-[40px] font-semibold md:mb-5 ">
       Why Join Us?
      </motion.h2>

      {/* Cards Grid - Ensuring 4 Columns on lg */}

      <div className="grid grid-cols-1 md:grid-cols-3 lg:gap-[40px] md:gap-[20px] gap-[10px] items-start mb-10">
        {cardData.map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-lg flex flex-col justify-center "
          >
            <div className="flex pb-2 items-start">
              <img
                src={card.icon}
                alt={card.title}
                className="lg:w-[26px] lg:h-[24px] h-[16px] w-[17px] mr-2"
              />
              <h3 className="font-inter  lg:text-[20px] text-[14px] md:leading-[20px] leading-[18px] font-semibold">
                {card.title}
              </h3>
            </div>
            <p className="font-inter lg:text-[16px] text-[14px] lg:leading-[24px] leading-[21px] text-[#6D758F]">
              {card.description}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Bottom Gradient Line - Fixed Position */}
      {/* <div
        className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-full lg:w-3/4 border-t border-transparent"
        style={{
          borderImageSource:
            "linear-gradient(90deg, #FFFFFF 0%, #FF383B 18.5%, #0A0078 53%, #FF383B 83%, #FFFFFF 100%)",
          borderImageSlice: 1,
          borderWidth: "1px",
          borderStyle: "solid",
        }}
      ></div> */}
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

export default Whyjoin;

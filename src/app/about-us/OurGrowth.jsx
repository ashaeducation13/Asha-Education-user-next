'use client';
import React from "react";
import Timeline from "./Timeline";
import { motion } from "framer-motion";

function OurGrowth() {
  const data = [
    {
      title: "2015",
      description:
        "Partnered with leading Indian universities for undergraduate and postgraduate programs.",
    },
    {
      title: "2017",
      description:
        "Partnered with leading Indian universities for undergraduate and postgraduate programs.",
    },
    {
      title: "2019",
      description:
        "Expanded services to include specialized MBA and doctoral programs.",
    },
    {
      title: "2015",
      description:
        "Partnered with leading Indian universities for undergraduate and postgraduate programs.",
    },
    {
      title: "2017",
      description:
        "Partnered with leading Indian universities for undergraduate and postgraduate programs.",
    },
    {
      title: "2019",
      description:
        "Partnered with leading Indian universities for undergraduate and postgraduate programs.",
    },
  ];

  return (
    <>
      <div className="containers flex flex-col justify-center items-center md:pt-7 pt-5 py-5">
        <motion.div
          className="space-y-2 my-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h1 className="text-center font-open-sans font-semibold lg:text-[48px] md:text-[32px] text-[24px] md:leading-[48px] leading-[24px]">
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(90.02deg, #0A0078 2.5%, #FF383B 43.53%)",
              }}
            >
              Our Growth{" "}
            </span>
            <span>Over the Years</span>
          </h1>
          <p className="font-inter text-center text-[#6D758F] font-normal lg:text-[16px] md:text-[14px] text-[12px] lg:leading-[24px] md:leading-[21px] leading-[18px]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque,
            repellendus.
          </p>
      </motion.div>
      {/* <div className='grid grid-cols-3 lg:gap-10 md:gap-[20px] py-10 '>
        {data.map((item, index)=>(
          <div className='shadow-lg p-10 rounded-[20px]' key={index}>
            <h1 className='font-open-sans font-semibold lg:text-[36px] md:text-[32px] text-[24px] leading-[48px]'>{item.year}</h1>
            <p className='font-rubik text-[#383838] font-normal lg:text-[16px] md:text-[14px] text-[12px] lg:leading-[24px] md:leading-[21px] leading-[18px] '>{item.description}</p>
          </div>
        ))}
      </div> */}
    </div >
      <Timeline data={data} />
    </>
  );
}

export default OurGrowth;

"use client";
import { useState } from "react";
import Modal from "./Modal";
import Image from "next/image";
import star from "../../../assets/comparison/star.svg";
import rupees from "../../../assets/comparison/rupees.svg";
import download from "../../../assets/comparison/download.svg";
import greentick from "../../../assets/comparison/greentick.svg";
import redtick from "../../../assets/comparison/redtick.svg";
// import logo from "../../assets/universities/logo.svg";
import { Card } from "./Card";
import { cardData } from "./Data";

export default function ComparisonCard({ pros, cons }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const prosItems = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  ];
  const consItems = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  ];
  return (
    <>
      <div className="rounded-[10px] py-3 px-4 bg-[#FFF2F2] min-w-[500px] ">
        <h2 className="font-open-sans font-semibold text-[20px] leading-[100%] text-[#121212] ">
          Sikkim Manipal University
        </h2>
        <div className="flex justify-between items-center">
          <span className="font-inter font-medium text-[14px] leading-[100%] text-[#595959] flex items-center gap-1">
            <Image src={star} alt="Star" className="w-4 h-4" />
            4/5 (88 Reviews)
          </span>
          <button
            className="font-inter font-semibold text-[12px] leading-[18px] text-[#6D758F] px-2 py-1  bg-[#FFFFFF] rounded-[8px] border border-[#D9D9D9]"
            onClick={() => setIsModalOpen(true)}
          >
            Choose Another
          </button>
        </div>
        <div className="flex gap-[30px] items-center">
          <span className="font-rubik font-medium text-[16px] leading-[100%] text-[#FF383B] flex items-center gap-1">
            <Image src={rupees} alt="Rupees" className="w-3 h-4" />
            98,000 / Year
          </span>
          <button className="px-1 py-1 bg-[#FFE3E4] text-[#FF383B] rounded-md flex items-center gap-1 font-inter font-medium text-[14px] leading-[100%]">
            <Image src={download} alt="Download" className="w-3 h-4 " />
            Brochure
          </button>
        </div>
        <div className="flex flex-col gap-3 mt-3">
          <div className="bg-white px-4 py-6 rounded-[10px]">
            <h3 className="font-open-sans font-bold text-[16px] leading-[18px] text-[#121212] ">
              PROS
            </h3>
            <ul className="mt-2 space-y-2">
              {pros.map((item, index) => (
                <li
                  key={index}
                  className="font-rubik font-normal text-[16px] leading-[24px] text-[#121212] flex items-center gap-1"
                >
                  <Image src={greentick} alt="greentick" className="w-5 h-5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white px-4 py-6 rounded-[10px]">
            <h3 className="font-open-sans font-bold text-[16px] leading-[18px] text-[#121212] ">
              CONS
            </h3>
            <ul className="mt-2 space-y-2">
              {cons.map((item, index) => (
                <li
                  key={index}
                  className="font-rubik font-normal text-[16px] leading-[24px] text-[#121212] flex items-center gap-1"
                >
                  <Image src={redtick} alt="redtick" className="w-5 h-5" />
                  {item}{" "}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      >
        <div className="grid grid-cols-3 gap-6"> 
        {cardData.map((item,index)=>(
          <Card key={index} item={item} />
        ))}
        </div>
      </Modal>
    </>
  );
}

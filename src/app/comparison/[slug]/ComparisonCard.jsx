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

  return (
    <>
      <div className="rounded-[10px] p-4 md:p-6 bg-[#FFF2F2] w-full max-w-full overflow-hidden">
        {/* University Header */}
        <div className="flex flex-col gap-2 mb-4">
          <h2 className="font-open-sans font-semibold text-[16px] md:text-[18px] lg:text-[20px] leading-tight text-[#121212]">
            Sikkim Manipal University
          </h2>
          
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
            <span className="font-inter font-medium text-[12px] md:text-[14px] leading-tight text-[#595959] flex items-center gap-1">
              <Image src={star} alt="Star" className="w-4 h-4" />
              4/5 (88 Reviews)
            </span>
            
            <button
              className="font-inter font-semibold text-[12px] leading-[18px] text-[#6D758F] px-2 py-1 bg-white rounded-[8px] border border-[#D9D9D9] w-fit"
              onClick={() => setIsModalOpen(true)}
            >
              Choose Another
            </button>
          </div>
        </div>

        {/* Price Section */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-3 md:gap-[30px] mb-4">
          
          <button className="px-2 py-1 bg-[#FFE3E4] text-[#FF383B] rounded-md flex items-center gap-1 font-inter font-medium text-[12px] md:text-[14px] leading-tight w-fit">
            <Image src={download} alt="Download" className="w-3 h-4" />
            Brochure
          </button>
        </div>

        {/* Pros/Cons Sections */}
        <div className="flex flex-col gap-4">
          <div className="bg-white p-4 md:p-6 rounded-[10px]">
            <h3 className="font-open-sans font-bold text-[14px] md:text-[16px] leading-[18px] text-[#121212] mb-3">
              PROS
            </h3>
            <ul className="space-y-3">
              {pros.map((item, index) => (
                <li key={index} className="font-rubik font-normal text-[12px] md:text-[14px] lg:text-[16px] leading-[1.5] text-[#121212] flex items-start gap-2">
                  <Image src={greentick} alt="greentick" className="w-4 h-4 md:w-5 md:h-5 mt-0.5 flex-shrink-0" />
                  <span>{item.description}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white p-4 md:p-6 rounded-[10px]">
            <h3 className="font-open-sans font-bold text-[14px] md:text-[16px] leading-[18px] text-[#121212] mb-3">
              CONS
            </h3>
            <ul className="space-y-3">
              {cons.map((item, index) => (
                <li key={index} className="font-rubik font-normal text-[12px] md:text-[14px] lg:text-[16px] leading-[1.5] text-[#121212] flex items-start gap-2">
                  <Image src={redtick} alt="redtick" className="w-4 h-4 md:w-5 md:h-5 mt-0.5 flex-shrink-0" />
                  <span>{item.description}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {cardData.map((item, index) => (
            <Card key={index} item={item} />
          ))}
        </div>
      </Modal>
    </>
  );
}

"use client";
import { useState } from "react";
import Modal from "./Modal";
import Image from "next/image";
import star from "../../../assets/comparison/star.svg";
import download from "../../../assets/comparison/download.svg";
import greentick from "../../../assets/comparison/greentick.svg";
import redtick from "../../../assets/comparison/redtick.svg";
import { Card } from "./Card";
import { ProsConsById } from "@/services/api";

export default function  ComparisonCard({ spec, pros, cons ,univ}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  console.log("specs",spec);
  
  const [university, setUniversity] = useState(univ); // initial university
  const [prosList, setProsList] = useState(pros);     // initial pros
  const [consList, setConsList] = useState(cons);     // initial cons
  
  const handleCompareClick = async (item) => {
    // console.log(item);
    const id =item.university.id
    const prData = await ProsConsById(id); 
  
    setUniversity(prData.univ);
    setProsList(prData.pros_cons?.filter(i => i.type === 'Pros') || []);
    setConsList(prData.pros_cons?.filter(i => i.type === 'Cons') || []);
  
    setIsModalOpen(false);
  };
  

  return (
    <>
      <div className="rounded-[10px] p-4 md:p-6 bg-[#FFF2F2] w-full max-w-full overflow-hidden">
        
          <>
            {/* University Header */}
            <div className="flex flex-col gap-2 mb-4">
              <h2 className="font-open-sans font-semibold text-[16px] md:text-[18px] lg:text-[20px] leading-tight text-[#121212]">
              {university.name}

              </h2>

              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                <span className="font-inter font-medium text-[12px] md:text-[14px] leading-tight text-[#595959] flex items-center gap-1">
                  <Image src={star} alt="Star" className="w-4 h-4" />
                  {university.rating}

                </span>

                {/* <button
                  className="font-inter font-semibold text-[12px] leading-[18px] text-[#6D758F] px-2 py-1 bg-white rounded-[8px] border border-[#D9D9D9] w-fit"
                  onClick={() => setIsModalOpen(true)}
                >
                  Choose Another
                </button> */}
              </div>
            </div>

            {/* Price / Brochure */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 md:gap-[30px] mb-4">
              <button className="px-2 py-1 bg-[#FFE3E4] text-[#FF383B] rounded-md flex items-center gap-1 font-inter font-medium text-[12px] md:text-[14px] leading-tight w-fit">
                <Image src={download} alt="Download" className="w-3 h-4" />
                Brochure
              </button>
            </div>

            {/* PROS */}
            <div className="bg-white p-4 md:p-6 rounded-[10px] mb-4">
              <h3 className="font-open-sans font-bold text-[14px] md:text-[16px] leading-[18px] text-[#121212] mb-3">
                PROS
              </h3>
              <ul className="space-y-3">
                {prosList.map((item, index) => (
                  <li
                    key={index}
                    className="font-rubik font-normal text-[12px] md:text-[14px] lg:text-[16px] leading-[1.5] text-[#121212] flex items-start gap-2"
                  >
                    <Image
                      src={greentick}
                      alt="greentick"
                      className="w-4 h-4 md:w-5 md:h-5 mt-0.5 flex-shrink-0"
                    />
                    <span>{item.description}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CONS */}
            <div className="bg-white p-4 md:p-6 rounded-[10px]">
              <h3 className="font-open-sans font-bold text-[14px] md:text-[16px] leading-[18px] text-[#121212] mb-3">
                CONS
              </h3>
              <ul className="space-y-3">
                {consList.map((item, index) => (
                  <li
                    key={index}
                    className="font-rubik font-normal text-[12px] md:text-[14px] lg:text-[16px] leading-[1.5] text-[#121212] flex items-start gap-2"
                  >
                    <Image
                      src={redtick}
                      alt="redtick"
                      className="w-4 h-4 md:w-5 md:h-5 mt-0.5 flex-shrink-0"
                    />
                    <span>{item.description}</span>
                  </li>
                ))}
              </ul>
            </div>
          </>
      </div>

      {/* Modal for choosing other programs */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {spec.map((item, index) => (
            <Card
              key={index}
              item={item}
              onCompareClick={() => handleCompareClick(item)}
            />
          ))}
        </div>
      </Modal>
    </>
  );
}

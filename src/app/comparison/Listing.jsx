"use client";
import React, { useState } from "react";
import filterIcon from "../../../src/assets/universities/Vector.svg";
import tick from "../../assets/comparison/tick.svg";
import cross from "../../assets/comparison/cross.svg";
import plus from "../../assets/comparison/plus.svg";
import Image from "next/image";
import { Courses } from "./Data";
import { cardData } from "./Data";

import star from "../../assets/universities/star.svg";
import once from "../../assets/universities/once.svg";
import arrow from "../../assets/universities/arrow.svg";

const Listing = () => {
  const [selectedCourse, setSelectedCourse] = useState(Courses[0]);
  const [comparedLogos, setComparedLogos] = useState([]);

  const handleAddToCompare = (logo) => {
    if (comparedLogos.length < 2) {
      setComparedLogos([...comparedLogos, logo]);
    }
  };

  const handleRemoveLogo = (index) => {
    setComparedLogos(comparedLogos.filter((_, i) => i !== index));
  };

  return (
    <>
      <section className=" border-b border-b-[#E1E4ED]">
        <div className="w-[80%] mx-auto flex justify-between items-center py-5">
          <ul className="flex gap-[6px]">
            {Courses.map((item, index) => (
              <li
                key={index}
                onClick={() => setSelectedCourse(item)}
                className={`cursor-pointer ${
                  selectedCourse.title === item.title
                    ? "bg-[#FF383B] text-white"
                    : "bg-white text-[#6D758F] border border-[#D9D9D9]"
                } hover:bg-[#FF383B] px-[22px] py-[18px] text-[16px] leading-[16px] font-bold hover:text-white rounded-[8px]`}
              >
                {item.title}
              </li>
            ))}
          </ul>
          <ul className="flex gap-2 items-center">
            <Image src={filterIcon} alt="icon" height={18} />
            <span className="text-[#FF383B] text-[16px]">Filter by state</span>
          </ul>
        </div>
        <div className="w-[80%] mx-auto grid grid-cols-[25%_1fr] gap-[70px] pt-5 pb-10">
          <div className=" flex flex-col gap-3">
            <h2 className="text-[20px] font-semibold">Specialisations</h2>
            {comparedLogos.length > 0 && (
            <div className="px-[10px] py-[10px] flex gap-4 flex-col rounded-[6px] border-[1px] border-[#0A0078]">
              <h1 className="font-rubik font-normal text-[16px] leading-[16px] text-[#696969]">
                {selectedCourse.specs[0]}
              </h1>
              <div className="flex gap-2 my-2 items-center">
                {comparedLogos.map((logo, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="relative">
                      <Image
                        src={logo}
                        alt="compared logo"
                        className="h-10 w-auto object-contain rounded-[5px] border border-[#EDEDED] px-1"
                      />
                      <Image
                        src={cross}
                        className="absolute -top-2 -right-2"
                        onClick={() => handleRemoveLogo(index)}
                      />
                    </div>
                    {index < comparedLogos.length - 1 && (
                      <Image
                        src={plus} // Your plus image
                        alt="add more"
                        className="h-6 w-6"
                      />
                    )}
                  </div>
                ))}
              </div>
              <button className="bg-[#FF383B] py-[10px] font-inter font-semibold text-[12px] leading-[18px] text-[#FFFFFF] rounded-[8px] shadow-md">
                Show Result
              </button>
            </div>
            )}
            <ul className="flex flex-col gap-2">
              {selectedCourse.specs.length > 0 ? (
                selectedCourse.specs.map((spec, i) => (
                  <li
                    key={i}
                    className="p-[16px] text-[#696969] text-[16px] leading-[16px] border 
                    border-[#F1F3F7] font-rubik bg-[#FFFFFF] 
                    rounded-[6px]"
                  >
                    {spec}
                  </li>
                ))
              ) : (
                <li className="text-white">No specializations available</li>
              )}
            </ul>
          </div>

          <div className="flex flex-col gap-10 items-center">
            <div className="grid grid-cols-2 gap-x-5 gap-y-10">
              {cardData.map((item, index) => (
                <Card
                  key={index}
                  item={item}
                  onAddToCompare={() => handleAddToCompare(item.logo)}
                  isCompareDisabled={comparedLogos.length >= 2}
                />
              ))}
            </div>
            <div className="w-fit inline-flex gap-2 justify-center  border border-[#D9D9D9] p-[12px] rounded-[8px]">
              <span className=" text-[14px] text-[#6D758F]">view more</span>
              <Image src={arrow} alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export const Card = ({ item, onAddToCompare, isCompareDisabled }) => {
  return (
    <>
      <section
        className=" h-auto flex flex-col gap-4 border border-[#0A0078] rounded-[18px] 
      px-[10px] pt-[10px] pb-[20px]
    hover:shadow-[0px_12.05px_26.77px_0px_#0000001A,0px_48.86px_48.86px_0px_#00000017,0px_110.43px_66.26px_0px_#0000000D,0px_196.09px_78.3px_0px_#00000003,0px_307.19px_85.67px_0px_#00000000] cursor-pointer"
      >
        <div
          className="relative z-10 h-[230px] rounded-[8px] bg-cover bg-center"
          style={{ backgroundImage: `url(${item.cover.src})` }}
        >
          <span className="absolute top-2 left-2 w-[120px] h-[50px] bg-white  rounded-[5px] flex justify-center">
            <Image src={item.logo} alt="logo" className="" />
          </span>
          <span
            className="absolute top-5 right-0 flex justify-center items-center w-auto h-[30px] rounded-tl-[10px] rounded-bl-[20px] px-5"
            style={{
              background: "linear-gradient(90deg, #0A0078 5.5%, #FF383B 96.5%)",
            }}
          >
            <span className="text-white text-[14px] font-semibold">
              {item.status}
            </span>
          </span>
        </div>
        <div className="w-[95%] mx-auto flex flex-col gap-3">
          <h2 className="text-[20px] leading-[100%] font-semibold">
            {item.title}
          </h2>
          <span className="flex justify-start gap-2">
            <Image src={star} alt="icon" />
            <span className="text-[14px]">{item.review}</span>
          </span>
          <span className="w-fit bg-[#FFE3E4] inline-flex items-center justify-start gap-2 px-[16px] py-[6px] rounded-[8px]">
            <Image src={once} alt="icon" />
            <span className="text-[14px] text-[#FF383B] whitespace-nowrap">
              Brouchure
            </span>
          </span>
          <span className="text-[#6D758F] text-[16px]">{item.affiliation}</span>
          <div className="flex justify-center gap-2 items-center">
            <span
              className={`w-1/2 flex justify-center ${
                isCompareDisabled
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-[#FF383B] cursor-pointer"
              } text-white font-semibold text-[14px] leading-[18px] py-[8px] items-center rounded-[8px] whitespace-nowrap`}
              onClick={!isCompareDisabled ? onAddToCompare : undefined}
            >
              <Image
                src={tick}
                width={18}
                height={18}
                alt="tick"
                className="mr-2"
              />
              Add to compare
            </span>
            <span
              className="w-1/2 text-[14px] text-[#6D758F] font-semibold rounded-[8px] flex justify-center items-center border border-[#D9D9D9] 
            px-[12px] py-[8px]"
            >
              View Details
            </span>
          </div>
        </div>
      </section>
    </>
  );
};

export default Listing;

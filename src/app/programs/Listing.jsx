"use client"
import React, { useState } from 'react'
// import { cardData, Courses } from '../comparison/Data';
import Image from 'next/image';
import { Card } from '../comparison/Listing';
import { ProgramCard } from './ProgramCard';
import { cardData, Courses } from './PrData';

const Listing = () => {
  const [selectedCourse, setSelectedCourse] = useState(Courses[0]);
  return (
    <>
      <section className="containers border-b border-b-[#E1E4ED]">
        <div className="mx-auto flex justify-between items-center py-5">
          <ul className="flex gap-[6px]">
            {Courses.map((item, index) => (
              <li
                key={index}
                onClick={() => setSelectedCourse(item)}
                className={`cursor-pointer ${selectedCourse.title === item.title
                  ? "bg-[#FF383B] text-white"
                  : "bg-white text-[#6D758F] border border-[#D9D9D9]"
                  } hover:bg-[#FF383B] px-[22px] py-[18px] text-[12px] md:text-[14px] lg:text-[16px] leading-[16px] font-bold hover:text-white rounded-[8px]`}
              >
                {item.title}
              </li>
            ))}
          </ul>
          {/* <ul className="flex gap-2 items-center">
            <Image src={filterIcon} alt="icon" height={18} />
            <span className="text-[#FF383B] text-[16px]">Filter by state</span>
          </ul> */}
        </div>
        <div className=" mx-auto grid md:grid-cols-[25%_1fr] gap-[10px] lg:gap-[70px] pt-5 pb-10">
          <h2 className="text-[14px] md:text-[16px] lg:text-[20px] font-semibold md:hidden">Specialisations</h2>

          <select
            className="p-[16px] text-[#696969] text-[12px] md:hidden border border-[#F1F3F7] bg-white rounded-[6px] w-fit
             hover:ring-2 hover:ring-[#FF383B] focus:ring-2 focus:ring-[#FF383B] focus:outline-none"
          >

            {selectedCourse.specs.length > 0 ? (
              selectedCourse.specs.map((spec, i) => (
                <option key={i} value={spec}>{spec}</option>
              ))
            ) : (
              <option>No specializations available</option>
            )}
          </select>

          <div className="hidden md:flex  flex-col gap-3">
            <h2 className="text-[14px] md:text-[16px] lg:text-[20px] font-semibold">Specialisations</h2>

            {/* Large Screen: List */}
            <ul className=" flex-col gap-2">
              {selectedCourse.specs.length > 0 ? (
                selectedCourse.specs.map((spec, i) => (
                  <li
                    key={i}
                    className="p-[16px] text-[#696969] text-[12px] md:text-[14px] lg:text-[16px] leading-[16px] border border-[#F1F3F7] bg-[#FFFFFF] rounded-[6px]"
                  >
                    {spec}
                  </li>
                ))
              ) : (
                <li className="text-white">No specializations available</li>
              )}
            </ul>
          </div>
          <div className="flex flex-col lg:mx-8">
            <div className="grid grid-row md:grid-cols-2 gap-2 lg:gap-26">
              {Courses.map((item, index) => (
                <ProgramCard key={index} item={item} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Listing

"use client";
import React, { useState } from "react";
import filterIcon from '../../../assets/universities/Vector.svg'
import Image from "next/image";

import star from "../../../assets/universities/star.svg";
import once from "../../../assets/universities/once.svg";
import arrow from "../../../assets/universities/arrow.svg";
import {Courses } from "../../comparison/Data";
import { cardData } from "@/app/comparison/Data";
import { Card } from "@/app/comparison/Card";

const Innerlisting = () => {
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
                <div className=" mx-auto grid grid-cols-[25%_1fr] gap-[70px] pt-5 pb-10">
                    <div className=" flex flex-col gap-3">
                        <h2 className="text-[20px] font-semibold">Speciliasations</h2>
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
                        <div className="grid grid-cols-2 gap-6"> 
                               {cardData.map((item,index)=>(
                                 <Card key={index} item={item} />
                               ))}
                            </div>
                    </div>
                </div>
            </section>
        </>
    );
};


export default Innerlisting;

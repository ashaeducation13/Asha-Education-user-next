"use client";
import React from "react";
import Image from "next/image";
import arrow from '../../assets/home/programsection/Arrowright.svg'

const ProgramCard = ({ image, title, hover, previousHover, onMouseEnter }) => {
    // Determine expansion direction
    const expandToLeft = previousHover > hover;

    return (
        <div
            className="relative bg-[#FF383B] text-white transition-all duration-300 ease-in-out 
    flex items-end overflow-hidden cursor-pointer rounded-lg p-4 h-[230px] md:h-[277px] lg:h-[446px]"
            style={{
                width: hover ? "170px" : "50px",
                // Responsive sizes
                ...(window.innerWidth >= 768 && {
                    width: hover ? "220px" : "57px",
                }),
                ...(window.innerWidth >= 1024 && {
                    width: hover ? "315px" : "140px",
                }),
            }}
            onMouseEnter={onMouseEnter}
        >
            {/* Title - Moves from bottom-left to top-left on hover */}
            <div className="z-99">

                <h2
                    className={`absolute font-bold text-[14px] md:text-[16px] lg:text-[24px] leading-[14px] md:leading-[16px] lg:leading-[26px] z-100 transition-all duration-300 ease-in-out 
                ${hover ? "text-[14px] sm:text-[20px] md:text-[24px] lg:text-[32px] leading-[20px] md:leading-[24px] lg:leading-[32px] top-4 md:left-4 rotate-0" : "bottom-1 md:bottom-4 left-10 md:left-12 -rotate-90 origin-left"}`}
                >
                    {title} <span
                        className={`text-sm transition-opacity duration-300 ease-in-out 
        ${hover ? "opacity-100" : "opacity-0"} flex items-center gap-1`}
                    >
                        View Programs
                        <Image src={arrow} alt="Arrow Right" className="w-4 h-4" />
                    </span>
                </h2>


                {/* Image at Bottom */}
                <div className="absolute bottom-0 left-0 w-full">
                    <Image
                        src={image}
                        alt={title}
                        className="w-full object-cover h-62"
                    />
                </div>
            </div>

        </div>
    );
};

export default ProgramCard;

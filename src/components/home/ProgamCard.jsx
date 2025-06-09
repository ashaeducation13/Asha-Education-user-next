"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import arrow from '../../assets/home/programsection/Arrowright.svg'
import Link from "next/link";
import { motion } from "framer-motion";

const ProgramCard = ({ image, title, hover, id, previousHover, onMouseEnter }) => {
    const expandToLeft = previousHover > hover;

    // State for window width
    const [windowWidth, setWindowWidth] = useState(0);

    // Effect to update window width on resize
    useEffect(() => {
        const updateWidth = () => setWindowWidth(window.innerWidth);

        // Set initial width
        setWindowWidth(window.innerWidth);

        // Listen for resize events
        window.addEventListener("resize", updateWidth);

        return () => window.removeEventListener("resize", updateWidth);
    }, []);

    // Determine width based on screen size
    const getCardWidth = () => {
        if (windowWidth >= 1024) return hover ? "315px" : "140px";
        if (windowWidth >= 768) return hover ? "220px" : "57px";
        return hover ? "170px" : "50px"; // Default for small screens
    };

    return (
        <div
            className="relative bg-[#FF383B] text-white transition-all duration-350 ease-in-out 
                flex items-end overflow-hidden cursor-pointer rounded-lg p-4 h-[230px] md:h-[277px] lg:h-[446px]"
            style={{ width: getCardWidth() }}
            onMouseEnter={onMouseEnter}
        >
            {/* Title */}
            <div className="z-99">
                <Link href={`/programs?${id}`} passHref>

                    <motion.h2
                        initial={{ y: 40, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
                        className={`absolute font-bold text-[14px] md:text-[16px] lg:text-[24px] leading-[14px] md:leading-[16px] lg:leading-[26px] z-100 transition-all duration-300 ease-in-out 
                        ${hover ? "text-[14px] sm:text-[20px] md:text-[24px] lg:text-[32px] leading-[20px] md:leading-[24px] lg:leading-[32px] top-4 md:left-4 rotate-0" : "bottom-1 md:bottom-4 left-10 md:left-12 -rotate-90 origin-left"}`}
                    >
                        {title}
                        <span className={`text-sm transition-opacity duration-300 ease-in-out 
                            ${hover ? "opacity-100" : "opacity-0"} flex items-center gap-1`}
                        >
                            View Programs
                            <Image src={arrow} alt="Arrow Right" className="w-4 h-4" />
                        </span>
                    </motion.h2>
                </Link>
                {/* Image */}
                <div className="absolute bottom-0 left-0 w-full">
                    <Image src={image} alt={title} className="w-full object-cover h-62" />
                </div>
            </div>
        </div>
    );
};

export default ProgramCard;
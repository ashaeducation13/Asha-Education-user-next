"use client";
import ProgramCard from "@/components/home/ProgamCard";
import React, { useState } from "react";
import img1 from '../../assets/home/programsection/cardimg1.png'
import img2 from '../../assets/home/programsection/cardimg2.png'
import img3 from '../../assets/home/programsection/cardimg3.png'
import img4 from '../../assets/home/programsection/cardimg4.png'

import bg from '../../assets/home/programsection/bg2.svg'
import topleft from '../../assets/topleft.svg'
import topright from '../../assets/topright.svg'
import bottomleft from '../../assets/bottomleft.svg'
import bottomright from '../../assets/bottomright.svg'

import lines from '../../assets/home/programsection/lines.svg'

const programs = [
    { image: img1, title: "Undergraduate Programs" },
    { image: img2, title: "Postgraduate Programs" },
    { image: img3, title: "Doctoral Programs" },
    { image: img4, title: "Specialized MBAs" },
];

const ProgramsSection = () => {
    const [hoveredIndex, setHoveredIndex] = useState(0); // Default to first card hovered
    return (
        <section
            
            style={{
                backgroundImage: `url(${bg.src})`,
                backgroundSize: "cover",
                backgroundPosition: "left",
            }}>

            <div className=" flex flex-col w-full mx-auto justify-between containers md:flex-row gap-6"
            >
                {/* Left Section (40%) */}

                <div
                    className="md:w-[40%] lg:w-[30%] flex flex-col justify-center items-center relative py-8  text-black"

                >
                    {/* SVG Decorations */}
                    <div
                        className="absolute top-6 -left-2 w-[26px] h-[26px] bg-no-repeat bg-contain"
                        style={{ backgroundImage: `url(${topleft.src})` }}
                    ></div>

                    <div
                        className="absolute top-6 -right-2 w-[26px] h-[26px] bg-no-repeat bg-contain"
                        style={{ backgroundImage: `url(${topright.src})` }}
                    ></div>

                    <div
                        className="absolute bottom-6 -left-2 w-[26px] h-[26px] bg-no-repeat bg-contain"
                        style={{ backgroundImage: `url(${bottomleft.src})` }}
                    ></div>

                    <div
                        className="absolute bottom-6 -right-2 w-[26px] h-[26px] bg-no-repeat bg-contain"
                        style={{ backgroundImage: `url(${bottomright.src})` }}
                    ></div>

                    {/* Text Content */}
                    <div className="text-center md:text-left px-6 py-4 lg:py-16 md:px-4">
                        <h2 className="sm:text-[24px] md:text-[32px] lg:text-[40px] leading-[0.9] font-bold relative z-10">Find the Right Program for You</h2>
                        <p className="text-[12px] md:text-[14px] relative z-10 mt-2 leading-[18px] md:leading-[21px] lg:leading-[24px]">
                            Discover the perfect program tailored to your goals with expert guidance and a wide range of academic choices.
                        </p>
                    </div>
                </div>

                {/* Right Section (60%) */}
                <div className="relative flex gap-2 md:p-6 justify-center md:justify-between w-[90%]  md:w-[60%] lg:w-[70%] max-w-[400px]  md:max-w-[500px] lg:max-w-[850px] mx-auto">


                    {/* Background Overlay */}
                    <div
                        className="absolute inset-0 z-50 pointer-events-none "
                        style={{
                            backgroundImage: `url(${lines.src})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                        }}
                    />

                    {/* Cards */}
                    {programs.map((program, index) => (
                        <ProgramCard
                            key={index}
                            image={program.image}
                            title={program.title}
                            hover={hoveredIndex === index}
                            previousHover={hoveredIndex}
                            onMouseEnter={() => setHoveredIndex(index)}
                        />
                    ))}
                </div>

            </div>
        </section>

    );
};

export default ProgramsSection;

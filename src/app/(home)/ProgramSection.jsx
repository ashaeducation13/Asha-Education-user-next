"use client";
import ProgramCard from "@/components/home/ProgamCard";
import React, { useState } from "react";

const programs = [
    { image: "/home/programsection/cardimg1.png", title: "Undergraduate Programs" },
    { image: "/home/programsection/cardimg2.png", title: "Postgraduate Programs" },
    { image: "/home/programsection/cardimg3.png", title: "Doctoral Programs" },
    { image: "/home/programsection/cardimg4.png", title: "Specialized MBAs" },
];

const ProgramsSection = () => {
    const [hoveredIndex, setHoveredIndex] = useState(0); // Default to first card hovered

    return (
        <div className="flex w-full mx-auto">
            {/* Left Section (40%) */}
            <div
                className="w-[30%] flex flex-col justify-center items-center relative p-8 ml-8 text-black"
                style={{
                    backgroundImage: "url('/home/programsection/bg.svg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                {/* SVG Decorations */}
                <div
                    className="absolute top-6 left-6 w-[26px] h-[26px] bg-no-repeat bg-contain"
                    style={{ backgroundImage: "url('topleft.svg')" }}
                ></div>

                <div
                    className="absolute top-6 right-6 w-[26px] h-[26px] bg-no-repeat bg-contain"
                    style={{ backgroundImage: "url('topright.svg')" }}
                ></div>

                <div
                    className="absolute bottom-6 left-6 w-[26px] h-[26px] bg-no-repeat bg-contain"
                    style={{ backgroundImage: "url('bottomleft.svg')" }}
                ></div>

                <div
                    className="absolute bottom-6 right-6 w-[26px] h-[26px] bg-no-repeat bg-contain"
                    style={{ backgroundImage: "url('bottomright.svg')" }}
                ></div>

                {/* Text Content */}
                <div className="text-left max-w-[65%]">
                    <h2 className="text-4xl font-bold relative z-10">Find the Right Program for You</h2>
                    <p className="text-lg relative z-10 mt-2">
                        Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit nullam.
                    </p>
                </div>
            </div>

            {/* Right Section (60%) */}
            <div className="relative w-[70%] flex gap-[6px] p-6 justify-between max-w-[65%] 2xl:max-w-[52%] ml-8 2xl:ml-16">

                {/* Background Overlay */}
                <div
                    className="absolute inset-0 z-50 pointer-events-none"
                    style={{
                        backgroundImage: "url('/home/programsection/lines.svg')",
                        backgroundSize: "contain",
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
    );
};

export default ProgramsSection;

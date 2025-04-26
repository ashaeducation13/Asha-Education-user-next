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
import { motion } from "framer-motion"; 

import lines from '../../assets/home/programsection/lines.svg'
import Link from "next/link";

const programs = [
    { image: img1, title: "Undergraduate Programs", key: "UG" },
    { image: img2, title: "Postgraduate Programs", key: "PG" },
    { image: img3, title: "Doctoral Programs", key: "Doctoral" },
    { image: img4, title: "Specialized MBAs", key: "Specialized MBA" },
];

const ProgramsSection = () => {
    const [hoveredIndex, setHoveredIndex] = useState(0);
    return (
        <section className="relative overflow-hidden">
            {/* Background Layer */}
            <div
                className="absolute inset-0 bg-cover bg-left bg-no-repeat z-0"

            ></div>

            <div className="z-10 flex flex-col w-full mx-auto justify-between containers md:flex-row gap-6"
            >
                {/* Left Section (40%) */}

                <div
                    className="md:w-[40%] lg:w-[30%] flex flex-col justify-center items-center relative py-8  text-black"

                >
                    {/* SVG Decorations */}
                    <div
                        className="absolute top-6 left-1 w-[26px] h-[26px] bg-no-repeat bg-contain"
                        style={{ backgroundImage: `url(${topleft.src})` }}
                    ></div>

                    <div
                        className="absolute top-6 right-0 w-[26px] h-[26px] bg-no-repeat bg-contain"
                        style={{ backgroundImage: `url(${topright.src})` }}
                    ></div>

                    <div
                        className="absolute bottom-6 left-1 w-[26px] h-[26px] bg-no-repeat bg-contain"
                        style={{ backgroundImage: `url(${bottomleft.src})` }}
                    ></div>

                    <div
                        className="absolute bottom-6 right-0 w-[26px] h-[26px] bg-no-repeat bg-contain"
                        style={{ backgroundImage: `url(${bottomright.src})` }}
                    ></div>

                    {/* Text Content */}
                    <motion.div
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        viewport={{ once: true, amount: 0.5 }}
                        className="text-center md:text-left p-6 lg:py-16 md:px-4 w-[80%] md:w-[100%]">
                        <h2
                            className="sm:text-[24px] md:text-[32px] lg:text-[40px]  font-bold relative z-10 leading-[24px] md:leading-[0.9] w-[80%] md:w-[100%] mx-auto md:px-4">Find the Right Program for You</h2>
                        <p
                            className="text-[12px] md:text-[14px] relative z-10 mt-2 leading-[18px] md:leading-[21px] lg:leading-[24px] md:px-4">
                            Discover the perfect program tailored to your goals with expert guidance and a wide range of academic choices.
                        </p>
                    </motion.div>
                </div>

                {/* Right Section (60%) */}
                <motion.div className="relative flex gap-2 md:p-6 justify-center md:justify-between w-[90%]  md:w-[60%] lg:w-[70%] max-w-[400px]  md:max-w-[500px] lg:max-w-[850px] mx-auto"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={{
                        hidden: { opacity: 0, y: 50 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
                    }}>


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
                        <motion.div
                            key={program.id || program.key || index}
                            variants={{
                                hidden: { opacity: 0, y: 30 },
                                visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
                            }}
                        >
                            <ProgramCard
                                key={program.id || program.key || index}
                                id={program.key}
                                image={program.image}
                                title={program.title}
                                hover={hoveredIndex === index}
                                previousHover={hoveredIndex}
                                onMouseEnter={() => setHoveredIndex(index)}
                            />
                        </motion.div>
                    ))}

                </motion.div>

            </div>
        </section>

    );
};

export default ProgramsSection;
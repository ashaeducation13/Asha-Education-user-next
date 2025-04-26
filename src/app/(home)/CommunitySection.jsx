'use client'; // Important if you're using the /app directory in Next.js 13+

import React from "react";
import Image from "next/image";
import woman1 from "../../assets/home/informsection/women3.png";
import woman2 from "../../assets/home/informsection/women4.png";
import backgroundSvg from "../../assets/home/informsection/backlines.svg";
import { motion } from "framer-motion";

const cardVariants = {
    hidden: (direction) => ({
        opacity: 0,
        x: direction === 'left' ? -50 : 50,
        scale: 0.95,
    }),
    visible: {
        opacity: 1,
        x: 0,
        scale: 1,
        transition: { duration: 0.8 },
    },
};

const CommunitySection = () => {
    return (
        <div className="relative bg-[#FF383B] py-12 overflow-hidden">
            {/* Background SVG */}
            <div className="absolute inset-0">
                <Image
                    src={backgroundSvg}
                    alt="Background"
                    fill
                    className="object-cover"
                />
            </div>

            <div className="relative containers mx-auto flex flex-col md:flex-row gap-6 justify-between items-center">
                {[
                    {
                        title: "Join Our MBA Community",
                        text: "Connect with fellow MBA aspirants and professionals to expand your network and enhance your learning experience.",
                        btnText: "Join Now →",
                        img: woman1,
                        direction: "left",
                    },
                    {
                        title: "Refer & Earn",
                        text: "Share Asha Education with your network and earn rewards for each successful student referral.",
                        btnText: "Refer Now →",
                        img: woman2,
                        direction: "right",
                    },
                ].map((card, index) => (
                    <motion.div
                        key={index}
                        className="relative flex flex-row justify-between rounded-xl shadow-lg w-full md:w-[500px] h-[330px] md:h-[339px] lg:h-[386px] text-white overflow-hidden"
                        style={{
                            backgroundImage:
                                "linear-gradient(90deg, #0A0078 5.5%, #FF383B 96.5%)",
                        }}
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        custom={card.direction}
                    >
                        {/* Text Content */}
                        <div className="flex flex-col justify-center p-6 md:p-8 w-1/2 md:w-3/5">
                            <div>
                                <h2 className="text-[20px] md:text-[24px] lg:text-[32px] font-semibold">
                                    {card.title}
                                </h2>
                                <p className="text-[12px] md:text-[14px] lg:text-[16px] mt-2 text-gray-200">
                                    {card.text}
                                </p>
                            </div>

                            <button className="mt-4 bg-[#FF383B] text-[14px] md:text-[20px] text-white px-4 py-2 rounded-md font-semibold shadow-md w-fit self-start">
                                {card.btnText}
                            </button>
                        </div>

                        {/* Image */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            viewport={{ once: true, amount: 0.3 }}
                            className="flex items-end justify-end w-1/2 md:w-2/5 h-full"
                        >
                            <div className="relative h-[190px] sm:h-[238px] lg:h-[280px] w-full">
                                <Image
                                    src={card.img}
                                    alt={card.title}
                                    fill
                                    className="object-contain object-bottom"
                                />
                            </div>
                        </motion.div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default CommunitySection;

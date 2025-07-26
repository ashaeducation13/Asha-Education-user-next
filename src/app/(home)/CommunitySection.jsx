'use client'; 

import React from "react";
import Image from "next/image";
import woman1 from "../../assets/home/informsection/women3.png";
import woman2 from "../../assets/home/informsection/women4.png";
import backgroundSvg from "../../assets/home/informsection/backlines.svg";
import { motion } from "framer-motion";
import Link from "next/link";

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
                        link: "https://www.instagram.com/channel/AbaOJ-Wbdhn3HdRR/?igsh=MXRsbmd3dmZsMzRlbw==",
                    },
                    {
                        title: "Refer & Earn",
                        text: "Share Asha Education with your network and earn rewards for each successful student referral.",
                        btnText: "Refer Now →",
                        img: woman2,
                        direction: "right",
                        link: "/refer-and-earn",
                    },
                ].map((card, index) => (
                    <motion.div
                        key={index}
                        className="relative flex flex-col sm:flex-row justify-between rounded-xl shadow-lg w-full max-w-lg lg:max-w-[500px] h-auto sm:h-[280px] lg:h-[339px] xl:h-[386px] text-white overflow-hidden"
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
                        <div className="flex flex-col justify-center p-4 sm:p-6 lg:p-8 w-full sm:w-3/5 order-1 sm:order-none">
                            <div className="space-y-2 sm:space-y-3">
                                <h2 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-semibold leading-tight">
                                    {card.title}
                                </h2>

                                <p className="text-xs sm:text-sm lg:text-base text-gray-200 leading-relaxed">
                                    {card.text}
                                </p>
                            </div>
                            <Link href={card.link}>
                                <button className="mt-3 sm:mt-4 bg-[#FF383B] text-sm sm:text-base lg:text-lg text-white px-3 sm:px-4 py-2 rounded-md font-semibold shadow-md w-fit hover:bg-[#e53134] transition-colors">
                                    {card.btnText}
                                </button>
                            </Link>
                        </div>

                        {/* Image */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            viewport={{ once: true, amount: 0.3 }}
                            className="flex items-end justify-center sm:justify-end w-full sm:w-2/5 h-48 sm:h-full order-2 sm:order-none"
                        >
                            <div className="relative h-full w-full max-w-[200px] sm:max-w-none">
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

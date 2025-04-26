"use client";
import React, { useState } from "react";
import Image from "next/image";
import thumbnail from '../../assets/home/Trustsection/thumbnail.webp'
import play from '../../assets/home/Trustsection/play.svg'
import topright from '../../assets/topright.svg'
import ReactPlayer from "react-player";
import { VideoContainer } from '../../components/VideoContainer'
import Link from "next/link";
const video2 = "/videos/vid2.mp4"
import { motion } from "framer-motion";


const TrustSection = () => {
    const [playVideo, setPlayVideo] = useState(false);
    return (
        <div className="containers flex justify-center">
            <div className="w-full py-8 flex flex-col md:flex-row items-center justify-between gap-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true, amount: 0.4 }} className="flex-1 flex flex-col gap-6 items-center justify-center h-full">
                    <VideoContainer video={video2} />
                </motion.div>

                {/* Right Section (Text - 60%) */}
                <div className="md:w-[55%] flex flex-col gap-6 md:p-4 h-full">
                    {/* Title & Subtitle */}
                    <div >

                        <motion.h2
                            initial={{ y: 40, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            viewport={{ once: true, amount: 0.5 }}
                            className="text-[20px] md:text-[24px] lg:text-[30px]font-bold">Why Thousands of Students  <span
                                className="bg-clip-text text-transparent"
                                style={{
                                    backgroundImage: "linear-gradient(90.02deg, #0A0078 2.5%, #FF383B 43.53%)",
                                }}
                            >Trust Us</span></motion.h2>
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            viewport={{ once: true, amount: 0.5 }}
                            className="text-[12px] md:text-[14px] lg:text-[16px] text-gray-600 lg:w-[70%]">
                            Proven success, expert guidance, top universities, and personalized support—helping students achieve their academic dreams
                        </motion.p>

                        {/* Feature Boxes (2 per row) */}
                        <div className="grid lg:grid-cols-2 gap-6 md:py-4 items-stretch">
                            {[
                                { logo: topright, title: "Partnered with top universities in India.", subtitle: "Collaborating with India's leading universities for excellence." },
                                { logo: topright, title: "Personalized counseling and admission guidance.", subtitle: "Expert counselling and admission support for every student." },
                                { logo: topright, title: "Flexible learning options: online and offline.", subtitle: "Choose online or offline study options for convenience." },
                                { logo: topright, title: "Track record of successful placements.", subtitle: "Strong track record of successful student career placements." },
                            ].map((feature, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ y: 40, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    transition={{ duration: 0.6, delay: index * 0.2 }}
                                    viewport={{ once: true, amount: 0.4 }}
                                    whileHover={{ scale: 1.015 }} >
                                    <div className="flex items-start gap-4 ">
                                        <Image src={feature.logo} alt={feature.title} className="h-[16px] md:h-[20px] lg:h-[24px]" />
                                        <h3 className="text-[14px] md:text-[16px] lg:text-[20px] font-semibold leading-[20px]">{feature.title}</h3>
                                    </div>
                                    <p className="text-[12px] md:text-[14px] lg:text-[16px] leading-[24px] text-gray-500  mx-auto">{feature.subtitle}</p>
                                </motion.div>
                            ))}
                        </div>

                        {/* Download Button & Small Text */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            viewport={{ once: true, amount: 0.5 }} className="flex items-center gap-4 mt-4">
                            <Link href={'about-us/'}>
                                <button className=" text-white text-[12px] md:text-[14px]  px-6 py-2 rounded-lg transition cursor-pointer"
                                    style={{
                                        backgroundImage: "linear-gradient(90deg, #0A0078 5.5%, #FF383B 96.5%)",
                                    }}
                                >
                                    Know More
                                </button>
                            </Link>
                            <span className="text-[10px] md:text-[12px] lg:text-[14px]  text-gray-500 md:w-[60%] lg:w-[40%]">Curious about us? Click ‘Know More’ to explore our story and mission.</span>
                        </motion.div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default TrustSection;

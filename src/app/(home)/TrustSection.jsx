"use client";
import React, { useState } from "react";
import Image from "next/image";
import thumbnail from '../../assets/home/Trustsection/thumbnail.webp'
import play from '../../assets/home/Trustsection/play.svg'
import topright from '../../assets/topright.svg'

const TrustSection = () => {
    const [playVideo, setPlayVideo] = useState(false);
    return (
        <div className="w-full flex justify-center">
            <div className="max-w-[1440px] w-full p-8 flex items-center justify-between">
                <div className="w-[40%] relative ml-10">
                    {playVideo ? (
                        <ReactPlayer
                            url={null}
                            width="450px"
                            height="450px"
                            className="rounded-xl shadow-lg"
                            controls
                        />
                    ) : (
                        <div
                        className="relative w-full max-w-[450px] aspect-square flex items-center justify-center cursor-pointer"
                        onClick={() => setPlayVideo(true)}
                    >
                        <Image
                            src={thumbnail} 
                            alt="Video Thumbnail"
                            className="w-full h-full rounded-xl shadow-lg object-cover"
                        />
                        {/* Play Icon Overlay */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <Image src={play} alt="Play Button" className="w-16 h-16 opacity-80" />
                        </div>
                    </div>
                    
                    )}
                </div>

                {/* Right Section (Text - 60%) */}
                <div className="w-[55%] flex flex-col gap-6">
                    {/* Title & Subtitle */}
                    <div className="w-[90%]">

                        <h2 className="text-[30px] font-bold">Why Thousands of Students  <span
                            className="bg-clip-text text-transparent"
                            style={{
                                backgroundImage: "linear-gradient(90.02deg, #0A0078 2.5%, #FF383B 43.53%)",
                            }}
                        >Trust Us</span></h2>
                        <p className="text-[16px] text-gray-600 w-[70%]">
                        Proven success, expert guidance, top universities, and personalized support—helping students achieve their academic dreams
                        </p>

                        {/* Feature Boxes (2 per row) */}
                        <div className="grid grid-cols-2 gap-6">
                            {[
                                { logo: topright, title: "Partnered with top universities in India.", subtitle: "Collaborating with India's leading universities for excellence." },
                                { logo: topright, title: "Personalized counseling and admission guidance.", subtitle: "Expert counselling and admission support for every student." },
                                { logo: topright, title: "Flexible learning options: online and offline.", subtitle: "Choose online or offline study options for convenience." },
                                { logo: topright, title: "Track record of successful placements.", subtitle: "Strong track record of successful student career placements." },
                            ].map((feature, index) => (
                                <div key={index} >
                                    <div className="flex items-start gap-4 p-4">
                                        <Image src={feature.logo} alt={feature.title} className="w-12 h-12" />
                                        <h3 className="text-lg text-[20px] font-semibold leading-[20px]">{feature.title}</h3>
                                    </div>
                                    <p className="text-sm text-[16px] leading-[24px] text-gray-500 w-[90%] mx-auto">{feature.subtitle}</p>
                                </div>
                            ))}
                        </div>

                        {/* Download Button & Small Text */}
                        <div className="flex items-center gap-4 mt-4">
                            <button className=" text-white px-6 py-2 rounded-lg transition"
                                style={{
                                    backgroundImage: "linear-gradient(90deg, #0A0078 5.5%, #FF383B 96.5%)",
                                }}
                            >
                                Download Now
                            </button>
                            <span className="text-sm text-gray-500 w-[40%]">Want to know more? Download our brochure for detailed insights.</span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default TrustSection;

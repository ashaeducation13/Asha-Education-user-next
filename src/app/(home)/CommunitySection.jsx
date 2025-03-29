import React from "react";
import Image from "next/image";
import woman1 from "../../assets/home/informsection/women3.png";
import woman2 from "../../assets/home/informsection/women4.png";
import backgroundSvg from "../../assets/home/informsection/backlines.svg";

const CommunitySection = () => {
    return (
        <div className="relative bg-[#FF383B] py-12 overflow-hidden">
            {/* Background SVG */}
            <div className="absolute inset-0">
                <Image src={backgroundSvg} alt="Background" layout="fill" objectFit="cover" />
            </div>

            <div className="relative containers mx-auto flex flex-col md:flex-row gap-6 justify-center items-center px-4">
                {[
                    {
                        title: "Join Our MBA Community",
                        text: "Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit nullam.",
                        btnText: "Join Now →",
                        img: woman1,
                    },
                    {
                        title: "Refer & Earn",
                        text: "Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit nullam.",
                        btnText: "Refer Now →",
                        img: woman2,
                    },
                ].map((card, index) => (
                    <div
                        key={index}
                        className="relative flex flex-row justify-between rounded-xl shadow-lg w-full md:w-[500px] h-[330px] md:h-[339px] lg:h-[386px] text-white overflow-hidden"
                        style={{
                            backgroundImage: "linear-gradient(90deg, #0A0078 5.5%, #FF383B 96.5%)",
                        }}
                    >
                        {/* Text Content */}
                        <div className="flex flex-col justify-center p-6 md:p-8 w-1/2 md:w-3/5">
                            <div>
                                <h2 className="text-[20px] md:text-[24px] lg:text-[32px] font-semibold">{card.title}</h2>
                                <p className="text-[12px] md:text-[14px] lg:text-[16px] mt-2 text-gray-200">{card.text}</p>
                            </div>

                            {/* Button */}
                            <button className="mt-4 bg-[#FF383B] text-[14px] md:text-[20px] text-white px-4 py-2 rounded-md font-semibold shadow-md w-fit self-start">
                                {card.btnText}
                            </button>
                        </div>

                        {/* Image Container - Right Side */}
                        <div className="flex items-end justify-end w-1/2 md:w-2/5 h-full">
                            <div className="relative h-[190px] sm:h-[238px] lg:h-[280px] w-full">
                                <Image 
                                    src={card.img} 
                                    alt={card.title} 
                                    fill
                                    className="object-contain object-bottom"
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CommunitySection;
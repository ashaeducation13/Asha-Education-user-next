import React from "react";
import Image from "next/image";
import woman1 from "../../assets/home/informsection/women1.png";
import woman2 from "../../assets/home/informsection/women2.png";
import backgroundSvg from "../../assets/home/informsection/backlines.svg"; // Your SVG file

const CommunitySection = () => {
    return (
        <div className="relative  bg-[#FF383B] py-12  overflow-hidden">
            {/* Background SVG */}
            <div className="absolute inset-0">
                <Image src={backgroundSvg} alt="Background" layout="fill" objectFit="cover" />
            </div>

            <div className="relative containers mx-auto flex flex-col md:flex-row gap-6 justify-center items-center">
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
                        className="relative flex flex-row justify-between  rounded-xl shadow-lg w-full md:w-[500px] text-white"
                        style={{
                            backgroundImage: "linear-gradient(90deg, #0A0078 5.5%, #FF383B 96.5%)",
                          }}
                    >
                        {/* Text Content */}
                        <div className="flex flex-col p-6 md:p-8">

                            <div>
                                <h2 className="text-2xl font-semibold">{card.title}</h2>
                                <p className="text-sm mt-2 text-gray-200">{card.text}</p>
                            </div>

                            {/* Button */}
                            <button className="mt-4 bg-[#FF383B] text-white px-4 py-2 rounded-md font-semibold shadow-md w-fit self-start">
                                {card.btnText}
                            </button>
                        </div>

                        {/* Image Inside the Card */}
                        <div className="mt-4 flex justify-end">
                            <img src={card.img.src} alt={card.title} className="w-28 md:w-66 rounded-lg" />
                        </div>

                    </div>
                ))}
            </div>
        </div>
    );
};

export default CommunitySection;

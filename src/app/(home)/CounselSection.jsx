"use client";
import HomeForm from '@/components/Forms/HomeForm'
import React, { useState } from 'react'
import Image from "next/image";
import thumbnail from '../../assets/home/counsel/thumbnail1.jpeg'
import play from '../../assets/home/Trustsection/play.svg'
import icon1 from '../../assets/topleft.svg'
import icon2 from '../../assets/topright.svg'
import icon3 from '../../assets/bottomleft.svg'
import icon4 from '../../assets/bottomright.svg'

const CounselSection = () => {
    const [playVideo, setPlayVideo] = useState(false);

    return (
        <div className='bg-[#F5F5F5] py-10 relative'>
              <Image src={icon1} alt="Icon 1" className="absolute top-[30px] left-[30px] w-8 h-8" />
            
            {/* Top-right Icon */}
            <Image src={icon2} alt="Icon 2" className="absolute top-[30px] right-[30px] w-8 h-8" />
            
            {/* Bottom-left Icon */}
            <Image src={icon3} alt="Icon 3" className="absolute bottom-[30px] left-[30px] w-8 h-8" />
            
            {/* Bottom-right Icon */}
            <Image src={icon4} alt="Icon 4" className="absolute bottom-[30px] right-[30px] w-8 h-8" />

            {/* heading text */}
            <div className="relative max-w-[1440px] mx-auto text-center">
                <h1 className="text-4xl md:text-[48px] font-semibold text-gray-900 font-open-sans">
                    <span
                        className="bg-clip-text text-transparent"
                        style={{
                            backgroundImage: "linear-gradient(90.02deg, #0A0078 2.5%, #FF383B 43.53%)",
                        }}
                    >
                        Get Free </span> Counselling
                </h1>
                <p className="mt-4 text-[16px] text-[#6D758F]  mx-auto font-rubik font-normal leading-[24px]">
                    Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit
                    phasellus mollis sit aliquam sit nullam neque ultrices.
                </p>
            </div >

            {/* form and video section */}


            <div className="w-full p-8 flex items-center justify-center gap-30 xl:gap-60 mx-auto">
                <div className="relative ml-10">
                    <HomeForm />
                </div>

                {/* Right Section (Text - 60%) */}
                <div className="flex flex-col gap-6 ">
                    {playVideo ? (
                        <ReactPlayer
                            url={null}
                            width="450px"
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
                                className="w-full h-[94%] rounded-xl shadow-lg object-cover"
                            />
                            {/* Play Icon Overlay */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <Image src={play} alt="Play Button" className="w-16 h-16 opacity-80" />
                            </div>
                        </div>

                    )}
                </div>
            </div>

        </div>
    )
}

export default CounselSection

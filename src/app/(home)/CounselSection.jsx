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
import ReactPlayer from 'react-player';

const CounselSection = () => {
    const [playVideo, setPlayVideo] = useState(false);

    return (
        <div className='bg-[#F5F5F5]'>

            <section className='containers py-10 relative'>
                <Image src={icon1} alt="Icon 1" className="absolute top-[30px] left-[30px] w-8 h-8 hidden md:block" />

                {/* Top-right Icon */}
                <Image src={icon2} alt="Icon 2" className="absolute top-[30px] right-[30px] w-8 h-8 hidden md:block" />

                {/* Bottom-left Icon */}
                <Image src={icon3} alt="Icon 3" className="absolute bottom-[30px] left-[30px] w-8 h-8 hidden md:block" />

                {/* Bottom-right Icon */}
                <Image src={icon4} alt="Icon 4" className="absolute bottom-[30px] right-[30px] w-8 h-8 hidden md:block" />

                {/* heading text */}
                <div className="relative containers mx-auto text-center">
                    <h1 className="text-[24px] md:text-[36px] lg:text-[48px] font-semibold text-gray-900 font-open-sans">
                        <span
                            className="bg-clip-text text-transparent"
                            style={{
                                backgroundImage: "linear-gradient(90.02deg, #0A0078 2.5%, #FF383B 43.53%)",
                            }}
                        >
                            Get Free </span> Counselling
                    </h1>
                    <p className="mt-4 text-[12px] md:text-[14px] lg:text-[16px] text-[#6D758F]  mx-auto font-rubik font-normal leading-[24px]">
                        Receive personalized academic guidance at no cost. Our expert counsellors are here to help you navigate your educational journey. Schedule your free session today.
                    </p>
                </div >

                {/* form and video section */}


                <div className="w-full py-4 md:p-8  flex flex-col-reverse md:flex-row items-center justify-center md:gap-6 mx-auto">
                    <div className="relative flex-1 flex flex-col">
                        <HomeForm />
                    </div>

                    {/* Right Section (Text - 60%) */}
                    <div className="flex-1 flex flex-col gap-6 items-center justify-center">

                        {playVideo ? (
                            <ReactPlayer
                                url="/videos/vid2.mp4"

                                width="80%"
                                className="rounded-xl shadow-lg"
                                controls
                            />
                        ) : (
                            <div
                                className="relative w-full max-w-[450px] aspect-square flex items-center justify-center cursor-pointer h-full"
                                onClick={() => setPlayVideo(true)}
                            >
                                <Image
                                    src={thumbnail}
                                    alt="Video Thumbnail"
                                    className="w-full md:h-[400px] lg:h-[90%] rounded-xl shadow-lg object-cover"
                                />
                                {/* Play Icon Overlay */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <Image src={play} alt="Play Button" className="w-16 h-16 opacity-80" />
                                </div>
                            </div>

                        )}
                    </div>
                </div>

            </section>
        </div>
    )
}

export default CounselSection

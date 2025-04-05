import React from 'react'
import Image from "next/image";
import Link from 'next/link';


const PartnerCard = ({ course }) => {
  return (
    <>
      <div className="max-w-[260px] w-[94%] lg:w-[97%] bg-white shadow-lg rounded-xl transition-transform duration-300 hover:scale-105 h-full flex flex-col justify-between">
        {/* Image */}
        <Link href={`/programs?id=${course.id}`} passHref>

          <Image src={course.image} alt={course.program_name?.name} width={200} height={260} className=" w-full h-[260px] object-cover" />
        </Link>

        {/* Content */}
        {/* Title */}
        <div className='p-4 flex flex-col flex-grow text-left mx-auto'>

          <h3 className="text-[14px] md:text-[16px] lg:text-[18px] font-open-sans font-semibold text-[#121212]">{course.program_name?.name}</h3>
          {/* Subtitle */}
          <p className="text-[#6D758F] text-[12px] md:text-[13px] lg:text-[14px] font-inter mt-1">{course.program_name?.description}</p>
        </div>

        {/* Buttons */}
        <div className="p-4 flex gap-3 justify-center">
          {/* <button className="px-4 py-2 border border-gray-400 text-[#6D758F] font-semibold font-inter text-[12px] rounded-lg hover:bg-gray-100 transition">
            View Details
          </button> */}
          <button className="px-2 md:px-4 py-2 bg-[#FF383B] text-white font-semibold font-inter text-[12px] rounded-lg transition cursor-pointer">
            Apply Now
          </button>
        </div>
      </div>
    </>
  )
}

export default PartnerCard

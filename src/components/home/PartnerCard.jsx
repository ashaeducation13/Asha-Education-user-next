'use client'
import React from 'react'
import Image from "next/image";
import Link from 'next/link';

const PartnerCard = ({ course, onApplyClick }) => {
  return (
    <div className="md:w-[85%] bg-white shadow-lg rounded-xl transition-transform duration-300 hover:scale-105 h-full flex flex-col my-3">
      {/* Image */}
      <Link href={`/programs/${course.id}`} passHref>
        {course?.specialization?.image && (
          <Image
            src={course.specialization.image}
            alt={course.program_name?.name || "Course Image"}
            width={200}
            height={200}
            className="w-full h-[140px] md:h-[180px] lg:h-[200px] object-cover rounded-t-xl"
          />
        )}
      </Link>

      {/* Content */}
      <div className="p-2 md:px-4 flex flex-col flex-grow text-left">
        {/* Title */}
        <h3 className="text-[14px] md:text-[16px] lg:text-[18px] font-open-sans font-semibold text-[#121212]">
          {course.specialization?.name?.toLowerCase().includes("general")
            ? course.program_name?.name
            : `${course.program_name?.name} in ${course.specialization?.name}`}
        </h3>

        {/* Description */}
        <p className="text-[#6D758F] text-[12px] md:text-[13px] lg:text-[14px] font-inter mt-1 line-clamp-3">
          {course.specialization?.description}
        </p>

        {/* Buttons */}
        <div className="flex gap-3 justify-center mt-auto pt-4">
          <Link href={`/programs/${course.id}`} passHref>
            <button className="px-1 md:px-4 py-2 border border-gray-400 text-[#6D758F] font-semibold font-inter text-[10px] md:text-[12px] rounded-lg hover:bg-gray-100 transition">
              View Details
            </button>
          </Link>
          <button
            onClick={() => onApplyClick(course)}
            className="px-2 md:px-4 py-2 bg-[#FF383B] text-white font-semibold font-inter text-[10px] md:text-[12px] rounded-lg transition cursor-pointer"
          >
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default PartnerCard;

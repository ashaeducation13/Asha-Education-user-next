import React from 'react'
import Image from "next/image";

const Certcard = ({ imgSrc, title }) => {
    return (
      <div className="max-w-xs bg-white py-6 flex flex-col items-center text-center">
        {/* Image */}
        <div className="w-24 h-24 mb-4">
          <Image src={imgSrc} width={400} height={400} alt={title} className="w-full h-full object-contain" />
        </div>
  
        {/* Text */}
        <h3 className="text-[14px] md:text-[16px] lg:text-[20px] font-semibold text-gray-800">{title}</h3>
       
      </div>
    );
  };

export default Certcard

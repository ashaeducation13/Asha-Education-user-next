import React from 'react'
import Image from "next/image";

const Certcard = ({ imgSrc }) => {
    return (
      <div className="max-w-xs bg-white flex flex-col items-center text-center">
        {/* Image */}
        <div className="lg:w-[250px] lg:h-[120px] mb-4">
          <Image src={imgSrc} alt={imgSrc} className="w-full h-full object-contain" />
        </div>
      </div>
    );
  };

export default Certcard

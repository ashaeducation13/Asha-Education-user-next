import React from 'react'
import Image from "next/image";

const Certcard = ({ imgSrc }) => {
    return (
      <div className="max-w-xs bg-white py-6 flex flex-col items-center text-center">
        {/* Image */}
        <div className="w-28 h-28 mb-4">
          <Image src={imgSrc} className="w-full h-full object-contain" />
        </div>
      </div>
    );
  };

export default Certcard

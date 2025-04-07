import React from 'react'
import Image from "next/image";

const Certcard = ({ imgSrc }) => {
    return (
      <div className="bg-white py-6 flex flex-col items-center text-center">
        {/* Image */}
        <div className="mb-4">
          <Image src={imgSrc} className="w-full h-full" />
        </div>
      </div>
    );
  };

export default Certcard

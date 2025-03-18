import React from 'react'

const PartnerCard = ({ image, title, subtitle }) => {
  return (
    <>
      <div className="max-w-[260px] w-full bg-white shadow-lg rounded-xl overflow-hidden transition-transform duration-300 hover:scale-105">
      {/* Image */}
      <img src={image} alt={title} className="w-full h-[260px] object-cover" />

      {/* Content */}
      <div className="p-5 text-left">
        {/* Title */}
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
        {/* Subtitle */}
        <p className="text-gray-600 mt-1">{subtitle}</p>

        {/* Buttons */}
        <div className="flex gap-3 mt-4 justify-between">
          <button className="px-4 py-2 bg-[#FF383B] text-white font-medium text-[12px] rounded-lg transition">
            Apply Now
          </button>
          <button className="px-4 py-2 border border-gray-400 text-gray-700 font-medium text-[12px] rounded-lg hover:bg-gray-100 transition">
            View Details
          </button>
        </div>
      </div>
    </div>
    </>
  )
}

export default PartnerCard

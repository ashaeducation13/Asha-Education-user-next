"use client";
import Image from "next/image";
import star from "../../../assets/comparison/star.svg";
import greentick from "../../../assets/comparison/greentick.svg";
import redtick from "../../../assets/comparison/redtick.svg";

export default function ComparisonCard({
  univ,
  pros,
  cons,
  allProsCons,
  selectedId,
  otherSelectedId,
  onChange
}) {
  const filteredUniversities = allProsCons.filter(
    item => item.univ.id !== otherSelectedId
  );

  return (
    <div className="rounded-[10px] p-4 md:p-6 bg-[#FFF2F2] w-full max-w-full overflow-hidden">
      <div className="flex flex-col gap-2 mb-4">
        <h2 className="font-open-sans font-semibold text-[16px] md:text-[18px] lg:text-[20px] text-[#121212]">
          {univ.name}
        </h2>

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          <span className="font-inter font-medium text-[12px] md:text-[14px] text-[#595959] flex items-center gap-1">
            <Image src={star} alt="Star" className="w-4 h-4" />
            {univ.rating}
          </span>

          <div className="relative inline-block w-full md:w-auto">
            <select
              className="appearance-none font-inter font-semibold text-[12px] leading-[18px] text-[#121212] bg-white border border-[#D9D9D9] rounded-[8px] px-3 py-2 pr-8 shadow-sm hover:border-[#A0AEC0] focus:outline-none focus:ring-2 focus:ring-[#FF383B] focus:border-[#FF383B] transition duration-200"
              value={selectedId}
              onChange={(e) => onChange(parseInt(e.target.value))}
            >
              {filteredUniversities.map((item) => (
                <option key={item.univ.id} value={item.univ.id}>
                  {item.univ.name}
                </option>
              ))}
            </select>
            {/* Down Arrow */}
            <div className="absolute inset-y-0 right-2 flex items-center pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 7l3-3 3 3m0 6l-3 3-3-3" />
              </svg>
            </div>
          </div>

        </div>
      </div>

      {/* PROS */}
      <div className="bg-white p-4 md:p-6 rounded-[10px] mb-4">
        <h3 className="font-open-sans font-bold text-[14px] md:text-[16px] text-[#121212] mb-3">PROS</h3>
        <ul className="space-y-3">
          {pros.map((item, index) => (
            <li key={index} className="font-rubik text-[12px] md:text-[14px] text-[#121212] flex gap-2">
              <Image src={greentick} alt="greentick" className="w-4 h-4 mt-0.5" />
              <span>{item.description}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* CONS */}
      <div className="bg-white p-4 md:p-6 rounded-[10px]">
        <h3 className="font-open-sans font-bold text-[14px] md:text-[16px] text-[#121212] mb-3">CONS</h3>
        <ul className="space-y-3">
          {cons.map((item, index) => (
            <li key={index} className="font-rubik text-[12px] md:text-[14px] text-[#121212] flex gap-2">
              <Image src={redtick} alt="redtick" className="w-4 h-4 mt-0.5" />
              <span>{item.description}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

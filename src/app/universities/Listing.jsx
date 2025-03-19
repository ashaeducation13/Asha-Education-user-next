import React from "react";
import filterIcon from "../../../src/assets/universities/Vector.svg";
import Image from "next/image";

const Courses = ["MBA", "MCom", "MCA", "MA"];

const Listing = () => {
  return (
    <>
      <section className="bg-[#F5F5F5]">
        <div className="w-[80%] mx-auto flex justify-between items-center py-5">
          <ul className="flex gap-[6px]">
            {Courses.map((item, index) => (
              <li
                key={index}
                className={`${
                  index === 0
                    ? "bg-[#FF383B] text-white"
                    : "bg-white text-[#6D758F]"
                } hover:bg-[#FF383B] px-[22px] py-[18px] text-[16px] leading-[16px] font-bold hover:text-white rounded-[8px]`}
              >
                {item}
              </li>
            ))}
          </ul>
          <ul className="flex gap-2 items-center">
            <Image src={filterIcon} alt="icon" height={18} />
            <span className="text-[#FF383B] text-[16px]">Filter by state</span>
          </ul>
        </div>
        <div className="w-[80%] mx-auto grid grid-cols-[30%_1fr]">
          <div className="bg-red-400">
            <h2 className="text-[20px] font-semibold">Speciliasations</h2>
          </div>
          <div className="bg-green-400">hello</div>
        </div>
      </section>
    </>
  );
};

export default Listing;

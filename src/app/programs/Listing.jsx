"use client"
import React, { useState, useEffect } from 'react'
// import { cardData, Courses } from '../comparison/Data';
import Image from 'next/image';
import { Card } from '../comparison/Listing';
import { ProgramCard } from './ProgramCard';
import { cardData, Courses } from './PrData';
import Link from 'next/link';

const Listing = ({ data }) => {
  const [selectedProgram, setSelectedProgram] = useState(data[0]);
  const [selectedSpecialization, setSelectedSpecialization] = useState(null);

  // Unique programs by program_type_name
  const uniquePrograms = Array.from(
    new Set(data.map(p => p.specialization?.program_type_name))
  ).map(programType => data.find(p => p.specialization?.program_type_name === programType));

  // Specializations under selected program
  const specializationList = Array.from(
    new Set(
      data
        .filter(p => p.specialization?.program_type_name === selectedProgram.specialization?.program_type_name)
        .map(p => p.specialization?.name)
    )
  );

  // Set default specialization when program changes or on initial load
  useEffect(() => {
    if (specializationList.length > 0 && !selectedSpecialization) {
      setSelectedSpecialization(specializationList[0]);
    }
  }, [selectedProgram, specializationList, selectedSpecialization]);

  // Handle program change - reset specialization to ensure it's valid for the new program
  const handleProgramChange = (program) => {
    setSelectedProgram(program);
    setSelectedSpecialization(null); // This will trigger the useEffect to set the first specialization
  };

  // Filter programs
  const filteredPrograms = data.filter(p =>
    p.specialization?.program_type_name === selectedProgram.specialization?.program_type_name &&
    (selectedSpecialization ? p.specialization?.name === selectedSpecialization : true)
  );

  return (
    <>
    {data.length > 0 ? (
      <section className="containers border-b border-b-[#E1E4ED]">
        <div className="mx-auto flex justify-between items-center py-5 overflow-x-scroll scrollbar-hide">
          <ul className="flex gap-[6px]">
            {uniquePrograms.map((item, index) => (
              <li
                key={index}
                onClick={() => handleProgramChange(item)}
                className={`cursor-pointer ${selectedProgram.specialization?.program_type_name === item.specialization?.program_type_name
                  ? "bg-[#FF383B] text-white"
                  : "bg-white text-[#6D758F] border border-[#D9D9D9]"
                  } hover:bg-[#FF383B] p-[14px] md:px-[22px] md:py-[18px] text-[16px] leading-[16px] font-bold hover:text-white rounded-[8px]`}
              >
                {item.specialization.program_type_name}
              </li>
            ))}
          </ul>
        </div>
        <div className="mx-auto grid md:grid-cols-[25%_1fr] gap-[10px] pt-5 pb-10">
          <h2 className="text-[14px] md:text-[16px] lg:text-[20px] font-semibold md:hidden">Specialisations</h2>

          <select
            className="md:hidden p-[16px] text-[#696969] text-[12px] border border-[#F1F3F7] bg-white rounded-[6px] w-fit
                             hover:ring-2 hover:ring-[#FF383B] focus:ring-2 focus:ring-[#FF383B] focus:outline-none"
            value={selectedSpecialization || ""}
            onChange={(e) => setSelectedSpecialization(e.target.value || specializationList[0])}
          >
            {specializationList.map((spec, i) => (
              <option key={i} value={spec}>{spec}</option>
            ))}
          </select>

          {/* Desktop Sidebar */}
          <div className="hidden md:flex flex-col gap-3">
            <h2 className="text-[14px] md:text-[16px] lg:text-[20px] font-semibold">Specialisations</h2>
            <ul className="flex flex-col gap-2">
              {specializationList.map((spec, i) => (
                <li
                  key={i}
                  onClick={() => setSelectedSpecialization(spec)}
                  className={`cursor-pointer p-[16px] text-[14px] rounded-[6px] border shadow-lg
                                        ${selectedSpecialization === spec
                      ? "border-[#FF383B] text-[#FF383B]"
                      : "bg-white text-[#696969] border-[#F1F3F7]"
                    }`}
                >
                  {spec}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col xl:mx-8">
            <div className="grid grid-row md:grid-cols-2 gap-2 xl:gap-16">
              {filteredPrograms.map((item, index) => (
                
                  <ProgramCard key={index} item={item} />
             
              ))}
            </div>
          </div>
        </div>
      </section>
      ): (
        <section className="containers border-b border-b-[#E1E4ED] py-12">
          <div className="text-center text-[#6D758F] text-[18px] md:text-[22px] font-medium">
            No programs found matching your selection.
          </div>
        </section>
      )}
    </>
  )
}

export default Listing
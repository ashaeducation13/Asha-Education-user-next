"use client";
import React, { useState, useEffect } from 'react';
import { ProgramCard } from './ProgramCard';
import { cardData, Courses } from './PrData';

const Listing = ({ data }) => {
  const [selectedProgram, setSelectedProgram] = useState(null);
  const [selectedSpecialization, setSelectedSpecialization] = useState(null);

  const uniquePrograms = React.useMemo(() => {
    if (!data || data.length === 0) return [];

    const programMap = new Map();

    data.forEach(p => {
      const name = p.specialization?.program_type_name;
      const order = p.specialization?.order ?? Infinity;

      if (!name) return;

      if (!programMap.has(name) || order < (programMap.get(name)?.specialization?.order ?? Infinity)) {
        programMap.set(name, p);
      }
    });

    return Array.from(programMap.values()).sort(
      (a, b) => (a.specialization?.order ?? Infinity) - (b.specialization?.order ?? Infinity)
    );
  }, [data]);

  const specializationList = React.useMemo(() => {
    if (!selectedProgram || !data || data.length === 0) return [];

    return Array.from(
      new Set(
        data
          .filter(p => p.specialization?.program_type_name === selectedProgram.specialization.program_type_name)
          .map(p => p.specialization?.name)
          .filter(Boolean)
      )
    );
  }, [selectedProgram, data]);

  useEffect(() => {
    if (uniquePrograms.length > 0 && !selectedProgram) {
      const firstProgram = uniquePrograms[0];
      setSelectedProgram(firstProgram);
    }
  }, [uniquePrograms, selectedProgram]);

  useEffect(() => {
    if (selectedProgram && specializationList.length > 0 && !selectedSpecialization) {
      setSelectedSpecialization(specializationList[0]);
    }
  }, [selectedProgram, specializationList, selectedSpecialization]);

  const handleProgramChange = (program) => {
    setSelectedProgram(program);
    setSelectedSpecialization(null);
  };

  const handleSpecializationChange = (spec) => {
    setSelectedSpecialization(spec);
  };

  const filteredPrograms = React.useMemo(() => {
    if (!selectedProgram || !selectedSpecialization) return [];

    return data
      .filter(p =>
        p.specialization?.program_type_name === selectedProgram.specialization.program_type_name &&
        p.specialization?.name === selectedSpecialization
      )
      .sort((a, b) => (a.university?.ordering_priority ?? Infinity) - (b.university?.ordering_priority ?? Infinity));
  }, [data, selectedProgram, selectedSpecialization]);

  useEffect(() => {
    console.log("Selected Program:", selectedProgram?.specialization?.program_type_name);
    console.log("Selected Specialization:", selectedSpecialization);
    console.log("Filtered Programs:", filteredPrograms.length);
  }, [selectedProgram, selectedSpecialization, filteredPrograms]);

  return (
    <>
      {data && data.length > 0 ? (
        <section className="containers border-b border-b-[#E1E4ED]">
          <div className="mx-auto flex justify-between items-center py-5 overflow-x-scroll scrollbar-hide">
            <ul className="flex gap-[6px]">
              {uniquePrograms.map((item, index) => (
                <li
                  key={index}
                  onClick={() => handleProgramChange(item)}
                  className={`cursor-pointer ${
                    selectedProgram?.specialization?.program_type_name === item.specialization?.program_type_name
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
              onChange={(e) => handleSpecializationChange(e.target.value)}
              disabled={!specializationList.length}
            >
              {specializationList.map((spec, i) => (
                <option key={i} value={spec}>{spec}</option>
              ))}
            </select>

            {/* Scrollable Desktop Sidebar */}
            <div className="hidden md:flex flex-col gap-3 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
              <h2 className="text-[14px] md:text-[16px] lg:text-[20px] font-semibold">Specialisations</h2>
              <ul className="flex flex-col gap-2">
                {specializationList.map((spec, i) => (
                  <li
                    key={i}
                    onClick={() => handleSpecializationChange(spec)}
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
                {filteredPrograms.length > 0 ? (
                  filteredPrograms.map((item, index) => (
                    <ProgramCard key={index} item={item} />
                  ))
                ) : (
                  <div className="col-span-2 text-center py-8 text-gray-500">
                    No programs found for this specialization.
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      ) : (
        <section className="containers border-b border-b-[#E1E4ED] py-12">
          <div className="text-center text-[#6D758F] text-[18px] md:text-[22px] font-medium">
            No programs found matching your selection.
          </div>
        </section>
      )}
    </>
  );
};

export default Listing;

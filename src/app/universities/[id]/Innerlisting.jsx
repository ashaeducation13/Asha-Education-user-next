"use client";
import React, { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import { ProgramCard } from "@/app/programs/ProgramCard";

const Innerlisting = ({ data }) => {
    const [selectedProgram, setSelectedProgram] = useState(data[0]);
    const [selectedSpecialization, setSelectedSpecialization] = useState(null);
    const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    // Unique programs by program_type_name
    const uniquePrograms = Array.from(
        data.reduce((map, p) => {
            const name = p.specialization?.program_type_name;
            const order = p.specialization?.order ?? Infinity;

            if (!map.has(name) || order < (map.get(name)?.specialization?.order ?? Infinity)) {
                map.set(name, p);
            }
            return map;
        }, new Map()).values()
    ).sort((a, b) => (a.specialization?.order ?? Infinity) - (b.specialization?.order ?? Infinity));

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);

        // If the current selected specialization is filtered out, reset it
        if (selectedSpecialization && !selectedSpecialization.toLowerCase().includes(e.target.value.toLowerCase())) {
            const firstVisible = specializationList.find(spec =>
                spec.toLowerCase().includes(e.target.value.toLowerCase())
            );

            if (firstVisible) {
                setSelectedSpecialization(firstVisible);
            }
        }
    };

  const handleSpecializationChange = (spec) => {
    setSelectedSpecialization(spec);
  };

    // Specializations under selected program
    const specializationList = useMemo(() => {
        if (!selectedProgram || !data?.length) return [];

        const seen = new Set();

        return data
            .filter(p => p.specialization?.program_type_name === selectedProgram.specialization?.program_type_name)
            .sort(
                (a, b) => (a.specialization?.ordering_priority ?? Infinity) - (b.specialization?.ordering_priority ?? Infinity)
            )
            .map(p => p.specialization?.name)
            .filter(name => {
                if (!name || seen.has(name)) return false;
                seen.add(name);
                return true;
            });
    }, [selectedProgram, data]);

    const filteredSpecializations = React.useMemo(() => {
        if (!specializationList.length) return [];

        return specializationList.filter(spec =>
            spec.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [specializationList, searchTerm]);

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
            <section className="containers border-b border-b-[#E1E4ED]">
                <div className="mx-auto flex justify-between items-center py-5 overflow-x-scroll scrollbar-hide">
                    <ul className="flex gap-[6px]">
                        {uniquePrograms.map((item, index) => (
                            <li
                                key={index}
                                onClick={() => handleProgramChange(item)}
                                className={`cursor-pointer ${selectedProgram?.specialization?.program_type_name === item.specialization?.program_type_name
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
                    <div className="md:hidden">
                        <h2 className="text-[14px] md:text-[16px] lg:text-[20px] font-semibold mb-2">Specialisations</h2>

                        {/* Custom mobile dropdown with internal search */}
                        <div className="relative">
                            {/* Dropdown trigger button */}
                            <button
                                onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
                                className="w-full p-[16px] text-[#696969] text-[14px] border border-[#F1F3F7] bg-white rounded-[6px] flex justify-between items-center
                                hover:ring-2 hover:ring-[#FF383B] focus:ring-2 focus:ring-[#FF383B] focus:outline-none"
                            >
                                <span>{selectedSpecialization || "Select specialization"}</span>
                                <svg
                                    className={`w-4 h-4 transition-transform ${mobileDropdownOpen ? "rotate-180" : ""}`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                </svg>
                            </button>

                            {/* Dropdown menu */}
                            {mobileDropdownOpen && (
                                <div className="absolute z-50 w-full mt-1 bg-white border border-[#F1F3F7] rounded-md shadow-lg">
                                    {/* Search inside dropdown */}
                                    <div className="relative p-2 border-b border-[#F1F3F7]">
                                        <input
                                            type="text"
                                            placeholder="Search specializations..."
                                            value={searchTerm}
                                            onChange={handleSearchChange}
                                            className="w-full p-2 pl-8 text-sm border border-[#F1F3F7] rounded-md focus:ring-2 focus:ring-[#FF383B] focus:outline-none"
                                            autoFocus
                                        />
                                        <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                                            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                                            </svg>
                                        </div>
                                    </div>

                                    {/* Options list */}
                                    <div className="max-h-[200px] overflow-y-auto">
                                        {filteredSpecializations.length > 0 ? (
                                            filteredSpecializations.map((spec, i) => (
                                                <div
                                                    key={i}
                                                    onClick={() => {
                                                        handleSpecializationChange(spec);
                                                        setMobileDropdownOpen(false);
                                                    }}
                                                    className={`p-3 cursor-pointer hover:bg-gray-50 ${selectedSpecialization === spec ? "text-[#FF383B] font-medium" : "text-[#696969]"
                                                        }`}
                                                >
                                                    {spec}
                                                </div>
                                            ))
                                        ) : (
                                            <div className="p-3 text-center text-gray-500">
                                                No specializations match your search.
                                            </div>
                                        )}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Desktop Sidebar */}
                    <div className="hidden md:flex flex-col gap-3">
                        {/* Fixed header and search bar */}
                        <h2 className="text-[14px] md:text-[16px] lg:text-[20px] font-semibold">Specializations</h2>

                        {/* Search bar for specializations */}
                        <div className="relative mb-2">
                            <input
                                type="text"
                                placeholder="Search specializations..."
                                value={searchTerm}
                                onChange={handleSearchChange}
                                className="w-full p-3 pl-9 text-sm border border-[#F1F3F7] rounded-md focus:ring-2 focus:ring-[#FF383B] focus:outline-none"
                            />
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                                </svg>
                            </div>
                        </div>

                        {/* Scrollable specialization list */}
                        <div className="max-h-[320px] overflow-y-auto pr-2 custom-scrollbar">
                            {filteredSpecializations.length > 0 ? (
                                <ul className="flex flex-col gap-2">
                                    {filteredSpecializations.map((spec, i) => (
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
                            ) : (
                                <div className="text-center py-4 text-gray-500">
                                    No specializations match your search.
                                </div>
                            )}
                        </div>
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
        </>
    );
};

export default Innerlisting;
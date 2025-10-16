"use client";
import React, { useState, useEffect, useMemo, useRef } from "react";
import filterIcon from "../../../src/assets/universities/Vector.svg";
import tick from "../../assets/comparison/tick.svg";
import cross from "../../assets/comparison/cross.svg";
import plus from "../../assets/comparison/plus.svg";
import Image from "next/image";
import { Courses } from "./Data";
import { cardData } from "./Data";

import once from "../../assets/universities/once.svg";
import arrow from "../../assets/universities/arrow.svg";
import { ProgramCard } from '../../app/programs/ProgramCard';
import Link from "next/link";
import { motion } from 'framer-motion';
import EmailModal from "@/components/otp/EmailModal";

const Listing = ({ data }) => {
  const [selectedCourse, setSelectedCourse] = useState(Courses[0]);
  const [comparedLogos, setComparedLogos] = useState([]);
  const [comparedId, setComparedId] = useState([]);
  const [allUniversityIds, setAllUniversityIds] = useState([]);

  const [selectedProgram, setSelectedProgram] = useState(data[0]);
  const [searchTerm, setSearchTerm] = useState('');
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);


  const [page, setPage] = useState(1);
  const [paginatedPrograms, setPaginatedPrograms] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const observerRef = useRef();


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


  // Filtered specializations based on search term
  const filteredSpecializations = useMemo(() =>
    specializationList.filter(spec =>
      spec.toLowerCase().includes(searchTerm.toLowerCase())
    ),
    [specializationList, searchTerm]
  );

  // Initialize with first specialization instead of null
  const [selectedSpecialization, setSelectedSpecialization] = useState(specializationList[0] || null);

  // Update selected specialization when program changes or when filtered results change
  useEffect(() => {
    if (filteredSpecializations.length > 0) {
      // If current selection isn't in filtered results, select first filtered item
      if (!filteredSpecializations.includes(selectedSpecialization)) {
        setSelectedSpecialization(filteredSpecializations[0]);
      }
    } else if (specializationList.length > 0) {
      // If no filtered results but specializations exist, select first one
      setSelectedSpecialization(specializationList[0]);
    } else {
      setSelectedSpecialization(null);
    }
  }, [selectedProgram, filteredSpecializations, specializationList]);

  // Filter programs using useMemo to prevent unnecessary recalculations
  const filteredPrograms = useMemo(() =>
    data
      .filter(p =>
        p.specialization?.program_type_name === selectedProgram.specialization?.program_type_name &&
        (selectedSpecialization ? p.specialization?.name === selectedSpecialization : true)
      )
      .sort((a, b) => (a.university?.ordering_priority ?? Infinity) - (b.university?.ordering_priority ?? Infinity)),
    [data, selectedProgram, selectedSpecialization]
  );

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Update allUniversityIds only when necessary components change
  useEffect(() => {
    // Extract all university IDs from filtered programs
    const allIds = filteredPrograms.map(program => program.university.id);
    setAllUniversityIds(allIds);

    // Note: We're NOT resetting compared IDs here to avoid infinite loops
  }, [selectedProgram, selectedSpecialization]);

  const handleAddToCompare = (logo) => {
    if (comparedLogos.length < 2 && !comparedId.includes(logo.id)) {
      setComparedLogos((prevLogos) => [...prevLogos, logo]);
      setComparedId((prevIds) => [...(prevIds || []), logo.id]);
    }
  };

  const handleRemoveLogo = (index) => {
    const logoToRemove = comparedLogos[index];

    // Remove logo from comparedLogos
    setComparedLogos((prevLogos) => prevLogos.filter((_, i) => i !== index));

    // Remove logo.id from comparedId (ensuring prevIds is an array)
    setComparedId((prevIds) => (prevIds || []).filter((id) => id !== logoToRemove.id));
  };

  // Get unselected university IDs - memoized to prevent recalculations
  const unselectedIds = useMemo(() => {
    return allUniversityIds.filter(id => !comparedId.includes(id));
  }, [allUniversityIds, comparedId]);

  // Prepare URL parameters - memoized to prevent recalculations
  const comparisonUrl = useMemo(() => {
    const selectedIdsString = comparedId.join(',');
    const unselectedIdsString = unselectedIds.join(',');

    return `/comparison/d?ids=${selectedIdsString}&unselectedIds=${unselectedIdsString}`;
  }, [selectedProgram, comparedId, unselectedIds]);

  const downloadFile = (url, event) => {
    // Prevent any default behavior
    event.preventDefault();

    // Create link element
    const link = document.createElement('a');
    link.href = url;

    // Set download attribute to force download behavior
    link.setAttribute('download', 'brochure.pdf');

    // Set additional attribute to help browsers recognize as download
    link.setAttribute('target', '_blank');
    link.setAttribute('rel', 'noopener noreferrer');

    // Append to DOM, click, and remove
    document.body.appendChild(link);
    link.click();

    // Small timeout to ensure download starts before removal
    setTimeout(() => {
      document.body.removeChild(link);
    }, 100);
  };





  useEffect(() => {
    if (loadingMore || !hasMore) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setLoadingMore(true);
          setTimeout(() => {
            loadNextPage();
          }, 800); // simulate slight delay
        }
      },
      { threshold: 1 }
    );

    if (observerRef.current) observer.observe(observerRef.current);

    return () => observer.disconnect();
  }, [loadingMore, hasMore, paginatedPrograms]);

  const ITEMS_PER_PAGE = 4;

  useEffect(() => {
    // Reset on specialization change
    setPage(1);
    setPaginatedPrograms(filteredPrograms.slice(0, ITEMS_PER_PAGE));
    setHasMore(filteredPrograms.length > ITEMS_PER_PAGE);
  }, [filteredPrograms]);

  const loadNextPage = () => {
    const nextPage = page + 1;
    const start = page * ITEMS_PER_PAGE;
    const end = start + ITEMS_PER_PAGE;

    const nextItems = filteredPrograms.slice(start, end);

    if (nextItems.length === 0) {
      setHasMore(false);
    } else {
      setPaginatedPrograms(prev => [...prev, ...nextItems]);
      setPage(nextPage);
    }

    setLoadingMore(false);
  };



  return (
    <>
      <section className="containers border-b border-b-[#E1E4ED]">
        <div className="mx-auto flex justify-between items-center py-5 overflow-x-scroll">
          <motion.ul
            initial={{ opacity: 0 }}  // Start with opacity 0
            animate={{ opacity: 1 }}  // Fade in to full opacity
            transition={{ duration: 0.5 }}  // Duration for the fade-in effect
            className="flex gap-[6px]">
            {uniquePrograms.map((item, index) => (
              <motion.li
                key={index}
                onClick={() => {
                  // Clear compared items first
                  setComparedLogos([]);
                  setComparedId([]);

                  // Then update the program
                  setSelectedProgram(item);

                  // Reset search term when changing program type
                  setSearchTerm('');
                  setMobileDropdownOpen(false);

                  // Select first specialization of the newly selected program
                  const newSpecList = Array.from(
                    new Set(
                      data
                        .filter(p => p.specialization?.program_type_name === item.specialization?.program_type_name)
                        .map(p => p.specialization?.name)
                    )
                  );
                  setSelectedSpecialization(newSpecList[0] || null);
                }}
                className={`cursor-pointer ${selectedProgram.specialization?.program_type_name === item.specialization?.program_type_name
                  ? "bg-[#FF383B] text-white"
                  : "bg-white text-[#6D758F] border border-[#D9D9D9]"
                  } hover:bg-[#FF383B] p-[14px] md:px-[22px] md:py-[18px] text-[16px] leading-[16px] font-bold hover:text-white rounded-[8px]`}
                initial={{ opacity: 0, x: -20 }}  // Start slightly off-screen to the left
                animate={{ opacity: 1, x: 0 }}  // Animate to full opacity and position
                transition={{ duration: 0.3, delay: index * 0.1 }}  // Delay for each item
              >
                {item.specialization.program_type_name}
              </motion.li>
            ))}
          </motion.ul>
        </div>

        <div className="mx-auto grid md:grid-cols-[25%_1fr] gap-[10px] pt-5 pb-10">
          {/* First column for specializations */}
          <div>

            {/* Compare section */}
            {comparedLogos.length > 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="md:hidden px-[10px] py-[10px] flex gap-4 flex-col rounded-[6px] border-[1px] border-[#000000] mb-4">
                <h1 className="font-rubik font-normal gap-2 px-4 py-2 rounded-lg text-[12px] w-full">
                  Add to Compare
                </h1>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="flex gap-2 my-2 items-center">
                  {comparedLogos.map((logo, index) => (
                    <motion.div key={index} className="flex items-center gap-2"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }} // Delay each item slightly for staggered effect
                    >
                      <div className="relative">
                        <Image
                          src={logo.logo}
                          alt="compared logo"
                          width={40}
                          height={40}
                          className="h-10 w-auto object-contain rounded-[5px] border border-[#EDEDED] px-1"
                        />
                        <Image
                          src={cross}
                          alt="cross"
                          className="absolute -top-2 -right-2"
                          onClick={() => handleRemoveLogo(index)}
                        />
                      </div>
                      {index < comparedLogos.length - 1 && (
                        <Image
                          src={plus}
                          alt="add more"
                          className="h-6 w-6"
                        />
                      )}
                    </motion.div>
                  ))}
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <Link href={comparisonUrl}>
                    <motion.button
                      className="w-full bg-[#FF383B] py-[10px] font-inter px-4 font-semibold text-[12px] leading-[18px] text-[#FFFFFF] rounded-[8px] shadow-md"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Show Result
                    </motion.button>
                  </Link>
                </motion.div>
              </motion.div>
            )}

            {/* Mobile view with search-enabled dropdown */}
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
                        placeholder="Search specialisations..."
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
                              // Clear compared items first
                              setComparedLogos([]);
                              setComparedId([]);

                              // Then update specialization
                              setSelectedSpecialization(spec);
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
                          No specialisations match your search.
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* MD+ specialization list with search */}
            <div className="hidden md:flex flex-col gap-3">
              <h2 className="text-[14px] md:text-[16px] lg:text-[20px] font-semibold">Specialisations</h2>

              {/* Search bar for specializations */}
              <div className="relative mb-2">
                <input
                  type="text"
                  placeholder="Search specialisations..."
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
                <motion.ul
                  className="flex flex-col gap-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  {filteredSpecializations.length > 0 ? (
                    filteredSpecializations.map((spec, i) => (
                      <motion.li
                        key={i}
                        className="flex flex-col gap-2"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: i * 0.1 }} // Delay each item slightly for staggered effect
                      >
                        <div
                          onClick={() => {
                            // Clear compared items first
                            setComparedLogos([]);
                            setComparedId([]);

                            // Then update specialization
                            setSelectedSpecialization(spec);
                          }}
                          className={`cursor-pointer p-[16px] text-[14px] rounded-[6px] border font-bold shadow-lg
                              ${selectedSpecialization === spec
                              ? "border-[#FF383B] text-[#696969]"
                              : "bg-white text-[#696969] border-[#F1F3F7]"}
                            `}
                        >
                          {spec}

                          {/* Conditionally render Add to Compare inside selected spec */}
                          {selectedSpecialization === spec && comparedLogos.length > 0 && (
                            <div className="px-[10px] py-[10px] flex gap-4 flex-col rounded-[6px]  ">

                              <div className="flex gap-2 my-2 items-center">
                                {comparedLogos.map((logo, index) => (
                                  <div key={index} className="flex items-center gap-2">
                                    <div className="relative">
                                      <Image
                                        src={logo.logo}
                                        alt="compared logo"
                                        width={40}
                                        height={40}
                                        className="h-10 w-auto object-contain rounded-[5px] border border-[#EDEDED] px-1"
                                      />
                                      <Image
                                        src={cross}
                                        alt="cross"
                                        className="absolute -top-2 -right-2 cursor-pointer"
                                        onClick={() => handleRemoveLogo(index)}
                                      />
                                    </div>
                                    {index < comparedLogos.length - 1 && (
                                      <Image src={plus} alt="add more" className="h-6 w-6" />
                                    )}
                                  </div>
                                ))}
                              </div>
                              <Link href={comparisonUrl}>
                                <button className="w-full bg-[#FF383B] py-[10px] font-inter px-4 font-semibold text-[12px] leading-[18px] text-[#FFFFFF] rounded-[8px] shadow-md">
                                  Show Result
                                </button>
                              </Link>
                            </div>
                          )}
                        </div>
                      </motion.li>
                    ))
                  ) : (
                    <div className="text-center py-4 text-gray-500">
                      No specialisations match your search.
                    </div>
                  )}
                </motion.ul>
              </div>
            </div>
          </div>

          {/* Second column for cards */}
          <div className="flex flex-col xl:mx-8">
            <div className="grid grid-row md:grid-cols-2 gap-2 xl:gap-16">
              {paginatedPrograms.map((item, index) => (
                <Card
                  key={index}
                  item={item}
                  onAddToCompare={() => handleAddToCompare(item.university)}
                  isCompareDisabled={comparedLogos.length >= 2}
                />
              ))}
            </div>
            <div ref={observerRef} className="h-8" />
            {loadingMore && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                {[...Array(4)].map((_, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-lg border border-gray-200 shadow animate-pulse bg-white"
                  >
                    <div className="h-5 w-3/4 bg-gray-200 rounded mb-4"></div>
                    <div className="h-4 w-full bg-gray-100 rounded mb-2"></div>
                    <div className="h-4 w-2/3 bg-gray-100 rounded" />
                  </div>
                ))}
              </div>
            )}

          </div>
        </div>
      </section>
    </>
  );
};

export const Card = ({ item, onAddToCompare, isCompareDisabled }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const downloadFile = (url) => {
    if (!url) return console.error("No brochure file found!");
    
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "brochure.pdf");
    link.setAttribute("target", "_blank");
    link.setAttribute("rel", "noopener noreferrer");

    document.body.appendChild(link);
    link.click();

    setTimeout(() => {
      document.body.removeChild(link);
    }, 100);
  };

  const handleDownloadClick = () => {
    // Always show the modal first
    setModalOpen(true);
  };

  const handleVerificationSuccess = () => {
    setModalOpen(false);
    downloadFile(item.brochure);
  };
  return (
    <section
      className="h-auto flex flex-col gap-3 md:gap-3.5 lg:gap-4 border border-[#0A0078] rounded-[18px] 
        md:px-2.5 pt-2.5 pb-3 md:pt-3 md:pb-4 lg:pb-5
        hover:shadow-[0px_12.05px_26.77px_0px_#0000001A,0px_48.86px_48.86px_0px_#00000017,0px_110.43px_66.26px_0px_#0000000D,0px_196.09px_78.3px_0px_#00000003,0px_307.19px_85.67px_0px_#00000000] 
        cursor-pointer transition-shadow duration-200"
    >
      {/* Image Container - Adjusted for tablet spacing */}
      <div
        className="relative z-10 h-[180px] md:h-[200px] lg:h-[230px] w-full rounded-[8px] bg-cover bg-center"
        style={{ backgroundImage: `url(${item.university.cover_image})` }}
      >
        {/* Logo - Adjusted positioning for tablet */}
        <span className="absolute top-2 md:top-3 left-2 w-[90px] h-[30px] md:w-[80px] md:h-[30px] lg:w-[120px] lg:h-[50px] bg-white rounded-[5px] flex justify-center items-center p-1">
          <Image
            src={item.university.logo}
            fill
            alt="logo"
            className="object-contain w-full h-full"
          />
        </span>

        {/* Status Badge - Adjusted positioning and padding for tablet */}
        {item.admission_status === "open" && (
          <span
            className="absolute top-3 md:top-3.5 right-0 flex justify-center items-center h-[26px] md:h-[27px] lg:h-[30px] rounded-tl-[10px] rounded-bl-[20px] px-3 md:px-4 lg:px-5"
            style={{
              background: "linear-gradient(90deg, #0A0078 5.5%, #FF383B 96.5%)",
            }}
          >
            <span className="text-white text-xs md:text-[12px] lg:text-[14px] font-semibold whitespace-nowrap ">
              Admissions Ongoing
            </span>
          </span>)}
      </div>

      {/* Rest of the card content remains the same as previous optimized version */}
      <div className="w-full px-1 md:px-1.5 flex flex-col gap-2 md:gap-2.5 lg:gap-3">
        <h2 className="text-[15px] md:text-[16px] lg:text-[18px] xl:text-[20px] leading-tight font-semibold">
          {item.university.name}
        </h2>

        <h2 className="text-[12px] md:text-[13px] lg:text-[14px] xl:text-[16px] leading-tight font-medium">
          {item.specialization.str_representation}
        </h2>

        {item.brochure && (
          <button onClick={handleDownloadClick} className="w-fit bg-[#FFE3E4] inline-flex items-center justify-start gap-2 px-3 md:px-3.5 py-1.5 rounded-[8px]">
            <Image
              src={once}
              alt="icon"
              className="w-[14px] h-[14px] md:w-[15px] md:h-[15px] lg:w-[18px] lg:h-[18px]"
            />
            <span className="text-xs md:text-[13px] lg:text-[14px] text-[#FF383B] whitespace-nowrap">
              Brouchure
            </span>
          </button>)}

        <span className="text-[#6D758F] text-xs md:text-[13px] lg:text-[14px] xl:text-[16px]">
          {item.university.certifications
            .slice(0, 4) // Limit to first 4
            .map(cert => cert.name)
            .join(', ') +
            (item.university.certifications.length > 4 ? ', ...' : '')}
        </span>

        <div className="flex justify-between gap-2 md:gap-3 items-center mt-1">
          <button
            className={`flex-1 flex justify-center items-center ${isCompareDisabled
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-[#FF383B] hover:bg-[#E53134] cursor-pointer"
              } text-white font-semibold text-xs md:text-[13px] lg:text-[12px] py-2 rounded-[8px] whitespace-nowrap transition-colors duration-200`}
            onClick={!isCompareDisabled ? onAddToCompare : undefined}
            disabled={isCompareDisabled}
          >
            <Image
              src={tick}
              alt="tick"
              className="mr-1 md:mr-1.5 lg:mr-2 w-[12px] h-[12px] md:w-[15px] md:h-[15px] lg:w-[18px] lg:h-[18px]"
            />
            Add to compare
          </button>
          <Link href={`/programs/${item.slug}`}>
            <button
              className="flex-1 text-xs md:text-[13px] lg:text-[14px] text-[#6D758F] font-semibold rounded-[8px] 
                flex justify-center items-center border border-[#D9D9D9] px-2 py-2 md:px-3 hover:bg-gray-50 transition-colors duration-200 cursor-pointer"
            >
              View Details
            </button>
          </Link>
          <EmailModal isOpen={modalOpen} onClose={() => setModalOpen(false)} id={item.id} onSuccess={handleVerificationSuccess} />
        </div>
      </div>
    </section>
  );
};

export default Listing;
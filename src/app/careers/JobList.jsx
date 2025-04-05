"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Arrow from "../../assets/careers/apply.svg";
import Work from "../../assets/careers/work.svg";
import Toggles from "../../assets/careers/vector.svg";

import NormalForm from '@/components/Forms/NormalForm'

function JobList() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formDataCache, setFormDataCache] = useState(null)
  const [lastClosedTime, setLastClosedTime] = useState(null)
  const modalRef = useRef(null)

  const DATA_TIMEOUT = 5 * 60 * 1000;

  const toggleModal = () => {
    if (isModalOpen){
      setLastClosedTime(Date.now())
    }else{
      if(formDataCache && lastClosedTime && (Date.now() - lastClosedTime < DATA_TIMEOUT)) {

      }else{
        setFormDataCache(null)
      }
    }
    setIsModalOpen(!isModalOpen); // Toggles the modal state
  };

  const handleClickOutside = (event) => {
    if(modalRef.current && !modalRef.current.contains(event.target)){
      toggleModal()
    }
  }

  const handleFormSubmit = () => {
    setFormDataCache(null)
    setLastClosedTime(null)
    toggleModal()
  }

  const saveFormData = (data) => {
    setFormDataCache(data)
  }

  useEffect(() => {
    return () => {
      if(lastClosedTime && Date.now() - lastClosedTime >= DATA_TIMEOUT) {
        setFormDataCache(null)
      }
    }
  }, [])
  
  const jobsData = [
    { 
      id: 1, 
      position: "fulltime",
      title: "Engineering Manager", 
      description: "We are looking for an experienced engineering manager to join our team", 
      place: "Kochi & Kottayam", 
      type: "Freelancing"
    },
    { 
      id: 2,
      position: "freelancing", 
      title: "Engineering Manager", 
      description: "We are looking for an experienced engineering manager to join our team", 
      place: "Bangalore, India", 
      type: "Freelancing" 
    },
    { 
      id: 3, 
      position: "fulltime", 
      title: "Engineering Manager", 
      description: "We are looking for an experienced engineering manager to join our team", 
      place: "Mumbai, India", 
      type: "Freelancing" 
    }
  ];
      
  const filterOptions = [
    { label: "View all", value: "all" },
    { label: "Freelancing", value: "freelancing" },
    { label: "Full-time", value: "fulltime" }
  ];

  const [currentFilter, setCurrentFilter] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [expandedJobs, setExpandedJobs] = useState({}); // Track expanded jobs

  const jobsPerPage = 3;
  const filteredJobs = currentFilter === "all" ? jobsData : jobsData.filter(job => job.position.toLowerCase() === currentFilter.toLowerCase());

  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = filteredJobs.slice(indexOfFirstJob, indexOfLastJob);

  const totalPages = Math.ceil(filteredJobs.length / jobsPerPage);

  const handlePageChange = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  // Toggle job description visibility
  const toggleExpand = (id) => {
    setExpandedJobs((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <section className="containers py-6 mx-auto">
      <div className="mx-auto ">
        <div className="flex gap-3 pb-6 border-b border-gray-300">
          {filterOptions.map(filter => (
            <button
              key={filter.value}
              onClick={() => { setCurrentFilter(filter.value); setCurrentPage(1); }}
              className={`px-4 py-2 border rounded-[8px] font-inter transition-all duration-300 text-sm ${currentFilter === filter.value ? "text-white bg-gradient-to-r from-blue-700 to-red-500" : "border-gray-500 text-gray-700"}`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {currentJobs.map(job => (
          <div key={job.id} className="py-6 border-b border-gray-300">
            <div className="flex justify-between items-center gap-4">
              <div className="flex items-center md:gap-4">
                <h1 className="font-bold font-open-sans text-lg text-gray-900">{job.title}</h1>
                
                {/* Job Type (Icon + Text) */}
                <div className="flex items-center gap-2 border border-red-500 rounded-md px-1 py-1 flex-shrink-0">
                  <Image height={12} width={12} src={Work} alt="Work Type" />
                  <span className="text-[12px] md:text-[14px] font-inter-medium text-red-600">{job.type}</span>
                </div>
              </div>

              {/* Apply Button */}
              <div className="flex gap-[5px] justify-center items-center cursor-pointer" onClick={toggleModal}>
                <p
                  className="font-open-sans-normal md:text-[14px] text-[12px] lg:text-[16px] leading-[100%] text-transparent bg-clip-text"
                  style={{
                    backgroundImage: "linear-gradient(90deg, #0A0078 5.5%, #FF383B 96.5%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Apply
                </p>
                <Image className="h-[20px] w-[20px]" src={Arrow} alt="Apply" />
              </div>
            </div>
            
            <p className="mt-2 font-inter text-sm text-black-700">We are looking for an experienced engineering manager to join our team</p>
            
            {expandedJobs[job.id] && ( // Show description only if expanded
              <div className="flex text-[14px] leading-[21px] flex-col font-inter-medium mt-4">
                <h6 className="text-[14px] leading-[21px]">Main things you will be doing</h6>
                <p className="w-[60%] font-inter text-sm text-black-700 ">
                  Preparation and coordination of controlled documentation within Flight Operations (i.e., Manuals, DPM, Forms, Documents and Publication) to ensure standardization
                  Ensure that documents are produced to the highest quality standards considering human factors principles in coordination with Document Owner to provide user-friendly and effective documentations.<br/>
                  Monitor compliance and the adequacy of procedures based on regulatory, IOSA and company requirements
                  Tracking change management process within Flight Operations.Liaise with relevant Business Units (BU) to ensure timely preparation for external audits such as DGCA, IOSA, etc.Liaise with external bodies such as DGCA and IOSA on quality, documentation, and regulatory matters
                  <br/><br/>
                  All other duties as assigned by the reporting manager
                  Requirements Skills & Attributes
                  Proactive, good interpersonal and administration skills
                  Attention to detail and problem-solving skills
                  High levels of integrity, judgement, customer service attitude
                  Creative ability to manage multiple projects & deadlines
                  Should be independent, self-motivated, and have willingness to learn
                  Proficient with Microsoft Office and Adobe applications
                  Good Understanding of Aviation Regulations specifically CAR and international regulation
                </p>
                <p>Preferred 1 year of relevant aviation experience</p>
                <p>Employment Type: Full Time, Permanent</p>
                <p>Role: Other</p>
                <p>Industry Type: Aviation</p>
                <p>Department: Other</p>
                <p>Role Category: Other</p>
                <p>Education</p>
                <p>Skills: Python, Django, Next.js </p>
              </div>
            )}
            
            {/* Toggle Button - Placed at the bottom of each job card */}
            <div className="flex justify-center mt-4 cursor-pointer" onClick={() => toggleExpand(job.id)}>
              <Image
                height={15}
                width={15}
                src={Toggles}
                alt="toggle"
                className={`transition-transform duration-300 ${expandedJobs[job.id] ? "rotate-180" : ""}`}
              />
            </div>
          </div>
        ))}

        {isModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black/50" onClick={handleClickOutside}>
            <div className=" md:p-6 rounded-lg w-[80%] md:h-[407px] relative" ref={modalRef} onClick={(e) => e.stopPropagation()}>
              {/* Close Button */}
              {/* <button onClick={toggleModal} className="absolute top-2 right-3 text-xl font-bold text-red-700">✖</button> */}
              {/* Normal Form */}
              <NormalForm 
              initialData = {formDataCache || {}}
              onFormSubmit = {handleFormSubmit}
              saveFormData = {saveFormData}
              />
            </div>
          </div>
        )}

        <div className="flex justify-center mt-6">
          <nav className="flex items-center gap-2">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className={`px-3 py-1 border border-gray-400 rounded-md text-sm ${currentPage === 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-100"}`}
            >
              Previous
            </button>
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index}
                onClick={() => handlePageChange(index + 1)}
                className={`px-3 py-1 border border-gray-400 rounded-md text-sm ${currentPage === index + 1 ? "bg-gray-300" : "hover:bg-gray-100"}`}
              >
                {index + 1}
              </button>
            ))}
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`px-3 py-1 border border-gray-400 rounded-md text-sm ${currentPage === totalPages ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-100"}`}
            >
              Next
            </button>
          </nav>
        </div>
      </div>
    </section>
  );
}

export default JobList;
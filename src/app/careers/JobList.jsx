"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Arrow from "../../assets/careers/apply.svg";
import Work from "../../assets/careers/work.svg";
import Toggles from "../../assets/careers/vector.svg";
import NormalForm from "@/components/Forms/NormalForm";

function JobList({ jobs = [], ex = [] }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formDataCache, setFormDataCache] = useState(null);
  const [lastClosedTime, setLastClosedTime] = useState(null);
  const [currentFilter, setCurrentFilter] = useState("all");
  const [expandedJobs, setExpandedJobs] = useState({});
  const [currentOpportunity, setCurrentOpportunity] = useState(null);
  const modalRef = useRef(null);

  // Use the 'ex' prop for executive opportunities
  const executiveOpportunities = ex;

  const DATA_TIMEOUT = 5 * 60 * 1000;

  const toggleModal = (opportunity = null) => {
    if (opportunity) {
      setCurrentOpportunity(opportunity);
    }

    if (isModalOpen) {
      setLastClosedTime(Date.now());
    } else {
      if (
        formDataCache &&
        lastClosedTime &&
        Date.now() - lastClosedTime < DATA_TIMEOUT
      ) {
        // Keep cache
      } else {
        setFormDataCache(null);
      }
    }
    setIsModalOpen(!isModalOpen);
  };

  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      toggleModal();
    }
  };

  const handleFormSubmit = () => {
    setFormDataCache(null);
    setLastClosedTime(null);
    setCurrentOpportunity(null);
    toggleModal();
  };

  const saveFormData = (data) => {
    setFormDataCache(data);
  };

  useEffect(() => {
    // For debugging

    return () => {
      if (lastClosedTime && Date.now() - lastClosedTime >= DATA_TIMEOUT) {
        setFormDataCache(null);
      }
    };
  }, [executiveOpportunities, lastClosedTime]);

  const filterOptions = [
    { label: "View all", value: "all" },
    { label: "Full-time", value: "fulltime" },
    { label: "WFH", value: "wfh" },
    { label: "Executive Opportunities", value: "executive" },
  ];

  const filteredJobs =
    currentFilter === "all"
      ? jobs
      : currentFilter === "executive"
      ? []
      : jobs.filter(
          (job) => job.work_type.toLowerCase() === currentFilter.toLowerCase()
        );

  const toggleExpand = (id) => {
    setExpandedJobs((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section className="containers py-6 mx-auto">
      <div className="mx-auto">
        <div className="flex gap-3 pb-6 border-b border-gray-300 flex-wrap">
          {filterOptions.map((filter) => (
            <button
              key={filter.value}
              onClick={() => {
                setCurrentFilter(filter.value);
              }}
              className={`px-4 py-2 border rounded-[8px] font-inter cursor-pointer transition-all duration-300 text-sm ${
                currentFilter === filter.value
                  ? "text-white bg-gradient-to-r from-blue-700 to-red-500"
                  : "border-gray-500 text-gray-700"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {currentFilter === "executive" ? (
          <div className="grid gap-6 mt-6">
            {executiveOpportunities && executiveOpportunities.length > 0 ? (
              executiveOpportunities.map((opportunity) => (
                <div
                  key={opportunity.id}
                  className="p-6 bg-white rounded-lg shadow-sm"
                >
                  <div className="flex justify-between items-start">
                    <h2 className="text-lg font-semibold text-gray-800">
                      {opportunity.title}
                    </h2>
                    <div
                      className="flex gap-[5px] justify-center items-center cursor-pointer"
                      onClick={() => toggleModal(opportunity)}
                    >
                      <p
                        className="font-open-sans-normal md:text-[14px] text-[12px] lg:text-[16px] leading-[100%] text-transparent bg-clip-text"
                        style={{
                          backgroundImage:
                            "linear-gradient(90deg, #0A0078 5.5%, #FF383B 96.5%)",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                        }}
                      >
                        Apply
                      </p>
                      <Image
                        className="h-[20px] w-[20px]"
                        src={Arrow}
                        alt="Apply"
                      />
                    </div>
                  </div>
                  <p className="mt-3 text-sm text-gray-700">
                    {opportunity.description}
                  </p>
                </div>
              ))
            ) : (
              <div className="text-center py-8 text-gray-500">
                No executive opportunities available at the moment.
              </div>
            )}
          </div>
        ) : (
          <div className="mt-2">
            {filteredJobs.length > 0 ? (
              filteredJobs.map((job) => (
                <div key={job.id} className="py-6 border-b border-gray-300">
                  <div className="flex justify-between items-center gap-4">
                    <div className="flex items-center md:gap-4">
                      <h1 className="font-bold font-open-sans text-lg text-gray-900">
                        {job.name}
                      </h1>
                      <div className="flex items-center gap-2 border border-red-500 rounded-md px-1 py-1 flex-shrink-0">
                        <Image
                          height={12}
                          width={12}
                          src={Work}
                          alt="Work Type"
                        />
                        <span className="text-[12px] md:text-[14px] font-inter-medium text-red-600">
                          {job.work_type}
                        </span>
                      </div>
                    </div>
                    <div
                      className="flex gap-[5px] justify-center items-center cursor-pointer"
                      onClick={() => toggleModal(job)}
                    >
                      <p
                        className="font-open-sans-normal md:text-[14px] text-[12px] lg:text-[16px] leading-[100%] text-transparent bg-clip-text cursor-alias"
                        style={{
                          backgroundImage:
                            "linear-gradient(90deg, #0A0078 5.5%, #FF383B 96.5%)",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                        }}
                      >
                        Apply
                      </p>
                      <Image
                        className="h-[20px] w-[20px]"
                        src={Arrow}
                        alt="Apply"
                      />
                    </div>
                  </div>

                  {expandedJobs[job.id] ? (
                    <div className="mt-2">
                      <div className="flex text-[14px] leading-[21px] flex-col font-inter-medium mt-4">
                        <p className="w-full font-inter text-sm text-black-700 mt-2">
                          {job.description}
                        </p>

                        {job.skills && (
                          <div className="mt-3">
                            <h6 className="text-[14px] leading-[21px] font-semibold">
                              Skills
                            </h6>
                            <p className="w-full font-inter text-sm text-black-700 mt-1">
                              {job.skills}
                            </p>
                          </div>
                        )}

                        {job.education_criteria && (
                          <div className="mt-3">
                            <h6 className="text-[14px] leading-[21px] font-semibold">
                              Education
                            </h6>
                            <p className="w-full font-inter text-sm text-black-700 mt-1">
                              {job.education_criteria}
                            </p>
                          </div>
                        )}

                        {job.experience_required && (
                          <div className="mt-3">
                            <h6 className="text-[14px] leading-[21px] font-semibold">
                              Experience
                            </h6>
                            <p className="w-full font-inter text-sm text-black-700 mt-1">
                              {job.experience_required}
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  ) : (
                    <div className="mt-2"></div>
                  )}

                  <div
                    className="flex justify-center mt-4 cursor-pointer"
                    onClick={() => toggleExpand(job.id)}
                  >
                    <Image
                      height={15}
                      width={15}
                      src={Toggles}
                      alt="toggle"
                      className={`transition-transform duration-300 ${
                        expandedJobs[job.id] ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-8 text-gray-500">
                No jobs available with the selected filter.
              </div>
            )}
          </div>
        )}

        {isModalOpen && (
          <div
            className="fixed inset-0 flex items-center justify-center bg-black/50 z-10 p-4 md:p-12"
            onClick={handleClickOutside}
          >
            <div
              className="w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-lg"
              ref={modalRef}
              onClick={(e) => e.stopPropagation()}
            >
              <NormalForm
                initialData={formDataCache || {}}
                onFormSubmit={handleFormSubmit}
                saveFormData={saveFormData}
                opportunityType={
                  currentFilter === "executive" ? "executive" : "job"
                }
                opportunityId={currentOpportunity?.id}
                opportunityTitle={
                  currentFilter === "executive" && currentOpportunity
                    ? currentOpportunity.title
                    : currentOpportunity?.name
                }
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default JobList;

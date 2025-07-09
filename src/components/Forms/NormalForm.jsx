"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import UploadIcon from "../../../public/careers/upload.svg";
import Swal from "sweetalert2";
import { ExecutiveApply, Jobapply } from "@/services/api";

function NormalForm({
  initialData,
  onFormSubmit,
  saveFormData,
  opportunityType,
  opportunityId,
  opportunityTitle,
}) {
  const [formData, setFormData] = useState({
    name: initialData.name || "",
    phone: initialData.phone || "",
    email: initialData.email || "",
  });

  const [selectedFile, setSelectedFile] = useState(initialData.file || null);
  const [isLoad, setIsLoad] = useState(false);
  const fileInputRef = useRef(null);
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    const currentFormData = {
      ...formData,
      file: selectedFile,
    };
    saveFormData(currentFormData);
  }, [formData, selectedFile]);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileInputClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const isFormFilled = formData.name && formData.phone && formData.email;

  const handleSubmit = async () => {
    if (!isFormFilled || isLoad) return;

    setIsLoad(true);

    const formPayload = new FormData();
    formPayload.append("name", formData.name);
    formPayload.append("email", formData.email);
    formPayload.append("phone_number", formData.phone);
    if (selectedFile) {
      formPayload.append("resume", selectedFile);
    }

    if (opportunityType === "executive") {
      formPayload.append("opportunity", opportunityId);
    } else {
      formPayload.append("job", opportunityId);
    }

    try {
      if (opportunityType === "executive") {
        await ExecutiveApply(formPayload);
      } else {
        await Jobapply(formPayload);
      }
      console.log("payload",formPayload);
      
      Swal.fire({
        title: "Success!",
        text: "Form submitted successfully!",
        icon: "success",
        confirmButtonText: "OK",
      });

      onFormSubmit();
    } catch (error) {
      Swal.fire({
        title: "Error!",
        text: "Submission failed. Please try again.",
        icon: "error",
        confirmButtonText: "OK",
      });
    } finally {
      setIsLoad(false);
    }
  };

  return (
    <section className="min-h-screen sm:min-h-0 overflow-y-auto sm:overflow-visible px-0 sm:px-4 md:px-8 lg:px-16 py-8">
      <div className="w-full max-w-full sm:max-w-md md:max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
          {/* Header Section */}
          <div className="bg-gradient-to-r from-red-500 to-red-600 px-8 py-6">
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              {opportunityTitle}
            </h2>
            <p className="text-red-100 mt-2 text-sm md:text-base">
              Fill out the form below to apply for this position
            </p>
          </div>

          {/* Form Content */}
          <div className="p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Personal Info Section */}
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-gray-800 border-b border-gray-200 pb-2">
                  Personal Information
                </h3>

                {/* Name */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 flex items-center">
                    <svg className="w-4 h-4 mr-2 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                    </svg>
                    Full Name
                  </label>
                  <input
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200 text-gray-700 placeholder-gray-400"
                    placeholder="Enter your full name"
                    type="text"
                  />
                </div>

                {/* Phone */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 flex items-center">
                    <svg className="w-4 h-4 mr-2 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    Phone Number
                  </label>
                  <input
                    name="phone"
                    value={formData.phone}
                    maxLength={10}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200 text-gray-700 placeholder-gray-400"
                    placeholder="Enter your phone number"
                    type="number"
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 flex items-center">
                    <svg className="w-4 h-4 mr-2 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                    Email Address
                  </label>
                  <input
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200 text-gray-700 placeholder-gray-400"
                    placeholder="Enter your email address"
                    type="email"
                  />
                </div>
              </div>

              {/* Upload Section */}
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-gray-800 border-b border-gray-200 pb-2">
                  Documents
                </h3>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 flex items-center">
                    <svg className="w-4 h-4 mr-2 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1v-2zM3 9a1 1 0 011-1h12a1 1 0 011 1v4a1 1 0 01-1 1H4a1 1 0 01-1-1V9z" clipRule="evenodd" />
                    </svg>
                    Upload Resume/CV
                  </label>

                  <div
                    className="relative border-2 border-dashed border-gray-300 rounded-lg p-6 hover:border-red-400 transition-colors duration-200 cursor-pointer group"
                    onClick={handleFileInputClick}
                  >
                    <div className="text-center">
                      <div className="mx-auto w-12 h-12 bg-red-50 rounded-full flex items-center justify-center mb-4 group-hover:bg-red-100 transition-colors">
                        <Image
                          src={UploadIcon}
                          alt="upload"
                          width={24}
                          height={24}
                          className="text-red-500"
                        />
                      </div>

                      {selectedFile ? (
                        <div className="space-y-2">
                          <p className="text-sm font-medium text-gray-700">{selectedFile.name}</p>
                          <p className="text-xs text-gray-500">Click to change file</p>
                        </div>
                      ) : (
                        <div className="space-y-2">
                          <p className="text-sm font-medium text-gray-700">Click to upload your resume</p>
                          <p className="text-xs text-gray-500">or drag and drop</p>
                        </div>
                      )}
                    </div>
                    <input
                      type="file"
                      ref={fileInputRef}
                      className="hidden"
                      onChange={handleFileChange}
                      accept=".pdf,.doc,.docx,.rtf"
                    />
                  </div>

                  <div className="bg-gray-50 rounded-lg p-4 text-xs text-gray-600 space-y-1">
                    <p className="font-medium">File Requirements:</p>
                    <p>• Accepted formats: PDF, DOC, DOCX, RTF</p>
                    <p>• Maximum file size: 5MB</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="mt-12 flex justify-center md:justify-end">
              <button
                onClick={handleSubmit}
                disabled={!isFormFilled || isLoad}
                className={`
                  px-8 py-3 rounded-lg font-medium text-white transition-all duration-200
                  ${isFormFilled && !isLoad 
                    ? 'bg-red-500 hover:bg-red-600 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5' 
                    : 'bg-gray-400 cursor-not-allowed'
                  }
                `}
              >
                {isLoad ? (
                  <div className="flex items-center space-x-2">
                    <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" className="opacity-25" />
                      <path fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" className="opacity-75" />
                    </svg>
                    <span>Submitting...</span>
                  </div>
                ) : (
                  <span>Submit Application</span>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NormalForm;

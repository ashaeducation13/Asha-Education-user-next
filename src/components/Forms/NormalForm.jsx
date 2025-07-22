"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import UploadIcon from "../../../public/careers/upload.svg";
import Swal from "sweetalert2";
import Link from "next/link";
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
  const [formErrors, setFormErrors] = useState({});
  const [consentChecked, setConsentChecked] = useState(false);

  const handleConsentChange = (e) => {
    setConsentChecked(e.target.checked);
  };

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
    let { name, value } = e.target;
    if (name === "name") {
      value = value.replace(/[0-9]/g, "");
    }
    if (name === "phone") {
      value = value.replace(/\D/g, "");
      if (value.length > 10) {
        value = value.slice(0, 10);
      }
      if (value.length === 1 && value === "0") {
        value = ""; // prevent leading 0
      }
    }
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileInputClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isLoad) return;

    const isValid = validateForm();
    if (!isValid) {
      Swal.fire({
        title: "Validation Error!",
        text: "Please fix the highlighted fields before submitting.",
        icon: "warning",
        confirmButtonText: "OK",
      });
      return;
    }

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

  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) {
      errors.name = "Name is required";
    }
    if (!/^[a-zA-Z\s]+$/.test(formData.name.trim())) {
      errors.name = "Name must contain only letters";
    }
    if (!formData.phone.trim()) {
      errors.phone = "Phone number is required";
    }
    if (!/^\d{10}$/.test(formData.phone)) {
      errors.phone = "Phone number must be exactly 10 digits";
    }
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.email)) {
      errors.email = "Email format is invalid";
    }
    if (!selectedFile) {
      errors.file = "Resume is required";
    } else {
      const allowedTypes = [
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        "application/rtf",
      ];
      if (!allowedTypes.includes(selectedFile.type)) {
        errors.file = "Invalid file format";
      }
      const maxSize = 5 * 1024 * 1024; // 5MB
      if (selectedFile.size > maxSize) {
        errors.file = "File size exceeds 5MB";
      }
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  return (
    <section className="min-h-[100dvh] overflow-hidden px-1 sm:min-h-0 sm:overflow-visible sm:px-4 md:px-8 lg:px-16">
      <div className="w-full max-w-full sm:max-w-md md:max-w-4xl mx-auto">
        <div className="bg-white rounded-md sm:rounded-2xl shadow sm:shadow-xl border border-gray-200 overflow-hidden">
          {/* Header Section */}
          <div className="bg-gradient-to-r from-red-500 to-red-600 px-2 sm:px-3 md:px-6 lg:px-8 py-3 sm:py-6">
            <h2 className="text-[15px] sm:text-[20px] md:text-[22px] lg:text-[24px] font-bold text-white leading-[100%]">
              {opportunityTitle}
            </h2>
            <p className="text-red-100 mt-1 sm:mt-2 text-xs sm:text-sm md:text-base">
              Fill out the form below to apply for this position
            </p>
          </div>

          {/* Form Content */}
          <form className="p-2 sm:p-4 md:p-8" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-3 md:gap-6 lg:gap-8 ">
              {/* Personal Info Section */}
              <div className="space-y-2 sm:space-y-3 md:space-y-4 lg:space-y-6">
                <h3 className="text-[13px] sm:text-[16px] md:text-[18px] lg:text-[20px] font-semibold text-gray-800 border-b border-gray-200 md:pb-2">
                  Personal Information
                </h3>

                {/* Name */}
                <div className="space-y-1 sm:space-y-2">
                  <input
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    onKeyDown={(e) => {
                      if (
                        (e.key >= "0" && e.key <= "9") ||
                        (e.keyCode >= 96 && e.keyCode <= 105)
                      ) {
                        e.preventDefault();
                      }
                    }}
                    className="w-full px-2 py-1.5 sm:px-4 sm:py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200 text-[13px] sm:text-base text-gray-700 placeholder-gray-400"
                    placeholder="Full Name"
                    type="text"
                  />
                  {formErrors.name && (
                    <p className="text-xs sm:text-[14px] text-red-500 mt-0.5 sm:mt-1">
                      {formErrors.name}
                    </p>
                  )}
                </div>

                {/* Phone */}
                <div className="space-y-1 sm:space-y-2">
                  <div className="flex items-center">
                    <span className="px-2 py-1.5 sm:px-3 sm:py-3 bg-gray-100 border border-r-0 border-gray-300 rounded-l-lg text-[13px] sm:text-[16px] text-gray-700 select-none">
                      +91
                    </span>
                    <input
                      name="phone"
                      value={formData.phone}
                      maxLength={10}
                      onChange={handleInputChange}
                      className="w-full px-2 py-1.5 sm:px-4 sm:py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200 text-[13px] sm:text-base text-gray-700 placeholder-gray-400"
                      placeholder="Phone Number"
                      type="number"
                    />
                  </div>
                  {formErrors.phone && (
                    <p className="text-xs sm:text-[14px] text-red-500 mt-0.5 sm:mt-1">
                      {formErrors.phone}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div className="space-y-1 sm:space-y-2">
                  <input
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-2 py-1.5 sm:px-4 sm:py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200 text-[13px] sm:text-base text-gray-700 placeholder-gray-400"
                    placeholder="Email Address"
                    type="email"
                  />
                  {formErrors.email && (
                    <p className="text-xs sm:text-[14px] text-red-500 mt-0.5 sm:mt-1">
                      {formErrors.email}
                    </p>
                  )}
                </div>
              </div>

              {/* Upload Section */}
              <div className="space-y-2 sm:space-y-3 md:space-y-4 lg:space-y-6">
                <h3 className="text-[13px] sm:text-[16px] md:text-[18px] lg:text-[20px] font-semibold text-gray-800 border-b border-gray-200 pb-1 sm:pb-2">
                  Documents
                </h3>

                <div className="space-y-1 sm:space-y-2">
                  <div
                    className="relative border-2 border-dashed border-gray-300 rounded-lg p-2 sm:p-6 hover:border-red-400 transition-colors duration-200 cursor-pointer group"
                    onClick={handleFileInputClick}
                  >
                    <div className="text-center">
                      <div className="mx-auto w-8 h-8 sm:w-12 sm:h-12 bg-red-50 rounded-full flex items-center justify-center mb-2 sm:mb-4 group-hover:bg-red-100 transition-colors">
                        <Image
                          src={UploadIcon}
                          alt="upload"
                          width={24}
                          height={24}
                          className="text-red-500"
                        />
                      </div>
                      {selectedFile ? (
                        <div className="space-y-1 sm:space-y-2">
                          <p className="text-[13px] sm:text-sm font-medium text-gray-700">
                            {selectedFile.name}
                          </p>
                          <p className="text-xs sm:text-sm text-gray-500">
                            Click to change file
                          </p>
                        </div>
                      ) : (
                        <div className="space-y-1 sm:space-y-2">
                          <p className="text-[13px] sm:text-sm font-medium text-gray-700">
                            Click to upload your resume
                          </p>
                          <p className="text-xs sm:text-sm text-gray-500">
                            or drag and drop
                          </p>
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
                  {formErrors.file && (
                    <p className="text-xs sm:text-[14px] text-red-500 mt-1">
                      {formErrors.file}
                    </p>
                  )}
                  <div className="bg-gray-50 rounded-lg text-xs sm:text-[13px] text-gray-600 space-y-1 sm:space-y-1.5">
                    <p className="font-medium">File Requirements:</p>
                    <p>• Accepted formats: PDF, DOC, DOCX, RTF</p>
                    <p>• Maximum file size: 5MB</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-1 sm:space-y-2 mt-2 sm:mt-4">
              <div className="flex items-start space-x-1 sm:space-x-2">
                <input
                  type="checkbox"
                  id="consent"
                  checked={consentChecked}
                  onChange={handleConsentChange}
                  className="mt-1 h-3 w-3 sm:h-4 sm:w-4 text-[#FF383B] focus:ring-[#FF383B] border-gray-300 rounded"
                  required
                />
                <label
                  htmlFor="consent"
                  className="text-xs sm:text-sm text-[#6D758F] leading-5"
                >
                  I agree to the{" "}
                  <Link
                    href="/terms-and-conditions"
                    target="_blank"
                    className="text-[#FF383B] underline hover:text-red-600"
                  >
                    Terms and Conditions
                  </Link>{" "}
                  and{" "}
                  <Link
                    href="/privacy-policy"
                    target="_blank"
                    className="text-[#FF383B] underline hover:text-red-600"
                  >
                    Privacy Policy
                  </Link>
                  . I consent to receiving communication about educational
                  programs and services.
                </label>
              </div>
            </div>

            {/* Submit Button */}
            <div className="mt-4 sm:mt-6 md:mt-8 flex justify-center md:justify-end">
              <button
                onClick={handleSubmit}
                disabled={!consentChecked}
                className={`w-full flex justify-center items-center gap-2 px-2 py-1 text-[14px] sm:px-4 sm:py-2 sm:text-base rounded transition-colors ${
                  consentChecked
                    ? "bg-[#FF383B] hover:bg-red-600 cursor-pointer"
                    : "bg-gray-400 cursor-not-allowed"
                }`}
              >
                {isLoad ? (
                  <div className="flex items-center space-x-2">
                    <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                      <circle
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                        fill="none"
                        className="opacity-25"
                      />
                      <path
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        className="opacity-75"
                      />
                    </svg>
                    <span>Submitting...</span>
                  </div>
                ) : (
                  <span>Submit Application</span>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default NormalForm;

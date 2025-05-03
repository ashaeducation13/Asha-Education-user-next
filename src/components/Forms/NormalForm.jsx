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
  
    console.log("Form Data: ", JSON.stringify(formData));
  
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
  return (
    <section className="px-[1px] md:px-[20px] p-4">
      <div className="max-w-md mx-auto">
        <div className="md:p-[20px] p-[10px] border border-[#959595] bg-grey-400 rounded-[20px] bg-white">
          <div className="flex flex-col gap-[20px]">
            {/* Name */}
            <div className="flex flex-col gap-2">
              <p className="text-[12px] md:text-[14px] text-black">Name</p>
              <input
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="p-3 rounded-lg w-full text-[#6D758F] shadow-md focus:ring-2 focus:ring-[#a2a4ac] focus:outline-none"
                placeholder="Enter Your Name"
                type="text"
              />
            </div>

            {/* Phone */}
            <div className="flex flex-col gap-2">
              <p className="text-[12px] md:text-[14px] text-black">Phone No</p>
              <input
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="p-3 rounded-lg w-full text-[#6D758F] shadow-md focus:ring-2 focus:ring-[#a2a4ac] focus:outline-none"
                placeholder="Enter Phone Number"
                type="number"
              />
            </div>

            {/* Email */}
            <div className="flex flex-col gap-2">
              <p className="text-[12px] md:text-[14px] text-black">Email</p>
              <input
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="p-3 rounded-lg w-full text-[#6D758F] shadow-md focus:ring-2 focus:ring-[#a2a4ac] focus:outline-none"
                placeholder="Enter Email"
                type="email"
              />
            </div>

            {/* Upload CV */}
            <div className="flex flex-col gap-2">
              <p className="text-[12px] md:text-[14px] text-black">Upload CV</p>
              <div className="relative">
                <input
                  className={`pl-10 pr-3 py-3 rounded-lg w-full text-[#6D758F] shadow-md focus:ring-2 focus:ring-[#a2a4ac] focus:outline-none cursor-pointer ${
                    selectedFile ? "text-black" : "text-[#BABABA]"
                  }`}
                  value={selectedFile ? selectedFile.name : "Choose File"}
                  type="text"
                  onClick={handleFileInputClick}
                  accept=".pdf,.doc,.docx,.rtf"
                  readOnly
                />
                <Image
                  src={UploadIcon}
                  alt="upload"
                  width={20}
                  height={20}
                  className="absolute top-1/2 left-3 transform -translate-y-1/2 cursor-pointer"
                  onClick={handleFileInputClick}
                />
                <input
                  type="file"
                  ref={fileInputRef}
                  className="hidden"
                  onChange={handleFileChange}
                />
              </div>
              <div className="font-inter font-normal mt-2 text-black text-[10px] md:text-[11px]">
                <p>Allowed file types: pdf, doc, docx, rtf</p>
                <p>Maximum file size allowed: 5MB</p>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="mt-6 md:flex md:justify-end">
            <button
              onClick={handleSubmit}
              className={`w-full md:w-auto text-white bg-red-500 text-[12px] md:text-[15px] px-2 md:px-6 py-2 rounded-md transition-all duration-300 ${
                isFormFilled ? "" : "cursor-not-allowed"
              }`}
              disabled={!isFormFilled || isLoad}
            >
              {isLoad ? "Loading..." : "Submit"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NormalForm;

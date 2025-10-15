"use client";

import Image from "next/image";
import UploadIcon from "../../../public/careers/upload.svg";
import { useState, useRef } from "react";
import { BePartofUs } from "@/services/api";
import Swal from "sweetalert2";

export default function Connect() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone_number: "",
    wheredid_you_hear: "",
  });

  const [formErrors, setFormErrors] = useState({});
  const [fileName, setFileName] = useState("");
  const fileInputRef = useRef(null);
  const [file, setFile] = useState(null);
  const [isLoad, setIsLoad] = useState(false);
  const [consentChecked, setConsentChecked] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === "name") {
      const onlyLetters = value.replace(/[^a-zA-Z\s]/g, "");
      setFormData((prev) => ({ ...prev, [name]: onlyLetters }));
    } else if (name === "phone_number") {
      const onlyDigits = value.replace(/\D/g, "").slice(0, 10);
      setFormData((prev) => ({ ...prev, [name]: onlyDigits }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      setFileName(selectedFile.name);
    }
  };

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const validateForm = () => {
    const errors = {};

    if (!formData.name.trim()) {
      errors.name = "Name is required";
    } else if (!/^[a-zA-Z\s]+$/.test(formData.name.trim())) {
      errors.name = "Only letters and spaces allowed";
    }

    if (!formData.phone_number.trim()) {
      errors.phone_number = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phone_number)) {
      errors.phone_number = "Must be exactly 10 digits";
    }

    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.email)) {
      errors.email = "Invalid email format";
    }

    if (!formData.wheredid_you_hear) {
      errors.wheredid_you_hear = "Please select a platform";
    }

    if (!file) {
      errors.file = "Resume is required";
    } else {
      const allowedTypes = [
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        "application/rtf",
      ];
      if (!allowedTypes.includes(file.type)) {
        errors.file = "Invalid file type";
      }
      if (file.size > 5 * 1024 * 1024) {
        errors.file = "File size exceeds 5MB";
      }
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async () => {
    const isValid = validateForm();
    if (!isValid) {
      Swal.fire({
        title: "Validation Error!",
        text: "Please correct the errors in the form.",
        icon: "warning",
        confirmButtonText: "OK",
      });
      return;
    }

    setIsLoad(true);

    const formPayload = new FormData();
    formPayload.append("name", formData.name);
    formPayload.append("email", formData.email);
    formPayload.append("phone_number", formData.phone_number);
    formPayload.append("wheredid_you_hear", formData.wheredid_you_hear);
    if (file) {
      formPayload.append("resume", file);
    }

    try {
      await BePartofUs(formPayload);

      Swal.fire({
        title: "Success!",
        text: "Form submitted successfully!",
        icon: "success",
        confirmButtonText: "OK",
      });

      setFormData({
        name: "",
        email: "",
        phone_number: "",
        wheredid_you_hear: "",
      });
      setFile(null);
      setFileName("");
      setFormErrors({});
      setConsentChecked(false);
    } catch (error) {
      Swal.fire({
        title: "Oops!",
        text: "Something went wrong!",
        icon: "error",
        confirmButtonText: "OK",
      });
    } finally {
      setIsLoad(false);
    }
  };

  return (
    <section className="containers px-[1px] my-10">
      <div>
        <h2 className="text-[18px] sm:text-[28px] leading-[32px] sm:leading-[46px] xl:leading-[70px] font-normal text-gray-900 w-[85%] sm:w-[75%] xl:w-full mx-auto">
          Be Part of Our Growing Team
        </h2>

        <div className="md:p-[20px] p-[10px] border border-[#959595] bg-grey-400 rounded-[20px] shadow-xl bg-white">
          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-[20px] gap-[10px]">
            {/* Name */}
            <div className="flex flex-col gap-2">
              <label className="text-[12px] md:text-[14px]">Name</label>
              <input
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="p-3 rounded-lg w-full text-[#6D758F] shadow-md"
                placeholder="Enter Your Name"
                type="text"
              />
              {formErrors.name && (
                <p className="text-red-500 text-[12px]">{formErrors.name}</p>
              )}
            </div>

            {/* Phone */}
            <div className="flex flex-col gap-2">
              <label className="text-[12px] md:text-[14px]">Phone No</label>
              <input
                name="phone_number"
                value={formData.phone_number}
                onChange={handleInputChange}
                className="p-3 rounded-lg w-full text-[#6D758F] shadow-md"
                placeholder="Enter Phone Number"
                type="text"
              />
              {formErrors.phone_number && (
                <p className="text-red-500 text-[12px]">
                  {formErrors.phone_number}
                </p>
              )}
            </div>

            {/* Email */}
            <div className="flex flex-col gap-2">
              <label className="text-[12px] md:text-[14px]">Email</label>
              <input
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="p-3 rounded-lg w-full text-[#6D758F] shadow-md"
                placeholder="Enter Email"
                type="email"
              />
              {formErrors.email && (
                <p className="text-red-500 text-[12px]">{formErrors.email}</p>
              )}
            </div>

            {/* Platform */}
            <div className="flex flex-col gap-2">
              <label className="text-[12px] md:text-[14px]">
                Where did you hear about us from?
              </label>
              <select
                name="wheredid_you_hear"
                value={formData.wheredid_you_hear}
                onChange={handleInputChange}
                className="p-3 rounded-lg w-full text-[#6D758F] shadow-md"
              >
                <option value="" disabled>
                  Select Platform
                </option>
                <option value="linkedin">LinkedIn</option>
                <option value="instagram">Instagram</option>
                <option value="facebook">Facebook</option>
                <option value="college">College/University</option>
                <option value="other">Other</option>
              </select>
              {formErrors.wheredid_you_hear && (
                <p className="text-red-500 text-[12px]">
                  {formErrors.wheredid_you_hear}
                </p>
              )}
            </div>

            {/* Resume Upload */}
            <div className="flex flex-col gap-2">
              <label className="text-[12px] md:text-[14px]">Upload CV</label>
              <div className="relative">
                <input
                  type="text"
                  className="pl-10 pr-3 py-3 rounded-lg w-full text-[#6D758F] shadow-md"
                  placeholder="Choose File"
                  readOnly
                  value={fileName}
                  onClick={handleUploadClick}
                />
                <Image
                  src={UploadIcon}
                  alt="upload"
                  width={20}
                  height={20}
                  className="absolute top-1/2 left-3 transform -translate-y-1/2 cursor-pointer"
                  onClick={handleUploadClick}
                />
                <input
                  ref={fileInputRef}
                  type="file"
                  accept=".pdf,.doc,.docx,.rtf"
                  className="hidden"
                  onChange={handleFileChange}
                />
              </div>
              {formErrors.file && (
                <p className="text-red-500 text-[12px]">{formErrors.file}</p>
              )}
              <p className="text-[10px] md:text-[11px] mt-2">
                Allowed file types: pdf, doc, docx, rtf
              </p>
              <p className="text-[10px] md:text-[11px]">
                Maximum file size allowed: 5MB
              </p>
            </div>
          </div>

          {/* Consent */}
          <div className="mt-6 flex items-start gap-2">
            <input
              type="checkbox"
              id="consent"
              checked={consentChecked}
              onChange={(e) => setConsentChecked(e.target.checked)}
              className="mt-1"
            />
            <label htmlFor="consent" className="text-[13px] md:text-[14px] text-gray-700">
              I agree to the{" "}
              <a href="/terms-and-conditions" className="text-red-500 underline" target="_blank">
                Terms and Conditions
              </a>{" "}
              and{" "}
              <a href="/privacy-policy" className="text-red-500 underline" target="_blank">
                Privacy Policy
              </a>
              . I consent to receiving communication about educational programs and services.
            </label>
          </div>

          {/* Submit Button */}
          <div className="mt-6 md:flex md:justify-end">
            <button
              onClick={handleSubmit}
              disabled={!consentChecked || isLoad}
              className={`w-full md:w-auto text-white text-[12px] md:text-[15px] leading-[20px] px-2 md:px-6 py-2 rounded-md transition-all duration-300 ${
                !consentChecked || isLoad ? "bg-gray-400 cursor-not-allowed" : "bg-red-500"
              }`}
            >
              {isLoad ? "Submitting..." : "Submit"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

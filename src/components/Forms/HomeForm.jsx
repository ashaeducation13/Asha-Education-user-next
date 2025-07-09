"use client";
import Swal from "sweetalert2";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import arrow from "../../assets/home/counsel/Arrow.png";
import { UniversityFetch, submitCounselForm } from "@/services/api";
import { motion } from "framer-motion";
import Link from "next/link";

const HomeForm = () => {
  const [universities, setUniversities] = useState([]);
  const [selectedUniversityId, setSelectedUniversity] = useState("");
  const [programs, setPrograms] = useState([]);
  const [consentChecked, setConsentChecked] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    university: "",
    program: "",
  });

  const handleConsentChange = (e) => {
    setConsentChecked(e.target.checked);
  };

  useEffect(() => {
    const fetchUniversities = async () => {
      const data = await UniversityFetch();
      setUniversities(data);
    };
    fetchUniversities();
  }, []);

  useEffect(() => {
    const selectedUniversity = universities.find(
      (uni) => uni.id.toString() === selectedUniversityId
    );
    if (selectedUniversity) {
      setPrograms(selectedUniversity.programs || []);
    } else {
      setPrograms([]);
    }
  }, [selectedUniversityId, universities]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const finalValue = name === "university" || name === "program" ? parseInt(value) : value;
    setFormData((prev) => ({
      ...prev,
      [name]: finalValue,
    }));

    if (name === "university") {
      setSelectedUniversity(value);
    }
  };

  // Submit form data
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!consentChecked) {
      Swal.fire({
        title: "Consent Required",
        text: "Please accept the terms and conditions and privacy policy to proceed.",
        icon: "warning",
        confirmButtonText: "OK",
      });
      return; // Stop submission
    }


    try {
      await submitCounselForm(formData);

      Swal.fire({
        title: "🎓 Enquiry Received!",
        text: "Thanks for your interest! Our team will contact you shortly",
        icon: "success",
        confirmButtonText: "Perfect!",
        confirmButtonColor: "#007bff",
        timer: 5000,
        timerProgressBar: true,
        showClass: {
          popup: 'animate__animated animate__zoomIn'
        }
      });

      setFormData({
        name: "",
        phone: "",
        email: "",
        university: "",
        program: "",
      });

      setSelectedUniversity("");
      setPrograms([]);
    } catch (error) {

      Swal.fire({
        title: "❌ Submission Error",
        text: "Unable to submit your Enquiry. Please verify your details and try again.",
        icon: "error",
        confirmButtonText: "Sure thing!",
        confirmButtonColor: "#dc3545",
        timer: 6000,
        timerProgressBar: true
      });
    }
  };

  return (
    <>
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true, amount: 0.4 }}
        className="mx-auto bg-white p-4 lg:p-12 shadow-lg rounded-xl space-y-6 
                min-h-[400px] flex flex-col justify-between max-h-xl 
                min-w-[300px] sm:min-w-[550px] md:min-w-0"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col text-[12px] md:text-[14px]">
            <label className="text-[#6D758F]  font-medium">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Brian Clarke"
              className="p-3 shadow-md rounded-lg w-full focus:ring-2 focus:ring-[#a2a4ac] focus:outline-none"
            />
          </div>
          <div className="flex flex-col text-[12px] md:text-[14px]">
            <label className="text-[#6D758F] font-medium">Phone</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              maxLength={10}
              onChange={handleChange}
              placeholder="(123) 456 - 7890"
              className="p-3 shadow-md rounded-lg w-full focus:ring-2 focus:ring-[#a2a4ac] focus:outline-none"
            />
          </div>
        </div>

        <div className="flex flex-col text-[12px] md:text-[14px]">
          <label className="text-[#6D758F] font-medium">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="example@youremail.com"
            className="p-3 shadow-md rounded-lg w-full focus:ring-2 focus:ring-[#a2a4ac] focus:outline-none"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col text-[12px] md:text-[14px]">
            <label className="text-[#6D758F] font-medium">
              Preferred University
            </label>
            <select
              className="p-3 rounded-lg w-full text-[#6D758F] shadow-md focus:ring-2 focus:ring-[#a2a4ac] focus:outline-none"
              name="university"
              type="number"
              value={formData.university}
              onChange={handleChange}
              required
            >
              <option value="">Select University</option>
              {universities?.map((uni) => (
                <option key={uni.id} value={uni.id}>
                  {uni.name}
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-col text-[12px] md:text-[14px]">
            <label className="text-[#6D758F] font-medium">Program</label>
            <select
              name="program"
              type="number"
              value={formData.program}
              onChange={handleChange}
              disabled={!selectedUniversityId}
              className="p-3 rounded-lg w-full text-[#6D758F] shadow-md focus:ring-2 focus:ring-[#a2a4ac] focus:outline-none"
              required
            >
              <option value="">Select Program</option>
              {programs.map((program) => (
                <option key={program.id} value={program.id}>
                  {program.program_name.name} {program.specialization.name}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="flex items-start space-x-2">
          <input
            type="checkbox"
            id="consent"
            checked={consentChecked}
            onChange={handleConsentChange}
            className="mt-1 h-4 w-4 text-[#FF383B] focus:ring-[#FF383B] border-gray-300 rounded"
            required
          />
          <label htmlFor="consent" className="text-sm text-[#6D758F] leading-5">
            I agree to the{" "}
            <Link
              href="/terms-and-conditions"
              target="_blank"
              className="text-[#FF383B] underline hover:text-red-600"
            >
              Terms and Conditions
            </Link>
            {" "}and{" "}
            <Link
              href="/privacy-policy"
              target="_blank"
              className="text-[#FF383B] underline hover:text-red-600"
            >
              Privacy Policy
            </Link>
            . I consent to receiving communication about educational programs and services.
          </label>
        </div>
        <motion.button
          type="submit"
          disabled={!consentChecked}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}

          className={`w-full flex justify-center items-center gap-2 px-4 py-2 text-white rounded transition-colors ${consentChecked
              ? 'bg-[#FF383B] hover:bg-red-600 cursor-pointer'
              : 'bg-gray-400 cursor-not-allowed'
            }`}
        >
          Submit
          <Image src={arrow} alt="Arrow" className="w-[8.4px] h-[8.24px]" />
        </motion.button>
      </motion.form>
    </>
  );
};

export default HomeForm;

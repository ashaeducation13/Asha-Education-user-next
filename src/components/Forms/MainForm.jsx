"use client";
import arrow from "../../../public/arrow.svg";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { submitCounselForm, UniversityFetch } from "@/services/api";
import Swal from "sweetalert2";

export default function MainForm({ onClose, course = null }) {
  const modalRef = useRef(null);

  const [universities, setUniversities] = useState([]);
  const [programs, setPrograms] = useState([]);
  const [selectedUniversityId, setSelectedUniversityId] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    university: "",
    program: "",
  });

  const [consentChecked, setConsentChecked] = useState(false);

  // If no course is passed, fetch university list
  useEffect(() => {
    if (!course) {
      const fetchUniversities = async () => {
        const data = await UniversityFetch();
        setUniversities(data);
      };
      fetchUniversities();
    }
  }, [course]);

  // Update programs based on selected university
  useEffect(() => {
    const selectedUniversity = universities.find(
      (uni) => uni.id.toString() === selectedUniversityId
    );
    setPrograms(selectedUniversity?.programs || []);
  }, [selectedUniversityId, universities]);

  // Prefill form when course exists
  useEffect(() => {
    if (course) {
      setFormData({
        name: "",
        phone: "",
        email: "",
        university: course.university?.id || "",
        program: course.program_name?.id || "",
      });
    }
  }, [course]);

  const handleConsentChange = (e) => {
    setConsentChecked(e.target.checked);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Handle phone number validation
    if (name === "phone") {
      // Remove any non-digit characters
      const numbersOnly = value.replace(/\D/g, '');

      // Limit to 10 digits
      if (numbersOnly.length <= 10) {
        setFormData((prev) => ({
          ...prev,
          [name]: numbersOnly,
        }));
      }
      return;
    }

    const finalValue = ["university", "program"].includes(name)
      ? parseInt(value)
      : value;

    setFormData((prev) => ({
      ...prev,
      [name]: finalValue,
    }));

    if (name === "university") {
      setSelectedUniversityId(value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate phone number
    if (formData.phone.length !== 10) {
      Swal.fire({
        title: "Invalid Phone Number",
        text: "Please enter a valid 10-digit Indian phone number.",
        icon: "error",
        confirmButtonText: "OK",
      });
      return;
    }

    // Validate consent checkbox
    if (!consentChecked) {
      Swal.fire({
        title: "Consent Required",
        text: "Please accept the terms and conditions and privacy policy to proceed.",
        icon: "warning",
        confirmButtonText: "OK",
      });
      return;
    }

    try {
      console.log(formData);

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
        university: course?.university?.id || "",
        program: course?.program_name?.id || "",
      });

      setConsentChecked(false);

      onClose();

      if (!course) {
        setSelectedUniversityId("");
        setPrograms([]);
      }
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

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose(); // Close modal
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  return (
    <>
      <form
        onSubmit={handleSubmit}
        ref={modalRef}
        className="containers max-w-md md:max-w-lg lg:max-w-2xl mx-auto p-4 sm:p-6 lg:p-8 space-y-4 sm:space-y-6 bg-white rounded-lg shadow-2xl z-9999"
      >
        <h1 className="text-xl sm:text-2xl font-semibold text-[#111216] mb-4 text-center">
          Tell Us About Your Interest
        </h1>

        {/* Name */}
        <div className="space-y-2">
          <label htmlFor="name" className="block text-sm font-medium text-[#6D758F]">
            Name
          </label>
          <input
            name="name"
            id="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            placeholder="Brian Clark"
            className="p-3 rounded-lg w-full text-[#6D758F] shadow-md focus:ring-2 focus:ring-[#a2a4ac] focus:outline-none"
            required
          />
        </div>

        {/* Phone */}
        <div className="space-y-2">
          <label htmlFor="phone" className="block text-sm font-medium text-[#6D758F]">
            Phone Number
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <span className="text-[#6D758F] text-sm font-medium">+91</span>
            </div>
            <input
              name="phone"
              id="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              placeholder="9876543210"
              maxLength="10"
              className="pl-14 p-3 rounded-lg w-full text-[#6D758F] shadow-md focus:ring-2 focus:ring-[#a2a4ac] focus:outline-none"
              required
            />
          </div>
          <p className="text-xs text-[#6D758F] mt-1">
            Enter 10-digit mobile number
          </p>
        </div>

        {/* Email */}
        <div className="space-y-2">
          <label htmlFor="email" className="block text-sm font-medium text-[#6D758F]">
            Email
          </label>
          <input
            name="email"
            id="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="example@youremail.com"
            className="p-3 rounded-lg w-full text-[#6D758F] shadow-md focus:ring-2 focus:ring-[#a2a4ac] focus:outline-none"
            required
          />
        </div>

        {/* University */}
        {course ? (
          <div className="space-y-2">
            <h2 className="text-sm font-normal text-[#6D758F]">
              Enquiry:{" "}
              <span className=" text-[#111216] font-rubik">
                {course.program_name?.name} {course.specialization?.name} in {course.university?.name}
              </span>
            </h2>
          </div>
        ) : (
          <>
            {/* University Dropdown */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-[#6D758F]">University</label>
              <select
                name="university"
                value={formData.university}
                onChange={handleChange}
                className="p-3 rounded-lg w-full text-[#6D758F] shadow-md focus:ring-2 focus:ring-[#a2a4ac] focus:outline-none"
                required
              >
                <option value="">Select University</option>
                {universities.map((uni) => (
                  <option key={uni.id} value={uni.id}>
                    {uni.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Program Dropdown */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-[#6D758F]">Program</label>
              <select
                name="program"
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
          </>
        )}

        {/* Consent Checkbox */}
        <div className="space-y-2">
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
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={!consentChecked}
          className={`w-full flex justify-center items-center gap-2 px-4 py-2 text-white rounded transition-colors ${consentChecked
            ? 'bg-[#FF383B] hover:bg-red-600 cursor-pointer'
            : 'bg-gray-400 cursor-not-allowed'
            }`}
        >
          Submit Inquiry
          <Image src={arrow} alt="arrow" />
        </button>
      </form>
    </>
  );
}
"use client";
import arrow from "../../../public/arrow.svg";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { referForm, UniversityFetch } from "@/services/api";
import Swal from "sweetalert2";

export default function ReferForm({ course = null }) {
  const modalRef = useRef(null);

  const [universities, setUniversities] = useState([]);
  const [programs, setPrograms] = useState([]);
  const [selectedUniversityId, setSelectedUniversityId] = useState("");
  const [isMBA, setIsMBA] = useState("no");
  const [consent, setConsent] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const [formData, setFormData] = useState({
    name: "",
    phone: "+91 ",
    email: "",
    university: "",
    program: "",
    college: "",
    friend_name: "",
    friend_contact: "+91 ",
    friend_email: "",
  });

  useEffect(() => {
    if (!course) {
      const fetchUniversities = async () => {
        const data = await UniversityFetch();
        setUniversities(data);
      };
      fetchUniversities();
    }
  }, [course]);

  useEffect(() => {
    const selectedUniversity = universities.find(
      (uni) => uni.id.toString() === selectedUniversityId
    );
    setPrograms(selectedUniversity?.programs || []);
  }, [selectedUniversityId, universities]);

  useEffect(() => {
    if (course) {
      setFormData({
        name: "",
        phone: "+91 ",
        email: "",
        university: course.university?.id || "",
        program: course.program_name?.id || "",
        college: "",
        friend_name: "",
        friend_contact: "+91 ",
        friend_email: "",
      });
    }
  }, [course]);

  const handlePhoneChange = (e, fieldName) => {
    const { value } = e.target;
    
    // Allow only numbers and backspace
    if (!/^\+91 [0-9]*$/.test(value) && value !== "+91 ") return;
    
    // Limit to 10 digits after +91
    if (value.replace("+91 ", "").length > 10) return;

    setFormData(prev => ({
      ...prev,
      [fieldName]: value
    }));

    // Clear error when user types
    if (errors[fieldName]) {
      setErrors(prev => ({ ...prev, [fieldName]: "" }));
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Prevent numbers in name fields
    if ((name === "name" || name === "friend_name") && /\d/.test(value)) return;

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

    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\+91 [0-9]{10}$/;

    // Your Information validation
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    else if (!phoneRegex.test(formData.phone)) newErrors.phone = "Enter a valid 10-digit phone number";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!emailRegex.test(formData.email)) newErrors.email = "Enter a valid email address";

    // Friend's Information validation
    if (!formData.friend_name.trim()) newErrors.friend_name = "Friend's name is required";
    if (!formData.friend_contact.trim()) newErrors.friend_contact = "Friend's phone is required";
    else if (!phoneRegex.test(formData.friend_contact)) newErrors.friend_contact = "Enter a valid 10-digit phone number";
    if (!formData.friend_email.trim()) newErrors.friend_email = "Friend's email is required";
    else if (!emailRegex.test(formData.friend_email)) newErrors.friend_email = "Enter a valid email address";

    // College validation when MBA is yes
    if (isMBA === "yes" && !formData.college.trim()) {
      newErrors.college = "College name is required";
    }

    // Course selection validation
    if (!course) {
      if (!formData.university) newErrors.university = "University is required";
      if (!formData.program) newErrors.program = "Program is required";
    }

    // Consent validation
    if (!consent) newErrors.consent = "You must agree to the terms";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(true);

    if (!validateForm()) return;

    const cleanedFormData = {
      ...formData,
      phone: formData.phone.replace("+91 ", "").trim(),
      friend_contact: formData.friend_contact.replace("+91 ", "").trim(),
    };

    try {
      await referForm(cleanedFormData);

      Swal.fire({
        title: "Success!",
        text: "Message sent successfully!",
        icon: "success",
        confirmButtonText: "OK",
      });

      setFormData({
        name: "",
        phone: "+91 ",
        email: "",
        university: course?.university?.id || "",
        program: course?.program_name?.id || "",
        college: "",
        friend_name: "",
        friend_contact: "+91 ",
        friend_email: "",
      });

      setIsMBA("no");
      setConsent(false);
      setSubmitted(false);
      setErrors({});
      if (!course) {
        setSelectedUniversityId("");
        setPrograms([]);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      Swal.fire({
        title: "Error!",
        text: "Something went wrong. Please try again.",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  const inputClass = (hasError) => 
    `p-3 rounded-lg w-full text-[#6D758F] shadow-md focus:ring-2 focus:ring-[#a2a4ac] focus:outline-none ${
      hasError ? "border border-red-500" : ""
    }`;

  return (
    <form
      onSubmit={handleSubmit}
      ref={modalRef}
      className="containers max-w-full mx-auto p-4 sm:p-6 lg:p-8 space-y-4 sm:space-y-6 bg-white rounded-lg shadow-2xl z-1111"
      noValidate // This disables browser default validation
    >
      <h2 className="text-lg font-semibold text-[#111216] mb-3">Your Information</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <div className="space-y-2">
          <label htmlFor="name" className="block text-sm font-medium text-[#6D758F]">Your Full Name</label>
          <input
            name="name"
            id="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            placeholder="Brian Clark"
            className={inputClass(errors.name)}
          />
          {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
        </div>
        <div className="space-y-2">
          <label htmlFor="phone" className="block text-sm font-medium text-[#6D758F]">Your Contact Number</label>
          <input
            name="phone"
            id="phone"
            type="text"
            value={formData.phone}
            onChange={(e) => handlePhoneChange(e, "phone")}
            placeholder="+91 9876543210"
            className={inputClass(errors.phone)}
          />
          {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <div className="space-y-2">
          <label htmlFor="email" className="block text-sm font-medium text-[#6D758F]">Your Email Address</label>
          <input
            name="email"
            id="email"
            type="text" // Changed from type="email" to prevent browser validation
            value={formData.email}
            onChange={handleChange}
            placeholder="example@youremail.com"
            className={inputClass(errors.email)}
          />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <div className="space-y-2">
          <label className="block text-sm font-medium text-[#6D758F]">Are you an MBA graduate?</label>
          <div className="flex gap-4">
            {["yes", "no"].map((option) => (
              <label key={option} className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="mba"
                  value={option}
                  checked={isMBA === option}
                  onChange={() => setIsMBA(option)}
                  className="sr-only"
                />
                <div className={`w-6 h-6 rounded-lg border-2 flex items-center justify-center 
                ${isMBA === option ? "border-green-500 bg-green-500" : "border-green-500"}`}>
                  {isMBA === option && (
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </div>
                <span className="text-[#6D758F] capitalize">{option}</span>
              </label>
            ))}
          </div>
        </div>

        {isMBA === "yes" && (
          <div className="space-y-2">
            <label htmlFor="college" className="block text-sm font-medium text-[#6D758F]">College Name</label>
            <input
              name="college"
              id="college"
              type="text"
              value={formData.college}
              onChange={handleChange}
              placeholder="Enter college name"
              className={inputClass(errors.college)}
            />
            {errors.college && <p className="text-red-500 text-xs mt-1">{errors.college}</p>}
          </div>
        )}
      </div>

      <hr className="border-t border-gray-300 my-6" />
      <h2 className="text-lg font-semibold text-[#111216] my-3">Your Friend's Information</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <div className="space-y-2">
          <label htmlFor="friend_name" className="block text-sm font-medium text-[#6D758F]">Friend's Full Name</label>
          <input
            name="friend_name"
            id="friend_name"
            type="text"
            value={formData.friend_name}
            onChange={handleChange}
            placeholder="John Doe"
            className={inputClass(errors.friend_name)}
          />
          {errors.friend_name && <p className="text-red-500 text-xs mt-1">{errors.friend_name}</p>}
        </div>
        <div className="space-y-2">
          <label htmlFor="friend_contact" className="block text-sm font-medium text-[#6D758F]">Friend's Contact Number</label>
          <input
            name="friend_contact"
            id="friend_contact"
            type="text"
            value={formData.friend_contact}
            onChange={(e) => handlePhoneChange(e, "friend_contact")}
            placeholder="+91 9876543210"
            className={inputClass(errors.friend_contact)}
          />
          {errors.friend_contact && <p className="text-red-500 text-xs mt-1">{errors.friend_contact}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <div className="space-y-2">
          <label htmlFor="friend_email" className="block text-sm font-medium text-[#6D758F]">Friend's Email Address</label>
          <input
            name="friend_email"
            id="friend_email"
            type="text" // Changed from type="email" to prevent browser validation
            value={formData.friend_email}
            onChange={handleChange}
            placeholder="example@youremail.com"
            className={inputClass(errors.friend_email)}
          />
          {errors.friend_email && <p className="text-red-500 text-xs mt-1">{errors.friend_email}</p>}
        </div>
      </div>

      {!course && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-[#6D758F]">Preferred University</label>
            <select
              name="university"
              value={formData.university}
              onChange={handleChange}
              className={inputClass(errors.university)}
            >
              <option value="">Select Preferred University</option>
              {universities.map((uni) => (
                <option key={uni.id} value={uni.id}>{uni.name}</option>
              ))}
            </select>
            {errors.university && <p className="text-red-500 text-xs mt-1">{errors.university}</p>}
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-medium text-[#6D758F]">Preferred Program</label>
            <select
              name="program"
              value={formData.program}
              onChange={handleChange}
              disabled={!selectedUniversityId}
              className={inputClass(errors.program)}
            >
              <option value="">Select Preferred Program</option>
              {programs.map((program) => (
                <option key={program.id} value={program.id}>
                  {program.program_name.name} {program.specialization.name}
                </option>
              ))}
            </select>
            {errors.program && <p className="text-red-500 text-xs mt-1">{errors.program}</p>}
          </div>
        </div>
      )}

      {/* Consent */}
      <div className="flex items-start gap-2 mt-4">
        <input
          type="checkbox"
          id="consent"
          checked={consent}
          onChange={() => {
            setConsent(!consent);
            if (errors.consent) setErrors(prev => ({ ...prev, consent: "" }));
          }}
          className="mt-1"
        />
        <label htmlFor="consent" className="text-sm text-[#6D758F]">
          I agree to the{" "}
          <a href="/terms-and-conditions" target="_blank" className="text-red-500 underline">Terms and Conditions</a>{" "}
          and{" "}
          <a href="/privacy-policy" target="_blank" className="text-red-500 underline">Privacy Policy</a>. I consent to receiving communication about educational programs and services.
        </label>
      </div>
      {errors.consent && <p className="text-red-500 text-xs mt-1">{errors.consent}</p>}

      {/* Submit Button */}
      <div className="flex justify-end mt-4">
        <button
          type="submit"
          className={`w-fit flex justify-center items-center gap-2 px-4 py-2 text-white rounded transition-all duration-200 ${
            consent ? "bg-[#FF383B] hover:bg-red-600" : "bg-gray-400 cursor-not-allowed"
          }`}
        >
          Submit Inquiry
          <Image src={arrow} alt="arrow" />
        </button>
      </div>
    </form>
  );
}
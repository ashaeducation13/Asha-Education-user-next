"use client";
import arrow from "../../../public/arrow.svg";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { referForm, UniversityFetch } from "@/services/api";
import Swal from "sweetalert2";

export default function ReferForm({course = null }) {
  const modalRef = useRef(null);

  const [universities, setUniversities] = useState([]);
  const [programs, setPrograms] = useState([]);
  const [selectedUniversityId, setSelectedUniversityId] = useState("");
  const [isMBA, setIsMBA] = useState("no");  // Track MBA selection
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    university: "",
    program: "",
    college: "", // College field for MBA
    friend_name: "",  // Friend's name
    friend_contact: "",  // Friend's contact
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
        phone: "",
        email: "",
        university: course.university?.id || "",
        program: course.program_name?.id || "",
        college: "", // Reset college
        friend_name: "", // Reset friend's name
        friend_contact: "", // Reset friend's contact
      });
    }
  }, [course]);

  const handleChange = (e) => {
    const { name, value } = e.target;
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
    console.log(formData);
  
    try {
      await referForm(formData);
  
      Swal.fire({
        title: "Success!",
        text: "Message sent successfully!",
        icon: "success",
        confirmButtonText: "OK",
      });
  
      setFormData({
        name: "",
        phone: "",
        email: "",
        university: course?.university?.id || "",
        program: course?.program_name?.id || "",
        college: "", // Reset college
        friend_name: "", // Reset friend's name
        friend_contact: "", // Reset friend's contact
      });
  
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
  

  return (
    <form
      onSubmit={handleSubmit}
      ref={modalRef}
      className="containers max-w-full mx-auto p-4 sm:p-6 lg:p-8 space-y-4 sm:space-y-6 bg-white rounded-lg shadow-2xl z-1111"
    >
      {/* First row: Name & Phone */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <div className="space-y-2">
          <label htmlFor="name" className="block text-sm font-medium text-[#6D758F]">Name</label>
          <input
            name="name"
            id="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            placeholder="Brian Clark"
            className="p-3 rounded-lg w-full text-[#6D758F] shadow-md focus:ring-2 focus:ring-[#a2a4ac] focus:outline-none"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="phone" className="block text-sm font-medium text-[#6D758F]">Phone</label>
          <input
            name="phone"
            id="phone"
            type="text"
            value={formData.phone}
            onChange={handleChange}
            placeholder="(123) 456 - 7890"
            className="p-3 rounded-lg w-full text-[#6D758F] shadow-md focus:ring-2 focus:ring-[#a2a4ac] focus:outline-none"
          />
        </div>
      </div>

      {/* Second row: MBA Radio + College */}
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
              className="p-3 rounded-lg w-full text-[#6D758F] shadow-md focus:ring-2 focus:ring-[#a2a4ac] focus:outline-none"
            />
          </div>
        )}
      </div>

      {/* Third row: Friend's Name & Friend's Contact */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <div className="space-y-2">
          <label htmlFor="friend_name" className="block text-sm font-medium text-[#6D758F]">Your Friend's Name</label>
          <input
            name="friend_name"
            id="friend_name"
            type="text"
            value={formData.friend_name}
            onChange={handleChange}
            placeholder="John Doe"
            className="p-3 rounded-lg w-full text-[#6D758F] shadow-md focus:ring-2 focus:ring-[#a2a4ac] focus:outline-none"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="friend_contact" className="block text-sm font-medium text-[#6D758F]">Your Friend's Contact</label>
          <input
            name="friend_contact"
            id="friend_contact"
            type="text"
            value={formData.friend_contact}
            onChange={handleChange}
            placeholder="(987) 654 - 3210"
            className="p-3 rounded-lg w-full text-[#6D758F] shadow-md focus:ring-2 focus:ring-[#a2a4ac] focus:outline-none"
          />
        </div>
      </div>

      {/* Fourth row: Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <div className="space-y-2">
          <label htmlFor="email" className="block text-sm font-medium text-[#6D758F]">Email</label>
          <input
            name="email"
            id="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="example@youremail.com"
            className="p-3 rounded-lg w-full text-[#6D758F] shadow-md focus:ring-2 focus:ring-[#a2a4ac] focus:outline-none"
          />
        </div>
        {/* Empty column for layout symmetry */}
        <div></div>
      </div>

      {/* Fifth row: University and Program (same line) */}
      {course ? (
        <div className="space-y-2">
          <h2 className="text-sm font-normal text-[#6D758F]">
            Enquiry:{" "}
            <span className="text-[#111216] font-rubik">
              {course.program_name?.name} {course.specialization?.name} in {course.university?.name}
            </span>
          </h2>
        </div>
      ) : (
        <>
          {/* University Dropdown */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
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
          </div>
        </>
      )}

      {/* Submit */}
      <div className="flex justify-end">
        <button
          type="submit"
          className="w-fit flex justify-center items-center gap-2 px-4 py-2 text-white bg-[#FF383B] rounded hover:bg-red-600"
        >
          Submit Inquiry
          <Image src={arrow} alt="arrow" />
        </button>
      </div>
    </form>
  );
}

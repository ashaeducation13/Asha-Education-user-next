"use client";
import arrow from "../../../public/arrow.svg";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { submitCounselForm, UniversityFetch } from "@/services/api";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
    try {
      await submitCounselForm(formData);
      toast.success("Message sent successfully!");

      setFormData({
        name: "",
        phone: "",
        email: "",
        university: course?.university?.id || "",
        program: course?.program_name?.id || "",
      });

      if (!course) {
        setSelectedUniversityId("");
        setPrograms([]);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Something went wrong. Please try again.");
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
    <form
      onSubmit={handleSubmit}
      ref={modalRef}
      className="containers max-w-md md:max-w-lg lg:max-w-2xl mx-auto p-4 sm:p-6 lg:p-8 space-y-4 sm:space-y-6 bg-white rounded-lg shadow-2xl z-[9999]"
    >
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
          className="w-full p-2 border rounded"
        />
      </div>

      {/* Phone */}
      <div className="space-y-2">
        <label htmlFor="phone" className="block text-sm font-medium text-[#6D758F]">
          Phone
        </label>
        <input
          name="phone"
          id="phone"
          type="text"
          value={formData.phone}
          onChange={handleChange}
          placeholder="(123) 456 - 7890"
          className="w-full p-2 border rounded"
        />
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
          className="w-full p-2 border rounded"
        />
      </div>

      {/* University */}
      <div className="space-y-2">
        <label className="block text-sm font-medium text-[#6D758F]">University</label>
        {course ? (
          <input
            type="text"
            value={course.university?.name || ""}
            readOnly
            className="w-full p-2 border rounded bg-gray-100"
          />
        ) : (
          <select
            name="university"
            value={formData.university}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          >
            <option value="">Select University</option>
            {universities.map((uni) => (
              <option key={uni.id} value={uni.id}>
                {uni.name}
              </option>
            ))}
          </select>
        )}
      </div>

      {/* Program */}
      <div className="space-y-2">
        <label className="block text-sm font-medium text-[#6D758F]">Program</label>
        {course ? (
          <input
            type="text"
            value={`${course.program_name?.name || ""} ${course.specialization?.name || ""}`}
            readOnly
            className="w-full p-2 border rounded bg-gray-100"
          />
        ) : (
          <select
            name="program"
            value={formData.program}
            onChange={handleChange}
            disabled={!selectedUniversityId}
            className="w-full p-2 border rounded"
            required
          >
            <option value="">Select Program</option>
            {programs.map((program) => (
              <option key={program.id} value={program.id}>
                {program.program_name.name} {program.specialization.name}
              </option>
            ))}
          </select>
        )}
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="w-full flex justify-center items-center gap-2 px-4 py-2 text-white bg-[#FF383B] rounded hover:bg-red-600"
      >
        Submit Inquiry
        <Image src={arrow} alt="arrow" />
      </button>
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
    </form>
  );
}

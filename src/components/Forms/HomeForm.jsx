"use client";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import arrow from "../../assets/home/counsel/Arrow.png";
import { UniversityFetch, submitCounselForm } from "@/services/api";
import { motion } from "framer-motion";

const HomeForm = () => {
  const [universities, setUniversities] = useState([]);
  const [selectedUniversityId, setSelectedUniversity] = useState("");
  const [programs, setPrograms] = useState([]);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    university: "",
    program: "",
  });

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

    try {
      await submitCounselForm(formData);
      toast.success("Message sent successfully!");
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
      console.error("Error submitting form:", error);
      toast.error("Something went wrong. Please try again.");
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
              type="string"
              name="phone"
              value={formData.phone}
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
        <motion.button
          type="submit"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}

          className="w-full md:w-auto flex items-center justify-center font-inter font-semibold gap-2 text-white px-6 py-3 rounded-md shadow-md transition duration-300 text-[12px] md:text-[14px] bg-[#FF383B]"
        >
          Submit
          <Image src={arrow} alt="Arrow" className="w-[8.4px] h-[8.24px]" />
        </motion.button>
        <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
      </motion.form>
    </>
  );
};

export default HomeForm;

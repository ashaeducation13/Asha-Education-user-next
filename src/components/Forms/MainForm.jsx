import arrow from "../../../public/arrow.svg"
import Image from "next/image"

export default function MainForm() {
    return (
      <div className="containers max-w-md md:max-w-lg lg:max-w-2xl mx-auto p-4 sm:p-6 lg:p-8 space-y-4 sm:space-y-6 bg-white rounded-lg shadow-2xl">
        {/* Name Field */}
        <div className="space-y-1 sm:space-y-2">
          <label htmlFor="name" className="block font-inter font-semibold text-[14px] leading-[20px] text-[#6D758F]">Name</label>
          <input
            type="text"
            id="name"
            className="w-full px-3 py-2 sm:px-4 sm:py-2 font-inter font-normal text-[13px] leading-[20px] text-[#6D758F]  border#F1F3F7 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            placeholder="Brian Clark"
          />
        </div>
    
        {/* Phone Field */}
        <div className="space-y-1 sm:space-y-2">
          <label htmlFor="phone" className="block font-inter font-semibold text-[14px] leading-[20px] text-[#6D758F]">Phone</label>
          <input
            type="tel"
            id="phone"
            className="w-full px-3 py-2 sm:px-4 sm:py-2 font-inter font-normal text-[13px] leading-[20px] text-[#6D758F]  border#F1F3F7 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            placeholder="(123) 456 - 7890"
          />
        </div>
    
        {/* Email Field */}
        <div className="space-y-1 sm:space-y-2">
          <label htmlFor="email" className="block font-inter font-semibold text-[14px] leading-[20px] text-[#6D758F]">Email</label>
          <input
            type="email"
            id="email"
            className="w-full px-3 py-2 sm:px-4 sm:py-2 font-inter font-normal text-[13px] leading-[20px] text-[#6D758F]  border#F1F3F7 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            placeholder="example@youremail.com"
          />
        </div>
    
        {/* University Field */}
        <div className="space-y-1 sm:space-y-2">
          <label htmlFor="university" className="block font-inter font-semibold text-[14px] leading-[20px] text-[#6D758F]">University</label>
          <select
            id="university"
            className="w-full px-3 py-2 sm:px-4 sm:py-2 font-inter font-normal text-[13px] leading-[20px] text-[#6D758F]  border#F1F3F7 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 bg-white appearance-none"
          >
            <option value="">Select university</option>
            <option value="harvard">Harvard University</option>
            <option value="stanford">Stanford University</option>
            <option value="mit">MIT</option>
          </select>
        </div>
    
        {/* Program Field */}
        <div className="space-y-1 sm:space-y-2">
          <label htmlFor="program" className="block font-inter font-semibold text-[14px] leading-[20px] text-[#6D758F]">Program</label>
          <select
            id="program"
            className="w-full px-3 py-2 sm:px-4 sm:py-2 font-inter font-normal text-[13px] leading-[20px] text-[#6D758F]  border#F1F3F7 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 bg-white appearance-none"
          >
            <option value="">Select program</option>
            <option value="mba">MBA</option>
            <option value="msc">MSc Computer Science</option>
            <option value="phd">PhD</option>
          </select>
        </div>
        
        {/* Submit Button */}
        <button className="flex items-center justify-center gap-2 w-full sm:w-auto px-4 py-2 sm:py-2 font-inter font-semibold text-[12px] leading-[20px] bg-[#FF383B] text-white rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-colors">
          Submit Inquiry
          <Image src={arrow} alt="arrow" />
        </button>
      </div>
    )
  }
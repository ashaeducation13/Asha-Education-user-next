"use client";

import Image from "next/image";
import UploadIcon from "../../../public/careers/upload.svg";
import { useState } from "react";

export default function Connect() {
  const [selectedValue, setSelectedValue] = useState('')
  return (
    <section className="containers px-[1px] my-10">
      <div >
        <h1 className="text-[18px] sm:text-[28px] leading-[32px] sm:leading-[46px] xl:leading-[70px] font-normal text-gray-900 w-[85%] sm:w-[75%] xl:w-full mx-auto" >Be Part of Our Growing Team</h1>
        <div className="md:p-[20px] p-[10px] border border-[#959595] bg-grey-400 rounded-[20px] shadow-xl bg-white">
          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-[20px] gap-[10px]">
            <div className="flex flex-col gap-2">
              <p className="text-[12px] md:text-[14px] leading-[12px] font-inter font-normal text-black">
                Name
              </p>
              <input
                className="p-3 rounded-lg w-full text-[#6D758F] shadow-md focus:ring-2 focus:ring-[#a2a4ac] focus:outline-none"
                placeholder="Enter Your Name"
                type="text"
              />
            </div>

            <div className="flex flex-col gap-2">
              <p className="text-[12px] md:text-[14px] leading-[12px] font-inter font-normal text-black">
                Phone No
              </p>
              <input
                className="p-3 rounded-lg w-full text-[#6D758F] shadow-md focus:ring-2 focus:ring-[#a2a4ac] focus:outline-none"
                placeholder="Enter Phone Number"
                type="number"
              />
            </div>

            <div className="flex flex-col gap-2">
              <p className="text-[12px] md:text-[14px] leading-[12px] font-inter font-normal text-black">
                Email
              </p>
              <input
                className="p-3 rounded-lg w-full text-[#6D758F] shadow-md focus:ring-2 focus:ring-[#a2a4ac] focus:outline-none"
                placeholder="Enter Email"
                type="email"
              />
            </div>

            <div className="flex flex-col gap-2">
              <p className="text-[12px] md:text-[14px] leading-[12px] font-inter font-normal text-black">
                Where did you hear about us from?
              </p>
              <select
                className="p-3 rounded-lg w-full text-[#6D758F] shadow-md focus:ring-2 focus:ring-[#a2a4ac] focus:outline-none" value={selectedValue} onChange={(e) => setSelectedValue(e.target.value)}
              >
                <option disabled>
                  Select Platform
                </option>
                <option value="linkedin">LinkedIn</option>
                <option value="instagram">Instagram</option>
                <option value="youtube">Youtube</option>
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <p className="text-[12px] md:text-[14px] leading-[12px] font-inter font-normal text-black">
                Upload CV
              </p>
              <div className="relative">
                <input
                  className="pl-10 pr-3 py-3 rounded-lg w-full text-[#6D758F] shadow-md focus:ring-2 focus:ring-[#a2a4ac] focus:outline-none"
                  placeholder="Choose File"
                  type="text"
                  readOnly
                />

                <Image
                  src={UploadIcon}
                  alt="upload"
                  width={20}
                  height={20}
                  className="absolute top-1/2 left-3 transform -translate-y-1/2 cursor-pointer"
                />
              </div>
              <div className="font-inter font-normal mt-2 text-black text-[10px] md:text-[11px] leading-[12px]">
                <p>Allowed file types: pdf, doc, docx, rtf</p>
                <p>Maximum file size allowed: 5MB</p>
              </div>
            </div>
          </div>

          <div className="mt-6 md:flex md:justify-end">
            <button className="w-full md:w-auto text-white bg-red-500 text-[12px] md:text-[15px] leading-[20px] px-2 md:px-6 py-2 rounded-md transition-all duration-300">
              Submit
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}


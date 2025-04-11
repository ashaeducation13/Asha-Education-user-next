"use client";

import Image from "next/image";
import UploadIcon from "../../../public/careers/upload.svg";
import { useState } from "react";

export default function Connect() {
  const [ selectedValue, setSelectedValue ] = useState('') 
  return (
    <section className="containers px-[1px] my-10">
      <div className="">
        <div className="md:p-[20px] p-[10px] border border-[#959595] bg-grey-400 rounded-[20px] bg-white">
          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-[20px] gap-[10px]">
            <div className="flex flex-col gap-2">
              <p className="text-[12px] md:text-[14px] leading-[12px] font-inter font-normal text-black">
                Name
              </p>
              <input
                className="w-full h-[40px] px-[15px] border-2 border-[#959595] rounded-[6px] text-[13px] md:text-[15px] leading-[20px] font-inter font-normal placeholder:text-[13px] md:placeholder:text-[15px] placeholder:text-[#BABABA] focus:outline-none"
                placeholder="Enter Your Name"
                type="text"
              />
            </div>

            <div className="flex flex-col gap-2">
              <p className="text-[12px] md:text-[14px] leading-[12px] font-inter font-normal text-black">
                Phone No
              </p>
              <input
                className="w-full h-[40px] px-[15px] border-2 border-[#959595] rounded-[6px] text-[13px] md:text-[15px] leading-[20px] font-inter font-normal placeholder:text-[13px] md:placeholder:text-[15px] placeholder:text-[#BABABA] focus:outline-none"
                placeholder="Enter Phone Number"
                type="number"
              />
            </div>

            <div className="flex flex-col gap-2">
              <p className="text-[12px] md:text-[14px] leading-[12px] font-inter font-normal text-black">
                Email
              </p>
              <input
                className="w-full h-[40px] px-[15px] border-2 border-[#959595] rounded-[6px] text-[13px] md:text-[15px] leading-[20px] font-inter font-normal placeholder:text-[13px] md:placeholder:text-[15px] placeholder:text-[#BABABA] focus:outline-none"
                placeholder="Enter Email"
                type="email"
              />
            </div>

            <div className="flex flex-col gap-2">
              <p className="text-[12px] md:text-[14px] leading-[12px] font-inter font-normal text-black">
              Where did you hear about us from?
              </p>
              <select
                className="w-full h-[40px] px-[15px] border-2 rounded-[6px] text-[13px] md:text-[15px] leading-[20px] font-inter font-normal focus:outline-none text-[#BABABA]" value={selectedValue} onChange={(e) => setSelectedValue(e.target.value)}
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
                  className="w-full h-[40px] pl-[40px] px-[15px] border-2 rounded-[6px] text-[13px] md:text-[15px] leading-[20px] font-inter font-normal focus:outline-none cursor-pointer text-[#BABABA]"
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

  
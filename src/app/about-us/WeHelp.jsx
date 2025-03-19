import React from 'react'
import Image from "next/image";
import Address from "../../assets/about-us/address-icon.svg";
import Phone from "../../assets/about-us/phone-icon.svg";
import Mail from "../../assets/about-us/mail-icon.svg";

function WeHelp() {
 

  return (
    <div
      className="flex justify-between items-start px-[200px] py-[50px] "
    >
      <div className="w-[65%] grid grid-cols-2 gap-4">
      
        <h1 className='font-open-sans text-[40px] leading-[40px]'>We’re Here to Help You!</h1><br/>
        <p className='font-rubik text-[16px] leading-[24px]'>Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit</p><br/>

        <div className="space-y-4 gap-2">
      {/* Address Section */}
      <div className="flex items-center space-x-3">
        <Image src={Address} alt="Address" className="w-[38px] h-[40px] text-gray-500" />
        {/* <span className="text-gray-500 text-xl">📍</span>  */}
        <span className="text-black-700 font-rubik">1234 Knowledge Avenue, Education City, New Delhi, India – 110001</span>
      </div>

      {/* Phone Section */}
      <div className="flex items-center space-x-3">
        <Image src={Phone} alt="Phone" className="w-[38px] h-[40px] text-gray-500" />
        {/* <span className="text-gray-500 text-xl">📞</span>  */}
        <span className="text-black-700 font-rubik">+91 98765 43210</span>
      </div>

      {/* Email Section */}
      <div className="flex items-center space-x-3 ">
        <Image src={Mail} alt="Email" className="w-[38px] h-[40px] text-gray-500" />
        {/* <span className="text-gray-500 text-xl">✉️</span>  */}
        <span className="text-black-700 font-rubik">info@educationhub.com</span>
      </div>
    </div>
      </div>
      <div className="w-[40%] flex flex-col items-center ">
        <div className="w-full text-start">
      {/* <h2
          className="text-[24px] font-semibold font-open-sans bg-clip-text text-transparent mb-4 text-start"
          style={{
            backgroundImage:
              "linear-gradient(90.02deg, #0A0078 2.5%, #FF383B 43.53%)",
          }}
        >
          Send Us a Message
        </h2>  */}
        </div>
        <div className="w-full bg-white p-6 rounded-[20px] shadow-2xl">
  <form className="flex flex-col gap-4 text-[#6D758F]">
    
    {/* Name & Phone in Same Row */}
    <div className="flex gap-4">
      <div className="flex flex-col w-1/2">
        <label className="font-inter text-[14px] leading-[20px] mb-1">
          Name
        </label>
        <input
          type="text"
          className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:border-[#FF383B]"
          placeholder="Brian Clark"
        />
      </div>

      <div className="flex flex-col w-1/2">
        <label className="font-inter text-[14px] leading-[20px] mb-1">
          Phone
        </label>
        <input
          type="number"
          className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:border-[#FF383B]"
          placeholder="(123) 456 - 7890"
        />
      </div>
    </div>

    {/* Email */}
    <div className="flex flex-col">
      <label className="font-inter text-[14px] leading-[20px] mb-1">
        Email
      </label>
      <input
        type="email"
        className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:border-[#FF383B]"
        placeholder="example@youremail.com"
      />
    </div>

    {/* Message */}
    <div className="flex flex-col">
      <label className="font-inter text-[14px] mb-1">Message</label>
      <textarea
        rows="4"
        className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:border-[#FF383B]"
        placeholder="Type ..."
      ></textarea>
    </div>

    <button
      type="submit"
      className="mt-2 bg-[#FF383B] text-white rounded-lg font-semibold hover:bg-[#e02e33] transition w-[120px] h-[45px] text-[14px] leading-[20px]"
    >
      Submit 
    </button>
  </form>
</div>

      </div>
    </div>
  );
}      

export default WeHelp

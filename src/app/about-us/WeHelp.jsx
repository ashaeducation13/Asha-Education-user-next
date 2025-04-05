import React from "react";
import Image from "next/image";
import Address from "../../assets/about-us/address-icon.svg";
import Phone from "../../assets/about-us/phone-icon.svg";
import Mail from "../../assets/about-us/mail-icon.svg";

function WeHelp({data}) {
  return (
    <div className="md:w-[80%] w-[90%] mx-auto md:flex justify-between items-start py-[50px] md:gap-16 lg:gap-0 ">
      <div className="lg:w-[30%] ">
        <h1 className="font-open-sans lg:text-[40px] md:text-[32px] text-[24px] leading-[24px] md:leading-[32px] lg:leading-[40px]">
          We’re Here to Help You!
        </h1>
        <br />
        <p className="font-rubik lg:text-[16px] md:text-[14px] text-[12px] lg:leading-[24px] md:leading-[21px] leading-[18px]">
        Our dedicated team is here to support your educational journey. Contact us for personalized
        guidance and assistance.
        </p>
        <br />

        <div className="space-y-6 gap-2 mt-2">
          {/* Address Section */}
          <div className="flex items-start space-x-4">
            <Image
              src={Address}
              alt="Address"
              className="w-[38px] h-[40px] text-gray-500"
            />
            {/* <span className="text-gray-500 text-xl">📍</span>  */}
            <span className="text-black font-rubik font-normal lg:text-[20px] md:text-[16px] text-[14px] lg:leading-[28px] md:leading-[24px] leading-[21px]">
              {data.address}
            </span>
          </div>

          {/* Phone Section */}
          <div className="flex items-start space-x-4">
            <Image src={Phone} alt="Phone" className="w-[38px] h-[40px]" />
            {/* <span className="text-gray-500 text-xl">📞</span>  */}
            <span className="font-rubik text-black lg:text-[20px] md:text-[16px] text-[14px] lg:leading-[28px] leading-[28px]">
            {data.phone}
            </span>
          </div>

          {/* Email Section */}
          <div className="flex items-start space-x-4 ">
            <Image
              src={Mail}
              alt="Email"
              className="w-[38px] h-[40px] text-gray-500 "
            />
            {/* <span className="text-gray-500 text-xl">✉️</span>  */}
            <span className="text-black font-rubik lg:text-[20px] md:text-[16px] text-[14px] lg:leading-[28px] leading-[28px]">
            {data.email}
            </span>
          </div>
        </div>
      </div>
      <div className="lg:w-[40%] md:w-[60%] flex flex-col items-center ">
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
        <div className="w-full bg-white p-4 rounded-[20px] shadow-2xl mt-6 md:mt-0 lg:mt-6">
          <form className="flex flex-col gap-2 text-[#6D758F]">
            {/* Name & Phone in Same Row - Stack on mobile */}
            <div className="flex flex-col md:flex-row gap-1">
              <div className="flex flex-col w-full md:w-1/2">
                <label
                  htmlFor="name"
                  className="font-inter text-[14px] leading-[20px] mb-1 font-semibold"
                >
                  Name*
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#FF383B] focus:border-transparent font-inter font-normal text-[14px] leading-[20px]"
                  placeholder="Brian Clark"
                />
              </div>

              <div className="flex flex-col w-full md:w-1/2">
                <label
                  htmlFor="phone"
                  className="font-inter text-[14px] leading-[20px] mb-1 font-medium"
                >
                  Phone*
                </label>
                <input
                  id="phone"
                  type="tel"
                  required
                  className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#FF383B] focus:border-transparent"
                  placeholder="(123) 456 - 7890"
                />
              </div>
            </div>

            {/* Email */}
            <div className="flex flex-col">
              <label
                htmlFor="email"
                className="font-inter text-[14px] leading-[20px] mb-1 font-medium"
              >
                Email*
              </label>
              <input
                id="email"
                type="email"
                required
                className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#FF383B] focus:border-transparent"
                placeholder="example@youremail.com"
              />
            </div>

            {/* Message */}
            <div className="flex flex-col">
              <label
                htmlFor="message"
                className="font-inter text-[14px] leading-[20px] mb-1 font-medium"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#FF383B] focus:border-transparent"
                placeholder="Type..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="flex items-center justify-center gap-2 mt-2 bg-[#FF383B] text-white rounded-lg font-semibold hover:bg-[#e02e33] transition-all duration-300 w-full md:w-[150px] h-[48px] text-[14px] leading-[20px] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FF383B]"
            >
              Submit
              <img
              src="arrow.svg"
              alt="Arrow"
              className="w-[12px] h-[12px]"         
            />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default WeHelp;

import Image from "next/image";
import arrow from "../../assets/contact-us/arrow.svg";
import phone from "../../assets/contact-us/phone.svg"
import email from "../../assets/contact-us/email.svg"
import hash from "../../assets/contact-us/hash.svg"
import time from "../../assets/contact-us/time.svg"
import facebook from "../../../public/Facebook.svg";
import twitter from "../../../public/Twitter.svg";
import instagram from "../../../public/Instagram.svg";
import linkedin from "../../../public/LinkedIn.svg";
import youtube from "../../../public/Youtube.svg";
import address from "../../assets/contact-us/Address.svg"

export default function SendUsSection() {
  const contactInfo = [
    {
      title: "Address",
      content1:
        "1234 Knowledge Avenue,\nEducation City,\nNew Delhi, India - 110001",
      icon: address,
    },
    {
      title: "Phone Numbers",
      subtitle1: "Admissions",
      content1: "+91 98765 43210",
      subtitle2: "General Inquiry",
      content2: "+91 98765 43210",
      icon: phone,
    },
    {
      title: "Email Addresses",
      subtitle1: "Support",
      content1: "support@educationhub.com",
      subtitle2: "Admissions",
      content2: "admissions@educationhub.com",
      icon: email,
    },
    {
      title: "Office Hours",
      subtitle1: "Monday",
      content1: "9 AM - 6 PM",
      subtitle2: "Saturday",
      content2: "10 AM - 4 PM",
      icon: time,
    },
  ];

  return (
    <div className="flex justify-between items-start px-[200px] py-[100px] ">
      <div className="w-[65%] grid grid-cols-2 gap-4">
        {contactInfo.map((item, index) => (
          <div
            key={index}
            className="p-6 rounded-[20px] bg-white flex flex-col justify-between shadow-2xl transition duration-300 hover:bg-gradient-to-r hover:from-[#0A0078] hover:to-[#FF383B] hover:text-white group"
          >
            <div className="flex items-start gap-[20px]">
              <Image src={item?.icon} alt="" className="w-8 h-8 mt-1" />
              <h3 className="font-open-sans font-semibold text-[20px] leading-[24px] text-[#FF383B] transition duration-300 group-hover:text-white">
                {item.title}
              </h3>
            </div>
            <div className="pl-[40px] mt-2">
              {item.content1 && !item.subtitle1 ? (
                <p className="font-rubik font-normal text-[16px] leading-[24px] whitespace-pre-line transition duration-300 group-hover:text-white">
                  {item.content1}
                </p>
              ) : (
                <>
                  {item.subtitle1 && (
                    <div className="mb-3">
                      <h4 className="font-rubik font-medium text-[18px] leading-[22px] text-[#FF383B] transition duration-300 group-hover:text-white">
                        {item.subtitle1}
                      </h4>
                      <p className="font-rubik font-normal text-[16px] leading-[24px] whitespace-pre-line transition duration-300 group-hover:text-white">
                        {item.content1}
                      </p>
                    </div>
                  )}
                  {item.subtitle2 && (
                    <div>
                      <h4 className="font-rubik font-medium text-[18px] leading-[22px] text-[#FF383B] transition duration-300 group-hover:text-white">
                        {item.subtitle2}
                      </h4>
                      <p className="font-rubik font-normal text-[16px] leading-[24px] whitespace-pre-line transition duration-300 group-hover:text-white">
                        {item.content2}
                      </p>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        ))}
        <div className="flex items-center justify-between w-full mt-4">
          <Image src={hash} className="mr-3 w-8 h-8" alt="hashcode" />
            <h1
              className="bg-clip-text text-transparent font-open-sans font-semibold text-[24px] leading-[24px] whitespace-nowrap"
              style={{
                backgroundImage:
                  "linear-gradient(90.02deg, #0A0078 2.5%, #FF383B 43.53%)",
              }}
            >
              Stay Connected with Us!
            </h1>
          <div className="flex items-center gap-4">
            <ul className="flex gap-6">
              <li className="">
                <Image src={facebook} className="w-8 h-8" alt="faceb" />
              </li>
              <li >
                <Image src={twitter} className="w-8 h-8" alt="" />
              </li>
              <li>
                <Image src={instagram} className="w-8 h-8" alt="" />
              </li>
              <li>
                <Image src={linkedin} className="w-8 h-8" alt="" />
              </li>
              <li>
                <Image src={youtube} className="w-8 h-8" alt="" />
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="w-[30%] flex flex-col items-center ">
        <div className="w-full text-start">
          <h2
            className="text-[24px] font-semibold font-open-sans bg-clip-text text-transparent mb-4 text-start"
            style={{
              backgroundImage:
                "linear-gradient(90.02deg, #0A0078 2.5%, #FF383B 43.53%)",
            }}
          >
            Send Us a Message
          </h2>
        </div>
        <div className="w-full bg-white p-6 rounded-[20px] shadow-2xl">
          <form className="flex flex-col gap-4 text-[#6D758F]">
            <div className="flex flex-col ">
              <label className="font-inter text-[14px] leading-[20px] mb-1">
                Name
              </label>
              <input
                type="text"
                className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:border-[#FF383B]"
                placeholder="Brian Clark"
              />
            </div>

            <div className="flex flex-col">
              <label className="font-inter text-[14px] leading-[20px] mb-1">
                Phone
              </label>
              <input
                type="Number"
                className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:border-[#FF383B]"
                placeholder="(123) 456 - 7890"
              />
            </div>

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
              className="relative flex items-center justify-center mt-2 bg-[#FF383B] text-white rounded-lg font-semibold hover:bg-[#e02e33] transition w-[150px] h-[45px] text-[14px] leading-[20px]"
            >
              Submit Inquiry
              <Image
                src={arrow}
                alt="Arrow icon"
                width={10}
                height={10}
                className="ml-2"
              />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

import Image from "next/image";
import arrow from "../../assets/contact-us/arrow.svg";
import phone from "../../assets/contact-us/phone.svg";
import email from "../../assets/contact-us/email.svg";
import hash from "../../assets/contact-us/hash.svg";
import time from "../../assets/contact-us/time.svg";
import facebook from "../../assets/contact-us/Facebook.svg";
import twitter from "../../assets/contact-us/Twitter.svg";
import instagram from "../../assets/contact-us/Instagram.svg";
import linkedin from "../../assets/contact-us/LinkedIn.svg";
import youtube from "../../assets/contact-us/YouTube.svg";
import address from "../../assets/contact-us/address.svg";
import one from "../../assets/contact-us/1.svg";
import two from "../../assets/contact-us/2.svg";
import three from "../../assets/contact-us/3.svg";
import four from "../../assets/contact-us/4.svg";

export default function SendUsSection() {
  const contactInfo = [
    {
      title: "Address",
      content1:
        "1234 Knowledge Avenue,\nEducation City,\nNew Delhi, India - 110001",
      icon: address,
      hovIcon: one,
    },
    {
      title: "Phone Numbers",
      subtitle1: "Admissions",
      content1: "+91 98765 43210",
      subtitle2: "General Inquiry",
      content2: "+91 98765 43210",
      icon: phone,
      hovIcon: two,
    },
    {
      title: "Email Addresses",
      subtitle1: "Support",
      content1: "support@educationhub.com",
      subtitle2: "Admissions",
      content2: "admissions@educationhub.com",
      icon: email,
      hovIcon: three,
    },
    {
      title: "Office Hours",
      subtitle1: "Monday",
      content1: "9 AM - 6 PM",
      subtitle2: "Saturday",
      content2: "10 AM - 4 PM",
      icon: time,
      hovIcon: four,
    },
  ];

  return (
    <div className="flex flex-wrap justify-between items-start containers py-20">
      {/* Contact Info Section */}
      <div className="w-[65%] grid grid-cols-2 gap-4">
        {contactInfo.map((item, index) => (
          <div
            key={index}
            className="p-6 rounded-[20px] bg-white flex flex-col justify-between shadow-2xl transition duration-300 hover:bg-gradient-to-r hover:from-[#0A0078] hover:to-[#FF383B] hover:text-white group w-full"
          >
            <div className="flex items-start gap-4">
              <Image
                src={item.icon}
                alt={item.title}
                className="w-auto h-auto max-w-[32px] max-h-[32px] mt-1 group-hover:hidden"
              />
              <Image
                src={item.hovIcon}
                alt={item.title}
                className="w-auto h-auto max-w-[32px] max-h-[32px] mt-1 hidden group-hover:block"
              />
              <h3 className="font-open-sans font-semibold text-sm lg:text-lg leading-[24px] text-[#FF383B] transition group-hover:text-white">
                {item.title}
              </h3>
            </div>
            <div className="pl-10 mt-2">
              {item.subtitle1 ? (
                <div className="mb-3">
                  <h4 className="font-rubik font-medium text-xs lg:text-base leading-[28px] text-[#FF383B] transition group-hover:text-white">
                    {item.subtitle1}
                  </h4>
                  <p className="font-rubik font-normal text-base leading-[24px] whitespace-pre-line transition group-hover:text-white">
                    {item.content1}
                  </p>
                </div>
              ) : (
                <p className="font-rubik font-normal text-sm lg:text-lg leading-[24px] lg:leading-[28px] whitespace-pre-line transition group-hover:text-white">
                  {item.content1}
                </p>
              )}
              {item.subtitle2 && (
                <div>
                  <h4 className="font-rubik font-medium text-base leading-[22px] text-[#FF383B] transition group-hover:text-white">
                    {item.subtitle2}
                  </h4>
                  <p className="font-rubik font-normal text-base leading-[24px] whitespace-pre-line transition group-hover:text-white">
                    {item.content2}
                  </p>
                </div>
              )}
            </div>
          </div>
        ))}

        {/* Social Media Section */}
        <div className="flex items-center justify-between w-full mt-4">
          <div className="flex items-center">
            <Image src={hash} alt="hashcode" className="mr-3 w-8 h-8" />
            <h1
              className="bg-clip-text text-transparent font-open-sans font-semibold text-[24px] leading-[24px] whitespace-nowrap"
              style={{
                backgroundImage:
                  "linear-gradient(90.02deg, #0A0078 2.5%, #FF383B 43.53%)",
              }}
            >
              Stay Connected with Us!
            </h1>
          </div>
          <div className="flex items-center gap-6 ml-[100px]">
            {[facebook, twitter, instagram, linkedin, youtube].map(
              (icon, idx) => (
                <Image
                  key={idx}
                  src={icon}
                  className="w-8 h-8"
                  alt="social-icon"
                />
              )
            )}
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="w-[30%] flex flex-col items-center">
        <h2
          className="text-[24px] font-semibold font-open-sans bg-clip-text text-transparent mb-4 text-start"
          style={{
            backgroundImage:
              "linear-gradient(90.02deg, #0A0078 2.5%, #FF383B 43.53%)",
          }}
        >
          Send Us a Message
        </h2>
        <div className="w-full bg-white p-6 rounded-[20px] shadow-2xl">
          <form className="flex flex-col gap-4 text-[#6D758F]">
            {[
              { label: "Name", type: "text", placeholder: "Brian Clark" },
              {
                label: "Phone",
                type: "number",
                placeholder: "(123) 456 - 7890",
              },
              {
                label: "Email",
                type: "email",
                placeholder: "example@youremail.com",
              },
            ].map((field, index) => (
              <div key={index} className="flex flex-col">
                <label className="font-inter text-[14px] leading-[20px] mb-1">
                  {field.label}
                </label>
                <input
                  type={field.type}
                  className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:border-[#FF383B]"
                  placeholder={field.placeholder}
                />
              </div>
            ))}
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

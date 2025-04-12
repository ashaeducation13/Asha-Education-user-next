"use client"
import { contactForm } from "@/services/api";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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

// Define components first
const ContactCard = ({ item }) => (
  <div className={`px-4 py-2 rounded-[20px] bg-white flex flex-col justify-betwee shadow-2xl transition duration-300 hover:bg-gradient-to-r hover:from-[#0A0078] hover:to-[#FF383B] hover:text-white group`}>
    <div className="flex items-start gap-2 md:gap-1 lg:gap-4">
      <Image
        src={item.icon}
        alt={item.title}
        className="lg:w-8 lg:h-8 md:h-7 md:w-7 h-6 w-6 mt-1 group-hover:hidden"
      />
      <Image
        src={item.hovIcon}
        alt={item.title}
        className="w-8 h-8 mt-1 hidden group-hover:block"
      />
      <h3 className="font-open-sans font-semibold lg:text-[18px] text-[14px] leading-[24px] text-[#FF383B] group-hover:text-white whitespace-nowrap">
        {item.title}
      </h3>
    </div>
    <div className={`pl-7 ${!item.subtitle1 ? "pt-2" : ""}`}>
      {item.subtitle1 && (
        <div className="">
          <h4 className="font-rubik font-medium lg:text-[16px] text-[12px] leading-[28px] text-[#FF383B] group-hover:text-white">
            {item.subtitle1}
          </h4>
          <p className="font-rubik font-normal lg:text-[18px] text-[14px] lg:leading-[28px] whitespace-pre-line group-hover:text-white break-words">
            {item.content1}
          </p>
        </div>
      )}
      {!item.subtitle1 && (
        <p className="font-rubik font-normal lg:text-[18px] text-[14px] lg:leading-[24px] whitespace-pre-line group-hover:text-white">
          {item.content1}
        </p>
      )}
      {item.subtitle2 && (
        <div className="mt-2">
          <h4 className="font-rubik font-medium lg:text-[16px] text-[12px] leading-[28px] text-[#FF383B] group-hover:text-white">
            {item.subtitle2}
          </h4>
          <p className="font-rubik font-normal lg:text-[18px] text-[14px] leading-[28px] whitespace-pre-line group-hover:text-white break-words">
            {item.content2}
          </p>
        </div>
      )}
    </div>
  </div>
);

const SocialMediaSection = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 items-center mt-4 gap-4 md:gap-8">
    {/* First grid item - "Stay Connected" text */}
    <div className="flex items-center">
      <Image
        src={hash}
        alt="hashcode"
        className="mr-3 lg:w-[40px] lg:h-[40px] w-[24px] h-[25px]"
      />
      <h1 className="bg-clip-text text-transparent font-open-sans font-semibold lg:text-[18px] md:text-[14px] text-[12px] leading-[24px] whitespace-nowrap bg-gradient-to-r from-[#0A0078] to-[#FF383B]">
        Stay Connected with Us!
      </h1>
    </div>

    {/* Second grid item - Social icons */}
    <div className="flex items-center md:justify-center gap-3 lg:gap-4">
      {[facebook, twitter, instagram, linkedin, youtube].map((icon, idx) => (
        <Image
          key={idx}
          src={icon}
          className="lg:size-[28px] size-[20px]"
          alt="social-icon"
        />
      ))}
    </div>
  </div>
);

const FormField = ({ field, formData, handleChange }) => (
  <div className="flex flex-col">
    <label className="font-inter text-sm leading-5 mb-1">{field.label}</label>
    <input
      type={field.type}
      name={field.name}
      value={formData[field.name]}
      onChange={handleChange}
      className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:border-[#FF383B]"
      placeholder={field.placeholder}
    />
  </div>
);

const FormTextArea = ({ formData, handleChange }) => (
  <div className="flex flex-col">
    <label className="font-inter text-sm mb-1">Message</label>
    <textarea
      name="message"
      rows="4"
      value={formData.message}
      onChange={handleChange}
      className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:border-[#FF383B]"
      placeholder="Type ..."
    ></textarea>
  </div>
);

const SubmitButton = () => (
  <button
    type="submit"
    className="relative flex items-center justify-center mt-2 bg-[#FF383B] text-white rounded-lg font-semibold hover:bg-[#e02e33] transition w-[150px] h-[45px] text-sm leading-5"
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
);

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const formFields = [
    { label: "Name", type: "text", placeholder: "Brian Clark" },
    { label: "Phone", type: "number", placeholder: "(123) 456 - 7890" },
    { label: "Email", type: "email", placeholder: "example@youremail.com" },
  ];
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      await contactForm(formData); // 👈 using your API function
      toast.success("Message sent successfully!");
      setFormData({ name: "", phone: "", email: "", message: "" });
    } catch (err) {
      toast.error("Something went wrong. Please try again.");
    }
  };
  return (
    <div className="hidden md:block w-full">
      <h2 className="lg:text-[24px] leading-[24px] md:text-[20px] text-[14px] font-semibold font-open-sans bg-clip-text text-transparent mb-4 bg-gradient-to-r from-[#0A0078] to-[#FF383B]">
        Send Us a Message
      </h2>
      <div className="bg-white p-8 rounded-[20px] shadow-2xl">
        <form className="flex flex-col md:gap-3 lg:gap-5 text-[#6D758F]" onSubmit={handleSubmit}>
          {formFields.map((field, index) => (
            <FormField
            key={index}
            field={{ ...field, name: field.label.toLowerCase() }}
            formData={formData}
            handleChange={handleChange}
          />
          ))}
          <FormTextArea formData={formData} handleChange={handleChange} />
          <SubmitButton />
        </form>
      </div>
    </div>
  );
};

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
      title: "Email Addresses",
      subtitle1: "Support",
      content1: "support@educationhub.com",
      subtitle2: "Admissions",
      content2: "admissions@educationhub.com",
      icon: email,
      hovIcon: three,
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
    <div className="containers md:px-4 md:py-12 py-4">
      <div className="flex flex-col md:flex-row justify-between gap-2 md:gap-8 ">
        {/* Contact Info Section */}
        <div className="md:w-[60%] w-full">
          <div className="grid grid-rows-1 lg:grid-rows-[55%_1fr] gap-2 md:gap-3 mb-2 md:mb-4 lg:mb-14">
            {contactInfo.slice(0, 2).map((item, index) => (
              <ContactCard key={index} item={item} />
            ))}
          </div>
          <div className="grid grid-rows-1 md:grid-cols-[55%_1fr] gap-2 md:gap-4">
            {contactInfo.slice(2, 4).map((item, index) => (
              <ContactCard key={index} item={item} />
            ))}
          </div>
          <SocialMediaSection />
        </div>

        {/* Contact Form Section */}
        <div className="lg:w-[35%] md:w-[40%] w-full">
          <ContactForm />
        </div>
      </div>
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
    </div>
  );
}

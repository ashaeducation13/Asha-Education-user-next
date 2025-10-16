"use client";
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

const ContactCard = ({ item }) => (
  <div className="px-4 py-2 rounded-[20px] bg-white flex flex-col justify-center shadow-2xl transition duration-300 hover:bg-gradient-to-r hover:from-[#0A0078] hover:to-[#FF383B] hover:text-white group">
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
      {item.subtitle1 ? (
        <div>
          <h4 className="font-rubik font-medium lg:text-[16px] text-[12px] leading-[28px] text-[#FF383B] group-hover:text-white">
            {item.subtitle1}
          </h4>
          <p className="font-rubik font-normal lg:text-[18px] text-[14px] lg:leading-[28px] whitespace-pre-line group-hover:text-white break-words">
            {item.content1}
          </p>
        </div>
      ) : (
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
    <div className="flex items-center">
      <Image
        src={hash}
        alt="hashcode"
        className="mr-3 lg:w-[40px] lg:h-[40px] w-[24px] h-[25px]"
      />
      <h2 className="bg-clip-text text-transparent font-open-sans font-semibold lg:text-[18px] md:text-[14px] text-[12px] leading-[24px] whitespace-nowrap bg-gradient-to-r from-[#0A0078] to-[#FF383B]">
        Stay Connected with Us!
      </h2>
    </div>
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

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [consent, setConsent] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    else if (!/^[A-Za-z\s]+$/.test(formData.name))
      newErrors.name = "Only letters and spaces are allowed";

    if (!formData.phone.trim()) newErrors.phone = "Phone is required";
    else if (!/^\d{10}$/.test(formData.phone))
      newErrors.phone = "Enter a valid 10-digit phone number";

    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = "Enter a valid email address";

    if (!formData.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "name") {
      setFormData((prev) => ({
        ...prev,
        [name]: value.replace(/[^A-Za-z\s]/g, ""),
      }));
    } else if (name === "phone") {
      const numeric = value.replace(/\D/g, "").slice(0, 10); // limit to 10 digits
      setFormData((prev) => ({ ...prev, [name]: numeric }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(true);
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0 || !consent) return;

    try {
      await contactForm(formData);
      toast.success("Message sent successfully!");
      setFormData({ name: "", phone: "", email: "", message: "" });
      setConsent(false);
      setSubmitted(false);
      setErrors({});
    } catch (err) {
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="w-full">
      <h3 className="lg:text-[24px] leading-[24px] md:text-[20px] text-[14px] font-semibold font-open-sans bg-clip-text text-transparent mb-4 bg-gradient-to-r from-[#0A0078] to-[#FF383B]">
        Send Us a Message
      </h3>
      <div className="bg-white p-4 lg:p-8 rounded-[20px] shadow-2xl">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col md:gap-3 text-[#6D758F]"
          noValidate
        >
          <div className="flex flex-col mb-2">
            <label className="font-inter text-sm leading-5 mb-1">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`border rounded-lg p-2 focus:outline-none ${
                errors.name ? "border-red-500" : "border-gray-300"
              } focus:border-[#FF383B]`}
              placeholder="Brian Clark"
            />
            {errors.name && (
              <span className="text-red-500 text-xs mt-1">{errors.name}</span>
            )}
          </div>

          <div className="flex flex-col mb-2">
            <label className="font-inter text-sm leading-5 mb-1">Phone</label>
            <div className="flex items-center border rounded-lg focus-within:border-[#FF383B] overflow-hidden">
              <span className="bg-gray-100 text-sm text-gray-600 px-2 py-2 border-r">
                +91
              </span>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="9876543210"
                className="flex-1 p-2 focus:outline-none"
                inputMode="numeric"
              />
            </div>
            {errors.phone && (
              <span className="text-red-500 text-xs mt-1">{errors.phone}</span>
            )}
          </div>

          <div className="flex flex-col mb-2">
            <label className="font-inter text-sm leading-5 mb-1">Email</label>
            <input
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`border rounded-lg p-2 focus:outline-none ${
                errors.email ? "border-red-500" : "border-gray-300"
              } focus:border-[#FF383B]`}
              placeholder="example@youremail.com"
            />
            {errors.email && (
              <span className="text-red-500 text-xs mt-1">{errors.email}</span>
            )}
          </div>

          <div className="flex flex-col mb-2">
            <label className="font-inter text-sm mb-1">Message</label>
            <textarea
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              className={`border rounded-lg p-2 focus:outline-none ${
                errors.message ? "border-red-500" : "border-gray-300"
              } focus:border-[#FF383B]`}
              placeholder="Type ..."
            ></textarea>
            {errors.message && (
              <span className="text-red-500 text-xs mt-1">
                {errors.message}
              </span>
            )}
          </div>

          <div className="flex items-start gap-2 mt-2 mb-4">
            <input
              type="checkbox"
              checked={consent}
              onChange={() => setConsent(!consent)}
              className="mt-1"
              id="consent"
            />
            <label
              htmlFor="consent"
              className="text-xs leading-5 text-[#6D758F]"
            >
              I agree to the Terms and Conditions and Privacy Policy. I consent
              to receiving communication about educational programs and
              services.
            </label>
          </div>

          <button
            type="submit"
            disabled={!consent}
            className={`relative flex items-center justify-center mt-2 text-white rounded-lg font-semibold transition w-3/5 px-3 py-[6px] lg:py-3 text-sm leading-5 ${
              consent
                ? "bg-[#FF383B] hover:bg-[#e02e33]"
                : "bg-gray-400 cursor-not-allowed"
            }`}
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
  );
};

export default function SendUsSection({data}) {
  console.log("dataasadas",data);
  
  const contactInfo = [
    {
      title: "Address",
      content1:
        data.address,
      icon: address,
      hovIcon: one,
    },
    {
      title: "Email Addresses",
      // subtitle1: "Support",
      // content1: "support@educationhub.com",
      subtitle2: "Admissions",
      content2: data.email,
      icon: email,
      hovIcon: two,
    },
    {
      title: "Phone Numbers",
      // subtitle1: "Admissions",
      // content1: "+91 98765 43210",
      subtitle2: "General Inquiry",
      content2: data.phone,
      icon: phone,
      hovIcon: four,
    },
    {
      title: "Office Hours",
      subtitle1: "Monday",
      content1: "9 AM - 6 PM",
      subtitle2: "Saturday",
      content2: "10 AM - 4 PM",
      icon: time,
      hovIcon: three,
    },
  ];

  return (
    <div className="containers md:py-12 py-4 pt-10">
      <div className="flex flex-col md:flex-row justify-between gap-2 md:gap-8">
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
        <div className="lg:w-[35%] md:w-[40%] w-full">
          <ContactForm />
        </div>
      </div>
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
    </div>
  );
}

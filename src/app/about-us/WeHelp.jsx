"use client";
import { useState } from "react";
import { contactForm } from "@/services/api";
import Image from "next/image";
import Address from "../../assets/about-us/address-icon.svg";
import Phone from "../../assets/about-us/phone-icon.svg";
import Mail from "../../assets/about-us/mail-icon.svg";
import arrow from "../../assets/contact-us/arrow.svg";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";

const FormField = ({ field, formData, handleChange, errors }) => (
  <div className="flex flex-col w-full">
    <label className="font-inter text-[14px] leading-[20px] mb-1 font-semibold">
      {field.label}*
    </label>
    <input
      type={field.type}
      name={field.name}
      value={formData[field.name]}
      onChange={handleChange}
      className={`border ${
        errors[field.name] ? "border-red-500" : "border-gray-300"
      } rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#FF383B] focus:border-transparent font-inter font-normal text-[14px] leading-[20px]`}
      placeholder={field.placeholder}
    />
    {errors[field.name] && (
      <span className="text-red-500 text-[12px] mt-1">
        {errors[field.name]}
      </span>
    )}
  </div>
);

const FormTextArea = ({ formData, handleChange, errors }) => (
  <div className="flex flex-col">
    <label className="font-inter text-[14px] leading-[20px] mb-1 font-medium">
      Message
    </label>
    <textarea
      name="message"
      rows={4}
      value={formData.message}
      onChange={handleChange}
      className={`border ${
        errors.message ? "border-red-500" : "border-gray-300"
      } rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#FF383B] focus:border-transparent`}
      placeholder="Type..."
    ></textarea>
    {errors.message && (
      <span className="text-red-500 text-[12px] mt-1">{errors.message}</span>
    )}
  </div>
);

const ConsentCheckbox = ({ consent, handleConsentChange, errors }) => (
  <div className="flex flex-col">
    <div className="flex items-start space-x-2">
      <input
        type="checkbox"
        id="consent"
        checked={consent}
        onChange={handleConsentChange}
        className="mt-1 w-4 h-4 text-[#FF383B] border-gray-300 rounded focus:ring-[#FF383B]"
      />
      <label
        htmlFor="consent"
        className="text-[12px] md:text-[14px] text-gray-700 leading-[18px] md:leading-[20px]"
      >
        I agree to the{" "}
        <a href="/terms-and-conditions" className="text-[#FF383B] hover:underline">
          Terms and Conditions
        </a>{" "}
        and{" "}
        <a href="/privacy-policy" className="text-[#FF383B] hover:underline">
          Privacy Policy
        </a>
        . I consent to receiving communication about educational programs and
        services.
      </label>
    </div>
    {errors.consent && (
      <span className="text-red-500 text-[12px] mt-1">{errors.consent}</span>
    )}
  </div>
);

const SubmitButton = ({ isSubmitting, consent }) => (
  <button
    type="submit"
    disabled={!consent || isSubmitting}
    className={`flex items-center justify-center gap-2 mt-2 rounded-lg font-semibold transition-all duration-300 w-full md:w-[150px] h-[48px] text-[14px] leading-[20px] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FF383B] ${
      !consent || isSubmitting
        ? "bg-gray-400 cursor-not-allowed"
        : "bg-[#FF383B] text-white hover:bg-[#e02e33]"
    }`}
  >
    {isSubmitting ? (
      <>
        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
        Sending...
      </>
    ) : (
      <>
        Submit Inquiry
        <Image src={arrow} alt="Arrow" width={12} height={12} />
      </>
    )}
  </button>
);

function WeHelp({ data }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "+91 ",
    email: "",
    message: "",
  });
  const [consent, setConsent] = useState(false);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateName = (name) => {
    if (!name.trim()) return "Name is required";
    if (name.trim().length < 2) return "Name must be at least 2 characters";
    if (!/^[a-zA-Z\s]+$/.test(name.trim()))
      return "Only letters and spaces allowed";
    return "";
  };

  const validatePhone = (phone) => {
    if (!phone.trim()) return "Phone is required";

    const digitsOnly = phone.replace(/\D/g, "");

    if (digitsOnly.length < 10)
      return "Phone number must be at least 10 digits";
    if (!/^[0-9]{10,15}$/.test(digitsOnly))
      return "Invalid phone number format";

    return "";
  };

  const validateEmail = (email) => {
    if (!email.trim()) return "Email is required";
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) return "Invalid email format";
    return "";
  };

  const validateMessage = (message) => {
    if (!message.trim()) return "Message is required";
    if (message.trim().length < 10)
      return "Message must be at least 10 characters";
    return "";
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    let processedValue = value;

    if (name === "name") {
      // Remove digits from name
      processedValue = value.replace(/[0-9]/g, "");
    }

    if (name === "phone") {
      // Ensure +91 prefix
      let digitsOnly = value.replace(/\D/g, ""); // remove non-digits
      if (digitsOnly.startsWith("91")) {
        digitsOnly = digitsOnly.slice(2); // remove 91 from start
      }

      // Limit to 10 digits max
      digitsOnly = digitsOnly.slice(0, 10);
      processedValue = "+91 " + digitsOnly;
    }

    setFormData((prev) => ({ ...prev, [name]: processedValue }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleConsentChange = (e) => {
    setConsent(e.target.checked);
    if (errors.consent && e.target.checked) {
      setErrors((prev) => ({ ...prev, consent: "" }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {};

    const nameError = validateName(formData.name);
    const phoneError = validatePhone(formData.phone);
    const emailError = validateEmail(formData.email);
    const messageError = validateMessage(formData.message);
    const consentError = consent ? "" : "You must agree to the terms";

    if (nameError) newErrors.name = nameError;
    if (phoneError) newErrors.phone = phoneError;
    if (emailError) newErrors.email = emailError;
    if (messageError) newErrors.message = messageError;
    if (consentError) newErrors.consent = consentError;

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      toast.error("Please fix the errors before submitting");
      return;
    }

    setIsSubmitting(true);
    try {
      const phoneForBackend = formData.phone.replace(/^\+91\s*/, "").trim();
      const dataToSend = {
        ...formData,
        phone: phoneForBackend,
        consent,
      };

      await contactForm(dataToSend);
      toast.success("Message sent successfully!");
      setFormData({ name: "", phone: "+91 ", email: "", message: "" });
      setConsent(false);
      setErrors({});
    } catch (error) {
      console.error("Form submission error:", error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const formFields = [
    { label: "Name", name: "name", type: "text", placeholder: "Brian Clark" },
    {
      label: "Phone",
      name: "phone",
      type: "tel",
      placeholder: "(123) 456 - 7890",
    },
    {
      label: "Email",
      name: "email",
      type: "email",
      placeholder: "example@youremail.com",
    },
  ];

  return (
    <div className="containers flex flex-col md:flex-row justify-between items-stretch py-[10px] md:py-[50px]">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
        className="lg:w-[38%] md:w-[45%] lg:mr-50"
      >
        <h2 className="font-open-sans lg:text-[40px] md:text-[32px] text-[24px]">
          Count on Us for Support!
        </h2>
        <p className="font-rubik mt-4 text-[12px] md:text-[14px] lg:text-[16px]">
          One Call, No Hassle – Get Straightforward Upskilling Guidance!
        </p>
        <div className="space-y-6 mt-6">
          <ContactItem icon={Address} value={data.address} />
          <ContactItem icon={Phone} value={data.phone} />
          <ContactItem icon={Mail} value={data.email} />
        </div>
      </motion.div>

      <div className="lg:w-[50%] md:w-[52%] mt-6 md:mt-0 flex items-end">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full bg-white p-6 rounded-[20px] shadow-2xl h-full"
        >
          <form
            className="flex flex-col gap-4 text-[#6D758F]"
            onSubmit={handleSubmit}
            noValidate
          >
            <div className="flex flex-col md:flex-row gap-4">
              {formFields.slice(0, 2).map((field) => (
                <FormField
                  key={field.name}
                  field={field}
                  formData={formData}
                  handleChange={handleChange}
                  errors={errors}
                />
              ))}
            </div>
            <FormField
              field={formFields[2]}
              formData={formData}
              handleChange={handleChange}
              errors={errors}
            />
            <FormTextArea
              formData={formData}
              handleChange={handleChange}
              errors={errors}
            />
            <ConsentCheckbox
              consent={consent}
              handleConsentChange={handleConsentChange}
              errors={errors}
            />
            <SubmitButton isSubmitting={isSubmitting} consent={consent} />
          </form>
        </motion.div>
      </div>
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
    </div>
  );
}

const ContactItem = ({ icon, value }) => (
  <motion.div
    initial={{ opacity: 0, x: -30 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    className="flex items-start space-x-4"
  >
    <Image src={icon} alt="Icon" className="w-[38px] h-[40px]" />
    <span className="text-black font-rubik text-[14px] md:text-[16px] lg:text-[20px]">
      {value}
    </span>
  </motion.div>
);

export default WeHelp;

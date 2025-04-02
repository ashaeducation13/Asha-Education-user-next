"use client";
import { useState } from "react";
import Image from "next/image";
import topright from "../../../public/topright.svg";
import bottomright from "../../../public/bottomright.svg";
import greencircle from "../../assets/contact-us/greencircle.svg";

export default function QuestionSection() {
  const questionsAndAnswers = [
    {
      question: "How can I contact your admissions team?",
      answer:
        "You can reach out via email at admissions@educationhub.com or call +91 98765 43210.",
    },
    {
      question: "What are your office hours?",
      answer:
        "You can reach out via email at admissions@educationhub.com or call +91 98765 43210.",
    },
    {
      question: "How long does it take to receive a response?",
      answer:
        "You can reach out via email at admissions@educationhub.com or call +91 98765 43210.",
    },
    {
      question: "Do you offer career counseling services?",
      answer:
        "You can reach out via email at admissions@educationhub.com or call +91 98765 43210.",
    },
    {
      question: "Can I schedule an in-person consultation?",
      answer:
        "You can reach out via email at admissions@educationhub.com or call +91 98765 43210.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="py-4 md:px-6">
      <div className="max-w-[1200px] mx-auto px-4"> {/* Added max-width and horizontal padding */}
        <h1 className="text-start font-open-sans font-semibold text-[20px] md:text-[24px] lg:text-[30px] leading-[36px] mb-4 md:mb-6 lg:mb-8">
          Frequently Asked{" "}
          <span
            className="bg-clip-text text-transparent"
            style={{
              backgroundImage:
                "linear-gradient(90.02deg, #0A0078 2.5%, #FF383B 43.53%)",
            }}
          >
            Questions
          </span>
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 lg:gap-6">
          {questionsAndAnswers.map((item, index) => (
            <div
              key={index}
              className="p-3 md:p-4 lg:p-4 rounded-[20px] border border-[#E7E7E7] cursor-pointer"
              onClick={() => toggleAnswer(index)}
            >
              <h3 className="relative pl-5 md:pl-6 lg:pl-8 text-black font-open-sans font-semibold text-[14px] md:text-[16px] lg:text-[18px] leading-[16px] md:leading-[18px] lg:leading-[20px] flex items-center">
                {/* Left-side icon */}
                <Image
                  src={greencircle}
                  alt="Green Circle Icon" 
                  width={12}
                  height={12}
                  className="absolute left-0 top-1/2 -translate-y-1/2 w-3 h-3 md:w-3.5 md:h-3.5"
                />
  
                {item.question}
  
                {/* Right-side icon */}
                <Image
                  src={openIndex === index ? topright : bottomright}
                  alt={openIndex === index ? "Collapse Icon" : "Expand Icon"}
                  width={9}
                  height={9}
                  className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 md:w-2.5 md:h-2.5"
                />
              </h3>
              {openIndex === index && (
                <p className="mt-2 text-[#6D758F] text-[14px] md:text-[15px] lg:text-[16px] leading-[21px] md:leading-[22px] lg:leading-[24px]">
                  {item.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

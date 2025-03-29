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
    <div className="py-12 md:px-6">
      <div className="containers mx-auto">
        <h1 className="text-start font-open-sans font-semibold lg:text-[30px] text-[20px] leading-[36px] lg:mb-8 md:mb-6 mb-4">
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
        <div className="grid md:grid-cols-2 lg:gap-6 md:gap-4 gap-3">
          {questionsAndAnswers.map((item, index) => (
            <div
              key={index}
              className="lg:p-4 p-3 rounded-[20px] border-[1px] border-[#E7E7E7] cursor-pointer self-start"
              onClick={() => toggleAnswer(index)}
            >
              <h3 className="relative lg:pl-8 pl-5 text-black font-open-sans font-semibold lg:text-[18px] md:text-[14px] lg:leading-[20px] leading-[16px] flex items-center">
                {/* Left-side icon (greencircle) */}
                <Image
                  src={greencircle}
                  alt="Green Circle Icon" 
                  width={14} 
                  height={14}
                  className="absolute left-0 top-1/2 -translate-y-1/2"
                />

                {item.question}

                {/* Right-side icon (toggle between topright and bottomright) */}
                <Image
                  src={openIndex === index ? topright : bottomright}
                  alt={openIndex === index ? "Collapse Icon" : "Expand Icon"}
                  width={9}
                  height={9}
                  className="absolute right-0 top-1/2 -translate-y-1/2"
                />
              </h3>
              {openIndex === index && (
                <p className="mt-2 text-[#6D758F] lg:text-[16px] text-[14px] lg:leading-[24px] leading-[21px]">
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

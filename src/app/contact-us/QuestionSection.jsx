"use client";
import { useState } from "react";
import Image from "next/image";
import topright from "../../../public/topright.svg";
import bottomright from "../../../public/bottomright.svg";
import greencircle from "../../assets/contact-us/greencircle.svg";

export default function QuestionSection() {
  const questionsAndAnswers = [
    {
      question: "What services does Asha Education offer?",
      answer:
        "Asha Education provides expert counseling, university admissions support, and career guidance for students across various programs",
    },
    {
      question: "Which universities does Asha Education partner with?",
      answer:
        "We collaborate with top universities in India, offering accredited undergraduate and postgraduate programs.",
    },
    {
      question: "Is counseling free at Asha Education?",
      answer:
        "Yes, we offer free personalized counseling to help students choose the right course and university",
    },
    {
      question: "Can I apply for online and offline courses?",
      answer:
        "Yes, we provide flexible learning options, including both online and offline programs.",
    },
    {
      question: "How do I apply for a course through Asha Education?",
      answer:
        "Simply contact us for guidance, and our experts will assist you with the application process.",
    },
    {
      question: "Does Asha Education provide placement assistance?",
      answer:
      "Yes, we have a strong track record of successful placements and career support for students"
    }
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="md:pb-12 pb-4 md:px-6">
      <div className="max-w-[1200px] mx-auto px-4">
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
        
        {/* Vertical columns container */}
        <div className="flex flex-col md:flex-row gap-3 md:gap-4 lg:gap-6">
          {/* Left column */}
          <div className="flex-1 flex flex-col gap-3 md:gap-4 lg:gap-6">
            {questionsAndAnswers.filter((_, i) => i % 2 === 0).map((item, index) => {
              const originalIndex = index * 2;
              return (
                <div
                  key={originalIndex}
                  className="p-3 md:p-4 lg:p-4 rounded-[20px] border border-[#E7E7E7] cursor-pointer"
                  onClick={() => toggleAnswer(originalIndex)}
                >
                  <h3 className="relative pl-5 md:pl-6 lg:pl-8 text-black font-open-sans font-semibold text-[14px] md:text-[16px] lg:text-[18px] leading-[16px] md:leading-[18px] lg:leading-[20px] flex items-center">
                    <Image
                      src={greencircle}
                      alt="Green Circle Icon" 
                      width={12}
                      height={12}
                      className="absolute left-0 top-1/2 -translate-y-1/2 w-3 h-3 md:w-3.5 md:h-3.5"
                    />
                    {item.question}
                    <Image
                      src={openIndex === originalIndex ? topright : bottomright}
                      alt={openIndex === originalIndex ? "Collapse Icon" : "Expand Icon"}
                      width={9}
                      height={9}
                      className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 md:w-2.5 md:h-2.5"
                    />
                  </h3>
                  <div className={`overflow-hidden transition-all duration-300 ${
                    openIndex === originalIndex ? "max-h-[200px] mt-2" : "max-h-0"
                  }`}>
                    <p className="text-[#6D758F] text-[14px] md:text-[15px] lg:text-[16px] leading-[21px] md:leading-[22px] lg:leading-[24px]">
                      {item.answer}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
          
          {/* Right column */}
          <div className="flex-1 flex flex-col gap-3 md:gap-4 lg:gap-6">
            {questionsAndAnswers.filter((_, i) => i % 2 === 1).map((item, index) => {
              const originalIndex = index * 2 + 1;
              return (
                <div
                  key={originalIndex}
                  className="p-3 md:p-4 lg:p-4 rounded-[20px] border border-[#E7E7E7] cursor-pointer"
                  onClick={() => toggleAnswer(originalIndex)}
                >
                  <h3 className="relative pl-5 md:pl-6 lg:pl-8 text-black font-open-sans font-semibold text-[14px] md:text-[16px] lg:text-[18px] leading-[16px] md:leading-[18px] lg:leading-[20px] flex items-center">
                    <Image
                      src={greencircle}
                      alt="Green Circle Icon" 
                      width={12}
                      height={12}
                      className="absolute left-0 top-1/2 -translate-y-1/2 w-3 h-3 md:w-3.5 md:h-3.5"
                    />
                    {item.question}
                    <Image
                      src={openIndex === originalIndex ? topright : bottomright}
                      alt={openIndex === originalIndex ? "Collapse Icon" : "Expand Icon"}
                      width={9}
                      height={9}
                      className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 md:w-2.5 md:h-2.5"
                    />
                  </h3>
                  <div className={`overflow-hidden transition-all duration-300 ${
                    openIndex === originalIndex ? "max-h-[200px] mt-2" : "max-h-0"
                  }`}>
                    <p className="text-[#6D758F] text-[14px] md:text-[15px] lg:text-[16px] leading-[21px] md:leading-[22px] lg:leading-[24px]">
                      {item.answer}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
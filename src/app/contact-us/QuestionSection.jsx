"use client"
import { useState } from "react"

export default function QuestionSection() {
    const questionsAndAnswers = [
      { 
        question: "How can I contact your admissions team?",
        answer: "You can reach out via email at admissions@educationhub.com or call +91 98765 43210."
      },
      { 
        question: "What are your office hours?",
        answer: "You can reach out via email at admissions@educationhub.com or call +91 98765 43210."
      },
      { 
        question: "How long does it take to recieve a response?",
        answer: "You can reach out via email at admissions@educationhub.com or call +91 98765 43210."
      },
      { 
        question: "Do you offer career counseling services?",
        answer: "You can reach out via email at admissions@educationhub.com or call +91 98765 43210."
      },
      { 
        question: "Can I schedule an in-person consultation?",
        answer: "You can reach out via email at admissions@educationhub.com or call +91 98765 43210."
      },
    ]

    const [openIndex, setOpenIndex] = useState(null)

    const toggleAnswer = (index) => {
      setOpenIndex(openIndex === index ? null : index);
    };
  return (
    <div className="py-12 px-6">
      <h1 className="text-start font-open-sans font-semibold text-[30px] leading-[36px] mb-8">Frequently Asked {" "}
        <span className="bg-clip-text text-transparent" style={{backgroundImage:"linear-gradient(90.02deg, #0A0078 2.5%, #FF383B 43.53%)",}}>Questions</span></h1>
      <div className="grid grid-cols-2 gap-6 auto-rows-auto">
        {questionsAndAnswers.map((item,index)=>(
            <div
            key={index}
            className="p-4 rounded-[20px] border-[1px] border-[#E7E7E7]  cursor-pointer self-start"
            onClick={()=> toggleAnswer(index)}
            >
            {/* <h3 className="text-black font-open-sans font-semibold text-[18px] leading-[20px]">{question}</h3> */}
            <h3 className={`relative pl-8 text-black font-open-sans font-semibold text-[18px] leading-[20px]
                before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-3 before:h-3 before:bg-no-repeat before:bg-center before:bg-contain before:bg-[url('/contact-us/greencircle.svg')]
                after:content-[''] after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:w-3 after:h-3 after:bg-no-repeat after:bg-center after:bg-contain
                ${openIndex === index ? "after:bg-[url('/topright.svg')]" : "after:bg-[url('/bottomright.svg')]"}
              `}>
              {item.question}
            </h3>
            {openIndex === index && (
              <p className="mt-2 text-[#6D758F] text-[16px] leading-[22px]">{item.answer}</p>
            )}
            </div>        
        ))}
      </div>
    </div>
  )
}

import React from "react";

const cardData = [
  {
    title: "Expert Guidance",
    icon: "/about-us/cardicon.svg",
    description: "Personalized counseling from industry experts.",
  },
  {
    title: "Top University Partnerships",
    icon: "/about-us/cardicon.svg",
    description: "Access to India’s leading institutions.",
  },
  {
    title: "Career-Focused Approach",
    icon: "/about-us/cardicon.svg",
    description: "Helping students with admissions & career growth.",
  },
  {
    title: "Comprehensive Course Offerings",
    icon: "/about-us/cardicon.svg",
    description: "A wide range of undergraduate & postgraduate programs.",
  },
];

function WhyStudent() {
  return (
    <section className="containers relative py-3 md:py-6 text-[#121212] px-4">
      <h2 className="font-open-sans lg:text-[40px] md:text-[32px] text-[21px] whitespace-nowrap leading-[40px] font-semibold md:mb-5 ">
        Why Students Trust Us
      </h2>
      <p className="font-rubik text-[#121212] lg:text-[16px] md:text-[14px] text-[12px] font-normal lg:leading-[24px] md:leading-[21px] leading-[156%] md:mb-8 mb-4">
        Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit
        phasellus mollis sit aliquam sit nullam. Lorem ipsum dolor sit amet
        consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit
        nullam. Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit
        phasellus mollis sit aliquam sit nullam. Lorem ipsum dolor sit amet
        consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit
        nullam. Lorem ipsum dolor sit amet consectetur nunc nunc sit velit eget
        sollicitudin sit posuere Lorem ipsum dolor sit amet consectetur nunc
        nunc sit velit eget sollicitudin sit posuere.
      </p>

      {/* Cards Grid - Ensuring 4 Columns on lg */}

      <div className="grid grid-cols-1 md:grid-cols-4 lg:gap-[40px] md:gap-[20px] gap-[10px] items-start mb-10">
        {cardData.map((card, index) => (
          <div
            key={index}
            className="bg-white rounded-lg flex flex-col justify-center "
          >
            <div className="flex items-start">
              <img
                src={card.icon}
                alt={card.title}
                className="lg:w-[26px] lg:h-[24px] h-[16px] w-[17px] mr-2"
              />
              <h3 className="font-inter lg:text-[20px] text-[14px] md:leading-[20px] leading-[18px] font-semibold">
                {card.title}
              </h3>
            </div>
            <p className="font-inter lg:text-[16px] text-[14px] lg:leading-[24px] leading-[21px] text-[#6D758F]">
              {card.description}
            </p>
          </div>
        ))}
      </div>

      {/* Bottom Gradient Line - Fixed Position */}
      {/* <div
        className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-full lg:w-3/4 border-t border-transparent"
        style={{
          borderImageSource:
            "linear-gradient(90deg, #FFFFFF 0%, #FF383B 18.5%, #0A0078 53%, #FF383B 83%, #FFFFFF 100%)",
          borderImageSlice: 1,
          borderWidth: "1px",
          borderStyle: "solid",
        }}
      ></div> */}
            <div
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 border-t border-transparent 
                   w-full md:w-4/5 lg:w-3/4 xl:w-[1106px]"
        style={{
          borderImageSource:
            "linear-gradient(90deg, #FFFFFF 0%, #FF383B 18.5%, #0A0078 53%, #FF383B 83%, #FFFFFF 100%)",
          borderImageSlice: 1,
          borderWidth: "1px",
          borderStyle: "solid",
        }}
      ></div>
    </section>
  );
}

export default WhyStudent;

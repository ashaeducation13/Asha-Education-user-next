import React from 'react';
import Image from "next/image";
import Mission1 from "../../assets/about-us/mission1.svg";
import Vision1 from "../../assets/about-us/Vision1.svg";
import Values1 from "../../assets/about-us/values1.svg";
import Values2 from "../../assets/about-us/values2.svg";
import Mission2 from "../../assets/about-us/mission2.svg";
import Vision2 from "../../assets/about-us/vision2.svg";


const cardData = [
  {
    title: "Mission",
    icon: Mission1, 
    hoverIcon: Mission2, 
    description: "Lorem ipsum dolor sit amet consectetur nunc nunc sit velit eget sollicitudin sit posuere.Lorem ipsum dolor sit amet consectetur nunc nunc sit velit eget sollicitudin sit posuere"
  },
  {
    title: "Vision",
    icon: Vision1,
    hoverIcon: Vision2,
    description: "Lorem ipsum dolor sit amet consectetur nunc nunc sit velit eget sollicitudin sit posuere.Lorem ipsum dolor sit amet consectetur nunc nunc sit velit eget sollicitudin sit posuere"
  },
  {
    title: "Values",
    icon: Values1,
    hoverIcon: Values2,
    description: "Lorem ipsum dolor sit amet consectetur nunc nunc sit velit eget sollicitudin sit posuere.Lorem ipsum dolor sit amet consectetur nunc nunc sit velit eget sollicitudin sit posuere"
  }
];


function MissionVision() {
  return (
    <section className="lg:w-[80%] md:w-[90%] mx-auto grid grid-cols-1 md:grid-cols-3 flex-wrap justify-center xl:gap-12 gap-2 md:gap-4 lg:gap-6  lg:p-12 md:p-8 p-6 px-4">
      {cardData.map((card, index) => (
        <div
          key={index}
          className="group bg-white p-6 rounded-lg shadow-md transition duration-300 hover:bg-[#FF383B] hover:text-white 
                      text-center"
        >   
          <div className="flex items-center gap-[30px] justify-between mb-4">
            <h3 className="font-open-sans text-[20px] md:text-[24px] lg:text-[36px] leading-[48px] lg:leading-[48px] font-semibold">
              {card.title}
            </h3>
            <div className="lg:size-[60px] size-[40px] flex items-center justify-center rounded-full">
              <Image
                src={card.icon} 
                alt={card.title} 
                className="w-full h-full transition duration-300 group-hover:hidden" // This image will hide on hover
              />
              <Image 
                src={card.hoverIcon} 
                alt={card.title} 
                className="w-full h-full transition duration-300 hidden group-hover:block" // This image will show on hover
              />
            </div>
          </div>
          <p className="font-rubik lg:text-[16px] lg:leading-[24px] md:text-[14px] md:leading-[21px] text-[12px] leading-[18px] font-normal text-left">{card.description}</p>
        </div>
      ))}
    </section>
  );
}

export default MissionVision;

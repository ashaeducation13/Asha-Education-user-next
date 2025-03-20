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
    description: "Lorem ipsum dolor sit amet consectetur nunc nunc sit velit eget sollicitudin sit posuere."
  },
  {
    title: "Vision",
    icon: Vision1,
    hoverIcon: Vision2,
    description: "Lorem ipsum dolor sit amet consectetur nunc nunc sit velit eget sollicitudin sit posuere."
  },
  {
    title: "Values",
    icon: Values1,
    hoverIcon: Values2,
    description: "Lorem ipsum dolor sit amet consectetur nunc nunc sit velit eget sollicitudin sit posuere."
  }
];


function MissionVision() {
  return (
    <section className="flex flex-wrap justify-center xl:gap-12 gap-4 pt-12 pb-12 px-4">
      {cardData.map((card, index) => (
        <div
          key={index}
          className="bg-white p-6 rounded-lg shadow-md transition duration-300 hover:bg-[#FF383B] hover:text-white 
                     xl:w-[346px] xl:h-[320px] lg:w-[300px] lg:h-[300px] text-center"
        >   
          <div className="flex items-center gap-[30px] justify-between mb-4">
            <h3 className="font-open-sans text-[28px] md:text-[32px] lg:text-[36px] leading-[36px] md:leading-[42px] lg:leading-[48px] font-semibold">
              {card.title}
            </h3>
            <div className="w-[80px] h-[80px] flex items-center justify-center rounded-full">
              <Image
                src={card.icon} 
                alt={card.title} 
                className="w-[100px] h-[100px] transition duration-300 group-hover:hidden" // This image will hide on hover
              />
              <Image 
                src={card.hoverIcon} 
                alt={card.title} 
                className="w-[100px] h-[100px] transition duration-300 hidden group-hover:block" // This image will show on hover
              />
            </div>
          </div>
          <p className="font-rubik text-[16px] leading-[24px] text-left">{card.description}</p>
        </div>
      ))}
    </section>
  );
}

export default MissionVision;

import React from 'react';

const cardData = [
  {
    title: "Mission",
    icon: "/about-us/mission1.svg",
    hoverIcon: "/about-us/mission2.svg",
    description: "Lorem ipsum dolor sit amet consectetur nunc nunc sit velit eget sollicitudin sit posuere Lorem ipsum dolor sit amet consectetur nunc nunc sit velit eget sollicitudin sit posuere"
  },
  {
    title: "Vision",
    icon: "/about-us/Vision1.svg",
    hoverIcon:"/about-us/vision2.svg",
    description: "Lorem ipsum dolor sit amet consectetur nunc nunc sit velit eget sollicitudin sit posuere Lorem ipsum dolor sit amet consectetur nunc nunc sit velit eget sollicitudin sit posuere"
  },
  {
    title: "Values",
    icon: "/about-us/values1.svg",
    hoverIcon:"/about-us/values2.svg",
    description: "Lorem ipsum dolor sit amet consectetur nunc nunc sit velit eget sollicitudin sit posuere Lorem ipsum dolor sit amet consectetur nunc nunc sit velit eget sollicitudin sit posuere"
  }
];

function MissionVision() {
  return (
    <section className="flex justify-center gap-6 pt-[80px] ">
      {cardData.map((card, index) => (
        <div
          key={index}
          className="bg-white p-6 rounded-lg shadow-md transition duration-300  hover:bg-[#FF383B] hover:text-white w-80 text-center"
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-[36px] leading-[48px] font-semibold">{card.title}</h3>
            <div className="w-12 h-12 flex items-center justify-center rounded-full">
              <img 
                src={card.icon} 
                alt={card.title} 
                className="w-10 h-10 transition duration-300 group-hover:hidden" // This image will hide on hover
              />
              <img 
                src={card.hoverIcon} 
                alt={card.title} 
                className="w-10 h-10 transition duration-300 hidden group-hover:block" // This image will show on hover
              />
            </div>
          </div>
          <p className="text-sm text-left">{card.description}</p>
        </div>
      ))}
    </section>
  );
}

export default MissionVision;
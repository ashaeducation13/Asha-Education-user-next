import React from 'react';

const cardData = [
  {
    title: "Expert Guidance",
    icon: "/about-us/cardicon.svg",
    description: "Personalized counseling from industry experts."
  },
  {
    title: "Top University Partnerships",
    icon: "/about-us/cardicon.svg",
    description: "Access to India’s leading institutions."
  },
  {
    title: "Career-Focused Approach",
    icon: "/about-us/cardicon.svg",
    description: "Helping students with admissions & career growth."
  },
  {
    title: "Comprehensive Course Offerings",
    icon: "/about-us/cardicon.svg",
    description: "A wide range of undergraduate & postgraduate programs."
  }
];

function WhyStudent() {
  return (
    <section className="relative p-10 px-[100px]">
      <h2 className="text-[40px] leading-[40px] font-semibold mb-4">Why Students Trust Us</h2>
      <p className="text-gray-600 text-[16px] leading-[24px] mb-6">
        Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit nullam. 
        Lorem ipsum dolor sit amet consectetur nunc nunc sit velit eget sollicitudin sit posuere Lorem ipsum dolor sit amet consectetur nunc nunc sit velit eget sollicitudin sit posuere.
        Lorem ipsum dolor sit amet consectetur nunc nunc sit velit eget sollicitudin sit posuere Lorem ipsum dolor sit amet consectetur nunc nunc sit velit eget sollicitudin sit posuere.
        Lorem ipsum dolor sit amet consectetur nunc nunc sit velit eget sollicitudin sit posuere Lorem ipsum dolor sit amet consectetur nunc nunc sit velit eget sollicitudin sit posuere.
        Lorem ipsum dolor sit amet consectetur nunc nunc sit velit eget sollicitudin sit posuere Lorem ipsum dolor sit amet consectetur nunc nunc sit velit eget sollicitudin sit.
      </p>
    
      <div className="grid grid-cols-4 gap-14 mx-4">
        {cardData.map((card, index) => (
         <div key={index} className="bg-white  rounded-lg flex flex-col justify-center " >
            <div className="flex items-center">
              <img src={card.icon} alt={card.title} className="w-[26px] h-[24px] mr-2" />
              <h3 className="text-[20px] leading-[20px] font-semibold w-[70%] ">{card.title}</h3>
            </div>
            <p className="text-[16px] leading-[24px] text-gray-600 ">{card.description}</p>
          </div>
        ))}

        
      </div>
      <div 
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3/4 border-t border-transparent mb-[-10px]"
        style={{
          borderImageSource: "linear-gradient(90deg, #FFFFFF 0%, #FF383B 18.5%, #0A0078 53%, #FF383B 83%, #FFFFFF 100%)",
          borderImageSlice: 1,
          borderWidth: "1px",
          borderStyle: "solid"
        }}
      ></div>
    </section>
  );
}

export default WhyStudent;

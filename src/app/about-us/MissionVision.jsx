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
    description: "To empower students through personalized counselling and top university partnerships guiding them to academic success."
  },
  {
    title: "Vision",
    icon: Vision1,
    hoverIcon: Vision2,
    description: "To be the leading educational consultancy, shaping futures by connecting students with quality education."
  },
  {
    title: "Values",
    icon: Values1,
    hoverIcon: Values2,
    description: "Integrity, excellence, and student-centric support in all our educational endeavors."
  }
];

function MissionVision({data}) {
  return (
    <section className="containers grid grid-cols-1 md:grid-cols-3 flex-wrap justify-center xl:gap-12 gap-2 md:gap-4 lg:gap-6 lg:pt-20 md:pt-12 md:pb-5 lg:pb-10 pt-5 pb-3 px-4">
        {/* Mission */}
        <div
          className="group bg-white p-6 rounded-[20px] transition duration-300 hover:bg-[#FF383B] hover:text-white 
                      text-center shadow-2xl"
        >   
          <div className="flex items-center gap-[30px] justify-between mb-4">
            <h3 className="font-open-sans text-[20px] md:text-[24px] lg:text-[36px] leading-[48px] lg:leading-[48px] font-semibold">
            Mission
            </h3>
            <div className="lg:size-[60px] size-[40px] flex items-center justify-center rounded-full">
              <Image
                src={Mission1} 
                alt="Mission"
                className="w-full h-full transition duration-300 group-hover:hidden" // This image will hide on hover
              />
              <Image 
                src={Mission2} 
                alt="Mission"
                className="w-full h-full transition duration-300 hidden group-hover:block" // This image will show on hover
              />
            </div>
          </div>
          <p className="font-rubik lg:text-[16px] lg:leading-[24px] md:text-[14px] md:leading-[21px] text-[12px] leading-[18px] font-normal text-left">{data.mission}</p>
        </div>

        {/* Vision */}
        <div
          className="group bg-white p-6 rounded-[20px] transition duration-300 hover:bg-[#FF383B] hover:text-white 
                      text-center shadow-2xl"
        >   
          <div className="flex items-center gap-[30px] justify-between mb-4">
            <h3 className="font-open-sans text-[20px] md:text-[24px] lg:text-[36px] leading-[48px] lg:leading-[48px] font-semibold">
            Vision
            </h3>
            <div className="lg:size-[60px] size-[40px] flex items-center justify-center rounded-full">
              <Image
                src={Vision1} 
                alt="Vision"
                className="w-full h-full transition duration-300 group-hover:hidden" // This image will hide on hover
              />
              <Image 
                src={Vision2} 
                alt="Vision"
                className="w-full h-full transition duration-300 hidden group-hover:block" // This image will show on hover
              />
            </div>
          </div>
          <p className="font-rubik lg:text-[16px] lg:leading-[24px] md:text-[14px] md:leading-[21px] text-[12px] leading-[18px] font-normal text-left">{data.vision}</p>
        </div>


        {/* Values */}
        <div
          className="group bg-white p-6 rounded-[20px] transition duration-300 hover:bg-[#FF383B] hover:text-white 
                      text-center shadow-2xl"
        >   
          <div className="flex items-center gap-[30px] justify-between mb-4">
            <h3 className="font-open-sans text-[20px] md:text-[24px] lg:text-[36px] leading-[48px] lg:leading-[48px] font-semibold">
            Values
            </h3>
            <div className="lg:size-[60px] size-[40px] flex items-center justify-center rounded-full">
              <Image
                src={Values1} 
                alt="Values"
                className="w-full h-full transition duration-300 group-hover:hidden" // This image will hide on hover
              />
              <Image 
                src={Values2} 
                alt="Values"
                className="w-full h-full transition duration-300 hidden group-hover:block" // This image will show on hover
              />
            </div>
          </div>
          <p className="font-rubik lg:text-[16px] lg:leading-[24px] md:text-[14px] md:leading-[21px] text-[12px] leading-[18px] font-normal text-left">{data.values}</p>
        </div>

    </section>
  );
}

export default MissionVision;

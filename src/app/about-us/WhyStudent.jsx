import React from "react";

const cardData = [
  {
    title: "Expert Guidance",
    icon: "/about-us/cardicon.svg",
    description: "Our team of seasoned educational consultants offers individualized counseling sessions,understanding each student's unique strengths and aspirations. We assist in identifying suitable courses and institutions, simplifying the application process, and providing continuous support,ensuring students feel confident and well-prepared throughout their educational journey.",
  },
  {
    title: "Top University Partnerships",
    icon: "/about-us/cardicon.svg",
    description: "By partnering with prestigious universities, we provide students with access to a broad spectrum of reputable programs. These collaborations ensure that students receive quality education recognized globally, enhancing their academic experience and future career prospects.",
  },
  {
    title: "Career-Focused Approach",
    icon: "/about-us/cardicon.svg",
    description: "We emphasize aligning educational pathways with career aspirations. Through workshops, internships, and industry connections, we prepare students for the job market, equipping them with the necessary skills and experiences to excel in their chosen fields.",
  },
  {
    title: "Comprehensive Course Offerings",
    icon: "/about-us/cardicon.svg",
    description: "Understanding the diverse interests of students, we offer a wide array of courses across multiple disciplines. This extensive selection enables students to pursue their passions and tailor their education to their specific career goals, fostering both personal and professional growth.",
  },
];

function WhyStudent() {
  return (
    <section className="containers relative py-3 md:py-6 text-[#121212] md:px-4">
      <h2 className="font-open-sans lg:text-[40px] md:text-[32px] text-[21px] whitespace-nowrap leading-[40px] font-semibold md:mb-5 ">
        Why Students Trust Us
      </h2>
      <p className="font-rubik text-[#121212] lg:text-[16px] md:text-[14px] text-[12px] font-normal lg:leading-[24px] md:leading-[21px] leading-[156%] md:mb-8 mb-4">
        Our unwavering commitment to student success has earned the trust of
        countless learners. We provide personalized counselling, collaborate
        with top universities, and focus on aligning education with career
        goals. Our diverse course offerings cater to individual aspirations,
        ensuring each student receives tailored guidance and support. This
        holistic approach empowers students to achieve their academic and
        professional objectives, making Asha Education a trusted partner in
        their educational journey.
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

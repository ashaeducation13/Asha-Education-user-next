import React from "react";
import Image from "next/image";
import featuredImg from "../../assets/home/informsection/blogimg.png";


const InformedSection = () => {
  return (
    <div className="py-32 px-8 bg-[#F5F5F5]">
      {/* Header Section */}
      <div className="containers mx-auto flex flex-col justify-center items-start ">

        <h2 className="text-[28px] md:text-[32px] font-bold">
          <span
            className="bg-clip-text text-transparent"
            style={{
              backgroundImage:
                "linear-gradient(90.02deg, #0A0078 2.5%, #FF383B 43.53%)",
            }}
          >
            Stay Informed
          </span>{" "}
          with the <span className="text-[#FF383B]">Latest Resources</span>
        </h2>
        <p className="mt-2 text-gray-600 text-[16px] leading-[24px]">
          Explore our blogs and news. Stay updated with the latest information and insights in education sector.
        </p>

      </div>
      {/* Content Section */}
      <div className="pt-2 md:pt-6 containers  mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 ">
        {/* Featured Article */}
        <div className="bg-white shadow-xl rounded-xl overflow-hidden">
          <Image src={featuredImg} alt="Featured article" className="w-full h-[200px] object-cover" />
          <div className="p-4">
            <p className="text-sm text-gray-500">Category — Jan 24, 2024</p>
            <h3 className="text-lg font-semibold mt-1">
              Web design best practices: Optimizing speed
            </h3>
          </div>
        </div>

        {/* Other Articles */}
        <div className="flex flex-col gap-4">
          {[
            {
              date: "Jan 18, 2022",
              title: "How to build the ultimate tech stack for growth",
            },
            {
              date: "Jan 20, 2024",
              title: "Web design trends 2023: Stay ahead of the curve",
            },
            {
              date: "Jan 18, 2024",
              title: "Inclusive design: Accessible websites for all users",
            },
          ].map((article, index) => (
            <div
              key={index}
              className="p-4 border-b border-gray-300"
            >
              <p className="text-sm text-gray-500">Category — {article.date}</p>
              <h3 className="text-lg font-semibold mt-1">{article.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InformedSection;

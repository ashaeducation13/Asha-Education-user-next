import React from "react";
import Image from "next/image";
import featuredImg from "../../assets/home/informsection/blogimg.png";
import Link from "next/link";


const InformedSection = ({ data }) => {
  return (
    <div className="py-32 bg-[#F5F5F5]">
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
          Explore our blogs. Stay updated with the latest information and insights in education sector.
        </p>

      </div>
      {/* Content Section */}
      <div className="pt-2 md:pt-6 containers  mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 ">
        {/* Featured Article */}
        <Link href={`/blogs/${data[0].slug}`}>

          <div className="bg-white shadow-xl rounded-xl overflow-hidden">
            <Image src={data[0].image} alt="Featured article" width={40} height={40} className="w-full h-[200px] object-cover" />
            <div className="p-4">
              <p className="text-sm text-gray-500">{data[0].date_added}</p>
              <h3 className="text-lg font-semibold mt-1">
                {data[0].title}
              </h3>
            </div>
          </div>
        </Link>

        {/* Other Articles */}
        <div className="flex flex-col gap-4">
          {data.slice(1).map((article, index) => (
            <Link href={`/blogs/${article.slug}`} key={article.slug}>

              <div
                key={index}
                className="p-4 border-b border-gray-300"
              >
                <p className="text-sm text-gray-500">{article.date_added}</p>
                <h3 className="text-lg font-semibold mt-1">{article.title}</h3>
              </div>
            </Link>

          ))}
        </div>
      </div>
    </div>
  );
};

export default InformedSection;

"use client";
import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";
import building from "../../assets/blog/building.png";
import { Button, Pagination } from "antd";

const blogData = [
  {
    id: 1,
    image: building,
    date_added: "Feb 5, 2025",
    title: "Top 10 Universities in India for MBA Programs",
    description: `Explore the best MBA programs, their rankings, fees, and career prospects.`,
  },
  {
    id: 2,
    image: building,
    date_added: "Feb 5, 2025",
    title: "Top 10 Universities in India for MBA Programs",
    description: `Explore the best MBA programs, their rankings, fees, and career prospects.`,
  },
  {
    id: 3,
    image: building,
    date_added: "Feb 5, 2025",
    title: "Top 10 Universities in India for MBA Programs",
    description: `Explore the best MBA programs, their rankings, fees, and career prospects.`,
  },
  {
    id: 4,
    image: building,
    date_added: "Feb 5, 2025",
    title: "Top 10 Universities in India for MBA Programs",
    description: `Explore the best MBA programs, their rankings, fees, and career prospects.`,
  },
  {
    id: 5,
    image: building,
    date_added: "Feb 5, 2025",
    title: "Top 10 Universities in India for MBA Programs",
    description: `Explore the best MBA programs, their rankings, fees, and career prospects.`,
  },
  {
    id: 6,
    image: building,
    date_added: "Feb 5, 2025",
    title: "Top 10 Universities in India for MBA Programs",
    description: `Explore the best MBA programs, their rankings, fees, and career prospects.`,
  },
  // {
  //   image: building,
  //   date_added: "Feb 5, 2025",
  //   title: "Study abroad with us ,easy procesures",
  //   description: `As the most widely accepted test to analyze
  //               the proficiency of non-native English speakers, attaining
  //               a high TOEFL score can aid in your efforts non-native English
  //               speakers, attaining a high TOEFL score can aid in your efforts`,
  // },
  // {
  //   image: building,
  //   date_added: "Feb 5, 2025",
  //   title: "Study abroad with us ,easy procesures",
  //   description: `As the most widely accepted test to analyze
  //               the proficiency of non-native English speakers, attaining
  //               a high TOEFL score can aid in your efforts non-native English
  //               speakers, attaining a high TOEFL score can aid in your efforts`,
  // },
  // {
  //   image: building,
  //   date_added: "Feb 5, 2025",
  //   title: "Study abroad with us ,easy procesures",
  //   description: `As the most widely accepted test to analyze
  //               the proficiency of non-native English speakers, attaining
  //               a high TOEFL score can aid in your efforts non-native English
  //               speakers, attaining a high TOEFL score can aid in your efforts`,
  // },
  // {
  //   image: building,
  //   date_added: "Feb 5, 2025",
  //   title: "Study abroad with us ,easy procesures",
  //   description: `As the most widely accepted test to analyze
  //               the proficiency of non-native English speakers, attaining
  //               a high TOEFL score can aid in your efforts non-native English
  //               speakers, attaining a high TOEFL score can aid in your efforts`,
  // },
];

export default function Listing() {
  const router = useRouter();
  // const [currentPage, setCurrentPage] = useState(1);
  // const pageSize = 6;

  // // Paginate the blogData
  // const paginatedData = blogData.slice(
  //   (currentPage - 1) * pageSize,
  //   currentPage * pageSize
  // );

  // const onPageChange = (page) => {
  //   setCurrentPage(page);
  // };
  return (
    <section className="lg:w-[80%] w-[90%] mx-auto lg:pb-[60px] md:pb-[40px] pb-[20px] flex flex-col md:gap-[20px] gap-[10px]">
      <div className="mx-auto flex flex-col items-center justify-center text-center md:pt-[30px] pt-[10px] md:pb-[30px] pb-[10px] gap-[10px]">
        <h1 className="text-[40px] leading-[40px] font-open-sans">
          <span
            className="font-normal font-playfair lg:text-[40px] md:text-[32px] text-[24px] lg:leading-[40px] md:leading-[32px] leading-[24px] bg-clip-text text-transparent"
            style={{
              backgroundImage:
                "linear-gradient(90.02deg, #0A0078 2.5%, #FF383B 43.53%)",
            }}
          >
            Stay Informed
          </span>
          <span className="font-open-sans font-medium lg:text-[40px] md:text-[32px] text-[24px] lg:leading-[40px] md:leading-[32px] leading-[24px]"> with the</span>
          <span className="block font-open-sans font-medium lg:text-[40px] md:text-[32px] text-[24px] lg:leading-[40px] md:leading-[32px] leading-[24px] pl-[1em]">
            Latest Insights
          </span>
        </h1>
        <p className="lg:text-[16px] md:text-[14px] text-[12px] lg:leading-[24px] md:leading-[21px] leading-[18px] font-rubik font-normal">
          Explore expert articles on admissions, universities, and career
          guidance
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 md:gap-[20px] gap-[10px] xl:gap-[40px]">
        {blogData.map((item, index) => (
          <BlogCard item={item} key={index} router={router} />
        ))}
      </div>
      {/* <div className="mt-[20px] flex justify-center items-center">
        <Pagination
          current={currentPage}
          pageSize={pageSize}
          total={blogData.length}
          onChange={onPageChange}
          showSizeChanger={false}
        />
      </div> */}
    </section>
  );
}

export const BlogCard = ({ item, router }) => (
  <Link href={`/blogs/${item.id}`}>
    <div className="flex flex-col lg:gap-[18px] gap-[8px] p-2 group cursor-pointer transition-all duration-300 ease-in-out transform hover:-translate-y-1 rounded-[18px] border border-[#0A0078]">
      <div className="overflow-hidden">
        <Image
          src={item?.image}
          alt={item?.title}
          loading="lazy"
          className="h-[220px] w-full object-cover rounded-[8px] transition-transform duration-300 ease-in-out transform group-hover:scale-110 "
        />
      </div>
      <div className="flex flex-col lg:gap-[10px] gap-[5px] items-start px-[10px]">
        <p className="bg-[#FFE3E4] text-secondary-cl flex flex-row py-[6px] px-[16px] rounded-[6px] gap-[6px] items-center font-inter font-medium lg:text-[14px] text-[12px] leading-[100%] text-[#FF383B]">
          {item?.date_added}
        </p>
        <div className="grid grid-cols-[1fr,24px] gap-[10px] w-full">
          <p className="font-open-sans font-semibold lg:text-[20px] text-[16px] leading-[100%] font-[#121212]">
            {item?.title}
          </p>
        </div>
        <p className="font-rubik lg:text-[16px] text-[14px] font-normal lg:leading-[24px] md:leading-[21px] leading-[14px] text-[#6D758F] line-clamp-2">
          {item?.description}
        </p>
        <button className="bg-[#FF383B] text-white font-inter font-semibold text-[14px] leading-[18px] w-full p-[5px] rounded-[8px] mb-[8px]">
          Read Full Blog
        </button>
      </div>
    </div>
  </Link>
);

"use client";
import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";
import building from "../../assets/blog/building.png";
import { Pagination } from "antd";

const blogData = [
  {
    image: building,
    date_added: "Feb 5, 2025",
    title: "Top 10 Universities in India for MBA Programs",
    description: `As the most widely accepted test to analyze 
                the proficiency of non-native English speakers, attaining 
                a high TOEFL score can aid in your efforts non-native English 
                speakers, attaining a high TOEFL score can aid in your efforts`,
  },
//   {
//     image: building,
//     date_added: "14 Jan 2024",
//     title: "Study abroad with us ,easy procesures",
//     description: `As the most widely accepted test to analyze 
//                 the proficiency of non-native English speakers, attaining 
//                 a high TOEFL score can aid in your efforts non-native English 
//                 speakers, attaining a high TOEFL score can aid in your efforts`,
//   },
//   {
//     image: building,
//     date_added: "14 Jan 2024",
//     title: "Study abroad with us ,easy procesures",
//     description: `As the most widely accepted test to analyze 
//                 the proficiency of non-native English speakers, attaining 
//                 a high TOEFL score can aid in your efforts non-native English 
//                 speakers, attaining a high TOEFL score can aid in your efforts`,
//   },
//   {
//     image: building,
//     date_added: "14 Jan 2024",
//     title: "Study abroad with us ,easy procesures",
//     description: `As the most widely accepted test to analyze 
//                 the proficiency of non-native English speakers, attaining 
//                 a high TOEFL score can aid in your efforts non-native English 
//                 speakers, attaining a high TOEFL score can aid in your efforts`,
//   },
//   {
//     image: building,
//     date_added: "14 Jan 2024",
//     title: "Study abroad with us ,easy procesures",
//     description: `As the most widely accepted test to analyze 
//                 the proficiency of non-native English speakers, attaining 
//                 a high TOEFL score can aid in your efforts non-native English 
//                 speakers, attaining a high TOEFL score can aid in your efforts`,
//   },
//   {
//     image: building,
//     date_added: "14 Jan 2024",
//     title: "Study abroad with us ,easy procesures",
//     description: `As the most widely accepted test to analyze 
//                 the proficiency of non-native English speakers, attaining 
//                 a high TOEFL score can aid in your efforts non-native English 
//                 speakers, attaining a high TOEFL score can aid in your efforts`,
//   },
//   {
//     image: building,
//     date_added: "14 Jan 2024",
//     title: "Study abroad with us ,easy procesures",
//     description: `As the most widely accepted test to analyze 
//                 the proficiency of non-native English speakers, attaining 
//                 a high TOEFL score can aid in your efforts non-native English 
//                 speakers, attaining a high TOEFL score can aid in your efforts`,
//   },
//   {
//     image: building,
//     date_added: "14 Jan 2024",
//     title: "Study abroad with us ,easy procesures",
//     description: `As the most widely accepted test to analyze 
//                 the proficiency of non-native English speakers, attaining 
//                 a high TOEFL score can aid in your efforts non-native English 
//                 speakers, attaining a high TOEFL score can aid in your efforts`,
//   },
//   {
//     image: building,
//     date_added: "14 Jan 2024",
//     title: "Study abroad with us ,easy procesures",
//     description: `As the most widely accepted test to analyze 
//                 the proficiency of non-native English speakers, attaining 
//                 a high TOEFL score can aid in your efforts non-native English 
//                 speakers, attaining a high TOEFL score can aid in your efforts`,
//   },
//   {
//     image: building,
//     date_added: "14 Jan 2024",
//     title: "Study abroad with us ,easy procesures",
//     description: `As the most widely accepted test to analyze 
//                 the proficiency of non-native English speakers, attaining 
//                 a high TOEFL score can aid in your efforts non-native English 
//                 speakers, attaining a high TOEFL score can aid in your efforts`,
//   },
];

export default function Listing() {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 6;

  // Paginate the blogData
  const paginatedData = blogData.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  const onPageChange = (page) => {
    setCurrentPage(page);
  };
  return (
    <section className="w-[80%] mx-auto pb-[60px] flex flex-col gap-[50px]">
      <div className="mx-auto flex flex-col items-center justify-center text-center pt-[80px] pb-[40px] gap-[10px]">
        <h1 className="text-[40px] leading-[40px]">
          <span
            className="font-playfair font-normal bg-clip-text text-transparent"
            style={{
                backgroundImage:
                  "linear-gradient(90.02deg, #0A0078 2.5%, #FF383B 43.53%)",
              }}
          >
            Stay Informed 
          </span> with the
          <span className="block font-open-sans font-medium">
            Latest Insights
          </span>
        </h1>
        <p className="text-[16px] leading-[24px] font-rubik font-normal">
          Explore expert articles on admissions, universities, and career guidance
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px] xl:gap-[43px]">
        {paginatedData.map((item, index) => (
          <BlogCard item={item} key={index} router={router} />
        ))}
      </div>
      <div className="mt-[20px] flex justify-center items-center">
        <Pagination
          current={currentPage}
          pageSize={pageSize}
          total={blogData.length}
          onChange={onPageChange}
          showSizeChanger={false}
        />
      </div>
    </section>
  );
}

export const BlogCard = ({ item, router }) => (
  <Link href={`/blogs/test`}>
    <div className="flex flex-col gap-[18px] p-2 group cursor-pointer transition-all duration-300 ease-in-out transform hover:-translate-y-1 bg-violet-500 rounded-[18px]">
      <div className="overflow-hidden">
        <Image
          src={item?.image}
          alt={item?.title}
          loading="lazy"
          className="h-[220px] w-full object-cover rounded-[8px] transition-transform duration-300 ease-in-out transform group-hover:scale-110 "
        />
      </div>
      <div className="flex flex-col gap-[10px] items-start">
        <p className="bg-[#FFE3E4] text-secondary-cl flex flex-row py-[6px] px-[16px] rounded-[8px] gap-[6px] items-center font-inter font-medium text-[14px] leading-[100%] text-[#FF383B]">
        {item?.date_added}
        </p>
        <div className="grid grid-cols-[1fr,24px] gap-[10px] w-full">
          <p className="font-open-sans font-semibold text-[20px] leading-[100%] font-[#121212]">
            {item?.title}
          </p>
        </div>
        <p className="font-roboto-regular text-[14px] leading-[20px] line-clamp-3">
          {item?.description}
        </p>
      </div>
    </div>
  </Link>
);

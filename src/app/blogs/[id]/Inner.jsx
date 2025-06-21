"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { BlogCard } from "../Listing";
import { motion, useScroll, useSpring } from "framer-motion";
import building from "../../../assets/blog/building.png";
// Icons
import FacebookRed from "../../../assets/blog/Facebook-red.svg";
import TwitterRed from "../../../assets/blog/Twitter-red.svg";
import InstagramRed from "../../../assets/blog/Instagram-red.svg";
import LinkedInRed from "../../../assets/blog/LinkedIn-red.svg";


const relatedBlogData = [
  {
    image: building,
    date_added: "14 Jan 2024",
    title: "Study abroad with us ,easy procesures",
    description: `As the most widely accepted test to analyze the proficiency of 
                non-native English speakers, attaining a high TOEFL score can aid in your 
                efforts non-native English speakers, attaining a high TOEFL score can aid 
                in your efforts`,
  },
  {
    image: building,
    date_added: "14 Jan 2024",
    title: "Study abroad with us ,easy procesures",
    description: `As the most widely accepted test to analyze the proficiency of 
                non-native English speakers, attaining a high TOEFL score can aid in your 
                efforts non-native English speakers, attaining a high TOEFL score can aid 
                in your efforts`,
  },
  {
    image: building,
    date_added: "14 Jan 2024",
    title: "Study abroad with us ,easy procesures",
    description: `As the most widely accepted test to analyze the proficiency of 
                non-native English speakers, attaining a high TOEFL score can aid in your 
                efforts non-native English speakers, attaining a high TOEFL score can aid 
                in your efforts`,
  },
];
const toSlug = (text) => {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .trim();
};

// Function to inject IDs into headings (only runs in the browser)
const injectIdsIntoContent = (htmlContent) => {
  if (typeof window === "undefined")
    return { contentWithIds: htmlContent, headingList: [] };

  const headingList = [];
  const parser = new DOMParser();
  const doc = parser.parseFromString(htmlContent, "text/html");

  const headings = doc.querySelectorAll("h1, h2, h3, h4, h5, h6, b");
  headings.forEach((heading, index) => {
    const baseSlug = toSlug(heading.textContent || heading.innerText || "");
    let slug = baseSlug;
    let count = 1;

    while (headingList.includes(slug)) {
      slug = `${baseSlug}-${count}`;
      count++;
    }

    if (slug) {
      headingList.push(slug);
      heading.setAttribute("id", slug);
    }
  });

  return { contentWithIds: doc.body.innerHTML, headingList };
};

function BlogInner({data, latest}) {
  const router = useRouter();
  const [contentWithIds, setContentWithIds] = useState("");
  const [headingList, setHeadingList] = useState([]);
  const [selected, setSelected] = useState("");
  const containerRef = useRef(null);

  useEffect(() => {
    const { contentWithIds, headingList } = injectIdsIntoContent(data.content);
    setContentWithIds(contentWithIds);
    setHeadingList(headingList);
    setSelected(headingList[0] || "");
  }, []);

  const handleOnFocus = (id) => {
    const element = document.getElementById(id);
    setSelected(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 250,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="containers md:py-12 py-6">
        <div className=" mx-auto text-center">
          <h1 className="font-open-sans font-semibold lg:text-[40px] md:text-[32px] text-[26px] text-gray-900 mb-4">
            {data.title}
          </h1>
          <div className="relative w-full h-[300px] md:h-[500px] overflow-hidden">
            <Image
              src={data.image}
              alt="Students enjoying education in Adelaide"
              fill
              className="object-cover object-center"
              priority
            />
          </div>
        </div>  
      </section>

      {/* Main Content */}
      <section className="containers" ref={containerRef}>
        <div className="flex flex-col md:flex-row lg:gap-8 md:gap-4 max-w-7xl mx-auto">
          {/* Sidebar Navigation (30%) */}
          <aside className="hidden md:block lg:w-1/3 md:w-2/5 xl:w-1/4 sticky top-10 self-start">
            {/* Navigation List */}
            <div className="flex items-start">
              <nav className="flex-1">
                {/* Scroll Progress Bar */}

                {/* Sidebar container with relative positioning */}
                <div className="relative">
                  {/* Scroll Progress Bar */}
                  <motion.div
                    style={{ scaleY }}
                    className="absolute left-0 top-3 w-[3px] h-full origin-top bg-red-500"
                  />

                  <ul className="space-y-3 pl-3">
                    {headingList.map((item) => (
                      <li key={item}>
                        <button
                          onClick={() => handleOnFocus(item)}
                          className={`text-left w-full px-2 py-1 rounded transition-all font-normal lg:text-[14px] md:text-[12px] leading-[100%] ${
                            selected === item
                              ? "text-black font-medium font-rubik"
                              : "text-gray-700 hover:text-black font-open-sans"
                          }`}
                        >
                          {item.replace(/-/g, " ")}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </nav>
            </div>

            {/* Share Article Section (now sticky along with navigation) */}
            <div className="mt-8 pt-6 border-t border-gray-200 ">
              <h3 className="text-sm font-medium text-[#000000] mb-3">
                Share Article
              </h3>
              <div className="flex gap-4">
                {[FacebookRed, TwitterRed, InstagramRed, LinkedInRed].map(
                  (icon, i) => (
                    <a
                      key={i}
                      className="hover:opacity-75 transition-opacity flex items-center justify-center w-4 h-4"
                    >
                      <Image
                        src={icon}
                        alt=""
                        width={20}
                        height={20}
                        className="w-full h-full object-contain"
                      />
                    </a>
                  )
                )}
              </div>
            </div>
          </aside>

          {/* Blog Content (70%) */}
          <article className="lg:w-2/3 md:w-3/5 xl:w-3/4 lg:pl-8 py-5 md:py-0">
            <div
              className="[&>h2]:font-open-sans [&>h2]:font-semibold 
               [&>h2]:text-[16px] md:[&>h2]:text-[18px] lg:[&>h2]:text-[20px]
               [&>h2]:leading-[1.17] [&>h2]:mt-8 [&>h2]:mb-4
               [&>p]:font-rubik [&>p]:font-normal 
               [&>p]:text-[12px] lg:[&>p]:text-[14px]
               [&>p]:leading-[21px] [&>p]:mb-4"
              dangerouslySetInnerHTML={{ __html: contentWithIds }}
            />
          </article>
        </div>
      </section>

      {/* Latest Articles */}
      <section className="bg-gray-50 py-6 lg:py-10 ">
        <div className="containers ">
          <h2 className="text-2xl font-bold text-gray-900 py-5">
            Latest Articles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-8 md:gap-6 gap-2">
            {latest.map((item, index) => (
              <BlogCard key={index} item={item} router={router} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default BlogInner;

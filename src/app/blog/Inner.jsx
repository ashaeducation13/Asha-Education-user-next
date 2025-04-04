"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { BlogCard } from "./Listing";
import { motion, useScroll, useSpring } from "framer-motion";
import building from "../../assets/blog/building.png";
// Icons
import FacebookRed from "../../../public/blog/Facebook-red.svg";
import TwitterRed from "../../../public/blog/Twitter-red.svg";
import InstagramRed from "../../../public/blog/Instagram-red.svg";
import LinkedInRed from "../../../public/blog/LinkedIn-red.svg";

const content = `
    <p>Australia is a popular study destination for international students, and while many are well aware of universities in Sydney and Melbourne, Adelaide is yet another destination that could be the right fit for you.</p>
    <p>With its renowned universities, affordable education, and welcoming environment, Canada is an ideal choice for international students. Known for its quality of life, excellent educational institutions, and post-study work opportunities, Canada offers an enriching experience that goes beyond academics.</p>
    <h2>Where is it located?</h2>
    <p>Adelaide is the capital city of South Australia; it&rsquo;s the 5th&nbsp;most populated city in Australia and home to some of the top universities in the world. Adelaide is very highly regarded as a study destination by international students and it is ranked among the top most livable cities in the world by the Economist Intelligence Unit. It is also an exciting place for tourists; the famous Kangaroo Island lies to the southwest of Adelaide, and if you love beaches, then you will fall in love with the pristine beaches at Adelaide&rsquo;s metropolitan coastline that stretches up to 70 km.</p>
    <h2>So, what makes Adelaide a great choice for students?</h2>
    <p>South Australia&rsquo;s capital city offers world-class education, a well-balanced lifestyle and a thriving economy. Compared to other Australian cities, Adelaide is also less expensive when it comes to food, rent and public transport costs. The affordable rates of student accommodation combined with the student concessions for public transport that the South Australian Government provides, studying in Adelaide becomes an ideal choice.</p>
    <h2>Scholarships</h2>
    <p>Universities in Adelaide offer many scholarships to international students that can be applied for along with your course application. International students can receive up to 50% reduction in tuition fees when applying to universities in Adelaide. The Global Academic Excellence Scholarship offered by the University of Adelaide, for example, is one such scholarship awarded to international students based on their previous academic performance. For more information on scholarships, click here.</p>
    <h2>Work Part-time in Adelaide</h2>
    <p>An&nbsp;international student in Australia, holding a Student Visa (Subclass 500)&nbsp;for Higher Education Sector (the most commonly applied student visa), is allowed to work for 48 hours a fortnight (two weeks) during their course period (from 1 July 2023 onwards). [For any other visa, check the work limitation conditions of your visa on the&nbsp;Australian Department of Home Affairs website].</p>
    <p>Many international students will be interested in working part-time during their course period, and sometimes it even forms a part of their curriculum. There are plenty of opportunities for students in Adelaide, as the city has a wide range of industries that offer part-time options such as:</p>
    <p>1.&nbsp;Working in retail departments and clothing stores</p>
    <p>2. Working as tutors</p>
    <p>3.&nbsp;Telemarketing and Sales Representatives</p>
    <p>4.&nbsp;Customer Service Representatives</p>
    <p>5.&nbsp;Aged and Disability care (for medical students)</p>
    <p>6.&nbsp;Working in the Hospitality sector</p>
    <p>There are even opportunities as lifeguards, swimming instructors, ushers (security guards) and much more. A great way to balance work with study is to find part-time work best suited for your skills and manage your work and study hours so that both can be performed effectively.</p>
    <h2>How do I find work that&rsquo;s best suited to me?</h2>
    <p>Adelaide&rsquo;s strong ties between industries and the education sector make it easy for students to find work through their own universities. The &ldquo;Careers&rdquo; section which is available on most university websites, will equip you with a wide range of internship and employment opportunities. Along with this, there are a host of other ways to explore part-time work, like company websites or the Job Shop section of the&nbsp;official Study Adelaide&nbsp;website, which helps you screen various opportunities as per your preference. Students are also entitled to the same working rights as other workers in Australia; you should be given the minimum pay rate as per your work as well as a healthy and safe work environment. Find out more about your work rights as an international student on the Fair Work Ombudsman page.</p>

`;

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

function BlogInner() {
  const router = useRouter();
  const [contentWithIds, setContentWithIds] = useState("");
  const [headingList, setHeadingList] = useState([]);
  const [selected, setSelected] = useState("");
  const containerRef = useRef(null);

  useEffect(() => {
    const { contentWithIds, headingList } = injectIdsIntoContent(content);
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
    stiffness: 50,
    damping: 20,
    restDelta: 0.001,
  });

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="containers md:py-12 py-6">
        <div className=" mx-auto text-center">
          <h1 className="font-open-sans font-semibold lg:text-[40px] md:text-[32px] text-[26px] text-gray-900 mb-4">
            Top 10 Universities in India for MBA <br /> Programs
          </h1>
          <div className="relative w-full h-[300px] md:h-[500px] overflow-hidden">
            <Image
              src={building}
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
                <ul className="space-y-3">
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
              </nav>
            </div>

            {/* Share Article Section (now sticky along with navigation) */}
            <div className="mt-8 pt-6 border-t border-gray-200">
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

      {/* Recommended Articles */}
      <section className="bg-gray-50 lg:py-10">
        <div className="containers ">
          <h2 className="text-2xl font-bold text-gray-900 py-5">
            Recommended Articles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-8 md:gap-6 gap-2">
            {relatedBlogData.map((item, index) => (
              <BlogCard key={index} item={item} router={router} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default BlogInner;
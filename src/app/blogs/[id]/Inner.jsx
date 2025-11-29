"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { BlogCard } from "../Listing";
import { motion, useScroll, useSpring } from "framer-motion";
import parse from "html-react-parser";

import FacebookRed from "../../../assets/blog/Facebook-red.svg";
import TwitterRed from "../../../assets/blog/Twitter-red.svg";
import InstagramRed from "../../../assets/blog/Instagram-red.svg";
import LinkedInRed from "../../../assets/blog/LinkedIn-red.svg";
import FaqSection from "./FaqSection";

// ----------------------
// SLUG GENERATOR
// ----------------------
const toSlug = (text) =>
  text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .trim();

// ----------------------
// SAFE ID INJECTOR (NO DOMParser)
// ----------------------
const injectIdsIntoContent = (html) => {
  const headingList = [];

  const modified = html.replace(
    /<(h[1-6])([^>]*)>(.*?)<\/h[1-6]>/gi,
    (match, tag, attrs, inner) => {
      const textOnly = inner.replace(/<[^>]+>/g, "");
      const baseSlug = toSlug(textOnly);

      if (!baseSlug) return match;

      let slug = baseSlug;
      let count = 1;

      while (headingList.includes(slug)) {
        slug = `${baseSlug}-${count}`;
        count++;
      }

      headingList.push(slug);

      return `<${tag} id="${slug}" ${attrs}>${inner}</${tag}>`;
    }
  );

  return { modifiedHtml: modified, headingList };
};

// ----------------------
// COMPONENT
// ----------------------
export default function BlogInner({ data, latest }) {
  const router = useRouter();
  const containerRef = useRef(null);

  const [parsedContent, setParsedContent] = useState(null);
  const [headingList, setHeadingList] = useState([]);
  const [selected, setSelected] = useState("");

  // Process blog content
  useEffect(() => {
    if (!data?.content) return;

    const { modifiedHtml, headingList } = injectIdsIntoContent(data.content);

    setParsedContent(parse(modifiedHtml));
    setHeadingList(headingList);
    setSelected(headingList[0] || "");
  }, [data]);

  const handleOnFocus = (id) => {
    const el = document.getElementById(id);
    setSelected(id);
    el?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  // Scroll progress bar
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

      {/* ---------- HERO SECTION ---------- */}
      <section className="containers md:py-12 py-6">
        <div className="mx-auto text-center">
          <h1 className="font-open-sans font-semibold lg:text-[40px] md:text-[32px] text-[26px] text-gray-900 mb-4">
            {data.title}
          </h1>

          <div className="relative w-full h-[300px] md:h-[500px] overflow-hidden">
            <Image
              src={data.image}
              alt={data.title}
              fill
              className="object-cover object-center"
              priority
            />
          </div>
        </div>
      </section>

      {/* ---------- MAIN CONTENT ---------- */}
      <section className="containers" ref={containerRef}>
        <div className="flex flex-col md:flex-row lg:gap-8 md:gap-4 max-w-7xl mx-auto">

          {/* ----- SIDEBAR / TOC ----- */}
          <aside className="hidden md:block lg:w-1/3 md:w-2/5 xl:w-1/4 sticky top-10 self-start">
            <div className="flex items-start">
              <nav className="flex-1">
                <div className="relative">

                  {/* Scroll Bar */}
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

            {/* SHARE SECTION */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <h3 className="text-sm font-medium text-black mb-3">
                Share Article
              </h3>

              <div className="flex gap-4">
                {[FacebookRed, TwitterRed, InstagramRed, LinkedInRed].map(
                  (icon, i) => (
                    <a key={i} className="hover:opacity-75 transition-opacity">
                      <Image src={icon} alt="icon" width={20} height={20} />
                    </a>
                  )
                )}
              </div>
            </div>
          </aside>

          {/* ---------- BLOG CONTENT ---------- */}
          <article className="lg:w-2/3 md:w-3/5 xl:w-3/4 lg:pl-8 py-5 md:py-0">
            <div
              className="
                [&_h1]:font-open-sans [&_h1]:font-semibold
                [&_h2]:font-open-sans [&_h2]:font-semibold
                [&_h2]:text-[18px] lg:[&_h2]:text-[20px]
                [&_h2]:mt-8 [&_h2]:mb-4

                [&_p]:font-rubik [&_p]:text-[14px] [&_p]:mb-4 [&_p]:leading-[22px]
                [&_ul]:list-disc [&_ul]:ml-6 [&_li]:mb-2

                [&_img]:rounded-lg [&_img]:my-4
              "
            >
              {parsedContent}
            </div>
          </article>
        </div>
      </section>

      {/* ---------- FAQ SECTION ---------- */}
      <section className="containers md:py-12 py-6">
        <FaqSection faqs={data.faqs} />
      </section>

      {/* ---------- LATEST ARTICLES ---------- */}
      {latest?.length > 0 && (
        <section className="bg-gray-50 py-6 lg:py-10">
          <div className="containers">
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
      )}
    </div>
  );
}

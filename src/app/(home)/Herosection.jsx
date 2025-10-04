"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion"; 
import HeroCarousel from "@/components/home/HeroCarousel";

import float1 from "../../assets/home/herosection/float1.svg";
import float2 from "../../assets/home/herosection/float2.svg";
import float3 from "../../assets/home/herosection/float3.svg";
import float4 from "../../assets/home/herosection/float4.svg";
import float5 from "../../assets/home/herosection/float5.svg";
import float6 from "../../assets/home/herosection/float6.svg";
import float7 from "../../assets/home/herosection/float7.svg";
import float8 from "../../assets/home/herosection/float8.svg";
import search from "../../assets/home/herosection/Search.svg";
import arrow from "../../assets/home/herosection/Arrow.svg";

const Hero = ({ spData = [], universityData = [] }) => {
  const floatingElementsRef = useRef([]);
  const mainContentRef = useRef(null);

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);

  // ✨ Floating animation
  useEffect(() => {
    const elements = floatingElementsRef.current;
    if (!elements.length) return;

    const animations = elements.map((el, index) => {
      const duration = 3 + Math.random() * 4;
      const xMovement = 8 + Math.random() * 12;
      const yMovement = 8 + Math.random() * 12;
      const delay = index * 0.3;

      return el.animate(
        [
          { transform: `translate(0, 0)` },
          { transform: `translate(${xMovement}px, ${yMovement}px)` },
          { transform: `translate(${-xMovement}px, ${-yMovement}px)` },
          { transform: `translate(0, 0)` },
        ],
        {
          duration: duration * 1000,
          iterations: Infinity,
          direction: "alternate",
          easing: "ease-in-out",
          delay: delay * 1000,
        }
      );
    });

    return () => {
      animations.forEach((anim) => anim.cancel());
    };
  }, []);

  const addToRefs = (el) => {
    if (el && !floatingElementsRef.current.includes(el)) {
      floatingElementsRef.current.push(el);
    }
  };

  // 🔍 Filter logic
  useEffect(() => {
    if (!searchTerm) {
      setFilteredResults([]);
    } else {
      const lowercaseSearchTerm = searchTerm.toLowerCase().trim();

      const hasWordStartingWith = (text) => {
        if (!text) return false;
        return text
          .toLowerCase()
          .split(/\s+/)
          .some((word) => word.startsWith(lowercaseSearchTerm));
      };

      const programResults = spData.filter((sp) =>
        hasWordStartingWith(sp?.specialization.program_type_name) ||
        hasWordStartingWith(sp?.specialization.pg_full_name) ||
        hasWordStartingWith(sp?.specialization.name)
      );

      const universityResults = universityData.filter((university) =>
        hasWordStartingWith(university?.name)
      );

      const uniqueResults = Array.from(
        new Map(
          [...programResults, ...universityResults].map((item) => {
            const isProgram = item.specialization !== undefined;
            const id = item.id;
            const key = isProgram ? `sp-${id}` : `university-${id}`;
            return [key, item];
          })
        ).values()
      );

      setFilteredResults(uniqueResults);
    }
  }, [searchTerm, spData, universityData]);

  return (
    <section className="relative py-2 md:py-10 text-center overflow-hidden">
      {/* Background Blur Effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,_rgba(241,241,241,1)_26%,_rgba(255,255,255,0)_64%)]"></div>

      <div className="relative containers mx-auto" ref={mainContentRef}>
        {/* Floating SVGs on the left */}
        <div className="absolute z-0 left-[-16vw] lg:left-[-10vw] top-[-2vw] md:top-0 h-[65%] sm:h-[85%] lg:h-full pointer-events-none w-[40%] md:w-[30%] max-w-screen-lg mx-4">
          <Image ref={addToRefs} src={float1} alt="Floating Element" className="absolute top-0 left-[5vw] md:left-[4vw] lg:left-0 w-[66%] min-[430px]:w-[56%] 2xl:w-[40%]" />
          <Image ref={addToRefs} src={float2} alt="Floating Element" className="absolute top-1/3 sm:top-1/4 left-[12vw] md:left-[14vw] lg:left-[12vw] w-[38%] min-[430px]:w-[28%] 2xl:w-[20%]" />
          <Image ref={addToRefs} src={float3} alt="Floating Element" className="absolute bottom-1/4 left-[18vw] md:left-[24vw] lg:left-[18vw] w-[49%] lg:w-[39%] 2xl:w-[28%] hidden sm:block" />
          <Image ref={addToRefs} src={float4} alt="Floating Element" className="absolute bottom-0 sm:bottom-[20px] left-[8vw] md:left-[8vw] lg:left-[5vw] w-[39%] min-[430px]:w-[36%] lg:w-[30%] 2xl:w-[25%]" />
        </div>

        {/* Floating SVGs on the right */}
        <div className="absolute z-0 right-[-16vw] lg:right-[-10vw] top-[-2vw] h-[65%] sm:h-[85%] lg:h-full pointer-events-none w-[40%] md:w-[30%] max-w-screen-lg mx-4">
          <Image ref={addToRefs} src={float5} alt="Floating Element" className="absolute top-0 right-[5vw] md:right-[8vw] lg:right-[2vw] w-[52%] min-[430px]:w-[42%] 2xl:w-[30%]" />
          <Image ref={addToRefs} src={float6} alt="Floating Element" className="absolute top-1/3 sm:top-1/4 right-[12vw] md:right-[14vw] lg:right-[10vw] w-[42%] min-[430px]:w-[36%] 2xl:w-[28%]" />
          <Image ref={addToRefs} src={float7} alt="Floating Element" className="absolute bottom-1/4 right-[18vw] md:right-[20vw] lg:right-[18vw] w-[40%] 2xl:w-[28%] hidden sm:block" />
          <Image ref={addToRefs} src={float8} alt="Floating Element" className="absolute bottom-0 right-[8vw] md:right-[4vw] lg:right-[2vw] w-[52%] min-[430px]:w-[52%] 2xl:w-[35%]" />
        </div>

        {/* Main Heading */}
        <div className="containers z-20">
          <h1
            className="text-[30px] sm:text-[40px] xl:text-[64px] leading-[32px] sm:leading-[46px] xl:leading-[70px] font-normal text-gray-900 w-[85%] sm:w-[75%] xl:w-full mx-auto"
          >
            <span
              className="bg-clip-text text-transparent font-playfair"
              style={{
                backgroundImage: "linear-gradient(90.02deg, #0A0078 2.5%, #FF383B 43.53%)",
              }}
            >
              Empowering
            </span>{" "}
            Your Academic Dreams with <span className="font-bold">India's Top </span> Universities
          </h1>

          {/* Subheading */}
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="mt-4 text-[12px] sm:text-[14px] xl:text-[16px] text-gray-600 w-[95%] sm:w-[50%] mx-auto font-inter font-normal leading-[18px] sm:leading-[21px] xl:leading-[24px]"
          >
            Explore top undergraduate, postgraduate, and specialized programs with expert guidance.
          </motion.p>

          {/* Search + Browse */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="mt-6 flex flex-col md:flex-row justify-center items-center gap-4"
          >
            {/* Search Box */}
            <div className="relative w-full sm:w-[60%] xl:w-[72%] font-rubik">
              <Image src={search} alt="Search" className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search programs, universities..."
                className="pl-12 pr-4 py-3 w-full rounded-xl font-medium shadow-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent text-sm md:text-base placeholder:text-gray-400"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />

              {searchTerm && (
                <ul className="absolute top-full left-0 right-0 bg-white border border-gray-200 rounded-xl shadow-xl mt-2 z-[999] max-h-64 overflow-y-auto">
                  {filteredResults.length > 0 ? (
                    filteredResults.map((item) => {
                      const isProgram = item.specialization !== undefined;
                      const slug = item.slug;
                      const href = isProgram ? `/programs/${slug}` : `/universities/${slug}`;
                      const label = isProgram
                        ? `${item.specialization.str_representation} (${item.university.name})`
                        : item.name;
                      const tag = isProgram ? "Program" : "University";

                      return (
                        <li key={`${isProgram ? "sp" : "university"}-${slug}`}>
                          <Link href={href} className="block px-4 py-3 hover:bg-gray-100 transition-all duration-150 text-left">
                            <div className="text-sm md:text-base font-medium text-gray-800">{label}</div>
                            <div className="text-xs text-gray-500 mt-0.5">{tag}</div>
                          </Link>
                        </li>
                      );
                    })
                  ) : (
                    <li className="px-4 py-3 text-sm text-gray-500">No results found</li>
                  )}
                </ul>
              )}
            </div>

            {/* Browse Button */}
            <Link href="/programs">
              <button
                className="w-full sm:w-auto flex items-center justify-center font-inter gap-2 font-semibold text-white px-4 xl:px-8 py-3 rounded-md shadow-md transition duration-300 text-[12px] md:text-[14px] cursor-pointer"
                style={{ backgroundImage: "linear-gradient(90deg, #0A0078 5.5%, #FF383B 96.5%)" }}
              >
                Browse
                <Image src={arrow} alt="Arrow" className="w-[8.4px] h-[8.24px]" />
              </button>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Carousel */}
      <div className="flex justify-center my-2">
        <HeroCarousel data={universityData} />
        <div className="absolute bottom-0 w-full h-32 sm:h-40 md:h-42 bg-gradient-to-t from-white/90 via-white/70 to-transparent blur-md pointer-events-none z-20" />
      </div>
    </section>
  );
};

export default Hero;

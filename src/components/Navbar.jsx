"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import logo from "../assets/navbar/logo.png";
import Link from "next/link";
import circle from "../assets/about-us/circle-ellipsis 1.svg";
import MainForm from "./Forms/MainForm";
import { ProgramFetch, TypeFetch, UniversityFetch } from "@/services/api";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [program, setProgram] = useState([]);
  const [univ, setUniv] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  const navRef = useRef(null);
  const programsContainerRef = useRef(null);
  const universitiesContainerRef = useRef(null);
  const moreContainerRef = useRef(null);
  const mobileMenuRef = useRef(null);

  const programsList = [
    { name: "Online MBA", url: "/programs?mba=MBA" },
    { name: "Online PG Cources", url: "/programs?pg=PG" },
    { name: "Online UG Cources", url: "/programs?ug=UG" },
    { name: "Certifications", url: "/programs?cert=Certifications" },
    { name: "Executive Cources", url: "/programs?ex=ex" }
  ];
  useEffect(() => {
    const getData = async () => {
      try {
        const data1 = await UniversityFetch();
        const data2 = await TypeFetch();

        if (data1) {
          setUniv(data1);
        }
        if (data2) {
          setProgram(data2);
        }
        if (!data1 && !data2) {
          setError('Failed to load data');
        }
      } catch (error) {
        setError('Error fetching data');
      }
      setLoading(false);
    };

    getData();
  }, []);

  // Add click outside listener to close dropdowns
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Handle desktop dropdowns
      if (
        (activeDropdown === "programs" &&
          programsContainerRef.current &&
          !programsContainerRef.current.contains(event.target)) ||
        (activeDropdown === "universities" &&
          universitiesContainerRef.current &&
          !universitiesContainerRef.current.contains(event.target)) ||
        (activeDropdown === "more" &&
          moreContainerRef.current &&
          !moreContainerRef.current.contains(event.target))
      ) {
        setActiveDropdown(null);
      }

      // Handle mobile dropdowns
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target) &&
        (activeDropdown === "programs-mobile" ||
          activeDropdown === "universities-mobile")
      ) {
        setActiveDropdown(null);
      }
    };

    // Add event listener
    document.addEventListener("mousedown", handleClickOutside);

    // Clean up event listener
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [activeDropdown]);

  const toggleDropdown = (menu) => {
    if (activeDropdown === menu) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(menu);
    }
  };

  const closeDropdowns = () => {
    setActiveDropdown(null);
  };

  // Handle link click to close dropdown and mobile menu
  const handleLinkClick = () => {
    setActiveDropdown(null);
    setIsOpen(false);
  };

  // Handle mouse enter for desktop dropdowns
  const handleMouseEnter = (menu) => {
    setActiveDropdown(menu);
  };

  return (
    <nav className="mt-4 rounded-[20px] relative z-40" ref={navRef}>
      <div className="containers">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <div className="h-[45px] aspect-[2.45]">
              <Link href="/" >
                <Image
                  src={logo}
                  alt="Logo"
                  className="w-full h-full object-contain"
                  priority
                />
              </Link>
            </div>

          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-4 font-rubik">
            <div className="hidden lg:flex items-center space-x-4 lg:space-x-0 xl:space-x-4 font-rubik font-normal lg:text-[16px] md:text-[14px] text-[12px] leading-[20px] text-[#9C9C9C] ">
              <Link href="/" className="px-3 py-2 rounded-md hover:text-[#FF383B] transition-colors">
                Home
              </Link>
              <Link href="/about-us" className="px-3 py-2 rounded-md hover:text-[#FF383B] transition-colors">
                About Us
              </Link>

              {/* Programs Dropdown */}
              <div className="relative" ref={programsContainerRef}>
                <div className="flex items-center px-3 py-2 rounded-md group">
                  <Link
                    href="/programs"
                    className=" lg:text-[16px] md:text-[14px] text-[12px] hover:text-[#FF383B] transition-colors"
                  >
                    Programs
                  </Link>

                  <div
                    onClick={() => toggleDropdown("programs")}
                    onMouseEnter={() => handleMouseEnter("programs")}
                    className="ml-2 cursor-pointer"
                  >
                    <svg
                      className={`h-5 w-5 transition-transform duration-200 ${activeDropdown === "programs" ? "rotate-180 text-[#FF383B]" : ""
                        } group-hover:text-[#FF383B]`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>

                {activeDropdown === "programs" && (
                  <div className="absolute left-0 mt-2 w-56 bg-white rounded-md shadow-lg z-50 border border-gray-100 overflow-hidden transition-all duration-200 ease-in-out">
                    <div className="py-1">
                      {programsList && programsList.length > 0 ? (
                        programsList.map((item, index) => (
                          <Link
                            key={index}
                            href={item.url}
                            className="block px-4 py-2 text-sm text-[#9C9C9C] hover:bg-gray-50 hover:text-[#FF383B] transition-colors"
                            onClick={handleLinkClick}
                          >
                            {item.name}
                          </Link>
                        ))
                      ) : (
                        <div className="px-4 py-2 text-center text-gray-500">No programs available</div>
                      )}
                    </div>
                  </div>
                )}
              </div>

              {/* Universities Dropdown */}
              <div
                className="relative"
                ref={universitiesContainerRef}
              >
                <div className="flex items-center px-3 py-2 rounded-md group">
                  <Link
                    href="/universities"
                    className=" lg:text-[16px] md:text-[14px] text-[12px] hover:text-[#FF383B] transition-colors"
                  >
                    Universities
                  </Link>

                  <button
                    className={`flex items-center px-3 py-2 rounded-md hover:text-[#FF383B] transition-colors ${activeDropdown === "universities" ? "text-[#FF383B]" : ""}`}
                    onClick={() => toggleDropdown("universities")}
                    onMouseEnter={() => handleMouseEnter("universities")}
                  >

                    <svg
                      className={`ml-1 h-5 w-5 transition-transform duration-200 ${activeDropdown === "universities" ? "rotate-180" : ""}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
                {activeDropdown === "universities" && (
                  <div className="absolute left-0 mt-2 w-56 bg-white rounded-md shadow-lg z-50 border border-gray-100 overflow-hidden transition-all duration-200 ease-in-out">
                    <div className="py-1">
                      {loading ? (
                        <div className="px-4 py-3 text-center">
                          <div className="animate-pulse h-4 bg-gray-200 rounded w-3/4 mx-auto"></div>
                        </div>
                      ) : error ? (
                        <div className="px-4 py-2 text-red-500">{error}</div>
                      ) : univ && univ.length > 0 ? (
                        univ.map((item, index) => (
                          <Link
                            key={index}
                            href={`/universities/${item.slug}`}
                            className="block px-4 py-2 text-sm text-[#9C9C9C] hover:bg-gray-50 hover:text-[#FF383B] transition-colors"
                            onClick={handleLinkClick}
                          >
                            {item.name}
                          </Link>
                        ))
                      ) : (
                        <div className="px-4 py-2 text-center text-gray-500">No universities available</div>
                      )}
                    </div>
                  </div>

                )}
              </div>

              {/* More Dropdown */}
              <div
                className="relative"
                ref={moreContainerRef}
              >
                <button
                  className={`flex items-center px-3 py-2 rounded-md hover:text-[#FF383B] transition-colors ${activeDropdown === "more" ? "text-[#FF383B]" : ""}`}
                  onClick={() => toggleDropdown("more")}
                  onMouseEnter={() => handleMouseEnter("more")}
                >
                  More
                  <svg
                    className={`ml-1 h-5 w-5 transition-transform duration-200 ${activeDropdown === "more" ? "rotate-180" : ""}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                {activeDropdown === "more" && (
                  <div className="absolute right-0 mt-2 w-56 bg-white rounded-md shadow-lg z-50 border border-gray-100 overflow-hidden transition-all duration-200 ease-in-out">
                    <div
                      className="py-1 font-rubik font-normal lg:text-[16px] md:text-[14px] text-[12px] leading-[20px] text-[#9C9C9C]"
                      role="menu"
                      aria-orientation="vertical"
                    >
                      <Link
                        href="/careers"
                        className="block px-4 py-2 text-sm hover:bg-gray-50 hover:text-[#FF383B] transition-colors"
                        role="menuitem"
                        onClick={handleLinkClick}
                      >
                        Career
                      </Link>
                      <Link
                        href="/blogs"
                        className="block px-4 py-2 text-sm hover:bg-gray-50 hover:text-[#FF383B] transition-colors"
                        role="menuitem"
                        onClick={handleLinkClick}
                      >
                        Blogs
                      </Link>
                      <Link
                        href="/refer-and-earn"
                        className="block px-4 py-2 text-sm hover:bg-gray-50 hover:text-[#FF383B] transition-colors"
                        role="menuitem"
                        onClick={handleLinkClick}
                      >
                        Refer & Earn
                      </Link>
                      {/* <Link
                        href="/contact-us"
                        className="block px-4 py-2 text-sm hover:bg-gray-50 hover:text-[#FF383B] transition-colors"
                        role="menuitem"
                        onClick={handleLinkClick}
                      >
                        Join Our MBA Community
                      </Link> */}

                      <Link
                        href="/contact-us"
                        className="block px-4 py-2 text-sm hover:bg-gray-50 hover:text-[#FF383B] transition-colors"
                        role="menuitem"
                        onClick={handleLinkClick}
                      >
                        Contact Us
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Enquire Now Button */}
            <button
              onClick={() => setShowModal(true)}
              className="ml-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-rubik rounded-md text-white bg-[#FF383B] hover:bg-red-500 transition-colors shadow-md"
            >
              <span className="hidden lg:inline font-inter font-semibold text-[14px] leading-[20px]">
                Get Free Counseling
              </span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setShowModal(true)}
              className="ml-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-rubik rounded-md text-white bg-[#FF383B] hover:bg-red-500 transition-colors shadow-md"
            >
              <span className="font-inter font-semibold text-[14px] leading-[20px]">
                Enquire
              </span>
            </button>

            <button
              onClick={() => {
                setIsOpen(!isOpen);
                closeDropdowns();
              }}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <Image
                  src={circle}
                  alt="circle"
                  className="size-[28px] md:size-[40px]"
                />
              ) : (
                <Image
                  src={circle}
                  alt="circle2"
                  className="size-[28px] md:size-[40px]"
                />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          ref={mobileMenuRef}
          className="lg:hidden absolute top-full right-0 mt-1 w-full md:w-1/3 bg-white rounded-lg shadow-xl z-50 border border-gray-100 overflow-hidden transition-all duration-200 ease-in-out"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 font-rubik font-normal lg:text-[16px] text-[14px] leading-[20px] text-[#9C9C9C]">
            <Link
              href="/"
              className="block px-3 py-2 rounded-md hover:text-[#FF383B] hover:bg-gray-50 transition-colors"
              onClick={handleLinkClick}
            >
              Home
            </Link>
            <Link
              href="/about-us"
              className="block px-3 py-2 rounded-md hover:text-[#FF383B] hover:bg-gray-50 transition-colors"
              onClick={handleLinkClick}
            >
              About Us
            </Link>

            {/* Programs Dropdown Mobile */}
            <div>
              <button
                className={`w-full flex justify-between items-center px-3 py-2 rounded-md hover:text-[#FF383B] hover:bg-gray-50 transition-colors ${activeDropdown === "programs-mobile" ? "text-[#FF383B] bg-gray-50" : ""}`}
                onClick={() => toggleDropdown("programs-mobile")}
              >
                <span>Programs</span>
                <svg
                  className={`h-5 w-5 transition-transform duration-200 ${activeDropdown === "programs-mobile" ? "rotate-180" : ""}`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              {activeDropdown === 'programs-mobile' && (
                <div className="ml-4 space-y-1 font-rubik font-normal lg:text-[16px] text-[14px] leading-[20px] text-[#9C9C9C] bg-gray-50 rounded-md mt-1">
                  {loading ? (
                    <div className="px-3 py-3 text-center">
                      <div className="animate-pulse h-4 bg-gray-200 rounded w-3/4 mx-auto"></div>
                    </div>
                  ) : error ? (
                    <div className="px-3 py-2 text-red-500">{error}</div>
                  ) : program && program.length > 0 ? (
                    program.map((item, index) => (
                      <Link
                        key={index}
                        href={`/programs?type=${item.name}`}
                        className="block px-3 py-2 rounded-md hover:text-[#FF383B] hover:bg-gray-100 transition-colors"
                        onClick={handleLinkClick}
                      >
                        {item.name}
                      </Link>
                    ))
                  ) : (
                    <div className="px-3 py-2 text-center text-gray-500">No programs available</div>
                  )}
                </div>
              )}
            </div>

            {/* Universities Dropdown Mobile */}
            <div>
              <button
                className={`w-full flex justify-between items-center px-3 py-2 rounded-md hover:text-[#FF383B] hover:bg-gray-50 transition-colors ${activeDropdown === "universities-mobile" ? "text-[#FF383B] bg-gray-50" : ""}`}
                onClick={() => toggleDropdown("universities-mobile")}
              >
                <span>Universities</span>
                <svg
                  className={`h-5 w-5 transition-transform duration-200 ${activeDropdown === "universities-mobile" ? "rotate-180" : ""}`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              {activeDropdown === 'universities-mobile' && (
                <div className="ml-4 space-y-1 font-rubik font-normal lg:text-[16px] text-[14px] leading-[20px] text-[#9C9C9C] bg-gray-50 rounded-md mt-1">
                  {loading ? (
                    <div className="px-3 py-3 text-center">
                      <div className="animate-pulse h-4 bg-gray-200 rounded w-3/4 mx-auto"></div>
                    </div>
                  ) : error ? (
                    <div className="px-3 py-2 text-red-500">{error}</div>
                  ) : univ && univ.length > 0 ? (
                    univ.map((item, index) => (
                      <Link
                        key={index}
                        href={`/universities/${item.slug}`}
                        className="block px-3 py-2 rounded-md hover:text-[#FF383B] hover:bg-gray-100 transition-colors"
                        onClick={handleLinkClick}
                      >
                        {item.name}
                      </Link>
                    ))
                  ) : (
                    <div className="px-3 py-2 text-center text-gray-500">No universities available</div>
                  )}
                </div>
              )}
            </div>

            <Link
              href="/careers"
              className="block px-3 py-2 rounded-md hover:text-[#FF383B] hover:bg-gray-50 transition-colors"
              onClick={handleLinkClick}
            >
              Career
            </Link>
            <Link
              href="/blogs"
              className="block px-3 py-2 rounded-md hover:text-[#FF383B] hover:bg-gray-50 transition-colors"
              onClick={handleLinkClick}
            >
              Blogs
            </Link>
            <Link
              href="/contact-us"
              className="block px-3 py-2 rounded-md hover:text-[#FF383B] hover:bg-gray-50 transition-colors"
              onClick={handleLinkClick}
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-[9999] bg-black/50 bg-opacity-50 flex items-center justify-center">
          <MainForm onClose={() => setShowModal(false)} />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
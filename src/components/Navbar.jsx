"use client";
import React, { useState } from "react";
import Image from "next/image";
import logo from "../assets/navbar/logo.png";
import Link from "next/link";
import circle from "../assets/about-us/circle-ellipsis 1.svg";
import MainForm from "./Forms/MainForm";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

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
  const [showModal, setShowModal] = useState(false);

  return (
    <nav className="mt-4 rounded-[20px] relative z-50">
      <div className="containers">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" >
              <Image
                className="md:h-[45px] w-full h-[30px]"
                src={logo}
                alt="Logo"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-4 font-rubik">
            <div className="hidden lg:flex items-center space-x-4 lg:space-x-0 xl:space-x-4 font-rubik font-normal lg:text-[16px] md:text-[14px] text-[12px] leading-[20px] text-[#9C9C9C] ">
              <Link href="/" className="  px-3 py-2 rounded-md">
                Home
              </Link>
              <Link href="/about-us" className=" px-3 py-2 rounded-md">
                About Us
              </Link>
              <Link href="/programs" className="flex  px-3 py-2 rounded-md">
                Programs
                <svg
                  className="ml-1 h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>

              <Link href="/universities" className="flex  px-3 py-2 rounded-md">
                Universities
                <svg
                  className="ml-1 h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
              <div className="relative">
                <button
                  className=" px-3 py-2 rounded-md flex items-center"
                  onClick={() => toggleDropdown("more")}
                >
                  More
                  <svg
                    className="ml-1 h-5 w-5"
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
                  <div className="absolute right-0 z-999 mt-2 w-48 rounded-md shadow-lg bg-white">
                    <div
                      className="py-1 font-rubik font-normal lg:text-[16px] md:text-[14px] text-[12px] leading-[20px] text-[#9C9C9C] "
                      role="menu"
                      aria-orientation="vertical"
                    >
                      <Link
                        href="careers"
                        className="block px-4 py-2 text-sm  hover:bg-gray-100"
                        role="menuitem"
                      >
                        Careers
                      </Link>
                      <Link
                        href="blog"
                        className="block px-4 py-2 text-sm  hover:bg-gray-100"
                        role="menuitem"
                      >
                        Blog
                      </Link>
                      <Link
                        href="contact-us"
                        className="block px-4 py-2 text-sm  hover:bg-gray-100"
                        role="menuitem"
                      >
                        Contact
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Enquire Now Button */}
            <button
              onClick={() => setShowModal(true)}
              className="ml-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-rubik rounded-md text-white bg-[#FF383B] hover:bg-red-300"
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
              className="ml-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-rubik rounded-md text-white bg-[#FF383B] hover:bg-red-300"
            >
              <span className="font-inter font-semibold text-[14px] leading-[20px]">
                enquire
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
        <div className="lg:hidden absolute top-full right-0 mt-1 w-full md:w-1/3 bg-white rounded-lg shadow-xl z-50">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 font-rubik font-normal lg:text-[16px] md:text-[14px] text-[12px] leading-[20px] text-[#9C9C9C]">

            <Link
              href="/"
              className="block px-3 py-2 rounded-md hover:text-blue-600 hover:bg-gray-50"
            >
              Home
            </Link>
            <Link
              href="about-us/"
              className="block px-3 py-2 rounded-md hover:text-blue-600 hover:bg-gray-50"
            >
              About Us
            </Link>
            {/* Programs Dropdown Mobile */}
            <div>
              <button
                className="w-full flex justify-between items-center px-3 py-2 rounded-md hover:text-blue-600 hover:bg-gray-50"
                onClick={() => toggleDropdown("programs-mobile")}
              >
                <Link href="programs/">Programs</Link>
                <svg
                  className="h-5 w-5"
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
              {/* {activeDropdown === 'programs-mobile' && (
                <div className="ml-4 space-y-1 font-rubik font-normal lg:text-[16px] md:text-[14px] text-[12px] leading-[20px] text-[#9C9C9C]">
                  <a href="#" className="block px-3 py-2 rounded-md hover:text-blue-600 hover:bg-gray-50">Undergraduate</a>
                  <a href="#" className="block px-3 py-2 rounded-md hover:text-blue-600 hover:bg-gray-50">Postgraduate</a>
                  <a href="#" className="block px-3 py-2 rounded-md hover:text-blue-600 hover:bg-gray-50">Online Courses</a>
                  <a href="#" className="block px-3 py-2 rounded-md hover:text-blue-600 hover:bg-gray-50">Short Programs</a>
                </div>
              )} */}
            </div>
            {/* Universities Dropdown Mobile */}
            <div>
              <button
                className="w-full flex justify-between items-center px-3 py-2 rounded-md hover:text-blue-600 hover:bg-gray-50 "
                onClick={() => toggleDropdown("universities-mobile")}
              >
                <Link href="universities/">Universities</Link>
                <svg
                  className="h-5 w-5"
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
              {/* {activeDropdown === 'universities-mobile' && (
                <div className="ml-4 space-y-1 font-rubik font-normal lg:text-[16px] md:text-[14px] text-[12px] leading-[20px] text-[#9C9C9C]">
                  <a href="#" className="block px-3 py-2 rounded-md hover:text-blue-600 hover:bg-gray-50">Partner Universities</a>
                  <a href="#" className="block px-3 py-2 rounded-md hover:text-blue-600 hover:bg-gray-50">International Institutions</a>
                  <a href="#" className="block px-3 py-2 rounded-md hover:text-blue-600 hover:bg-gray-50">University Rankings</a>
                </div>
              )} */}
            </div>
            <Link
              href="/careers"
              className="block px-3 py-2 rounded-md hover:text-blue-600 hover:bg-gray-50"
            >
              Career
            </Link>{" "}
            <Link
              href="/blog"
              className="block px-3 py-2 rounded-md hover:text-blue-600 hover:bg-gray-50"
            >
              Blogs
            </Link>{" "}
            <Link
              href="/contact-us"
              className="block px-3 py-2 rounded-md hover:text-blue-600 hover:bg-gray-50"
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
      {showModal && (
        <div className="fixed inset-0 z-[9999] bg-black/50  bg-opacity-50 flex items-center justify-center">
          <MainForm onClose={() => setShowModal(false)} />
        </div>
      )}
    </nav>
  );
};

export default Navbar;

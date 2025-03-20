"use client"
import React, { useState } from 'react';
import Image from "next/image";
import logo from '../assets/navbar/logo.png'
import Link from "next/link";

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

  return (
    <nav className="bg-white">
      <div className="w-[90%] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Image
              className="h-8 w-auto"
              src={logo}
              alt="Logo"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden font-rubik md:flex items-center space-x-4">
            <Link href="/" className=" text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm ">
              Home
            </Link>
            <Link href="/about-us" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-rubik">
              About Us
            </Link>
            <Link href="#" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-rubik">
            Programs
            </Link>

            <Link href="/universities" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-rubik">
            Universities 
            </Link>

            {/* Programs Dropdown */}
            {/* <div className="relative">
              <button 
                className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-rubik flex items-center"
                onClick={() => toggleDropdown('programs')}
              >
                Programs
                <svg className="ml-1 h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
              {activeDropdown === 'programs' && (
                <div className="absolute z-10 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                  <div className="py-1" role="menu" aria-orientation="vertical">
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Undergraduate</a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Postgraduate</a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Online Courses</a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Short Programs</a>
                  </div>
                </div>
              )}
            </div> */}

            {/* Universities Dropdown */}
            {/* <div className="relative">
              <button 
                className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-rubik flex items-center"
                onClick={() => toggleDropdown('universities')}
              >
                Universities
                <svg className="ml-1 h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
              {activeDropdown === 'universities' && (
                <div className="absolute z-10 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                  <div className="py-1" role="menu" aria-orientation="vertical">
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Partner Universities</a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">International Institutions</a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">University Rankings</a>
                  </div>
                </div>
              )}
            </div> */}

            {/* More Dropdown */}
            <div className="relative">
              <button 
                className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-rubik flex items-center"
                onClick={() => toggleDropdown('more')}
              >
                More
                <svg className="ml-1 h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
              {activeDropdown === 'more' && (
                <div className="absolute right-0 z-999 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                  <div className="py-1" role="menu" aria-orientation="vertical">
                    <Link href="/careers" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Careers</Link>
                    <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Blog</Link>
                    <Link href="contact-us" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Contact</Link>
                  </div>
                </div>
              )}
            </div>

            {/* Enquire Now Button */}
            <a
              href="#"
              className="ml-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-rubik rounded-md text-white  bg-[#FF383B] hover:bg-blue-700"
            >
              Enquire Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
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
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#" className="block px-3 py-2 rounded-md text-base font-rubik text-gray-700 hover:text-blue-600 hover:bg-gray-50">
              Home
            </a>
            <a href="#" className="block px-3 py-2 rounded-md text-base font-rubik text-gray-700 hover:text-blue-600 hover:bg-gray-50">
              About Us
            </a>

            {/* Programs Dropdown Mobile */}
            <div>
              <button 
                className="w-full flex justify-between items-center px-3 py-2 rounded-md text-base font-rubik text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                onClick={() => toggleDropdown('programs-mobile')}
              >
                <span>Programs</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
              {activeDropdown === 'programs-mobile' && (
                <div className="ml-4 space-y-1">
                  <a href="#" className="block px-3 py-2 rounded-md text-base font-rubik text-gray-500 hover:text-blue-600 hover:bg-gray-50">Undergraduate</a>
                  <a href="#" className="block px-3 py-2 rounded-md text-base font-rubik text-gray-500 hover:text-blue-600 hover:bg-gray-50">Postgraduate</a>
                  <a href="#" className="block px-3 py-2 rounded-md text-base font-rubik text-gray-500 hover:text-blue-600 hover:bg-gray-50">Online Courses</a>
                  <a href="#" className="block px-3 py-2 rounded-md text-base font-rubik text-gray-500 hover:text-blue-600 hover:bg-gray-50">Short Programs</a>
                </div>
              )}
            </div>

            {/* Universities Dropdown Mobile */}
            <div>
              <button 
                className="w-full flex justify-between items-center px-3 py-2 rounded-md text-base font-rubik text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                onClick={() => toggleDropdown('universities-mobile')}
              >
                <span>Universities</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
              {activeDropdown === 'universities-mobile' && (
                <div className="ml-4 space-y-1">
                  <a href="#" className="block px-3 py-2 rounded-md text-base font-rubik text-gray-500 hover:text-blue-600 hover:bg-gray-50">Partner Universities</a>
                  <a href="#" className="block px-3 py-2 rounded-md text-base font-rubik text-gray-500 hover:text-blue-600 hover:bg-gray-50">International Institutions</a>
                  <a href="#" className="block px-3 py-2 rounded-md text-base font-rubik text-gray-500 hover:text-blue-600 hover:bg-gray-50">University Rankings</a>
                </div>
              )}
            </div>

            {/* More Dropdown Mobile */}
            <div>
              <button 
                className="w-full flex justify-between items-center px-3 py-2 rounded-md text-base font-rubik text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                onClick={() => toggleDropdown('more-mobile')}
              >
                <span>More</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
              {activeDropdown === 'more-mobile' && (
                <div className="ml-4 space-y-1">
                  <a href="#" className="block px-3 py-2 rounded-md text-base font-rubik text-gray-500 hover:text-blue-600 hover:bg-gray-50">Resources</a>
                  <a href="#" className="block px-3 py-2 rounded-md text-base font-rubik text-gray-500 hover:text-blue-600 hover:bg-gray-50">Career Services</a>
                  <a href="#" className="block px-3 py-2 rounded-md text-base font-rubik text-gray-500 hover:text-blue-600 hover:bg-gray-50">Events</a>
                  <a href="#" className="block px-3 py-2 rounded-md text-base font-rubik text-gray-500 hover:text-blue-600 hover:bg-gray-50">Blog</a>
                  <a href="#" className="block px-3 py-2 rounded-md text-base font-rubik text-gray-500 hover:text-blue-600 hover:bg-gray-50">Contact</a>
                </div>
              )}
            </div>

            {/* Mobile Enquire Now Button */}
            <div className="pt-2">
              <a
                href="#"
                className="block w-full px-4 py-2 text-center font-rubik rounded-md text-white bg-[#FF383B] hover:bg-blue-700"
              >
                Enquire Now
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
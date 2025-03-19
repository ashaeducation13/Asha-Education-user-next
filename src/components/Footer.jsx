"use client"

import React from 'react';
import logo from '../../src/assets/navbar/logo.png'
import Image from "next/image";

const Footer = () => {
    return (
        <footer className="pt-12 pb-8">
            <div className="w-[90%] md:mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

                    {/* First Section - Logo, Subscription, Social Media */}
                    <div className="space-y-6">
                        {/* Logo */}
                        <Image
                            src={logo}
                            alt="Logo"
                            className="h-[45px] w-[45px]"
                        />

                        <p className="font-rubik text-gray-400">Lorem ipsum dolor sit amet consectetur adipiscing elit aliquam mauris sed ma</p>

                        <div className="space-y-4">
                            <h3 className="text-lg font-medium">Get the latest news and updates</h3>

                            {/* Subscription Form */}
                            <div className="flex flex-col gap-2">
                                <input
                                    type="email"
                                    placeholder="Your email address"
                                    className="px-4 py-2 rounded-md flex-grow focus:outline-none focus:ring-2 focus:ring-red-500 shadow-sm"
                                />
                                <div className='flex'>

                                    <button className="px-4 py-2 bg-[#FF383B] text-white rounded-md hover:bg-red-700 transition duration-300 w-auto inline-flex">
                                        Subscribe
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Social Media Icons */}
                        <div className="flex space-x-4 pt-4">
                            {/* Facebook */}
                            <a href="#" className="hover:opacity-80">
                                <img src="/footer/Facebook.svg" alt="Facebook" className="h-6  md:h-10" />
                            </a>

                            {/* Twitter/X */}
                            <a href="#" className="hover:opacity-80">
                                <img src="/footer/Twitter.svg" alt="X" className="h-6  md:h-10" />
                            </a>

                            {/* Instagram */}
                            <a href="#" className="hover:opacity-80">
                                <img src="/footer/Instagram.svg" alt="Instagram" className="h-6  md:h-10" />
                            </a>

                            {/* LinkedIn */}
                            <a href="#" className="hover:opacity-80">
                                <img src="/footer/LinkedIn.svg" alt="LinkedIn" className="h-6  md:h-10" />
                            </a>

                            {/* YouTube */}
                            <a href="#" className="hover:opacity-80">
                                <img src="/footer/YouTube.svg" alt="Youtube" className="h-6  md:h-10" />
                            </a>
                        </div>
                    </div>

                    {/* Second Section - Quick Links */}
                    <div className='mx-auto'>
                        <h3 className="text-lg font-medium mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <a href="#" className="text-gray-400 hover:text-white transition duration-300">Home</a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-400 hover:text-white transition duration-300">Programs</a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-400 hover:text-white transition duration-300">Universities</a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-400 hover:text-white transition duration-300">About Us</a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-400 hover:text-white transition duration-300">Blog</a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-400 hover:text-white transition duration-300">Contact Us</a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-400 hover:text-white transition duration-300">Career</a>
                            </li>
                        </ul>
                    </div>

                    {/* Third Section - Contact Info */}
                    <div>
                        <h3 className="text-lg font-medium mb-4">Want to reach us directly</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start">
                                <img src="/footer/Container.svg" alt="Youtube" className="h-6 md:h-10 mr-3" />
                                <div className="text-[#6D758F]" >
                                    <span className="font-normal">Adress:</span>
                                    <div className='font-semibold'>
                                        Example / 656
                                        <br />
                                        example, example
                                    </div>
                                </div>
                            </li>
                            <li className="flex items-center">
                                <img src="/footer/Email.svg" alt="Youtube" className="h-6 md:h-10 mr-3" />
                                <div className="text-[#6D758F] flex flex-col">
                                    <span className="font-normal">Email:</span>
                                    <a href="mailto:info@education.com" className="font-semibold transition duration-300">
                                        info@education.com
                                    </a>
                                </div>
                            </li>
                            <li className="flex items-center">
                                <img src="/footer/Phone.svg" alt="Youtube" className="h-6  md:h-10 mr-3" />
                                <div className="text-[#6D758F] flex flex-col">
                                    <span className="font-normal">
                                        Phone:
                                    </span>
                                    <a href="tel:+1234567890" className="font-semibold transition duration-300">
                                        +1 (234) 567-890
                                    </a>
                                </div>
                            </li>
                        </ul>
                    </div>

                    {/* Fourth Section - Location */}
                    <div>
                        <h3 className="text-lg font-medium mb-4">Location</h3>
                        <div className="bg-gray-700 rounded-lg h-48 overflow-hidden">
                            {/* This would be your map, using a placeholder for now */}
                            <div className="w-full h-full flex items-center justify-center">
                                <svg className="h-12 w-12 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="pt-8 mt-8 text-center text-black font-medium text-sm flex flex-wrap justify-between items-center gap-x-4 gap-y-2">
                    <a href="#" className="transition duration-300">Privacy Policy</a>
                    <a href="#" className="transition duration-300">Terms and Plans</a>
                    <p className="inline-flex items-center">
                        Copyright
                        <img src="/footer/copyright.svg" alt="copyright" className="h-4 mx-1" />
                        2024 <span className="text-[#FF383B] font-medium">Asha Education</span> All Rights Reserved
                    </p>
                    <p className="inline-flex items-center">
                        Designed and developed by <span className="text-[#FF383B] font-medium ml-1 mr-1">Accolades Integrated</span>
                        <img src="/footer/acc.svg" alt="acc" className="h-4 ml-1" />
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
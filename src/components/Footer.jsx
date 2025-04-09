"use client"

import React, { useEffect, useState } from 'react';
import logo from '../../src/assets/navbar/logo.png'
import fb from '../../src/assets/footer/Facebook.svg'
import tw from '../../src/assets/footer/Twitter.svg'
import insta from '../../src/assets/footer/Instagram.svg'
import linked from '../../src/assets/footer/LinkedIn.svg'
import yt from '../../src/assets/footer/YouTube.svg'
import cont from '../../src/assets/footer/Container.svg'
import acc from '../../src/assets/footer/acc.svg'
import copyright from '../../src/assets/footer/copyright.svg'
import phn from '../../src/assets/footer/Phone.svg'
import email from '../../src/assets/footer/Email.svg'
import Image from "next/image";
import { AboutusFetch } from '@/services/api';

const Footer = () => {
    const [aboutus, setAboutus] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() => {
        const getData = async () => {
            setLoading(true);
            setError(null);

            const data = await AboutusFetch();
            console.log('aboutusdata', data);

            if (data) {
                setAboutus(data[0]);

            } else {
                setError('Failed to load products');
            }
            setLoading(false);
        };

        getData();
    }, []);
    return (
        <footer className="lg:pt-12 md:pt-8 pt-6 pb-8">
            <div className="containers md:mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-[1fr_0.5fr_1.5fr_1.5fr]  lg:grid-cols-[1fr_0.75fr_1.5fr_1fr] gap-4 lg:gap-6">

                    {/* First Section - Logo, Subscription, Social Media */}
                    <div className="space-y-6">
                        {/* Logo */}
                        <Image
                            src={logo}
                            alt="Logo"
                            className="h-[45px] w-[100px]"
                        />

                        <p className="font-rubik text-[12px] md:text-[14px] lg:text-[16px] text-[#6D758F] font-normal">We guide students with expert counselling, top university partnerships, and successful career placements.</p>

                        <div className="space-y-4">
                            <h3 className="text-[#6D758F] text-[12px] md:text-[14px] lg:text-[16px] font-open-sans font-semibold">Get the latest news and updates</h3>

                            {/* Subscription Form */}
                            <div className="flex flex-col mt-1 gap-2">
                                <input
                                    type="email"
                                    placeholder="Enter your email address"
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
                                <Image src={fb} alt="Facebook" className="h-6  md:h-10" />
                            </a>

                            {/* Twitter/X */}
                            <a href="#" className="hover:opacity-80">
                                <Image src={tw} alt="X" className="h-6  md:h-10" />
                            </a>

                            {/* Instagram */}
                            <a href="#" className="hover:opacity-80">
                                <Image src={insta} alt="Instagram" className="h-6  md:h-10" />
                            </a>

                            {/* LinkedIn */}
                            <a href="#" className="hover:opacity-80">
                                <Image src={linked} alt="LinkedIn" className="h-6  md:h-10" />
                            </a>

                            {/* YouTube */}
                            <a href="#" className="hover:opacity-80">
                                <Image src={yt} alt="Youtube" className="h-6  md:h-10" />
                            </a>
                        </div>
                    </div>

                    {/* Second Section - Quick Links */}
                    <div >
                        <h3 className="text-[14px] lg:text-[16px] font-medium mb-4">Quick Links</h3>
                        <ul className="space-y-2 md:space-y-2 grid md:grid-cols-1 grid-cols-2 md:block font-rubik text-[14px] lg:text-[16px]">
                            <li>
                                <a href="#" className="text-gray-400 hover:text-red-500  transition duration-300">Home</a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-400 hover:text-red-500  transition duration-300">Programs</a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-400 hover:text-red-500  transition duration-300">Universities</a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-400 hover:text-red-500  transition duration-300">About Us</a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-400 hover:text-red-500  transition duration-300">Blog</a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-400 hover:text-red-500  transition duration-300">Contact Us</a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-400 hover:text-red-500  transition duration-300">Career</a>
                            </li>
                        </ul>
                    </div>


                    {/* Third Section - Contact Info */}
                    <div>
                        <h3 className="text-[14px] lg:text-[16px] font-medium mb-4">Want to reach us directly</h3>
                        <ul className="space-y-4 text-[14px] lg:text-[16px]">
                            {/* Address */}
                            <li className="flex items-start gap-2">
                                <Image src={cont} alt="Address Icon" className="h-6 md:h-10" />
                                <div className="text-[#6D758F] w-full">
                                    <span className="font-normal">Address:</span>
                                    <div className="font-semibold">
                                        {aboutus.address}
                                    </div>
                                </div>
                            </li>

                            {/* Email */}
                            <li className="flex items-start gap-2">
                                <Image src={email} alt="Email Icon" className="h-6 md:h-10" />
                                <div className="text-[#6D758F] flex flex-col w-[75%]">
                                    <span className="font-normal">Email:</span>
                                    <a href={`mailto:${aboutus.email}`} className="font-semibold transition duration-300 break-words">
                                        {aboutus.email}
                                    </a>
                                </div>
                            </li>

                            {/* Phone */}
                            <li className="flex items-start gap-2">
                                <Image src={phn} alt="Phone Icon" className="h-6 md:h-10" />
                                <div className="text-[#6D758F] flex flex-col">
                                    <span className="font-normal">Phone:</span>
                                    <a href={`tel:${aboutus.phone}`} className="font-semibold transition duration-300">
                                        {aboutus.phone}
                                    </a>
                                </div>
                            </li>
                        </ul>
                    </div>


                    {/* Fourth Section - Location */}
                    <div className="w-full h-[300px] rounded-lg overflow-hidden shadow-md mt-6 border border-gray-200">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.9790556191876!2d72.8265398!3d19.2004843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b74ec2c18775%3A0x29c5d960d7559a01!2sPanchratna%20(A)%20Co%20op.%20Housing%20Society%20Ltd!5e0!3m2!1sen!2sin!4v1712572441234!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>

                </div>

                <div className="pt-8 mt-8 text-center text-black font-medium text-sm flex flex-wrap items-center gap-x-4 gap-y-2 max-w-3xl mx-auto lg:max-w-full lg:justify-between">
                    <div className="flex flex-wrap justify-center sm:justify-start gap-x-4 gap-y-2 sm:w-auto w-full lg:w-auto">
                        <a href="#" className="transition duration-300">Privacy Policy</a>
                        <a href="#" className="transition duration-300">Terms and Plans</a>
                    </div>
                    <p className="inline-flex items-center w-full sm:w-auto justify-center sm:justify-start lg:w-auto">
                        Copyright
                        <Image src={copyright} alt="copyright" className="h-4 mx-1" />
                        2024 <span className="text-[#FF383B] font-medium">Asha Education</span> All Rights Reserved
                    </p>
                    <p className="inline-flex items-center w-full sm:w-auto justify-center sm:justify-start lg:w-auto">
                        Designed and developed by <span className="text-[#FF383B] font-medium ml-1 mr-1">Accolades Integrated</span>
                        <Image src={acc} alt="acc" className="h-4 ml-1" />
                    </p>
                </div>



            </div>
        </footer>
    );
};

export default Footer;
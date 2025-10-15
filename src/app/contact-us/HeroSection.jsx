"use client";
import { useState } from "react";
import Image from "next/image";
import heroImg from "../../assets/contact-us/h-Img.jpeg";
import arrow from "../../assets/contact-us/arrow.svg";
import ring from "../../assets/contact-us/ring.png";
import topright from "../../../public/topright.svg";
import topleft from "../../../public/topleft.svg";
import bottomright from "../../../public/bottomright.svg";
import bottomleft from "../../../public/bottomleft.svg";
import { motion } from "framer-motion";

export default function HeroSection({loc}) {
  const [isMapExpanded, setIsMapExpanded] = useState(false);
  // console.log("location data",loc);
  
  const toggleMap = () => {
    setIsMapExpanded(!isMapExpanded);
  };
  return (
    <>
      {/* Full-screen map overlay */}
      {isMapExpanded && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4"
          onClick={toggleMap}
        >
          <div className="relative w-full h-full max-w-6xl max-h-[80vh] rounded-lg overflow-hidden">
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
      )}

      {/* Main content */}
      <div className="flex flex-col md:flex-row w-full lg:h-[500px] md:h-[430px] h-auto relative ">
        {/* Left Section - Content with containers class */}
        <div className="w-full md:w-1/2 flex items-center justify-center p-6 md:p-8  order-2 md:order-none relative mt-[105px] md:mt-0">
          {/* Corner arrows */}
          <Image
            src={topleft}
            alt="Top Left Decoration"
            className="absolute top-1 md:top-10 left-5 md:left-10 lg:left-14 xl:left-37 2xl:left-38 lg:w-[26px] lg:h-[24px] md:w-[17px] md:h-[16px] w-[15px] h-[14px]"
          />
          <Image
            src={topright}
            alt="Top Right Decoration"
            className="absolute top-1 md:top-10 right-6 md:right-20 lg:right-25 xl:right-40 2xl:right-55 lg:w-[26px] lg:h-[24px] md:w-[17px] md:h-[16px] w-[15px] h-[14px]"
          />
          <Image
            src={bottomleft}
            alt="Bottom Left Decoration"
            className="absolute bottom-0 md:bottom-10 left-5 md:left-10 lg:left-14 xl:left-37 2xl:left-38 lg:w-[26px] lg:h-[24px] md:w-[17px] md:h-[16px] w-[15px] h-[14px]"
          />
          <Image
            src={bottomright}
            alt="Bottom Right Decoration"
            className="absolute bottom-0 md:bottom-10 right-6 md:right-20 lg:right-25 xl:right-40 2xl:right-55 lg:w-[26px] lg:h-[24px] md:w-[17px] md:h-[16px] w-[15px] h-[14px]"
          />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
            className="containers max-w-md text-start md:pl-4 lg:pl-12"
          >
            <motion.h1
            variants={{
              hidden: {
                opacity: 0,
                clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)",
              },
              visible: {
                opacity: 1,
                clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
                transition: {
                  duration: 1.2,
                  ease: [0.2, 0.65, 0.3, 0.9],
                },
              },
            }}
              className="bg-clip-text text-transparent font-playfair font-normal lg:text-[40px] md:text-[32px] text-[24px] lg:leading-[40px] md:leading-[32px] leading-[24px]"
              style={{
                backgroundImage:
                  "linear-gradient(90.02deg, #0A0078 2.5%, #FF383B 43.53%)",
              }}
            >
              Get in Touch{" "}
            </motion.h1>
            <motion.h2 
            variants={{
              hidden: {
                opacity: 0,
                clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)",
              },
              visible: {
                opacity: 1,
                clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
                transition: {
                  duration: 1.2,
                  ease: [0.2, 0.65, 0.3, 0.9],
                },
              },
            }}
            className="font-open-sans text-start font-medium lg:text-[40px] md:text-[32px] text-[24px] lg:leading-[40px] md:leading-[32px] leading-[24px] mb-4">
              with Us
            </motion.h2>
            <motion.p 
             variants={{
              hidden: {
                opacity: 0,
                filter: "blur(4px)",
                y: 10,
              },
              visible: {
                opacity: 1,
                filter: "blur(0px)",
                y: 0,
                transition: {
                  delay: 0.4,
                  duration: 0.8,
                  ease: "easeOut",
                },
              },
            }}
            className="font-rubik font-normal lg:text-[16px] md:text-[14px] text-[12px] lg:leading-[24px] md:leading-[21px] leading-[18px] mb-6 text-[#121212] md:w-[75%] xl:w-[90%]">
              Reach out for expert guidance, admissions support, and answers to
              all your education-related queries
            </motion.p>
            <button
              className="flex items-center justify-center gap-2 text-white font-rubik font-medium md:text-[14px] text-[12px] leading-[20px] rounded-[6px] px-4 py-[6px]"
              style={{
                background:
                  "linear-gradient(90deg, #0A0078 5.5%, #FF383B 96.5%)",
              }}
            >
              Send a Message
              <Image src={arrow} alt="arrow" />
            </button>
          </motion.div>
        </div>
        {/* Right Section - Image */}
        <div className="w-full md:w-1/2 relative order-1 md:order-none h-[300px] md:h-auto">
          <Image
            src={heroImg}
            alt="Descriptive alt text"
            fill
            className="object-cover md:rounded-bl-[100px]"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>
        {/* Circular Map with Ring positioned at the center dividing line */}

        <div className="absolute left-1/2 md:top-1/2 top-[300px] transform -translate-x-1/2 -translate-y-1/2 z-10">
          <div className="relative w-[220px] h-[220px] md:w-[220px] md:h-[220px] lg:w-[250px] lg:h-[250px] xl:h-[300px] xl:w-[300px]">
            <a
              href="https://www.google.com/maps/place/Panchratna+(A)+Co+op.+Housing+Society+Ltd/@19.2004843,72.8265398,17z/data=!3m1!4b1!4m6!3m5!1s0x3be7b74ec2c18775:0x29c5d960d7559a01!8m2!3d19.2004843!4d72.8265398!16s%2Fg%2F11c1z3w0y4?entry=ttu"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute inset-0 z-[5]"
              aria-label="View on Google Maps"
            />
            <div className="absolute -inset-1 m-[15px] rounded-full overflow-hidden shadow-xl">
              <iframe
                // src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3770.9790556191876!2d72.8265398!3d19.2004843!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b74ec2c18775%3A0x29c5d960d7559a01!2sPanchratna%20(A)%20Co%20op.%20Housing%20Society%20Ltd!5e0!3m2!1sen!2sin!4v1712572441234!5m2!1sen!2sin"
                           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d593.329187304031!2d72.88926899999997!3d19.11561500000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9085f4e7399%3A0xffcae387220f04e6!2sHiranandani%20Business%20Park%20-%20Lightbridge!5e1!3m2!1sen!2sin!4v1754891958333!5m2!1sen!2sin"
                
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="pointer-events-none"
              />
            </div>
            <div className="absolute inset-0 z-10 pointer-events-none">
              <Image
                src={ring}
                alt="Decorative ring"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

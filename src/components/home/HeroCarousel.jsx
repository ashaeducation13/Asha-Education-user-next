import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import Image from "next/image";


import img1 from '../../assets/home/herosection/img1.webp'
import img2 from '../../assets/home/herosection/img2.webp'
import img3 from '../../assets/home/herosection/img3.webp'
import img4 from '../../assets/home/herosection/img4.webp'
import img5 from '../../assets/home/herosection/img5.webp'

const images = [
  img1, img2, img3, img4, img5, img3
];

export default function HeroCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const updateSlidePositions = (swiper) => {
    setActiveIndex(swiper.realIndex);
  };

  return (
    <Swiper
      modules={[Autoplay]}
      slidesPerView={5}
      spaceBetween={10}
      centeredSlides={true}
      loop={true}
      initialSlide={0}
      autoplay={{
        delay: 1800, // Change slides every 2.5 seconds
        disableOnInteraction: false, // Keeps autoplay running even after user interaction
      }}
      onSlideChange={updateSlidePositions}
      onSwiper={updateSlidePositions}
      className="w-full"
      breakpoints={{
        320: { slidesPerView: 1, spaceBetween: 5 },   // Mobile
        640: { slidesPerView: 3, spaceBetween: 8 },   // Tablets
        1024: { slidesPerView: 4, spaceBetween: 10 }, // Small desktops
        1280: { slidesPerView: 5, spaceBetween: 10 }, // Large desktops
        1536: { slidesPerView: 5, spaceBetween: 10 }, // XL screens
      }}
    >

      {images.map((src, index) => {
        const position = ((index - activeIndex) % images.length + images.length) % images.length;

        // Adjust padding for center slide without shrinking adjacent slides
        let extraPaddingClass = position === 0 ? "px-2" : "px-2";

        let marginTopClass = "";
        if (position === 0) marginTopClass = "mt-0";
        else if (position === 1 || position === images.length - 1) marginTopClass = "mt-10";
        else if (position === 2 || position === images.length - 2) marginTopClass = "mt-16";
        else marginTopClass = "mt-20";

        return (
          <SwiperSlide
            key={index}
            className={`flex justify-center items-center transition-all duration-700 ease-in-out transform ${marginTopClass} ${extraPaddingClass}`}
          >
            <div
              className={`rounded-lg overflow-hidden transition-transform duration-700 ease-in-out ${position === 0 ? "scale-110" : ""
                }`}
            >
              <Image
                src={src}
                alt={`Slide ${index + 1}`}
                className="w-[150px] h-[150px] sm:w-[180px] sm:h-[180px] md:w-[200px] md:h-[200px] lg:w-[223px] lg:h-[223px] object-cover"
              />
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>


  );
}
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const images = [
  "/herosection/img1.webp",
  "/herosection/img2.webp",
  "/herosection/img3.webp",
  "/herosection/img4.webp",
  "/herosection/img5.webp",
  "/herosection/img1.webp",
  "/herosection/img2.webp",
  "/herosection/img3.webp",
  "/herosection/img4.webp",
  "/herosection/img5.webp",
];

export default function HeroCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const updateSlidePositions = (swiper) => {
    setActiveIndex(swiper.realIndex);
  };

  return (
    <Swiper
      slidesPerView={5}
      spaceBetween={5}
      centeredSlides={true}
      loop={true}
      initialSlide={0}
      onSlideChange={updateSlidePositions}
      onSwiper={updateSlidePositions}
      className="w-full"
    >
      {images.map((src, index) => {
        // Calculate position relative to active slide (0 to 4)
        const position = ((index - activeIndex) % images.length + images.length) % images.length;
        
        // Apply different margin-top values based on position
        let marginTopClass = "";
        
        if (position === 0) marginTopClass = "mt-0"; // Center slide
        else if (position === 1 || position === images.length - 1) marginTopClass = "mt-10"; // Adjacent slides
        else if (position === 2 || position === images.length - 2) marginTopClass = "mt-16"; // Further slides
        else marginTopClass = "mt-20"; // Outermost visible slides
        
        return (
          <SwiperSlide key={index} className={`flex justify-center items-center transition-all duration-500 ${marginTopClass}`}>
            <img 
              src={src} 
              alt={`Slide ${index + 1}`} 
              className={`h-[223px] max-w-[223px] object-cover rounded-lg ${position === 0 ? "scale-110" : ""}`} 
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function HeroCarousel({ data }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    setIsInitialized(true);
  }, []);

  const updateSlidePositions = (swiper) => {
    setActiveIndex(swiper.realIndex);
  };

  const slideVariants = {
    center: {
      scale: 1.1,
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    },
    adjacent: {
      scale: 0.95,
      y: 40,
      opacity: 0.9,
      transition: { duration: 0.5, ease: "easeOut" }
    },
    outer: {
      scale: 0.9,
      y: 80,
      opacity: 0.8,
      transition: { duration: 0.5, ease: "easeOut" }
    },
    far: {
      scale: 0.85,
      y: 100,
      opacity: 0.7,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const getVariant = (position, totalSlides) => {
    if (position === 0) return "center";
    if (position === 1 || position === totalSlides - 1) return "adjacent";
    if (position === 2 || position === totalSlides - 2) return "outer";
    return "far";
  };

  return (
    <div className="w-full lg:max-w-[80%]">
      <Swiper
        modules={[Autoplay]}
        slidesPerView={5}
        spaceBetween={10}
        centeredSlides={true}
        loop={true}
        initialSlide={0}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        onSlideChange={updateSlidePositions}
        onSwiper={updateSlidePositions}
        className="w-full"
        breakpoints={{
          320: { slidesPerView: 3.5, spaceBetween: 4 },
          768: { slidesPerView: 5, spaceBetween: 10 },
        }}
      >
        {data.map((src, index) => {
          // Calculate position relative to activeIndex
          const position = ((index - activeIndex + data.length) % data.length);
          const variant = getVariant(position, data.length);

          return (
            <SwiperSlide
              key={src.id}
              virtualIndex={index}
              className="flex justify-center items-center py-10 md:py-20"
            >
              <motion.div
                initial={isInitialized ? false : variant}
                animate={variant}
                variants={slideVariants}
                whileHover={{ scale: variant === "center" ? 1.15 : 1.05 }}
                transition={{ duration: 0.2 }}
                className="rounded-lg overflow-hidden"
              >
                <Link href={`/universities/${src.id}`} className="block">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    className="relative rounded-lg overflow-hidden w-[150px] h-[100px] sm:w-[180px] sm:h-[180px] md:w-[200px] md:h-[170px] lg:w-[223px] lg:h-[223px]"
                  >
                    <Image
                      src={src.cover_image}
                      alt={`University ${index + 1}`}
                      fill
                      sizes="(max-width: 768px) 180px, (max-width: 1024px) 200px, 223px"
                      className="object-cover rounded-lg"
                      quality={90}
                      priority={index < 3}
                    />
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0 flex items-center justify-center text-white text-center px-2 text-sm sm:text-base font-semibold"
                      style={{ backgroundColor: "rgba(0, 0, 0, 0.56)" }} //  56% black
                    >
                      {src.name}
                    </motion.div>


                  </motion.div>
                </Link>
              </motion.div>
            </SwiperSlide>

          );
        })}
      </Swiper>
    </div>
  );
}
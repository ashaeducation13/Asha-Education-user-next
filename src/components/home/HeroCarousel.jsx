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
import Link from "next/link";

const images = [
  img1, img2, img3, img4, img5, img3
];

export default function HeroCarousel({ data }) {
  const [activeIndex, setActiveIndex] = useState(0);
  console.log("univ data", data[0].cover_image);

  const updateSlidePositions = (swiper) => {
    setActiveIndex(swiper.realIndex);
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
          delay: 1800,
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
          const position = ((index - activeIndex) % images.length + images.length) % images.length;

          return (
            <SwiperSlide
              key={index}
              className={`flex justify-center py-10 md:py-20 items-center transition-all duration-700 ease-in-out transform ${position === 1 || position === images.length - 1 ? "mt-10" :
                  position === 2 || position === images.length - 2 ? "mt-16" :
                    position === 0 ? "mt-0" : "mt-20"
                }`}
            >
              <div
                className={`rounded-lg overflow-hidden transition-transform duration-700 ease-in-out ${position === 0 ? "scale-110" : "scale-90"
                  }`}
              >
                <Link href={`/universities/${src.id}`} >
                  <Image
                    src={src.cover_image}
                    alt={`Slide ${index + 1}`}
                    width={223}
                    height={223}
                    quality={90}
                    className="w-[150px] h-[100px] sm:w-[180px] sm:h-[180px] md:w-[200px] md:h-[170px] lg:w-[223px] lg:h-[223px] object-cover rounded-lg"
                  />
                </Link>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
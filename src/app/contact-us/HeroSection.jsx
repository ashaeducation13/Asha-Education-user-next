import Image from "next/image";
import ring from "../../assets/contact-us/ring.png";
import globe from "../../assets/contact-us/globe.png";
import heroImg from "../../assets/contact-us/heroImg.png";
import topright from "../../../public/topright.svg";
import topleft from "../../../public/topleft.svg";
import bottomright from "../../../public/bottomright.svg";
import bottomleft from "../../../public/bottomleft.svg";

export default function HeroSection() {
  return (
    <div className="relative grid grid-cols-1 md:grid-cols-2 bg-white">
      {/* Image section - will appear first on mobile (order-1) and second on desktop */}
      <div className="order-1 md:order-2">
        <Image
          src={heroImg}
          alt=""
          className="w-full lg:h-full h-[430px] object-cover object-center"
        />
      </div>

      {/* Content section - will appear second on mobile (order-2) and first on desktop */}
      <div className="order-2 md:order-1 flex flex-col items-center justify-center pr-20 mt-30">
        <div className="relative flex flex-col space-y-2 lg:h-[450px] md:h-[300px] lg:w-[450px] md:w-[250px] items-start justify-center lg:pl-23 md:pl-12 pl-10 pt-10">
          <Image
            src={topleft}
            alt="Top Left Decoration"
            className="absolute top-0 left-0 w-[30px] h-[30px]"
          />

          {/* Top Right Corner */}
          <Image
            src={topright}
            alt="Top Right Decoration"
            className="absolute top-0 right-0 w-[30px] h-[30px]"
          />

          {/* Bottom Left Corner */}
          <Image
            src={bottomleft}
            alt="Bottom Left Decoration"
            className="absolute bottom-0 left-0 w-[30px] h-[30px]"
          />

          {/* Bottom Right Corner */}
          <Image
            src={bottomright}
            alt="Bottom Right Decoration"
            className="absolute bottom-0 right-0 w-[30px] h-[30px]"
          />

          <h1
            className="bg-clip-text text-transparent font-playfair font-normal lg:text-[40px] md:text-[32px] text-[24px] lg:leading-[40px] md:leading-[32px] leading-[24px] "
            style={{
              backgroundImage:
                "linear-gradient(90.02deg, #0A0078 2.5%, #FF383B 43.53%)",
            }}
          >
            Get in Touch{" "}
          </h1>
          <h1 className="font-open-sans font-medium lg:text-[40px] md:text-[32px] text-[24px] lg:leading-[40px] md:leading-[32px] leading-[24px] mb-4">
            Touch with Us
          </h1>
          <p className="font-rubik font-normal lg:text-[16px] md:text-[14px] text-[12px] lg:leading-[24px] md:leading-[21px] leading-[18px] mb-8 text-[#121212]">
            We're here to help! Reach out for inquiries <br /> about admissions,
            courses, or partnerships
          </p>
          <button
            className="text-white font-rubik font-medium md:text-[14px] text-[12px] leading-[20px] rounded-[6px] w-[150px] h-[40px]"
            style={{
              background: "linear-gradient(90deg, #0A0078 5.5%, #FF383B 96.5%)",
            }}
          >
            Send a Message
          </button>
        </div>
      </div>

      {/* Globe and ring images - positioned absolutely */}
      <div className="absolute left-[calc(50%+50px)] md:left-1/2 top-[calc(50%+110px)] md:top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[326px] h-[326px]">
        <Image
          src={ring}
          alt="Green Ring"
          className="absolute md:inset-0 -inset-13 w-full h-full lg:scale-[1.1] md:scale-75 scale-75"
        />
        <Image
          src={globe}
          alt="Globe"
          className="absolute lg:inset-0 md:inset-13 lg:w-full lg:h-full md:size-[225px] size-[220px]"
        />
      </div>
    </div>
  );
}

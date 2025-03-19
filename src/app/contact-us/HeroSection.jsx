export default function HeroSection() {
  return (
    <div className="relative grid grid-cols-1 md:grid-cols-2 bg-white">
      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[326px] h-[326px]">
        <img
          src="/contact-us/ring.png"
          alt="Green Ring"
          className="absolute inset-0 w-full h-full scale-[1.1]"
        />
        {/* Globe Image */}
        <img
          src="/contact-us/globe.png"
          alt="Globe"
          className="absolute inset-0 w-full h-full"
        />
      </div>
      {/* <img src="/contact-us/globe.png" alt="Globe" className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[326px] h-[326px]" /> */}
      <div className="flex flex-col items-center justify-center ">
        <div className="relative flex flex-col space-y-2  h-[500px] w-[400px] items-center justify-center">
          <img
            src="/topleft.svg"
            alt="Top Left Decoration"
            className="absolute top-0 left-0 w-[30px] h-[30px]"
          />

          {/* Top Right Corner */}
          <img
            src="/topright.svg"
            alt="Top Right Decoration"
            className="absolute top-0 right-0 w-[30px] h-[30px]"
          />

          {/* Bottom Left Corner */}
          <img
            src="/bottomleft.svg"
            alt="Bottom Left Decoration"
            className="absolute bottom-0 left-0 w-[30px] h-[30px]"
          />

          {/* Bottom Right Corner */}
          <img
            src="/bottomright.svg"
            alt="Bottom Right Decoration"
            className="absolute bottom-0 right-0 w-[30px] h-[30px]"
          />

          <h1
            className="bg-clip-text text-transparent font-playfair font-normal text-[40px] leading-[40px]"
            style={{
              backgroundImage:
                "linear-gradient(90.02deg, #0A0078 2.5%, #FF383B 43.53%)",
            }}
          >
            Get in Touch{" "}
          </h1>
          <h1 className="font-open-sans font-medium text-[40px] leading-[40px] mb-4">
            Touch with Us
          </h1>
          <p className="font-rubik font-normal text-[16px] leading-[24px] mb-8">
            We're here to help! Reach out for inquiries <br /> about admissions,
            courses, or partnerships
          </p>
          <button
            className="text-white rounded-[6px] w-[150px] h-[40px]"
            style={{
              background: "linear-gradient(90deg, #0A0078 5.5%, #FF383B 96.5%)",
            }}
          >
            Send a Message
          </button>
        </div>
      </div>
      <div>
        <img src="/contact-us/heroImg.png" alt="" className="w-full" />
      </div>
    </div>
  );
}

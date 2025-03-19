import React from "react";


const HeroSecetion = () => {
  return (
    <>
      <section
        className=" w-full mx-auto text-center py-5 bg-[#F5F5F5]"
        style={{ backdropFilter: "blur(44px)" }}
      >
        <div className="w-[80%] mx-auto">
          <h1 className="text-[40px] leading-[100%] font-normal">
            <span
              className="bg-clip-text text-transparent font-playfair"
              style={{
                backgroundImage:
                  "linear-gradient(90.02deg, #0A0078 2.5%, #FF383B 43.53%)",
              }}
            >
              Best College
            </span>{" "}
            For POST
            <br /> Graduations
          </h1>
          <p className="font-rubik font-medium pt-3">
            Committed to guiding students toward the best universities in India.
          </p>
        </div>
      </section>
    </>
  );
};

export default HeroSecetion;

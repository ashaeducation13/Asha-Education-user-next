import React from 'react'

const Herosection = () => {
  return (
    <>
      <section
        className=" w-full mx-auto text-center py-5 bg-[#F5F5F5]"
        style={{ backdropFilter: "blur(44px)" }}
      >
        <div className="w-[80%] mx-auto">
          <h1 className="text-[24px] md:text-[32px] lg:text-[40px] leading-[100%] font-medium font-open-sans">
            <span
              className="bg-clip-text text-transparent font-normal font-playfair"
              style={{
                backgroundImage:
                  "linear-gradient(90.02deg, #0A0078 2.5%, #FF383B 43.53%)",
              }}
            >
              Let's Find out
            </span>{" "}
            Best Program
            <br /> In Your Dream
          </h1>
          <p className="font-rubik text-[12px] md:text-[14px] lg:text-[16px] font-normal pt-3">
            Committed to guiding students toward the best universities in India.
          </p>
        </div>
      </section>
    </>
  )
}

export default Herosection

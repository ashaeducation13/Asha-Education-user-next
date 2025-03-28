import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Listing from "./Listing";
import HeroSecetion from "./Herosection";


const page = () => {
  return (
    <>
      {/* <Navbar /> */}
      <HeroSecetion />
      <Listing />
      {/* <Footer  /> */}
    </>
  );
};

export default page;

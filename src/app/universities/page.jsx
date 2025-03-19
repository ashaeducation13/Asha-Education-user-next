import React from "react";
import HeroSecetion from "./HeroSecetion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Listing from "./Listing";

const page = () => {
  return (
    <>
      <Navbar />
      <HeroSecetion />
      <Listing />
      <Footer />
    </>
  );
};

export default page;

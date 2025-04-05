import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Listing from "./Listing";
import HeroSecetion from "./Herosection";
import { UniversityFetch } from "@/services/api";


export default async function page() {
  const universityData = await UniversityFetch();

  return (
    <>
      <Navbar />
      <HeroSecetion />
      <Listing data={universityData}/>
      <Footer  />
    </>
  );
};


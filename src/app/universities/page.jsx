import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Listing from "./Listing";
import HeroSecetion from "./Herosection";
import { UniversityFetch } from "@/services/api";

export const dynamic = "force-dynamic";

export default async function page() {
  const universityData = await UniversityFetch();

  return (
    <>
      <Navbar />
      <HeroSecetion  data={universityData} />
      <Footer  />
    </>
  );
};


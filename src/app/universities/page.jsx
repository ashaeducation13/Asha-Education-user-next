import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Listing from "./Listing";
import HeroSecetion from "./Herosection";
import { SeoFetch, UniversityFetch } from "@/services/api";

export const dynamic = "force-dynamic";

export async function generateMetadata() {

  const seo = await SeoFetch('universities')  


  return {
    title: seo.meta_title,
    description: seo.meta_description,
  };
}

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


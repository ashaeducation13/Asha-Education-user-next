import React from "react";
import HeroSecetion from "./HeroSecetion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Listing from "./Listing";
import { ProgramFetch, SeoFetch } from "@/services/api";

export const dynamic = "force-dynamic";

export async function generateMetadata() {

  const seo = await SeoFetch('comparison')  


  return {
    title: seo.meta_title,
    description: seo.meta_description,
  };
}

export default async function page (){
    const prData = await ProgramFetch();

  return (
    <>
      <Navbar />
      <HeroSecetion />
      <Listing data={prData}/>
      <Footer />
    </>
  );
};
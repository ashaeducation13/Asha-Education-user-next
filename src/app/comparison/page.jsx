import React from "react";
import HeroSecetion from "./HeroSecetion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Listing from "./Listing";
import { ProgramFetch } from "@/services/api";

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
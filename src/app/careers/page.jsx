import React from "react";
import HeroSection from "./HeroSection";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JobList from "./JobList";
import Connect from "../../components/Forms/Connect";
import Whyjoin from "./Whyjoin";
import { ExoppFetch, JobFetch, SeoFetch } from "@/services/api";

export const dynamic = "force-dynamic";
export async function generateMetadata() {

  const seo = await SeoFetch('careers')  


  return {
    title: seo.meta_title,
    description: seo.meta_description,
  };
}
export default async function page (){
  const jobdata = await JobFetch();
  const exData = await ExoppFetch();
  
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Whyjoin />
      <JobList jobs={jobdata} ex={exData}/>
      <Connect />
      <Footer />
    </div>
  );
}
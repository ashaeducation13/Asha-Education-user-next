import React from "react";
import HeroSection from "./HeroSection";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JobList from "./JobList";
import Connect from "../../components/Forms/Connect";
import Whyjoin from "./Whyjoin";
import { ExoppFetch, JobFetch } from "@/services/api";

export default async function page (){
  const jobdata = await JobFetch();
  const exData = await ExoppFetch();
  console.log("exclusive opportunites",exData);
  
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
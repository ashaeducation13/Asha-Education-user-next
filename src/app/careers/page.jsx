import React from "react";
import HeroSection from "./HeroSection";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JobList from "./JobList";
import Connect from "./Connect";

function page() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <JobList />
      <Connect />
      <Footer />
    </div>
  );
}

export default page;

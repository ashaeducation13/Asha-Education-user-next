"use client";
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'
import HeroSection from './HeroSection'
import CertificationSection from './CertificationSection'
import Innerlisting from './Innerlisting';

const page = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <CertificationSection />
      <Innerlisting /> 
      <Footer />

    </>
  )
}

export default page

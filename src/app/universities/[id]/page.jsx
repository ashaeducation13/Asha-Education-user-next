import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'
import HeroSection from './HeroSection'
import CertificationSection from './CertificationSection'
import Innerlisting from './Innerlisting';
import { fetchUniversityById } from '@/services/api';

export default async function page ({params}){
  const id  = params.id; 
  const universityData = await fetchUniversityById(id);
  const certifications = universityData.certifications
  const programs = universityData.programs
  console.log(universityData);
  
  return (
    <>
      <Navbar />
      <HeroSection data={universityData}/>
      <CertificationSection  data ={certifications}/>
      <Innerlisting data={programs} /> 
      <Footer />
    </>
  )
}
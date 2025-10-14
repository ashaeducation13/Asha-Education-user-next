import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'
import HeroSection from './HeroSection'
import CertificationSection from './CertificationSection'
import Innerlisting from './Innerlisting';
import { fetchUniversityById, SeoFetch } from '@/services/api';

export async function generateMetadata() {

  const seo = await SeoFetch('university_inner')  


  return {
    title: seo.meta_title,
    description: seo.meta_description,
  };
}
export default async function page ({params}){
  const slug  = params.id; 
  const universityData = await fetchUniversityById(slug);
  const certifications = universityData.certifications
  const programs = universityData.programs
  
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
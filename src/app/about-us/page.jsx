import React from 'react'
import HeroSection from './HeroSection'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import MissionVision from './MissionVision'
import WhyStudent from './WhyStudent'
import SuccessfullStudents from './SuccessfullStudents'
import WeHelp from './WeHelp'
import OurGrowth from './OurGrowth'
import { AboutusFetch, TestimonialFetch } from '@/services/api'

export const dynamic = "force-dynamic";

export default async function page() {
    const testimData = await TestimonialFetch() 
    const aboutusData = await AboutusFetch();
    const data= aboutusData[0]
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <MissionVision data={data}/>
      <WhyStudent/>
      {/* <OurGrowth /> */}
      <SuccessfullStudents data={testimData}/>
      <WeHelp data={data}/>
      <Footer/>
    </div>
  )
}



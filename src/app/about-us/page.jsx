import React from 'react'
import HeroSection from './HeroSection'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import MissionVision from './MissionVision'
import WhyStudent from './WhyStudent'
import SuccessfullStudents from './SuccessfullStudents'
import WeHelp from './WeHelp'
import OurGrowth from './OurGrowth'
import { AboutusFetch } from '@/services/api'

export default async function page() {
    const aboutusData = await AboutusFetch();
    const data= aboutusData[0]
    console.log("data", data); 
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <MissionVision data={data}/>
      <WhyStudent/>
      <OurGrowth />
      <SuccessfullStudents/>
      <WeHelp data={data}/>
      <Footer/>
    </div>
  )
}



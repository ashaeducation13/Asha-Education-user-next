import React from 'react'
import HeroSection from './HeroSection'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import MissionVision from './MissionVision'
import WhyStudent from './WhyStudent'
import SuccessfullStudents from './SuccessfullStudents'

function page() {
  return (
    <div>
        <Navbar/>
      <HeroSection/>
      <MissionVision/>
      <WhyStudent/>
      <SuccessfullStudents/>
      <Footer/>
    </div>
  )
}

export default page

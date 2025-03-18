import React from 'react'
import HeroSection from './HeroSection'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import MissionVision from './MissionVision'

function page() {
  return (
    <div>
        <Navbar/>
      <HeroSection/>
      <MissionVision/>
      <Footer/>
    </div>
  )
}

export default page

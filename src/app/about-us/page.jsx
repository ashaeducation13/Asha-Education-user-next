import React from 'react'
import HeroSection from './HeroSection'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import MissionVision from './MissionVision'
import WhyStudent from './WhyStudent'
import SuccessfullStudents from './SuccessfullStudents'
import WeHelp from './WeHelp'
import OurGrowth from './OurGrowth'

function page() {
  return (
    <div>
      <Navbar/>
      {/* <HeroSection/> */}
      {/* <MissionVision/> */}
      {/* <WhyStudent/> */}
      <OurGrowth />
      {/* <SuccessfullStudents/> */}
      {/* <WeHelp/> */}
      {/* <Footer/> */}
    </div>
  )
}

export default page

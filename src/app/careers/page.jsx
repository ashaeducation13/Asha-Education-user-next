import React from 'react'
import HeroSection from './HeroSection'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import JobList from './JobList'


function page() {
  return (
    <div>
        {/* <Navbar/> */}
      <HeroSection/>
      <JobList/>
      {/* <Footer/> */}
    </div>
  )
}

export default page 

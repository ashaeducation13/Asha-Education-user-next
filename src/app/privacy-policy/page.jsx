import Navbar from '@/components/Navbar'
import React from 'react'
import Footer from '@/components/Footer'
import PrivacyPolicy from './privacy'

const page = () => {
  return (
    <>
      <Navbar />
        <PrivacyPolicy />
        <Footer />
    </>
  )
}

export default page

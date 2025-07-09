import Navbar from '@/components/Navbar'
import React from 'react'
import TermsAndConditions from './TermsAndConditions'
import Footer from '@/components/Footer'

const page = () => {
  return (
    <>
      <Navbar />
        <TermsAndConditions />
        <Footer />
    </>
  )
}

export default page

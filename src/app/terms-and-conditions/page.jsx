import Navbar from '@/components/Navbar'
import React from 'react'
import TermsAndConditions from './TermsAndConditions'
import Footer from '@/components/Footer'
import { SeoFetch } from '@/services/api'

export const dynamic = 'force-dynamic';
export async function generateMetadata() {

  const seo = await SeoFetch('terms-and-conditions')  

  return {
    title: seo.meta_title,
    description: seo.meta_description,
  };
}

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

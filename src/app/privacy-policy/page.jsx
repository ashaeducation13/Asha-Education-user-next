import Navbar from '@/components/Navbar'
import React from 'react'
import Footer from '@/components/Footer'
import PrivacyPolicy from './privacy'
import { SeoFetch } from '@/services/api'

export const dynamic = 'force-dynamic';

export async function generateMetadata() {

  const seo = await SeoFetch('privacy_policy')  

  return {
    title: seo.meta_title,
    description: seo.meta_description,
  };
}
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

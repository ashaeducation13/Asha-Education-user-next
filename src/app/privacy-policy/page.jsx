import Navbar from '@/components/Navbar'
import React from 'react'
import Footer from '@/components/Footer'
import PrivacyPolicy from './privacy'
import { SeoFetch } from '@/services/api'

export const dynamic = 'force-dynamic';

export async function generateMetadata() {
  try {
    const seo = await SeoFetch('privacy_policy');
    return {
      title: seo?.meta_title || "Privacy Policy | Asha Education",
      description: seo?.meta_description || "Read the privacy policy of Asha Education."
    };
  } catch (error) {
    return {
      title: "Privacy Policy | Asha Education",
      description: "Read the privacy policy of Asha Education.",
      alternates: {
      canonical: "https://www.asha.education/privacy-policy",
    },
    };
  }
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

import Navbar from '@/components/Navbar'
import React from 'react'
import TermsAndConditions from './TermsAndConditions'
import Footer from '@/components/Footer'
import { SeoFetch } from '@/services/api'

export const dynamic = 'force-dynamic';
export async function generateMetadata() {
  try {
    const seo = await SeoFetch('terms-and-conditions');

    return {
      title: seo?.meta_title || "Terms & Conditions | Asha Education",
      description:
        seo?.meta_description ||
        "Read the Terms and Conditions for using Asha Education’s website and services.",
    };
  } catch (error) {
    console.error("SEO fetch failed (terms-and-conditions):", error);
    return {
      title: "Terms & Conditions | Asha Education",
      description:
        "Read the Terms and Conditions for using Asha Education’s website and services.",
    };
  }
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

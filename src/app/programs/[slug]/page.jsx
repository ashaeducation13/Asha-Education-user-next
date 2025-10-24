import HeroSection from './HeroSection'
import CertificationSection from './CertificationSection'
import { ProgramFetchById, SeoFetch } from '@/services/api';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export async function generateMetadata({ params }) {
  try {
    // Fetch global programs_inner SEO defaults
    const seo = await SeoFetch('programs_inner');

    return {
      title:
        seo?.meta_title ||
        "Program Overview & Admission Info | Asha Education",
      description:
        seo?.meta_description ||
        "Get full details on online UG & PG programs — curriculum, eligibility, fees, and universities offering the course. Apply easily with Asha Education.",
    };
  } catch (error) {
    console.error("SEO fetch failed (programs_inner):", error);
    return {
      title: "Program Overview & Admission Info | Asha Education",
      description:
        "Get full details on online UG & PG programs — curriculum, eligibility, fees, and universities offering the course. Apply easily with Asha Education.",
    };
  }
}


export default async function page({ params }) {
  const slug = params.slug;
  const prData = await ProgramFetchById(slug);
  
  return (
    <div>
        <Navbar />

        <HeroSection data={prData} />
        <CertificationSection data={prData}  />
        <Footer/>
    </div>
  )
}

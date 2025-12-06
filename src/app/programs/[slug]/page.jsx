import HeroSection from './HeroSection'
import CertificationSection from './CertificationSection'
import { ProgramFetchById, SeoFetch } from '@/services/api';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HtmlContentSection from './HtmlContentSection';

export async function generateMetadata({ params }) {
  try {
    const seo = await SeoFetch('programs_inner');
    return {
      title:
        seo?.meta_title ||
        "Program Overview & Admission Info | Asha Education",
      description:
        seo?.meta_description ||
        "Get full details on online UG & PG programs — curriculum, eligibility, fees, and universities offering the course. Apply easily with Asha Education.",
        alternates: {
        canonical: `https://www.asha.education/programs/${seo?.slug}`,
      },
    };
  } catch (error) {
    console.error("SEO fetch failed (programs_inner):", error);
    return {
      title: "Program Overview & Admission Info | Asha Education",
      description:
        "Get full details on online UG & PG programs — curriculum, eligibility, fees, and universities offering the course. Apply easily with Asha Education.",
      alternates: {
        canonical: `https://www.asha.education/programs/${seo?.slug}`,
      },
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
        {/* 🔥 Only render if html exists */}
      {prData?.html_content && <HtmlContentSection data={prData.html_content} />}

        <Footer/>
    </div>
  )
}
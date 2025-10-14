import HeroSection from './HeroSection'
import CertificationSection from './CertificationSection'
import { ProgramFetchById, SeoFetch } from '@/services/api';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';


export async function generateMetadata() {

  const seo = await SeoFetch('programs_inner')  
  return {
    title: seo.meta_title,
    description: seo.meta_description,
  };
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

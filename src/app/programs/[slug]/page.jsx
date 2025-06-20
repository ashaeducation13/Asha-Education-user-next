import HeroSection from './HeroSection'
import CertificationSection from './CertificationSection'
import { ProgramFetchById } from '@/services/api';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

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

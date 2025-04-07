import HeroSection from './HeroSection'
import CertificationSection from './CertificationSection'
import { ProgramFetchById } from '@/services/api';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default async function page({ params }) {
  const programId = params.slug;
  const prData = await ProgramFetchById(programId);
  
  return (
    <div>
        <Navbar />

        <HeroSection data={prData} />
        <CertificationSection />
        <Footer/>
    </div>
  )
}

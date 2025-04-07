import HeroSection from './HeroSection'
import CertificationSection from './CertificationSection'
import { ProgramFetchById } from '@/services/api';

export default async function page({ params }) {
  const programId = params.slug;
  const prData = await ProgramFetchById(programId);
  
  return (
    <div>
        <HeroSection data={prData} />
        <CertificationSection />
    </div>
  )
}

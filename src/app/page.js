import Navbar from "@/components/Navbar";
import Herosection from "./(home)/Herosection";
import Footer from "@/components/Footer";
import Universities from "./(home)/Universities";
import ProgramSection from "./(home)/ProgramSection";
import TrustSection from "./(home)/TrustSection";
import CounselSection from "./(home)/CounselSection";
import SuccessfulStudents from "./about-us/SuccessfullStudents";
import InformedSection from "./(home)/InformedSection";
import CommunitySection from "./(home)/CommunitySection";
import { ProgramFetch, SpecializationFetch, TestimonialFetch, TypeFetch, UniversityFetch } from "@/services/api";

export default async function Home() {
  const universityData = await UniversityFetch();
  const testimData = await TestimonialFetch();
  const prData = await ProgramFetch();


  const spData = await SpecializationFetch();
  return (
    <>
      <Navbar />
      <Herosection spData={prData}universityData={universityData}/>
      <Universities data={universityData} />
      <ProgramSection />
      <TrustSection />
      <CounselSection />
      <SuccessfulStudents data={testimData} />
      <InformedSection />
      <CommunitySection />
      <Footer />
    </>
  );
}

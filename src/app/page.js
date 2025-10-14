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
import { BlogFetch, ProgramFetch, SeoFetch, SpecializationFetch, TestimonialFetch, TypeFetch, UniversityFetch } from "@/services/api";
import Head from 'next/head';

export const dynamic = "force-dynamic";

export async function generateMetadata() {

  const seo = await SeoFetch('home')  


  return {
    title: seo.meta_title,
    description: seo.meta_description,
  };
}
export default async function Home() {
  const universityData = await UniversityFetch();
  const testimData = await TestimonialFetch();
  const prData = await ProgramFetch();

  const blogdata = await BlogFetch()
  const blogdata2 = blogdata.slice(-4)


  // const spData = await SpecializationFetch();
  return (
    <>
      <Head>
        <link rel="canonical" href="https://www.asha.education/" />
      </Head>
      <Navbar />
      <Herosection spData={prData} universityData={universityData} />
      <Universities data={universityData} />
      <ProgramSection />
      <TrustSection />
      <CounselSection />
      <SuccessfulStudents data={testimData} />
      <InformedSection data={blogdata2} />
      <CommunitySection />
      <Footer />
    </>
  );
}

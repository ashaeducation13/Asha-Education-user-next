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

export default function Home() {
  return (
    <>
      <Navbar />
      <Herosection />
      <Universities />
      <ProgramSection />
      <TrustSection />
      <CounselSection />
      <SuccessfulStudents />
      <InformedSection />
      <CommunitySection />
      <Footer />
    </>
  );
}

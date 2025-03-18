import Navbar from "@/components/Navbar";
import Herosection from "./(home)/Herosection";
import Footer from "@/components/Footer";
import Universities from "./(home)/Universities";
import ProgramSection from "./(home)/ProgramSection";
import TrustSection from "./(home)/TrustSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <Herosection />
      <Universities />
      <ProgramSection />
      <TrustSection />
      <Footer />
    </>
  );
}

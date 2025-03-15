import Navbar from "@/components/Navbar";
import Herosection from "./(home)/Herosection";
import Footer from "@/components/Footer";
import Universities from "./(home)/Universities";

export default function Home() {
  return (
    <>
      <Navbar />
      <Herosection />
      <Universities />
      <Footer />
    </>
  );
}

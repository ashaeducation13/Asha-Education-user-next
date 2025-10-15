import Navbar from "@/components/Navbar";
import HeroSection from "./HeroSection";
import ReferralForm from "../../components/Forms/ReferForm";
import ReferralPolicy from "./ReferralPolicy";
import WhyAndHow from "./WhyAndHow";
import Footer from "@/components/Footer";
import { SeoFetch } from "@/services/api";

export const dynamic = 'force-dynamic';
export async function generateMetadata() {

  const seo = await SeoFetch('refer-and-earn')  


  return {
    title: seo.meta_title,
    description: seo.meta_description,
  };
}
export default function page() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <WhyAndHow />
      <ReferralPolicy />
      <ReferralForm />
      <Footer />
    </>
  )
}

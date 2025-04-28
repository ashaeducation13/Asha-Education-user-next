import Navbar from "@/components/Navbar";
import HeroSection from "./HeroSection";
import ReferralForm from "./ReferForm";
import ReferralPolicy from "./ReferralPolicy";
import WhyAndHow from "./WhyAndHow";

export default function page() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <WhyAndHow />
      <ReferralPolicy />
      <ReferralForm />
    </>
  )
}

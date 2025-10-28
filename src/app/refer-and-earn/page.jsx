import Navbar from "@/components/Navbar";
import HeroSection from "./HeroSection";
import ReferralForm from "../../components/Forms/ReferForm";
import ReferralPolicy from "./ReferralPolicy";
import WhyAndHow from "./WhyAndHow";
import Footer from "@/components/Footer";
import { SeoFetch } from "@/services/api";

export const dynamic = 'force-dynamic';
export async function generateMetadata() {
  try {
    const seo = await SeoFetch('refer-and-earn');

    return {
      title: seo?.meta_title || "Refer & Earn Rewards | Asha Education Referral Program",
      description:
        seo?.meta_description ||
        "Invite your friends and earn exciting rewards with Asha Education’s Refer & Earn program.",
        alternates: {
        canonical: "https://www.asha.education/refer-and-earn",
      },
    };
  } catch (error) {
    console.error("SEO fetch failed (refer-and-earn):", error);
    return {
      title: "Refer & Earn Rewards | Asha Education Referral Program",
      description:
        "Invite your friends and earn exciting rewards with Asha Education’s Refer & Earn program.",
      alternates: {
        canonical: "https://www.asha.education/refer-and-earn",
      },
    };
  }
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

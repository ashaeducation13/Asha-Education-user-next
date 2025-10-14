import Navbar from "@/components/Navbar";
import Listing from "./Listing";
import Footer from "@/components/Footer";
import { BlogFetch, SeoFetch } from "@/services/api";

export const dynamic = "force-dynamic";

export async function generateMetadata() {

  const seo = await SeoFetch('blogs')  


  return {
    title: seo.meta_title,
    description: seo.meta_description,
  };
}

export default async function page() {
  const data = await BlogFetch()
  return (
    <div>
      <Navbar />
      <Listing data={data}/>
      <Footer />
    </div>
  )
}

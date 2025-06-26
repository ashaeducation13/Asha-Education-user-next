import Navbar from "@/components/Navbar";
import Listing from "./Listing";
import Footer from "@/components/Footer";
import { BlogFetch } from "@/services/api";

export const dynamic = "force-dynamic";

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

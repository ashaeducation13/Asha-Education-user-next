import Inner from "./Inner";
import Listing from "../Listing";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default async function page({params}) {
  const blogId = params.slug;
  return (
    <div>
      <Navbar />
      <Inner />
      <Footer />
    </div>
  )
}

import Navbar from "@/components/Navbar";
import BestCollege from "./BestCollege";
import ComparisonCard from "./ComparisonCard";
import Footer from "@/components/Footer";
import Modal from "./Modal";
import { ProsConsById } from "@/services/api";

export default async function Page({ params, searchParams }) {
  const slug = params.slug; // dynamic segment (like "id")
  const ids = searchParams?.ids?.split(',') || [];

  console.log("slug from URL:", slug);     // e.g. 'id'
  console.log("ids from query string:", ids); // e.g. ['1', '2']
    
    // const prData = await ProsConsById(id);
  
  return (
    <div>
      <Navbar />
      <BestCollege />
      <Footer />
      <Modal />
    </div>
  )
}
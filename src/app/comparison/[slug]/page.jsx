import Navbar from "@/components/Navbar";
import BestCollege from "./BestCollege";
import ComparisonCard from "./ComparisonCard";
import Footer from "@/components/Footer";
import Modal from "./Modal";
import { ProsConsById } from "@/services/api";

export default async function Page({ params, searchParams }) {
  const slug = params.slug; // dynamic segment (like "id")
  const ids = searchParams?.ids?.split(',') || [];

  const [id1, id2] = ids;

  const prData = await ProsConsById(id1);
  const prData2 = await ProsConsById(id2);

  
  return (
    <div>
      <Navbar />
      <BestCollege data1={prData} data2={prData2} />
      <Footer />
      <Modal />
    </div>
  )
}
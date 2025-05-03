import Navbar from "@/components/Navbar";
import BestCollege from "./BestCollege";
import ComparisonCard from "./ComparisonCard";
import Footer from "@/components/Footer";
import Modal from "./Modal";
import { ProgramFetch, ProsConsById } from "@/services/api";

export default async function Page({ params, searchParams }) {
  const ids = searchParams?.ids?.split(',') || [];
  const unselectedIds = searchParams?.unselectedIds?.split(',') || [];
  const allIds = [...new Set([...ids, ...unselectedIds])];


  const allProsCons = await Promise.all(
    allIds.map((id) => ProsConsById(id))
  );

  return (
    <div>
      <Navbar />
      <BestCollege selectedIds={ids}
      allProsCons={allProsCons}
      />
      <Footer />
      <Modal />
    </div>
  )
}
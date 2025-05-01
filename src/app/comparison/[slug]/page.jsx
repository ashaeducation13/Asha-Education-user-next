import Navbar from "@/components/Navbar";
import BestCollege from "./BestCollege";
import ComparisonCard from "./ComparisonCard";
import Footer from "@/components/Footer";
import Modal from "./Modal";
import { ProgramFetch, ProsConsById } from "@/services/api";

export default async function Page({ params, searchParams }) {
  const slug = params.slug; 
  const ids = searchParams?.ids?.split(',') || [];
  const spec = searchParams?.spec || "";  
  const pg = searchParams?.pg || ""; 


  const [id1, id2] = ids;
  const prData3 = await ProgramFetch();
  const prData = await ProsConsById(id1);
  const prData2 = await ProsConsById(id2);
  
  // const filteredData = prData3.filter((item) => {
  //   console.log("Checking item:", item);
  //   return (
  //     Number(item.specialization?.id) === Number(spec) &&
  //     Number(item.program_name?.id) === Number(pg)
  //   );
  // });
  console.log(pg);
  
  const filteredData = prData3.filter(
    (program) => String(program.specialization?.name) === String(pg)
  );
  
  return (
    <div>
      <Navbar />
      <BestCollege spec={filteredData} data1={prData} data2={prData2} />
      <Footer />
      <Modal />
    </div>
  )
}
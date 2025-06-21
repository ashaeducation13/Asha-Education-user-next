import Inner from "./Inner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BlogFetch, BlogSlugFetch } from "@/services/api";

export default async function page({params}) {
  const slug = params.id;
  const data = await BlogSlugFetch(slug);
    
  const blogdata = await BlogFetch()
  const latest = blogdata.filter(item => item.title !== data.title).slice(-3);

  
  return (
    <div>
      <Navbar />
      <Inner data={data} latest={latest}/>
      <Footer />
    </div>
  )
}

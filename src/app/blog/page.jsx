import Navbar from "@/components/Navbar";
import Inner from "./[id]/Inner";
import Listing from "./Listing";

import MainForm from "@/components/Forms/MainForm";
import Footer from "@/components/Footer";

export default function page() {
  return (
    <div>
      <Navbar />
      <Listing />
      <Footer />
    </div>
  )
}

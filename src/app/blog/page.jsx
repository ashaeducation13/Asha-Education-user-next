import Navbar from "@/components/Navbar";
import Inner from "./[id]/Inner";
import Listing from "./Listing";
import { Footer } from "antd/es/layout/layout";
import MainForm from "@/components/Forms/MainForm";

export default function page() {
  return (
    <div>
      <Navbar />
      <Listing />
      <Footer />
    </div>
  )
}

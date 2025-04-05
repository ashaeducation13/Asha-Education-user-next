import Navbar from "@/components/Navbar";
import Inner from "./Inner";
import Listing from "./Listing";
import { Footer } from "antd/es/layout/layout";
import MainForm from "@/components/Forms/MainForm";

export default function page() {
  return (
    <div>
      <Navbar />
      <Listing />
      <Inner />
      <Footer />
      {/* <MainForm /> */}
    </div>
  )
}

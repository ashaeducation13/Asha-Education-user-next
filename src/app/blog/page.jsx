import Navbar from "@/components/Navbar";
import Inner from "./Inner";
import Listing from "./Listing";
import { Footer } from "antd/es/layout/layout";

export default function page() {
  return (
    <div>
      <Navbar />
      {/* <Listing /> */}
      <Inner />
      <Footer />
    </div>
  )
}

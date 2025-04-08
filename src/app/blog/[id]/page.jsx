import Inner from "./Inner";
import Listing from "../Listing";

export default async function page({params}) {
  const blogId = params.slug;
  return (
    <div>
      <Inner />
    </div>
  )
}

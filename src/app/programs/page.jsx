import Navbar from '@/components/Navbar'
import React from 'react'
import Herosection from './Herosection'
import Listing from './Listing'
import Footer from '@/components/Footer'
import { ProgramFetch } from '@/services/api'

export default async function Page({ searchParams }) {
  const prData = await ProgramFetch();

  const selectedPgrm = searchParams?.pgrm || '';
  const selectedType = searchParams?.type || '';

  let filteredData = prData;

  if (selectedPgrm) {
    filteredData = prData.filter((item) =>
      item.category?.toLowerCase().includes(selectedPgrm.toLowerCase())
    );
  } else if (selectedType) {
    filteredData = prData.filter((item) =>
      item.specialization?.program_type_name?.toLowerCase()===(selectedType.toLowerCase())
    );
  }

  return (
    <>
      <Navbar />
      <Herosection />
      <Listing data={filteredData} />
      <Footer />
    </>
  );
}




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
  const mba = searchParams?.mba || '';
  const onlinepg = searchParams?.pg || '';
  const onlineug = searchParams?.ug || '';

  let filteredData = prData;

  if (selectedPgrm) {
    filteredData = prData.filter((item) =>
      item.categories?.some((category) =>
        category.name.toLowerCase().includes(selectedPgrm.toLowerCase())
      ) 
    );
  } else if (selectedType) {
    filteredData = prData.filter((item) =>
      item.specialization?.program_type_name?.toLowerCase()===(selectedType.toLowerCase())
    );
  } else if (mba) {
    filteredData = prData.filter((item) =>
      item.program_name?.name?.toLowerCase() === 'mba' &&
      item.mode_of_study === 'Online');
  }
  else if (onlinepg) {
    filteredData = prData.filter((item) =>
      item.specialization?.program_type_name?.toLowerCase()==='pg' &&
      item.mode_of_study === 'Online'
    );
  } else if (onlineug) {
    filteredData = prData.filter((item) =>
      item.specialization?.program_type_name?.toLowerCase()==='ug'&&
      item.mode_of_study === 'Online'
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




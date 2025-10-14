import Navbar from '@/components/Navbar'
import React from 'react'
import Herosection from './Herosection'
import Listing from './Listing'
import Footer from '@/components/Footer'
import { ProgramFetch, SeoFetch } from '@/services/api'

export const dynamic = "force-dynamic";

export async function generateMetadata() {

  const seo = await SeoFetch('programs')  


  return {
    title: seo.meta_title,
    description: seo.meta_description,
  };
}

export default async function Page({ searchParams }) {
  const prData = await ProgramFetch();

  const selectedPgrm = searchParams?.pgrm || '';
  const selectedType = searchParams?.type || '';
  const mba = searchParams?.mba || '';
  const onlinepg = searchParams?.pg || '';
  const onlineug = searchParams?.ug || '';
  const cert = searchParams?.cert || '';
  const ex = searchParams?.ex || '';

  let filteredData = prData;

  if (selectedPgrm) {
    filteredData = prData.filter((item) =>
      item.categories?.name?.toLowerCase().includes(selectedPgrm.toLowerCase())
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
      item.categories?.name?.toLowerCase() === 'pg'
       &&
      item.mode_of_study === 'Online')

  } else if (onlineug) {
    filteredData = prData.filter((item) =>
      item.categories?.name?.toLowerCase() === 'ug'
       &&
      item.mode_of_study === 'Online')

  } else if (cert) {
    filteredData = prData.filter((item) =>
      item.program_name?.name?.toLowerCase() === 'certifications');
  } else if (ex) {
    filteredData = prData.filter((item) =>
      item.is_executive_course
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




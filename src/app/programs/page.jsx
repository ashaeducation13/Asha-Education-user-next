import Navbar from '@/components/Navbar'
import React from 'react'
import Herosection from './Herosection'
import Listing from './Listing'
import Footer from '@/components/Footer'
import { ProgramFetch } from '@/services/api'

export default async function Page({ searchParams }) {
    const prData = await ProgramFetch();
    console.log("programData", prData);
    const selectedPgrm = searchParams?.pgrm || '' ;
    
    const filteredData = selectedPgrm
        ? prData.filter((item) =>
            item.category
                ?.toLowerCase()
                .includes(selectedPgrm.toLowerCase())
        )
        : prData; 
    return (
        <>
            <Navbar />
            <Herosection />
            <Listing data={filteredData}/>
            <Footer />
        </>
    )
}



import Navbar from '@/components/Navbar'
import React from 'react'
import Herosection from './Herosection'
import Listing from './Listing'
import Footer from '@/components/Footer'
import { ProgramFetch } from '@/services/api'

export default async function page() {
    const prData = await ProgramFetch();
    console.log("programData", prData);
    
    return (
        <>
            <Navbar />
            <Herosection />
            <Listing data={prData}/>
            <Footer />
        </>
    )
}



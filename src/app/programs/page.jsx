import Navbar from '@/components/Navbar'
import React from 'react'
import Herosection from './Herosection'
import Listing from './Listing'
import Footer from '@/components/Footer'

const page = () => {
    return (
        <>
            <Navbar />
            <Herosection />
            <Listing />
            <Footer />
        </>
    )
}

export default page

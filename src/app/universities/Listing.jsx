'use client'
import React, { useEffect, useState } from 'react'
import UnivCard from '@/components/universities/UnivCard';

const Listing = ({data}) => {
    const [univ, setUniv] = useState(data || []);
    console.log(univ);
    
    return (
        <>
            <section className='containers md:py-8 py-6'>

                <div className="flex flex-col gap-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-6 md:gap-4 gap-2">
                        {univ.map((item, index) => (
                            <UnivCard key={index} item={item}/>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Listing
    
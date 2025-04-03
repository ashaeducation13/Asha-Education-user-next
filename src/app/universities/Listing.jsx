'use client'
import React, { useEffect, useState } from 'react'
import { cardData } from '../comparison/Data'
import { Card } from '../comparison/Listing'
import { UniversityFetch } from '../../services/api';

const Listing = () => {
    const [univ, setUniv] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
      
    // useEffect(() => {
    //       const getData = async () => {
    //         setLoading(true);
    //         setError(null);
      
    //         const data = await UniversityFetch();
    //         console.log(data);
            
    //         if (data) {
    //             setUniv(data);
                
    //         } else {
    //           setError('Failed to load products');
    //         }
    //         setLoading(false);
    //       };
      
    //       getData();
    // }, []);

    return (
        <>
            <section className='containers md:py-8 py-6'>

                <div className="flex flex-col gap-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-6 md:gap-4 gap-2">
                        {/* {univ.map((item, index) => (
                            <Card key={index} item={item} />
                        ))} */}
                        {cardData.map((item, index) => (
                            <Card key={index} item={item} />
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Listing

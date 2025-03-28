import React from 'react'
import { cardData } from '../comparison/Data'
import { Card } from '../comparison/Listing'

const Listing = () => {
    return (
        <>
            <section className='containers md:py-8 py-6'>

                <div className="flex flex-col gap-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-6 md:gap-4 gap-2">
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

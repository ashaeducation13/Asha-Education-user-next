import React from 'react'
import { cardData } from '../comparison/Data'
import { Card } from '../comparison/Listing'

const Listing = () => {
    return (
        <>
            <section className='containers py-8'>

                <div className="flex flex-col gap-10">
                    <div className="grid grid-cols-3 gap-6">
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

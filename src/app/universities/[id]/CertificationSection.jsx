import React from 'react'
import ugcLogo from '../../../assets/universities/inner/UGC.svg'
import aiLogo from '../../../assets/universities/inner/aicte.svg'
import Certcard from './Certcard'


const certdata = [
    {
        imgSrc: ugcLogo,
        title: "UGC Certificate",
    },
    {
        imgSrc: aiLogo,
        title: "AICTE Certificate",
    },
]
const CertificationSection = () => {
    return (
        <>
            <section className='containers p-6 '>
                <div>
                    <h2 className="text-3xl font-medium font-open-sans">
                        Certifications
                    </h2>

                    <div className='grid grid-cols-4 py-6'>
                        {certdata.map((uni, index) => (
                            <Certcard key={index} imgSrc={uni.imgSrc} title={uni.title}/>
                        ))}
                    </div>
                </div>
            </section>

        </>
    )
}

export default CertificationSection

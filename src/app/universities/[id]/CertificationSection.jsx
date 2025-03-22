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
            <section className='containers py-6 border-b border-[#E3E3E3]'>
                <div>
                    <h2 className="text-3xl font-medium font-open-sans">
                        Certifications
                    </h2>

                    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 w-full py-6 justify-center place-items-center'>
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

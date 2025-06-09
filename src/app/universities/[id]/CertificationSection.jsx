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
const CertificationSection = ({data}) => {
    // Return null or alternative content if data is not available
    if (!data || !Array.isArray(data) || data.length === 0) {
        return null;
    }
    
    return (
        <section className='containers py-6 border-b border-[#E3E3E3]'>
            <div>
                <h2 className="text-[20px] md:text-[24px] lg:text-[32px] font-medium font-open-sans">
                    Approvals
                </h2>

                <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 w-full py-6 justify-center place-items-center'>
                    {data.map((uni, index) => (
                        <Certcard key={index} imgSrc={uni.image} title={uni.name}/>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default CertificationSection
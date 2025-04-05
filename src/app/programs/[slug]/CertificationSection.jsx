import React from 'react'
import image1 from '../../../assets/program/image25.png'
import image2 from '../../../assets/program/image26.png'
import image3 from '../../../assets/program/image27.png'
import image4 from '../../../assets/program/image28.png'
import Certcard from './Certcard'


const certdata = [
    {
        imgSrc: image1,
    },
    {
        imgSrc: image3,
    },
    {
        imgSrc: image4,
    },
    {
        imgSrc: image2,
    },
]

const itemsList = ["Learning Efforts - 12/15 hrs a week", "Duration - 3 Years", "Credits - 126"]

const CertificationSection = () => {
    return (
        <section className="containers py-6 border-b border-[#E3E3E3]">
            {/* Items List Row - Top Section */}
            <div className="flex flex-wrap gap-2 mb-6">
                {itemsList.map((item, index) => (
                    <div 
                        key={index} 
                        className="px-4 py-2 text-[#FF383B] border border-[#D9D9D9] rounded-md font-open-sans font-bold lg:text-[20px] md:text-[16px] text-[12px] leading-[22px]"
                    >
                        {item}
                    </div>
                ))}
            </div>

            {/* Bottom Section - Title and Certifications */}
            <div>
                <h2 className="text-[20px] md:text-[24px] lg:text-[32px] font-medium font-open-sans pb-4">
                    Accreditations
                </h2>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 md:gap-4 gap-2 w-full justify-center place-items-center">
                    {certdata.map((uni, index) => (
                        <Certcard key={index} imgSrc={uni.imgSrc}/>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default CertificationSection


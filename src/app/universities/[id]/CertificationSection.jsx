import React from 'react'



const certdata = [
    {
        imgSrc: amityLogo,
        title: "Amity University",
    },
    {
        imgSrc: harvardLogo,
        title: "Harvard University",
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

                    <div className='grid grid-cols-4'>
                        {certdata.map((uni, index) => (
                            <Card key={index} imgSrc={uni.imgSrc} title={uni.title}/>
                        ))}
                    </div>
                </div>
            </section>

        </>
    )
}

export default CertificationSection

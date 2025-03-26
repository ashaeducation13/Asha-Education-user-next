import React from 'react'

function OurGrowth() {
  const data = [
    {year:'2015' , description: 'Founded with a mission to guide students to top universities.'},
    {year:'2017' , description: 'Partnered with leading Indian universities for undergraduate and postgraduate programs.'},
    {year:'2019' , description: 'Expanded services to include specialized MBA and doctoral programs.'},
  ]
  return (
    <div className='lg:w-[80%] md:w-[90%] mx-auto flex flex-col justify-center items-center p-10'>
      <div className='space-y-2'>
        <h1 className='text-centers font-open-sans font-semibold lg:text-[48px] md:text-[32px] text-[24px] md:leading-[48px] leading-[24px]'>
          <span className='bg-clip-text text-transparent' style={{
                backgroundImage:
                  "linear-gradient(90.02deg, #0A0078 2.5%, #FF383B 43.53%)",
              }}>Our Growth </span>
          <span>Over the Years</span>
          </h1>
        <p className='font-inter text-[#6D758F] font-normal lg:text-[16px] md:text-[14px] text-[12px] lg:leading-[24px] md:leading-[21px] leading-[18px]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, repellendus.</p>
      </div>
      <div className='grid grid-cols-3 lg:gap-10 md:gap-[20px] py-10 '>
        {data.map((item, index)=>(
          <div className='shadow-lg p-10 rounded-[20px]' key={index}>
            <h1 className='font-open-sans font-semibold lg:text-[36px] md:text-[32px] text-[24px] leading-[48px]'>{item.year}</h1>
            <p className='font-rubik text-[#383838] font-normal lg:text-[16px] md:text-[14px] text-[12px] lg:leading-[24px] md:leading-[21px] leading-[18px] '>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default OurGrowth

    import React from 'react'
    import Image from "next/image";
    import arrow from '../../assets/home/counsel/Arrow.png'
    const HomeForm = () => {
        return (
            <>
                <form className="max-w-xl mx-auto bg-white p-12 shadow-lg rounded-xl space-y-6 max-h-xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex flex-col">
                            <label className="text-[#6D758F] font-medium">Name</label>
                            <input type="text" placeholder="Brian Clarke" className="p-3 shadow-md rounded-lg w-full focus:ring-2 focus:ring-[#a2a4ac] focus:outline-none" />
                        </div>
                        <div className="flex flex-col">
                            <label className="text-[#6D758F] font-medium">Phone</label>
                            <input type="tel" placeholder="(123) 456 - 7890" className="p-3 shadow-md rounded-lg w-full focus:ring-2 focus:ring-[#a2a4ac] focus:outline-none" />
                        </div>
                    </div>

                    <div className="flex flex-col">
                        <label className="text-[#6D758F] font-medium">Email</label>
                        <input type="email" placeholder="example@youremail.com" className="p-3 shadow-md rounded-lg w-full focus:ring-2 focus:ring-[#a2a4ac] focus:outline-none" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex flex-col">
                            <label className="text-[#6D758F] font-medium">Preferred University</label>
                            <select className="p-3 rounded-lg w-full text-[#6D758F] shadow-md focus:ring-2 focus:ring-[#a2a4ac] focus:outline-none">
                                <option>Select University</option>
                                <option>University A</option>
                                <option>University B</option>
                            </select>
                        </div>
                        <div className="flex flex-col">
                            <label className="text-[#6D758F] font-medium">Program</label>
                            <select className="p-3 rounded-lg w-full text-[#6D758F] shadow-md focus:ring-2 focus:ring-[#a2a4ac] focus:outline-none">
                                <option>Select Program</option>
                                <option>Program A</option>
                                <option>Program B</option>
                            </select>
                        </div>
                    </div>
                    <button type="submit" className="flex items-center font-inter font-semibold gap-2 text-white px-6 py-3 rounded-md shadow-md transition duration-300 text-[14px] bg-[#FF383B]">Submit
                        <Image
                            src={arrow}
                            alt="Arrow"
                            className="w-[8.4px] h-[8.24px]"
                        />
                    </button>
                </form>
            </>
        )
    }

    export default HomeForm

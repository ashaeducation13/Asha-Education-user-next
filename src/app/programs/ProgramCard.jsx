'use client'
import Image from "next/image";
import logo from '../../assets/universities/logo.svg';
import dwnld from '../../assets/program/dwnld.svg'
import Link from "next/link";
import EmailModal from "@/components/otp/EmailModal";
import { useEffect, useState } from "react";

export const ProgramCard = ({ item }) => {
    const [isVerified, setIsVerified] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);

    const downloadFile = (url) => {
        // Prevent any default behavior
        // event.preventDefault();

        // Create link element
        const link = document.createElement('a');
        link.href = url;

        // Set download attribute to force download behavior
        link.setAttribute('download', 'brochure.pdf');

        // Set additional attribute to help browsers recognize as download
        link.setAttribute('target', '_blank');
        link.setAttribute('rel', 'noopener noreferrer');

        // Append to DOM, click, and remove
        document.body.appendChild(link);
        link.click();

        // Small timeout to ensure download starts before removal
        setTimeout(() => {
            document.body.removeChild(link);
        }, 100);
    };
    


    useEffect(() => {
        // Check if already verified
        const verified = sessionStorage.getItem('isVerified') === 'true';
        setIsVerified(verified);
    }, []);

    const handleDownloadClick = () => {
        if (isVerified) {
            // Trigger download
            downloadFile(item.brochure);
        } else {
            // Show email modal for OTP
            setModalOpen(true);
        }
    };

    const handleVerificationSuccess = () => {
        sessionStorage.setItem('isVerified', 'true');
        setIsVerified(true);
        setModalOpen(false);

        // Trigger download after verification
        downloadFile(item.brochure);
    };

    return (
        <>
            <section
                className="h-auto flex flex-col gap-4 border border-[#0A0078] rounded-[18px] 
                            px-[2px] lg:px-[10px] pt-[10px] pb-[20px]
                            hover:shadow-[0px_12.05px_26.77px_0px_#0000001A,0px_48.86px_48.86px_0px_#00000017,0px_110.43px_66.26px_0px_#0000000D,0px_196.09px_78.3px_0px_#00000003,0px_307.19px_85.67px_0px_#00000000] cursor-pointer"
            >
                <div
                    className="relative z-10 h-[50px] rounded-[8px] bg-cover bg-center"
                >
                    <span className="absolute top-2 left-6 md:w-[65px] lg:w-[90px] h-[33px] bg-white rounded-[5px] flex justify-center">
                        <Image src={item.university.logo} width={100} height={100} alt="logo" className="" />
                    </span>
                    <span
                        className="absolute top-2 -right-[4px] lg:-right-[10px] flex justify-center items-center w-auto h-[30px] rounded-tl-[10px] rounded-bl-[20px] px-2 lg:px-5"
                        style={{
                            background: "linear-gradient(90deg, #0A0078 5.5%, #FF383B 96.5%)",
                        }}
                    >
                        <span className="text-white text-[12px] md:text-[14px] leading-[20px] font-semibold font-rubik">
                            Admission ongoing
                        </span>
                    </span>
                </div>
                <div className="w-[95%] mx-auto flex flex-col gap-2 h-full p-4 rounded-lg">
                    {/* University Name and Online Badge */}
                    <Link
                        href={`/programs/${item.id}`}
                        passHref
                    >
                        <div>
                            <div className="flex items-center gap-2 py-2">
                                <span className="w-fit px-3 py-1 text-[14px] font-inter font-semibold text-[#FF383B] bg-white border border-[#E3E3E3] rounded-lg">
                                    Online
                                </span>
                                <div className="flex gap-2 flex-wrap mt-2">
                                    {item.is_dual_specialization && (
                                        <span className="inline-block bg-[#E0F2FE] text-[#0284C7] text-xs font-semibold px-3 py-1 rounded-full">
                                            Dual Specialization
                                        </span>
                                    )}
                                    {item.is_executive_course && (
                                        <span className="inline-block bg-[#FEF3C7] text-[#B45309] text-xs font-semibold px-3 py-1 rounded-full">
                                            Executive Course
                                        </span>
                                    )}
                                </div>
                            </div>

                            {/* Title */}
                            <h2 className="font-open-sans text-[18px] lg:text-[20px] leading-[24px] font-semibold ">
                                {item.program_name.name} in {item.specialization.name}
                                {item.is_dual_specialization && item.second_specialization
                                    ? ` and ${item.second_specialization.name}`
                                    : ""}
                            </h2>

                            {/* Duration */}
                            <div className="flex justify-between items-center">
                                <span className="text-[14px] lg:text-[16px] font-medium font-rubik text-black">Duration</span>
                                <span className="w-fit px-3 py-2 text-[12px] lg:text-[14px] font-inter font-medium text-[#FF383B] bg-[#FFE3E4] rounded-lg">
                                    {item.duration_in_months} months
                                </span>
                            </div>

                            {/* Description (Grows to Push Button Down) */}
                            <span className="text-[#6D758F] text-[14px] md:text-[16px] leading-[24px] font-rubik font-normal flex-1 ">
                                {item.program_name.description}
                            </span>
                        </div>
                    </Link>

                    {/* Button Always at Bottom */}
                    {item.brochure && (
                        <div className="flex justify-center ">
                            <button
                                // onClick={(e) => downloadFile(item.brochure, e)}
                                // onClick={() => setModalOpen(true)}
                                onClick={handleDownloadClick}

                                className="w-full flex justify-center items-center gap-2 bg-[#FF383B] border border-[#FF383B] text-white font-semibold text-[12px] md:text-[14px] px-[12px] py-[8px] rounded-[8px] cursor-pointer"
                            >
                                <Image src={dwnld} alt="Download" className="w-4 h-4" />
                                Download Brochure
                            </button>
                            <EmailModal isOpen={modalOpen} onClose={() => setModalOpen(false)} id={item.id} onSuccess={handleVerificationSuccess}/>
                        </div>
                    )}
                </div>
            </section>
        </>
    );
};
import Image from "next/image";
import vector from '../../assets/refer-and-earn/vector.svg'

export default function ReferralPolicy() {
    const policyData = [
        {
          title: "For those who are part of our Online MBA Community",
          details: "8k on each referral for MBA & 3k on each UG & Other courses."
        },
        {
          title: "For those who are non-student",
          details: "5k on each referral for MBA & 2.5k on each UG & Other courses."
        }
      ];

      const termsData = [
        "The referral reward is applicable only when the referred individual successfully enrols and commences their program.",
        "There is no limit to the number of referrals you can make; more referrals mean more rewards.",
        "Asha Education reserves the right to modify or terminate the Refer and Earn program at any time without prior notice."
      ];
    
  return (
    <div className="containers bg-gray-50 rounded-lg ">
      {/* Referral Policy Section */}
      <h2 className="font-open-sans font-bold lg:text-[24px] md:text-[22px] text-[20px] leading-[36px] text-[#000000] md:mb-6 mb-3">Referral Policy</h2>
      
      <div className="flex flex-col md:flex-row gap-3 md:gap-8 mb-8">
        {policyData.map((policy, index) => (
          <div key={index} className="flex-1">
            <div className="flex items-start gap-3">
                <Image src={vector} alt="vector" />
              <h3 className="font-inter font-semibold text-[16px] md:text-[18px] lg:text-[20px] leading-[20px] text-[#121212]">{policy.title}</h3>
            </div>
            <p className="font-inter font-normal text-[12px] md:text-[14px] lg:text-[16px] leading-[24px] text-[#6D758F] ml-9">{policy.details}</p>
          </div>
        ))}
      </div>

      {/* Terms and Conditions Section */}
      <h2 className="font-open-sans font-bold lg:text-[24px] md:text-[22px] text-[20px] leading-[36px] text-[#000000] md:mb-6 mb-3">Terms and Conditions</h2>
      
      <div className="space-y-4 pb-6">
        {termsData.map((term, index) => (
          <div key={index} className="flex items-center justify-start gap-3">
              <Image src={vector} alt="vector" />
            <p className="font-inter font-normal text-[12px] md:text-[14px] lg:text-[16px] leading-[24px] text-[#000000]">{term}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

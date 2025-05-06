export default function WhyAndHow() {
    const cardData = [
        {
        title: "Successful Admission",
          description: "When your referred student completes the enrolment process and starts their program, your referral is considered successful."
        },
        {
            title: "Earn Rewards",
          description: "For each successful referral, you become eligible for our referral rewards as a token of our appreciation."
        },
      ];
  return (
    <div className="containers md:py-6">
      <div className="bg-[#FF383B] py-6 px-4 lg:py-16 md:py-12 rounded-2xl">
        <div className="text-center space-y-4">
          <h1 className="font-open-sans font-bold xl:text-[36px] lg:text-[32px] md:text-[28px] text-[24px] leading-[36px] text-[#FFFFFF]">
            Why you should refer to us ?
          </h1>
          <p className="font-inter font-normal text-[12px] md:text-[14px] lg:text-[16px] leading-[24px] text-[#FFFFFF] md:w-[80%] lg:w-[70%] xl:w-[80%] mx-auto">
            We believe in data privacy and we believe in relationship which
            means we don’t trouble you or your friends with tonnes of calls and
            follow ups, we keep it simple, we also believe in post enrolment
            services and we do not delay the referral amount disbursal, you can
            also join our community for the regular updates.
          </p>
        </div>
      </div>
      <div className="md:pt-12 pb-6 py-6">
        <h1 className="font-open-sans font-bold text-[24px] md:text-[28px] lg:text-[32px] leading-[36px] text-[#000000] mb-3">How to refer ?</h1>
        <p className="font-inter font-normal text-[16px] leading-[24px] lg:w-[80%] md:w-[85%]">Submit a referral through the below form or mail at <a href="" className="text-[#FF383B] underline">admission@asha.education</a> mentioning your details and your reference details both.</p>
      </div>
      <div className="flex flex-col md:flex-row gap-3 md:gap-6 w-full mx-auto pb-7 md:py-10 lg:py-16">
      {cardData.map((card, index) => (
        <div 
          key={index} 
          className="flex-1 bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
        >
          <h2 className="mb-2 font-open-sans font-semibold lg:text-[24px] md:text-[20px] text-[16px] leading-[48px] bg-clip-text text-transparent" style={{backgroundImage: "linear-gradient(90.02deg, #0A0078 2.5%, #FF383B 43.53%)"}}>
            {card.title}
          </h2>
          <p className="font-rubik font-normal md:text-[14px] text-[12px] leading-[24px] text-[#383838]">
            {card.description}
          </p>
        </div>
      ))}
    </div>
    </div>
  );
}

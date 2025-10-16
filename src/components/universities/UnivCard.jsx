import Image from "next/image";
import star from '../../assets/universities/star.svg';
import once from '../../assets/universities/once.svg';
import Link from "next/link";

const UnivCard = ({ item }) => {
  const programNames = item.certifications.map(p => p.name);


  return (
    <section
      className="relative h-auto flex flex-col gap-3 md:gap-3.5 lg:gap-4 border border-[#0A0078] rounded-[18px] 
      md:px-2.5 pt-2.5 pb-3 md:pt-3 md:pb-4 lg:pb-5
      hover:shadow-[0px_12.05px_26.77px_0px_#0000001A,0px_48.86px_48.86px_0px_#00000017,0px_110.43px_66.26px_0px_#0000000D,0px_196.09px_78.3px_0px_#00000003,0px_307.19px_85.67px_0px_#00000000] 
       transition-shadow duration-200 justify-between"
    >
      {/* Image Container - Adjusted for tablet spacing */}
      <Link href={`/universities/${item.slug}`} className="block">
        <div
          className="relative h-[180px] md:h-[200px] lg:h-[230px] w-full rounded-[8px] bg-cover bg-center"
          style={{ backgroundImage: `url(${item.cover_image})` }}
        >
          {/* Logo - Adjusted positioning for tablet */}
          <span className="absolute top-2 md:top-3 left-2 w-[90px] h-[30px] md:w-[80px] md:h-[30px] lg:w-[120px] lg:h-[50px] bg-white rounded-[5px] flex justify-center items-center p-1">
            <Image
              src={item.logo}
              fill
              loading="lazy"
              alt="logo"
              className="object-contain w-full h-full cursor-pointer"
            // sizes="(max-width: 768px) 90px, (max-width: 1024px) 95px, 120px"
            />
          </span>


          {/* Status Badge - Adjusted positioning and padding for tablet */}
          {item.status && (
            <span
              className="absolute top-3 md:top-3.5 right-0 flex justify-center items-center h-[26px] md:h-[27px] lg:h-[30px] rounded-tl-[10px] rounded-bl-[20px] px-3 md:px-4 lg:px-5"
              style={{
                background: "linear-gradient(90deg, #0A0078 5.5%, #FF383B 96.5%)",
              }}
            >
              <span className="text-white text-xs md:text-[12px] lg:text-[14px] font-semibold whitespace-nowrap ">
                Admissions Ongoing
              </span>
            </span>)}
        </div>
      </Link>


      {/* Rest of the card content remains the same as previous optimized version */}
      <div className="w-full px-1 md:px-1.5 flex flex-col gap-2 md:gap-2.5 lg:gap-3">
        <h3 className="text-[15px] md:text-[16px] lg:text-[18px] xl:text-[20px] leading-tight font-semibold">
          {item.name}
        </h3>

        {/* <span className="flex justify-start items-center gap-1.5 md:gap-2">
          <Image
            src={star}
            alt="icon"
            className="w-[14px] h-[14px] md:w-[15px] md:h-[15px] lg:w-[18px] lg:h-[18px]"
          />
          <span className="text-xs md:text-[13px] lg:text-[14px]">{item.rating}</span>
        </span> */}

        <span className="text-[#6D758F] text-xs md:text-[13px] lg:text-[14px] xl:text-[16px]">
          {programNames.join(', ')}
        </span>



        <div className="mt-1">
          <Link href={`/universities/${item.slug}`} className="block">
            <div
              className="w-full px-2 md:px-4 py-2 bg-[#FF383B] text-white font-semibold font-inter text-[12px] rounded-lg transition cursor-pointer"
            >
              View Details
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default UnivCard;
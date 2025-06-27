import Image from "next/image";
import star from "../../../assets/universities/star.svg";
// import once from "../../assets/universities/once.svg";

export const Card = ({item, onCompareClick}) => {
  
  return (
    <>
      <section
        className="h-auto flex flex-col gap-4 border border-[#0A0078] rounded-[18px] 
      px-[10px] pt-[10px] pb-[20px]
    hover:shadow-[0px_12.05px_26.77px_0px_#0000001A,0px_48.86px_48.86px_0px_#00000017,0px_110.43px_66.26px_0px_#0000000D,0px_196.09px_78.3px_0px_#00000003,0px_307.19px_85.67px_0px_#00000000] cursor-pointer"
      >
        <div
          className="relative z-10 h-[50px] rounded-[8px] bg-cover bg-center"
        //   style={{ backgroundImage: `url(${item.cover.src})` }}
        >
          <span className="absolute top-2 left-2 w-[100px] h-[33px] bg-white  rounded-[5px] flex justify-center">
            <Image src={item.university.logo} alt="logo" width={100} height={100} className="" />
          </span>
          <span
            className="absolute top-2 -right-[10px] flex justify-center items-center w-auto h-[30px] rounded-tl-[10px] rounded-bl-[20px] px-5"
            style={{
              background: "linear-gradient(90deg, #0A0078 5.5%, #FF383B 96.5%)",
            }}
          >
            <span className="text-white text-[14px] leading-[20px] font-semibold font-rubik">
              {item.mode_of_study}
            </span>
          </span>
        </div>
        <div className="w-[95%] mx-auto flex flex-col gap-3">
        <h2 className="font-open-sans text-[20px] leading-[100%] font-semibold ">
            {item.university.name}
          </h2>
          <h2 className="font-open-sans text-[16px] leading-[100%] font-medium text-[#595959]">
            {item.program_name.name} in {item.specialization.name}
          </h2>
          <span className="flex justify-start gap-2">
            <Image src={star} alt="icon" />
            <span className="text-[14px] leading-[100%] font-medium font-inter text-[#595959]">{item.university.rating}</span>
          </span>
          {/* <span className="w-fit bg-[#FFE3E4] inline-flex items-center justify-start gap-2 px-[16px] py-[6px] rounded-[8px]">
            <Image src={once} alt="icon" />
            <span className="text-[14px] text-[#FF383B] whitespace-nowrap">
              Brouchure
            </span>
          </span> */}
          {/* <span className="text-[#6D758F] text-[16px] leading-[24px] font-rubik font-normal">
          {item.affiliation.split(" ").slice(0, 6).join(" ")}
          {item.affiliation.split(" ").length > 5 && " ..."}
            </span> */}
          <div className="flex justify-center gap-2 items-center">
            <button onClick={onCompareClick} className="w-full flex justify-center bg-[#FF383B] border border-[#FF383B] text-white font-semibold text-[14px] px-[12px] py-[8px] items-center rounded-[8px]">
              Add to compare
            </button>
            {/* <span
              className="w-1/2 text-[14px] text-[#6D758F] font-semibold rounded-[8px] flex justify-center items-center border border-[#D9D9D9] 
            px-[12px] py-[8px]"
            >
              View Details
            </span> */}
          </div>
        </div>
      </section>
    </>
  );
};
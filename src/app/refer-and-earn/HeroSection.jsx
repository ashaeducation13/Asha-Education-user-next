import Image from "next/image"
import Main from '../../assets/refer-and-earn/main.webp'

export default function HeroSection() {
  return (
    <>
    <div className="containers xl:h-[450px] lg:h-[370px] md:h-[350px] flex flex-col md:flex-row w-full py-10">
    <div className="w-full md:w-1/2 flex items-center justify-start md:py-8 pt-6 order-2 md:order-1">
      <div className="max-w-md text-center">
        <h2 className="font-playfair font-normal md:text-[32px] lg:text-[40px] xl:text-[48px] text-start leading-[40px] md:mb-4 bg-clip-text text-transparent" style={{backgroundImage: "linear-gradient(90.02deg, #0A0078 2.5%, #FF383B 43.53%)"}}>Refer and Earn</h2>
        <p className="font-rubik font-medium md:text-[16px] leading-[24px] text-[#121212] text-start md:mb-6 mb-3">Your Network is Your Net worth, yes you heard it right.</p>
        <p className="font-rubik font-normal md:text-[16px] leading-[24px] text-[#121212] text-start">
        Refer your friends/colleagues/family to enrol for the program offered by Asha Education & Earn Huge referral amount on each referral.
        </p>
      </div>
    </div>

    <div className="w-full md:w-1/2 flex items-center justify-end order-1 md:order-2">
      <Image
        src={Main}
        alt="Description of image"
        className="xl:w-[460px] xl:h-[280px] lg:w-[400px] lg:h-[250px] md:h-[200px] md:w-[300px]"
      />
    </div>
  </div>
  </>
  )
}

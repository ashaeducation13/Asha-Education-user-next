import Image from "next/image";
import arrow from "../../assets/contact-us/arrow.svg";
import phone from "../../assets/contact-us/phone.svg";
import email from "../../assets/contact-us/email.svg";
import hash from "../../assets/contact-us/hash.svg";
import time from "../../assets/contact-us/time.svg";
import facebook from "../../assets/contact-us/Facebook.svg";
import twitter from "../../assets/contact-us/Twitter.svg";
import instagram from "../../assets/contact-us/Instagram.svg";
import linkedin from "../../assets/contact-us/LinkedIn.svg";
import youtube from "../../assets/contact-us/YouTube.svg";
import address from "../../assets/contact-us/address.svg";
import one from "../../assets/contact-us/1.svg";
import two from "../../assets/contact-us/2.svg";
import three from "../../assets/contact-us/3.svg";
import four from "../../assets/contact-us/4.svg";

// Define components first
const ContactCard = ({ item }) => (
  <div className="p-6 rounded-[20px] bg-white flex flex-col justify-between shadow-2xl transition duration-300 hover:bg-gradient-to-r hover:from-[#0A0078] hover:to-[#FF383B] hover:text-white group">
    <div className="flex items-start gap-4">
      <Image
        src={item.icon}
        alt={item.title}
        className="w-8 h-8 mt-1 group-hover:hidden"
      />
      <Image
        src={item.hovIcon}
        alt={item.title}
        className="w-8 h-8 mt-1 hidden group-hover:block"
      />
      <h3 className="font-open-sans font-semibold lg:text-[20px] text-[14px] leading-[24px] text-[#FF383B] group-hover:text-white">
        {item.title}
      </h3>
    </div>
    <div className="pl-10 mt-2">
      {item.subtitle1 && (
        <div className="mb-3">
          <h4 className="font-rubik font-medium text-base leading-[28px] text-[#FF383B] group-hover:text-white">
            {item.subtitle1}
          </h4>
          <p className="font-rubik font-normal text-base leading-[24px] whitespace-pre-line group-hover:text-white">
            {item.content1}
          </p>
        </div>
      )}
      {!item.subtitle1 && (
        <p className="font-rubik font-normal text-lg leading-[28px] whitespace-pre-line group-hover:text-white">
          {item.content1}
        </p>
      )}
      {item.subtitle2 && (
        <div>
          <h4 className="font-rubik font-medium text-base leading-[22px] text-[#FF383B] group-hover:text-white">
            {item.subtitle2}
          </h4>
          <p className="font-rubik font-normal text-base leading-[24px] whitespace-pre-line group-hover:text-white">
            {item.content2}
          </p>
        </div>
      )}
    </div>
  </div>
);

const SocialMediaSection = () => (
  <div className="flex flex-col md:flex-row items-start justify-between mt-4 gap-3">
    <div className="flex items-center">
      <Image src={hash} alt="hashcode" className="mr-3 lg:w-[43px] lg:h-[44px] w-[24px] h-[25px]" />
      <h1 className="bg-clip-text text-transparent font-open-sans font-semibold lg:text-[24px] text-[14px] leading-[24px] md:leading-[] leading-[] whitespace-nowrap bg-gradient-to-r from-[#0A0078] to-[#FF383B]">
        Stay Connected with Us!
      </h1>
    </div>
    <div className="flex items-center gap-6">
      {[facebook, twitter, instagram, linkedin, youtube].map((icon, idx) => (
        <Image key={idx} src={icon} className="lg:size-[32px] size-[20px]" alt="social-icon" />
      ))}
    </div>
  </div>
);

const FormField = ({ field }) => (
  <div className="flex flex-col">
    <label className="font-inter text-sm leading-5 mb-1">{field.label}</label>
    <input
      type={field.type}
      className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:border-[#FF383B]"
      placeholder={field.placeholder}
    />
  </div>
);

const FormTextArea = () => (
  <div className="flex flex-col">
    <label className="font-inter text-sm mb-1">Message</label>
    <textarea
      rows="4"
      className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:border-[#FF383B]"
      placeholder="Type ..."
    ></textarea>
  </div>
);

const SubmitButton = () => (
  <button
    type="submit"
    className="relative flex items-center justify-center mt-2 bg-[#FF383B] text-white rounded-lg font-semibold hover:bg-[#e02e33] transition w-[150px] h-[45px] text-sm leading-5"
  >
    Submit Inquiry
    <Image src={arrow} alt="Arrow icon" width={10} height={10} className="ml-2" />
  </button>
);

const ContactForm = () => {
  const formFields = [
    { label: "Name", type: "text", placeholder: "Brian Clark" },
    { label: "Phone", type: "number", placeholder: "(123) 456 - 7890" },
    { label: "Email", type: "email", placeholder: "example@youremail.com" },
  ];

  return (
    <div className="w-full">
      <h2 className="lg:text-[24px] leading-[24px] md:text-[20px] text-[14px] font-semibold font-open-sans bg-clip-text text-transparent mb-4 bg-gradient-to-r from-[#0A0078] to-[#FF383B]">
        Send Us a Message
      </h2>
      <div className="bg-white p-6 rounded-[20px] shadow-2xl">
        <form className="flex flex-col gap-4 text-[#6D758F]">
          {formFields.map((field, index) => (
            <FormField key={index} field={field} />
          ))}
          <FormTextArea />
          <SubmitButton />
        </form>
      </div>
    </div>
  );
};

export default function SendUsSection() {
  const contactInfo = [
    {
      title: "Address",
      content1: "1234 Knowledge Avenue,\nEducation City,\nNew Delhi, India - 110001",
      icon: address,
      hovIcon: one,
    },
    {
      title: "Phone Numbers",
      subtitle1: "Admissions",
      content1: "+91 98765 43210",
      subtitle2: "General Inquiry",
      content2: "+91 98765 43210",
      icon: phone,
      hovIcon: two,
    },
    {
      title: "Email Addresses",
      subtitle1: "Support",
      content1: "support@educationhub.com",
      subtitle2: "Admissions",
      content2: "admissions@educationhub.com",
      icon: email,
      hovIcon: three,
    },
    {
      title: "Office Hours",
      subtitle1: "Monday",
      content1: "9 AM - 6 PM",
      subtitle2: "Saturday",
      content2: "10 AM - 4 PM",
      icon: time,
      hovIcon: four,
    },
  ];

  return (
    <div className="containers md:px-4 md:py-20 py-8">
      <div className="flex flex-col md:flex-row justify-between md:gap-8 gap-4">
        {/* Contact Info Section */}
        <div className="md:w-[65%] w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {contactInfo.map((item, index) => (
              <ContactCard key={index} item={item} />
            ))}
          </div>
          <SocialMediaSection />
        </div>

        {/* Contact Form Section */}
        <div className="lg:w-[30%] w-full">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
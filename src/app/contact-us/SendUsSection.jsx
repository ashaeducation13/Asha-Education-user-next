export default function SendUsSection() {
  const contactInfo = [
    {
      title: "Address",
      content1:
        "1234 Knowledge Avenue,\nEducation City,\nNew Delhi, India - 110001",
      icon: "",
    },
    {
      title: "Phone Numbers",
      subtitle1: "Admissions",
      content1: "+91 98765 43210",
      subtitle2: "General Inquiry",
      content2: "+91 98765 43210",
      icon: "/contact-us/phone.svg",
    },
    {
      title: "Email Addresses",
      subtitle1: "Support",
      content1: "support@educationhub.com",
      subtitle2: "Admissions",
      content2: "admissions@educationhub.com",
      icon: "/contact-us/email.svg",
    },
    {
      title: "Office Hours",
      subtitle1: "Monday",
      content1: "9 AM - 6 PM",
      subtitle2: "Saturday",
      content2: "10 AM - 4 PM",
      icon: "/contact-us/time.svg",
    },
  ];

  return (
    <div
      className="flex justify-between items-start px-[200px] py-[50px] "
    >
      <div className="w-[65%] grid grid-cols-2 gap-4">
        {contactInfo.map((item, index) => (
          <div
            key={index}
            className="p-6 rounded-[20px] bg-white flex flex-col justify-between shadow-2xl transition duration-300 hover:bg-gradient-to-r hover:from-[#0A0078] hover:to-[#FF383B] hover:text-white group"
          >
            <div className="flex items-start gap-[20px]">
              <img src={item?.icon} alt="" className="w-6 h-6 mt-1" />
              <h3
                className="font-open-sans font-semibold text-[20px] leading-[24px] text-[#FF383B] transition duration-300 group-hover:text-white"
              >
                {item.title}
              </h3>
            </div>
            {/* Special Case for Address (No subtitles, just content1) */}
            <div className="pl-[40px] mt-2">
              {item.content1 && !item.subtitle1 ? (
                <p className="font-rubik font-normal text-[16px] leading-[24px] whitespace-pre-line transition duration-300 group-hover:text-white">
                  {item.content1}
                </p>
              ) : (
                <>
                  {/* Render subtitle1 and content1 if available */}
                  {item.subtitle1 && (
                    <div className="mb-3">
                      <h4 className="font-rubik font-medium text-[18px] leading-[22px] text-[#FF383B] transition duration-300 group-hover:text-white">
                        {item.subtitle1}
                      </h4>
                      <p className="font-rubik font-normal text-[16px] leading-[24px] whitespace-pre-line transition duration-300 group-hover:text-white">
                        {item.content1}
                      </p>
                    </div>
                  )}
                  {/* Render subtitle2 and content2 if available */}
                  {item.subtitle2 && (
                    <div>
                      <h4 className="font-rubik font-medium text-[18px] leading-[22px] text-[#FF383B] transition duration-300 group-hover:text-white">
                        {item.subtitle2}
                      </h4>
                      <p className="font-rubik font-normal text-[16px] leading-[24px] whitespace-pre-line transition duration-300 group-hover:text-white">
                        {item.content2}
                      </p>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        ))}
        {/* <div className="flex items-center justify-between w-full mt-4">
          <div className="flex-1">
            <h1
              className="bg-clip-text text-transparent font-open-sans font-semibold text-[24px] leading-[24px]"
              style={{
                backgroundImage:
                  "linear-gradient(90.02deg, #0A0078 2.5%, #FF383B 43.53%)",
              }}
            >
              Stay Connected with Us!
            </h1>
          </div>
          <div className="flex-1 flex justify-end gap-4">
            <ul className="flex gap-6">
              <li>
                <img src="/Facebook.svg" alt="" />
              </li>
              <li>
                <img src="/Twitter.svg" alt="" />
              </li>
              <li>
                <img src="/Instagram.svg" alt="" />
              </li>
              <li>
                <img src="/LinkedIn.svg" alt="" />
              </li>
              <li>
                <img src="/YouTube.svg" alt="" />
              </li>
            </ul>
          </div>
        </div> */}
      </div>
      <div className="w-[30%] flex flex-col items-center ">
        <div className="w-full text-start">
      <h2
          className="text-[24px] font-semibold font-open-sans bg-clip-text text-transparent mb-4 text-start"
          style={{
            backgroundImage:
              "linear-gradient(90.02deg, #0A0078 2.5%, #FF383B 43.53%)",
          }}
        >
          Send Us a Message
        </h2>
        </div>
        <div className="w-full bg-white p-6 rounded-[20px] shadow-2xl">
        <form className="flex flex-col gap-4 text-[#6D758F]">
          <div className="flex flex-col ">
            <label className="font-inter text-[14px] leading-[20px] mb-1">
              Name
            </label>
            <input
              type="text"
              className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:border-[#FF383B]"
              placeholder="Brian Clark"
            />
          </div>

          <div className="flex flex-col">
            <label className="font-inter text-[14px] leading-[20px] mb-1">
              Phone
            </label>
            <input
              type="Number"
              className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:border-[#FF383B]"
              placeholder="(123) 456 - 7890"
            />
          </div>

          <div className="flex flex-col">
            <label className="font-inter text-[14px] leading-[20px] mb-1">
              Email
            </label>
            <input
              type="email"
              className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:border-[#FF383B]"
              placeholder="example@youremail.com"
            />
          </div>

          <div className="flex flex-col">
            <label className="font-inter text-[14px] mb-1">Message</label>
            <textarea
              rows="4"
              className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:border-[#FF383B]"
              placeholder="Type ..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="mt-2 bg-[#FF383B] text-white  rounded-lg font-semibold hover:bg-[#e02e33] transition w-[120px] h-[45px] text-[14px] leading-[20px]"
          >
            Submit Inquiry
          </button>
        </form>
        </div>
      </div>
    </div>
  );
}

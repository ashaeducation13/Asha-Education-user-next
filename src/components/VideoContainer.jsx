import { Card } from "./Card";

export const VideoContainer = ({ video }) => {
    return (
      <Card
        className="h-full custom-shadow transition-all duration-300 ease-in-out transform hover:-translate-y-1"
        style={{
          boxShadow: "rgba(0, 0, 0, 0.1) -4px 9px 25px -6px",
        }}
      >
        <div className="relative overflow-hidden h-full rounded-[16px]">
          <video
            muted
            autoPlay
            loop
            playsInline
            controls={false}
            className="h-full w-full"
            style={{ objectFit: "cover" }}
          >
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {/* <Image
            src={logo}
            alt="logo"
            width={150}
            height={60}
            className="absolute z-40 bottom-0 left-[8px]"
          /> */}
        </div>
      </Card>
    );
  };

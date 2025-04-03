import ComparisonCard from "./ComparisonCard";

const consforcard1 = [
  "Great faculty and support",
  "Good placement opportunities",
  "Flexible online learning",
  "Affordable fees",
];

const prosforcard1 = [
  "Great faculty and support",
  "Good placement opportunities",
];

const consforcard2 = [
  "Great faculty and support",
  "Good placement opportunities",
  "Flexible online learning",
  "Affordable fees",
  "Great faculty and support",
  "Good placement opportunities",
  "Flexible online learning",
  "Affordable fees",
];

const prosforcard2 = ["Affordable fees"];

export default function BestCollege() {
  return (
    <>
<section className="w-full px-4 md:w-[90%] lg:w-[80%] mx-auto pb-8 md:pb-12">
  {/* Header Section */}
  <div className="mx-auto flex flex-col items-center justify-center text-center pt-6 md:pt-10 pb-6 md:pb-10 gap-3 md:gap-4">
    <h1 className="text-2xl md:text-3xl lg:text-4xl leading-tight font-normal">
      <span
        className="font-playfair bg-clip-text text-transparent"
        style={{
          backgroundImage: "linear-gradient(90.02deg, #0A0078 2.5%, #FF383B 43.53%)",
        }}
      >
        Let's Find out
      </span>{" "}
      Which
      <span className="block font-open-sans font-medium mt-1 md:mt-2">
        College Is Best For You
      </span>
    </h1>
    <p className="text-sm md:text-base lg:text-lg leading-relaxed font-rubik font-normal text-gray-700 max-w-2xl">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
    </p>
  </div>

  {/* Comparison Cards Grid */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-16">
    <ComparisonCard pros={prosforcard1} cons={consforcard1} />
    <ComparisonCard pros={prosforcard2} cons={consforcard2} />
  </div>
</section>
    </>
  );
}

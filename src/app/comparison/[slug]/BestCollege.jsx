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

export default function BestCollege({ data1, data2 }) {
  console.log("pros1", data1);
  console.log("pros1", data2);
  const pros1 = data1?.filter(item => item.type === 'Pros') || [];
  const cons1 = data1?.filter(item => item.type === 'Cons') || [];
  const pros2 = data2?.filter(item => item.type === 'Pros') || [];
  const cons2 = data2?.filter(item => item.type === 'Cons') || [];


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
            Committed to guiding students toward the best universities in India.
          </p>
        </div>

        {/* Comparison Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-16">
          <ComparisonCard pros={pros1} cons={cons1} />
          <ComparisonCard pros={pros2} cons={cons2} />
        </div>
      </section>
    </>
  );
}

import ComparisonCard from "./ComparisonCard";

const consforcard1 = [
  "Great faculty and support",
  "Good placement opportunities",
  "Flexible online learning",
  "Affordable fees",
]

const prosforcard1 = [
  "Great faculty and support",
  "Good placement opportunities",
]

const consforcard2 = [
  "Great faculty and support",
  "Good placement opportunities",
  "Flexible online learning",
  "Affordable fees",
  "Great faculty and support",
  "Good placement opportunities",
  "Flexible online learning",
  "Affordable fees",
]

const prosforcard2 = [
  "Affordable fees",
]

export default function BestCollege() {

  return (
    <>
    <section className="w-[80%] mx-auto pb-[20px]">
      <div className="mx-auto flex flex-col items-center justify-center text-center pt-[80px] pb-[40px] gap-[10px]">
        <h1 className="text-[40px] leading-[40px]">
          <span className="font-playfair font-normal bg-clip-text text-transparent" style={{
              backgroundImage:
                "linear-gradient(90.02deg, #0A0078 2.5%, #FF383B 43.53%)",
            }}>
            Let’s Find out 
          </span> Which
          <span className="block font-open-sans font-medium">
            College Is Best For You
          </span>
        </h1>
        <p className="text-[16px] leading-[24px] font-rubik font-normal ">
          lorem lipsum lorem lipsum lorem lipsum lorem lipsum
        </p>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-start gap-3 mb-[60px]">
        <ComparisonCard pros={prosforcard1} cons={consforcard1} />
        <ComparisonCard pros={prosforcard2} cons={consforcard2} />
      </div>
      </section>
    </>
  );
}

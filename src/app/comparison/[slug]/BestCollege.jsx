"use client";
import { useState } from "react";
import ComparisonCard from "./ComparisonCard";

export default function BestCollege({ selectedIds, allProsCons }) {
  const [id1, setId1] = useState(parseInt(selectedIds[0]));
  const [id2, setId2] = useState(parseInt(selectedIds[1]));

  const getDataById = (id) => {
    const data = allProsCons.find(item => item.univ.id === id);
    return {
      univ: data?.univ || {},
      pros: data?.pros_cons.filter(i => i.type === 'Pros') || [],
      cons: data?.pros_cons.filter(i => i.type === 'Cons') || []
    };
  };

  const data1 = getDataById(id1);
  const data2 = getDataById(id2);

  return (
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
        <ComparisonCard
          univ={data1.univ}
          pros={data1.pros}
          cons={data1.cons}
          allProsCons={allProsCons}
          selectedId={id1}
          otherSelectedId={id2}
          onChange={(newId) => setId1(newId)}
        />
        <ComparisonCard
          univ={data2.univ}
          pros={data2.pros}
          cons={data2.cons}
          allProsCons={allProsCons}
          selectedId={id2}
          otherSelectedId={id1}
          onChange={(newId) => setId2(newId)}
        />
      </div>
    </section>
  );
}

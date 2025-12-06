"use client";
import { useState, useEffect } from "react";
import parse from "html-react-parser";

export default function HtmlContentSection({ data }) {
  const [parsedContent, setParsedContent] = useState(null);

  useEffect(() => {
    if (!data) return;
    setParsedContent(parse(data));
  }, [data]);

  if (!parsedContent) return null;

  return (
    <section className="containers py-12">
      <article className="prose max-w-none prose-h1:text-[32px] prose-h2:text-[22px] prose-p:text-[15px] prose-li:leading-relaxed prose-img:rounded-md">
        {parsedContent}
      </article>
    </section>
  );
}
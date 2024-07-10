import React from "react";
import FaqItem from "./FaqItem";

interface FaqProps {
  data: {
    question: string;
    answer: string[];
  }[];
}

const Faq: React.FC<FaqProps> = ({ data }) => {
  return (
    <section className="w-full mt-[74px] mb-[100px]">
      {data.map((item, index) => (
        <FaqItem key={index} question={item.question} answers={item.answer} />
      ))}
    </section>
  );
};

export default Faq;

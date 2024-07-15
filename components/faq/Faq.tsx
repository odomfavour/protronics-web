import React, { useState } from "react";
import FaqItem from "./FaqItem";

interface FaqProps {
  data: {
    question: string;
    answer: string[];
  }[];
}

const Faq: React.FC<FaqProps> = ({ data }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleOpen = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full mt-[74px] mb-[100px]">
      {data.map((item, index) => (
        <FaqItem
          key={index}
          question={item.question}
          answers={item.answer}
          isOpen={openIndex === index}
          onToggle={() => toggleOpen(index)}
        />
      ))}
    </section>
  );
};

export default Faq;

import React, { useState } from "react";
import { IoIosArrowUp } from "react-icons/io";
interface FaqItemProps {
  question: string;
  answers: string[];
  isOpen: boolean;
  onToggle: () => void;
}

const FaqItem: React.FC<FaqItemProps> = ({
  question,
  answers,
  isOpen,
  onToggle,
}) => {
  return (
    <div className="mb-4">
      <button
        onClick={onToggle}
        className={`px-[32px] focus:bg-[#C6DDF7] w-full  h-[80px] flex justify-between items-center rounded-t-[10px] text-proDark py-[28px] text-left text-lg lg:text-xl font-normal ${
          isOpen ? "bg-[#C6DDF7]" : "bg-transparent border border-[#D0D5DD]"
        }`}
      >
        {question}
        <span
          className={`transform transition-transform duration-300 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        >
          <IoIosArrowUp className="text-[#F56630]" />
        </span>
      </button>
      {isOpen && (
        <ul className="text-proDark bg-[#E3EFFC] pt-3 text-sm lg:text-lg rounded-b-[10px]  pb-[45px] list-disc">
          {answers.map((item, index) => (
            <li key={index} className="ml-[32px] mb-2">
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FaqItem;

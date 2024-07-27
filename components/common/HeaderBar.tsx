import React from "react";

interface HeaderBarProps {
  title: string;
  subtitle: string;
  titleColor?: string;
  subtitleColor?: string;
  border?: boolean;
}

const HeaderBar: React.FC<HeaderBarProps> = ({
  title,
  subtitle,
  titleColor = "text-[#000000]",
  subtitleColor = "text-[#000000]",
  border = "border-b",
}) => {
  return (
    <div className={`border-black ${border} `}>
      <div className="text-center py-10 max-w-3xl mx-auto">
        <h1
          className={`lg:text-[56px] leading-[56px] text-3xl font-bold mb-4 ${titleColor}`}
        >
          {title}
        </h1>
        <p className={`lg:text-xl  text-lg font-normal ${subtitleColor}`}>
          {subtitle}
        </p>
      </div>
    </div>
  );
};

export default HeaderBar;

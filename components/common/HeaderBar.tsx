import React from 'react';

interface HeaderBarProps {
  title: string;
  subtitle: string;
  titleColor?: string;
  subtitleColor?: string;
}

const HeaderBar: React.FC<HeaderBarProps> = ({
  title,
  subtitle,
  titleColor = 'text-[#000000]',
  subtitleColor = 'text-[#000000]',
}) => {
  return (
    <div>
      <div className="text-center py-10 border-black border-b">
        <p className={`lg:text-[56px] text-3xl font-bold ${titleColor}`}>
          {title}
        </p>
        <p className={`lg:text-2xl  text-lg font-normal ${subtitleColor}`}>
          {subtitle}
        </p>
      </div>
    </div>
  );
};

export default HeaderBar;

import React from 'react';

const PcbTab = () => {
  const sections = [
    {
      title: 'Product Development',
      items: [
        'New Product Introduction',
        'Certification Management',
        'BOM Analysis',
        'Turnkey and Complete Box Builds',
        'Design for Assembly (DFA)',
      ],
    },
    {
      title: 'Product Development',
      items: [
        'New Product Introduction',
        'Certification Management',
        'BOM Analysis',
        'Turnkey and Complete Box Builds',
        'Design for Assembly (DFA)',
      ],
    },
    {
      title: 'Product Development',
      items: [
        'New Product Introduction',
        'Certification Management',
        'BOM Analysis',
        'Turnkey and Complete Box Builds',
        'Design for Assembly (DFA)',
      ],
    },
    {
      title: 'Product Development',
      items: [
        'New Product Introduction',
        'Certification Management',
        'BOM Analysis',
        'Turnkey and Complete Box Builds',
        'Design for Assembly (DFA)',
      ],
    },
  ];

  return (
    <section>
      <div className="grid grid-cols-2 gap-5 my-10">
        {sections.map((section, index) => (
          <div key={index} className="border p-8 rounded-[10px] shadow-md">
            <p className="text-[32px] font-semibold mb-6">{section.title}</p>
            <ul>
              {section.items.map((item, itemIndex) => (
                <li key={itemIndex} className="list-disc">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PcbTab;

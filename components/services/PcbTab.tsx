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
      title: 'Electrical Hardware Design',
      items: [
        'Schematic Design',
        'IC Component Selectiont',
        'Printed Circuit Board Design, including: PCB Layout, PCB Testing',
        'Design Validation Testing (DVT)',
        'Engineering Validation Testing (EVT)',
      ],
    },
    {
      title: 'Test Fixture Design',
      items: [
        'Develop and Design Test Fixture',
        'In-Circuit Testing and Programming',
        'Functional Testing',
        'Fixture Validation',
        'End-of-Line Fixture',
      ],
    },
  ];

  return (
    <section>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-5 my-10">
        {sections.map((section, index) => (
          <div key={index} className="border p-8 rounded-[10px] shadow-sm">
            <p className="lg:text-[32px] text-lg font-semibold lg:mb-6 mb-3">
              {section.title}
            </p>
            <ul>
              {section.items.map((item, itemIndex) => (
                <li key={itemIndex} className="list-disc text-base">
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

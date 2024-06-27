import React from 'react';

const TestingTab = () => {
  const sections = [
    {
      title: 'Production Volume',
      item: 'The volume for PCB assembly at ProTronics depends more on the design of the circuit board and the number of components than the number of boards. We have built printed circuit boards with only five chip',
    },
    {
      title: 'Production Volume',
      item: 'The volume for PCB assembly at ProTronics depends more on the design of the circuit board and the number of components than the number of boards. We have built printed circuit boards with only five chip',
    },
    {
      title: 'Production Volume',
      item: 'The volume for PCB assembly at ProTronics depends more on the design of the circuit board and the number of components than the number of boards. We have built printed circuit boards with only five chip',
    },
  ];

  return (
    <section>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-5 my-10">
        {sections.map((section, index) => (
          <div key={index} className="border p-8 rounded-[10px] shadow-sm">
            <p className="text-[32px] font-semibold mb-6">{section.title}</p>
            <p className="text-lg font-normal">{section.item}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestingTab;

import React from 'react';

const PcbAssemblyTab = () => {
  const sections = [
    {
      title: 'PCB Assembly',
      items: [
        ' NPI to production volume',
        'Customized process solutions',
        'High mix high part count',
        'Small to large form factor',
      ],
    },
    {
      title: 'Rework & Repair',
      items: [
        'BGA/LGA repair and rework',
        'Selective Solder',
        'Wave solder',
        'PCB water wash',
        'Conformal coating',
      ],
    },
    {
      title: 'Prototype',
      items: [
        'Customer specific supply chain solutions',
        'ISO131',
        'Free DFA and DFM report',
      ],
    },
    {
      title: 'Test & Inspection',
      items: [
        'Best in class, SMT inspection and test equipment',
        'ATE and functional test',
        'RF assembly and test',
        'Failure Analysis',
      ],
    },
    {
      title: 'BOM Management & Life Cycle Services',
      items: [
        'Customer specific supply chain solutions',
        'ISO131',
        'Free DFA and DFM report',
      ],
    },
    {
      title: 'Wire Harness & Cable Assmbly',
      items: [
        'Best in class, SMT inspection and test equipment',
        'ATE and functional test',
        'RF assembly and test',
        'Failure Analysis',
      ],
    },
  ];

  return (
    <section>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-5 my-10">
        {sections.map((section, index) => (
          <div key={index} className="border p-8 rounded-[10px] shadow-sm">
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

export default PcbAssemblyTab;

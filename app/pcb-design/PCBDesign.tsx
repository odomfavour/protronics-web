'use client';
import Faq from '@/components/faq/Faq';
import GetStarted from '@/components/landing/GetStarted';
import Image from 'next/image';

const faqData = [
  {
    question: 'Product Development',
    answer: [
      'New Product Introduction',
      'Certification Management',
      'BOM Analysis',
      'Turnkey and Complete Box Builds',
      'Design for Assembly (DFA)',
    ],
  },
  {
    question: 'Electrical Hardware Design',
    answer: [
      'Schematic Design',
      'IC Component Selectiont',
      'Printed Circuit Board Design, including: PCB Layout, PCB Testing',
      'Design Validation Testing (DVT)',
      'Engineering Validation Testing (EVT)',
    ],
  },

  {
    question: 'Test Fixture Design',
    answer: [
      'Develop and Design Test Fixture',
      'In-Circuit Testing and Programming',
      'Functional Testing',
      'Fixture Validation',
      'End-of-Line Fixture',
    ],
  },
];

const PCBDesignPage = () => {
  return (
    <section className="pt-[120px] lg:pt-[150px]">
      <div className="max-w-[1440px] mx-auto">
        <div className="w-11/12 mx-auto">
          <div className="text-left mb-[40px] mt-[100px]">
            <p className="lg:text-[64px] text-3xl font-bold text-[#000000] lg:w-1/2 w-full  leading-[56px] mb-2 lg:mb-5">
              PCB Design
            </p>
            <p className="lg:text-2xl text-lg font-normal">
              Discover our expertise in PCB Design.
            </p>
          </div>

          <div className="w-full ">
            <Image
              src="/images/pcb-design.png"
              alt="pcb design"
              className="rounded-[19px]"
              width={1300}
              height={545}
            />
          </div>
          <Faq data={faqData} />
        </div>
      </div>
      <GetStarted />
    </section>
  );
};

export default PCBDesignPage;

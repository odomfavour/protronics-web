'use client';
import HeaderBar from '@/components/common/HeaderBar';
import Faq from '@/components/faq/Faq';
import GetStarted from '@/components/landing/GetStarted';
import PcbAssemblyTab from '@/components/services/PcbAssemblyTab';
import Image from 'next/image';
import React, { useState } from 'react';
const faqData = [
  {
    question: 'PCB Assembly',
    answer: [
      ' NPI to production volume',
      'Customized process solutions',
      'High mix high part count',
      'Small to large form factor',
    ],
  },
  {
    question: 'Rework & Repair',
    answer: [
      'BGA/LGA repair and rework',
      'Selective Solder',
      'Wave solder',
      'PCB water wash',
      'Conformal coating',
    ],
  },

  {
    question: 'Prototype',
    answer: [
      'Customer specific supply chain solutions',
      'ISO131',
      'Free DFA and DFM report',
    ],
  },
  {
    question: 'Test & Inspection',
    answer: [
      'Best in class, SMT inspection and test equipment',
      'ATE and functional test',
      'RF assembly and test',
      'Failure Analysis',
    ],
  },
  {
    question: 'BOM Management & Life Cycle Services',
    answer: [
      'Customer specific supply chain solutions',
      'ISO131',
      'Free DFA and DFM report',
    ],
  },
  {
    question: 'Wire Harness & Cable Assmbly',
    answer: [
      'Best in class, SMT inspection and test equipment',
      'ATE and functional test',
      'RF assembly and test',
      'Failure Analysis',
    ],
  },
];
const Page = () => {
  return (
    <section className="pt-[120px] lg:pt-[150px]">
      <div className="max-w-[1440px] mx-auto">
        <div className="w-11/12 mx-auto">
          <div className="text-left mb-[40px] mt-[100px]">
            <p className="lg:text-[64px] text-3xl font-bold text-[#000000]  leading-[56px] mb-2 lg:mb-5">
              PCB Assembly
            </p>
            <p className="lg:text-2xl text-lg font-normal">
              Discover our expertise in PCB Design.
            </p>
          </div>

          <div className="w-full ">
            <Image
              src="/images/pcb-assembly-two.png"
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

export default Page;

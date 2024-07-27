import TestingTab from '@/components/services/TestingTab';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'PCB Testing - Protronics Inc.',
  description:
    'The quick turn EMS, PCB Design, PCB assembly and IC packaging specialist',
};

const Page = () => {
  return (
    <section className="pt-[120px] lg:pt-[200px]">
      <div className="max-w-[1440px] mx-auto">
        <div className="w-11/12 mx-auto">
          <div className="text-center pt-6">
            <p className="lg:text-[56px] text-3xl font-bold text-[#000000] lg:w-1/2 w-full mx-auto leading-[56px] mb-5">
              Testing
            </p>
            <p className="lg:text-2xl text-lg font-normal">
              Discover our expertise in PCB Design.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-10">
        <div className="w-11/12 mx-auto">
          <div className="max-w-[1440px] mx-auto">
            <div className="my-10 w-3/4 mx-auto border-b"></div>
            <div className="my-20">
              <TestingTab />
            </div>
            <div className="my-10 w-3/4 mx-auto border-b"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;

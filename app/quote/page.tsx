import QuoteForm from '@/components/quote/QuoteForm';
import { Metadata } from 'next';
import React from 'react';
import { FaRegEnvelope } from 'react-icons/fa';
import { LuPhone } from 'react-icons/lu';

export const metadata: Metadata = {
  title: 'Quote - Protronics Inc.',
  description:
    'The quick turn EMS, PCB Design, PCB assembly and IC packaging specialist',
};

const page = () => {
  return (
    <section className="pt-[200px]">
      <div className="max-w-[1440px] mx-auto">
        <div className="w-11/12 mx-auto">
          <div className="flex lg:flex-row flex-col py-10 gap-10">
            <div className="lg:w-1/2 w-full flex lg:pt-[300px]">
              <div>
                <p className="font-bold text-center lg:text-left text-[44px] lg:text-[56px] text-black mb-6">
                  Get a Quote
                </p>
                <p className="text-lg  text-center lg:text-left font-normal text-black mb-12">
                  Please complete the form below to receive a detailed quote for
                  your job. Provide as much detail as possible.
                </p>
                <div className="flex items-center gap-3 mb-3">
                  <div className="h-[48px] w-[48px] flex items-center text-proOrange justify-center rounded-full bg-[#FFF4F0]">
                    <FaRegEnvelope />
                  </div>
                  <p>
                    <a
                      href="mailto:sales@protronics-inc.com"
                      className="text-blue-500 underline"
                    >
                      sales@protronics-inc.com
                    </a>
                  </p>
                </div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="h-[48px] w-[48px] flex items-center text-proOrange justify-center rounded-full bg-[#FFF4F0]">
                    <LuPhone />
                  </div>
                  <p>
                    <a
                      href="tel:+19192170007"
                      className="text-blue-500 underline"
                    >
                      Support: +1 919-217-0007
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 w-full">
              <div className="bg-gray-100 md:p-10 p-5 mb-10 rounded-[10px]">
                <QuoteForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;

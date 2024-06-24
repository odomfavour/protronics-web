import QuoteForm from '@/components/quote/QuoteForm';
import React from 'react';
import { FaEnvelope } from 'react-icons/fa';

const page = () => {
  return (
    <section className="pt-[100px]">
      <div className="w-11/12 mx-auto">
        <div className="flex lg:flex-row flex-col py-10 gap-10">
          <div className="lg:w-1/2 w-full flex lg:pt-[300px]">
            <div>
              <p className="font-bold text-[56px] text-black mb-6">
                Get a Quote
              </p>
              <p className="text-lg font-normal text-black mb-12">
                Please complete the form below to receive a detailed quote for
                your job. Provide as much detail as possible.
              </p>
              <div className="flex items-center gap-3 mb-3">
                <div className="h-[48px] w-[48px] flex items-center justify-center rounded-full bg-[#FFF4F0]">
                  <FaEnvelope />
                </div>
                <p>info@protronics.com</p>
              </div>
              <div className="flex items-center gap-3 mb-3">
                <div className="h-[48px] w-[48px] flex items-center justify-center rounded-full bg-[#FFF4F0]">
                  <FaEnvelope />
                </div>
                <p>info@protronics.com</p>
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
    </section>
  );
};

export default page;

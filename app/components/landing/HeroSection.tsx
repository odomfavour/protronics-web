import Image from 'next/image';
import React from 'react';

const HeroSection = () => {
  return (
    <section className="mt-[100px]">
      <div className="w-11/12 mx-auto">
        <div className="flex items-center pt-[60px]">
          <div className="w-2/3">
            <p className="text-[56px] font-bold">
              Experience Seamless PCB Solutions
            </p>
            <p className="mt-[24px] text-[#1D2739] text-2xl">
              {' '}
              We offer precision craftsmanship everytime.
            </p>
            <div className="flex items-center gap-[24px] mt-[20px]">
              <button className="bg-proOrange  rounded px-[24px] py-[10px] font-semibold text-base text-white">
                Get a quote
              </button>
              <button className="border-proOrange border  rounded px-[24px] py-[10px] font-semibold text-base text-proOrange">
                Learn More
              </button>
            </div>
          </div>
          <div className="w-2/3 flex justify-end">
            <div className="h-[398px] w-[428px] relative">
              <Image
                src="/images/hero-pic.svg"
                className=" object-contain object-center rounded-2xl"
                fill={true}
                style={{ objectFit: 'contain' }}
                alt="product image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

import Image from 'next/image';
import React from 'react';
import { FaAngleRight } from 'react-icons/fa';

const HeroSection = () => {
  return (
    <section className="mt-[100px]">
      <div className="w-11/12 mx-auto">
        <div className="flex lg:flex-row flex-col items-center lg:pt-[60px] pt-[30px]">
          <div className="lg:w-2/3 w-full">
            <p className="lg:text-[56px] text-3xl font-bold">
              Experience Seamless PCB Solutions
            </p>
            <p className="lg:mt-[24px] mt-4 text-[#1D2739] lg:text-2xl text-lg">
              {' '}
              We offer precision craftsmanship everytime.
            </p>
            <div className="flex items-center lg:gap-[24px] gap-4 mt-[20px]">
              <button className="bg-proOrange rounded lg:px-[24px] px-4 py-[10px] font-semibold text-base text-white">
                Get a quote
              </button>
              <button className="border-proOrange border rounded lg:px-[24px] px-4 py-[10px] font-semibold text-base text-proOrange flex items-center gap-2">
                Learn More <FaAngleRight />
              </button>
            </div>
          </div>
          <div className="lg:w-2/3 w-full flex justify-end">
            <div className="h-[398px] md:w-[428px] w-full relative">
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

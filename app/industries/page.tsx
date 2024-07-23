import GetStarted from '@/components/landing/GetStarted';
import { Metadata } from 'next';
import Image from 'next/image';
import React from 'react';

export const metadata: Metadata = {
  title: 'Industries - Protronics Inc.',
  description:
    'The quick turn EMS, PCB Design, PCB assembly and IC packaging specialist',
};

const IndustriesPage = () => {
  const industries = [
    {
      id: 1,
      image: '/images/aero-ind.png',
      title: 'Aerospace & Defense',
      desc: 'Protronics as an EMS provider offers comprehensive solutions, including design, assembly, testing, and maintenance of aerospace and defense electronic systems, ensuring they meet stringent industry standards for performance and durability.',
    },
    {
      id: 2,
      image: '/images/health-ind.png',
      title: 'Health Care',
      desc: 'EMS providers offer comprehensive solutions, from design and prototyping to full-scale production and testing, ensuring that medical devices meet strict regulatory standards and deliver high-quality, dependable results.',
    },
    {
      id: 3,
      image: '/images/mask-ind.png',
      title: 'Telecom',
      desc: 'Protronics offers specialized services such as design, prototyping, assembly, testing, and logistics, enabling IT and telecommunications companies to focus on innovation and market deployment.',
    },
    {
      id: 4,
      image: '/images/lab-ind.png',
      title: 'Industrial',
      desc: 'Our PCBs can be designed to meet the specific needs of industrial applications, providing tailored solutions for complex machinery and control systems.',
    },
  ];
  return (
    <section className="pt-[200px]">
      <div className="max-w-[1440px] mx-auto">
        <div className="w-11/12 mx-auto">
          <div className="lg:grid lg:grid-cols-2 gap-6 pt-[50px]">
            <div className="flex items-center ">
              <div>
                <Image
                  src={'/images/svg/dash.svg'}
                  width={514}
                  height={250}
                  alt="dash"
                />
                <p className="font-bold text-[44px] text-center lg:text-left lg:text-[56px] text-black mt-4 mb-6">
                  Industries
                </p>
                <p className="text-lg font-normal text-center lg:text-left text-black mb-12">
                  As a leading EMS provider, Protronics Inc. is the trusted
                  partner for companies of all sizes across diverse industries,
                  delivering rapid turnaround and premium-quality PCBs to meet
                  their critical needs.
                </p>
              </div>
            </div>

            <div className="lg:h-[450px] w-full">
              <Image
                src="/images/satelite-pic.png"
                className="rounded-2xl "
                width={800}
                height={450}
                // fill={true}
                style={{ objectFit: 'cover' }}
                alt="product image"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-5 py-[100px]">
        <div className="max-w-[1440px] mx-auto">
          <div className="w-11/12 mx-auto">
            <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-6">
              {industries.map((industry) => (
                <div key={industry.id}>
                  <div>
                    <div className="image-box h-[250px] relative z-10">
                      <Image
                        src={industry.image}
                        className=" object-contain object-center rounded-ss-[26px] rounded-se-[10px] rounded-bl-[10px] rounded-br-[37px]"
                        fill={true}
                        style={{ objectFit: 'cover' }}
                        alt="product image"
                      />
                    </div>
                  </div>
                  <div className="my-6">
                    <p className="text-proDark lg:text-[20px] text-lg font-semibold mb-4">
                      {industry.title}
                    </p>
                    <p className="text-base font-normal text-proDark">
                      {industry.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <GetStarted />
    </section>
  );
};

export default IndustriesPage;

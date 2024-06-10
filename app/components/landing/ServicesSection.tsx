import Image from 'next/image';
import React from 'react';

const ServicesSection = () => {
  const services = [
    {
      id: 1,
      title: 'PCB Design',
      desc: 'Bring your vision to life and leverage our design expertise to optimize for PCBs for functionality.',
      url: '',
    },
    {
      id: 2,
      title: 'PCB Design',
      desc: 'Bring your vision to life and leverage our design expertise to optimize for PCBs for functionality.',
      url: '',
    },
    {
      id: 3,
      title: 'PCB Design',
      desc: 'Bring your vision to life and leverage our design expertise to optimize for PCBs for functionality.',
      url: '',
    },
    {
      id: 4,
      title: 'PCB Design',
      desc: 'Bring your vision to life and leverage our design expertise to optimize for PCBs for functionality.',
      url: '',
    },
  ];
  return (
    <section className="py-10">
      <div className="mx-auto w-11/12">
        <p className="text-center text-[48px] text-proDark font-semibold ">
          Our Services
        </p>
        <p className="text-center text-[#514A4A] mb-[40px] font-normal text-lg">
          Discover our expertise in PCB assembly.
        </p>
        <div className="grid grid-cols-4 gap-[30px]">
          {services.map((service) => {
            const { id } = service;
            return (
              <div key={id}>
                <div>
                  <div className="image-box h-[240px] relative z-10">
                    <Image
                      src="/images/why-pic.svg"
                      className=" object-contain object-center rounded-2xl "
                      fill={true}
                      style={{ objectFit: 'cover' }}
                      alt="product image"
                    />
                  </div>
                </div>
                <div className="bg-white px-4 py-5 rounded-sm shadow-md">
                  <p>PCB Design</p>
                  <p>
                    Bring your vision to life and leverage our design expertise
                    to optimize for PCBs for functionality.
                  </p>
                  <div className="flex items-center gap-[24px] mt-[10px]">
                    <button className="border-proOrange border  rounded px-[24px] py-[10px] font-semibold text-base text-proOrange">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

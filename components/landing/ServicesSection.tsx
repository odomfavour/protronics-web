import Image from 'next/image';
import React from 'react';
import { FaAngleRight } from 'react-icons/fa';

const ServicesSection = () => {
  const services = [
    {
      id: 1,
      title: 'PCB Design',
      desc: 'Bring your vision to life and leverage our design expertise to optimize for PCBs for functionality.',
      url: '',
      img: '/images/service-1.svg',
    },
    {
      id: 2,
      title: 'PCB Assembly',
      desc: 'Seamlessly transform your designs into high-quality, reliable circuit boards.',
      url: '',
      img: '/images/service-2.svg',
    },
    {
      id: 3,
      title: 'Testing',
      desc: 'Breathe new life into your PCBs with our expert rework and repair services.',
      url: '',
      img: '/images/service-3.svg',
    },
    {
      id: 4,
      title: 'IC Packaging',
      desc: 'Fast-track your product development with raqpid prototyping and iterative design cycles.',
      url: '',
      img: '/images/service-4.svg',
    },
  ];
  return (
    <section className="py-10">
      <div className="mx-auto w-11/12">
        <p className="text-center lg:text-[48px] text-3xl text-proDark font-semibold mb-6">
          Our Services
        </p>
        <p className="text-center text-[#514A4A] mb-[40px] font-normal lg:text-lg text-sm">
          Discover our expertise in PCB assembly.
        </p>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-[30px]">
          {services.map((service) => {
            const { id, img, title, desc } = service;
            return (
              <div key={id}>
                <div>
                  <div className="image-box h-[240px] relative z-10">
                    <Image
                      src={img}
                      className=" object-contain object-center rounded-2xl "
                      fill={true}
                      style={{ objectFit: 'cover' }}
                      alt="product image"
                    />
                  </div>
                </div>
                <div className="bg-white px-4 py-5 rounded-sm shadow-md">
                  <div className="h-[40px] w-[40px] relative z-10">
                    <Image
                      src="/images/service-icon.svg"
                      className=" object-contain object-center rounded-2xl "
                      fill={true}
                      style={{ objectFit: 'cover' }}
                      alt="product image"
                    />
                  </div>
                  <p className="text-[20px] font-semibold text-[#212121] mt-4">
                    {title}
                  </p>
                  <p className="text-sm font-normal text-[#343A40] h-[70px]">
                    {desc}
                  </p>
                  <div className="flex items-center gap-[24px] mt-[10px]">
                    <button className="border-proOrange border  rounded lg:px-[24px] px-4 py-[10px] font-semibold text-base text-proOrange flex items-center gap-2">
                      Learn More <FaAngleRight />
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

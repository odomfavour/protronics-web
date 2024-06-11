import Image from 'next/image';
import React from 'react';

const WhySection = () => {
  const qualities = [
    {
      id: 1,
      title: 'Quality Assured',
      desc: 'Experience flawless performance with our meticulous PCB Assembly process.',
    },
    {
      id: 2,
      title: 'Advanced Technology',
      desc: 'We leverage cutting-edge solutions to deliver state-of-the-art circuit boards.',
    },
    {
      id: 3,
      title: 'Cost-effective Solution',
      desc: 'Optimize your budget with our competitive pricing and high-yield assembly.',
    },
    {
      id: 4,
      title: 'Quick Turnaround',
      desc: 'Get your PCBs faster with our streamlined production process.',
    },
  ];
  return (
    <section className="py-10">
      <div className="mx-auto w-11/12">
        <div className="bg-blue-100 p-[60px] rounded-[10px]">
          <p className="text-center text-[48px] text-proDark font-semibold ">
            Why Choose Protronics as your PCBA Partner?
          </p>
          <p className="text-center text-[#514A4A] mb-[40px] font-normal text-lg">
            With over 31 years experience working with many different industries
            including commercial, military and medical, we have built everything
            from circuit boards used in golf balls to circuit boards that go in
            the brain.
          </p>

          <div className="flex gap-[40px] items-center">
            <div className="w-3/5">
              <div className="h-[450px] relative">
                <Image
                  src="/images/why-pic.svg"
                  className=" object-contain object-center rounded-2xl"
                  fill={true}
                  style={{ objectFit: 'contain' }}
                  alt="product image"
                />
              </div>
            </div>
            <div className="w-2/5">
              {qualities.map((quality) => (
                <div className="flex gap-3 mb-7" key={quality.id}>
                  <div className="h-[40px] w-[40px] relative">
                    <Image
                      src="/images/3d.svg"
                      className=" object-contain object-center rounded-2xl"
                      fill={true}
                      style={{ objectFit: 'contain' }}
                      alt="product image"
                    />
                  </div>
                  <div>
                    <p className="text-lg  text-[#475367] font-semibold">
                      {quality.title}
                    </p>
                    <p className="text-sm text-[#475367] font-normal">
                      {quality.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhySection;
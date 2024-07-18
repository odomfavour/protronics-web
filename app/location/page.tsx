import HeaderBar from '@/components/common/HeaderBar';
import Image from 'next/image';
import React from 'react';

const LocationPage = () => {
  const categories = [
    {
      id: 1,
      title: 'PCB Design & Engineering',
      desc: 'PCB Design Layout and Rapid Design. PCB Design Layout and Rapid Design. PCB Design Layout and Rapid Design. PCB Design Layout and Rapid Design.',
    },
    {
      id: 2,
      title: 'PCB Fabrication',
      desc: 'PCB Design Layout and Rapid Design. PCB Design Layout and Rapid Design. PCB Design Layout and Rapid Design. PCB Design Layout and Rapid Design.',
    },
    {
      id: 3,
      title: 'PCB Assembly',
      desc: 'PCB Design Layout and Rapid Design. PCB Design Layout and Rapid Design. PCB Design Layout and Rapid Design. PCB Design Layout and Rapid Design.',
    },
    {
      id: 4,
      title: 'System/Box Build',
      desc: 'PCB Design Layout and Rapid Design. PCB Design Layout and Rapid Design. PCB Design Layout and Rapid Design. PCB Design Layout and Rapid Design.',
    },
    {
      id: 5,
      title: 'Supply Chain/Logistics',
      desc: 'PCB Design Layout and Rapid Design. PCB Design Layout and Rapid Design. PCB Design Layout and Rapid Design. PCB Design Layout and Rapid Design.',
    },
    {
      id: 6,
      title: 'Test & Burn In',
      desc: 'PCB Design Layout and Rapid Design. PCB Design Layout and Rapid Design. PCB Design Layout and Rapid Design. PCB Design Layout and Rapid Design.',
    },
    {
      id: 7,
      title: 'BGA Rework',
      desc: 'PCB Design Layout and Rapid Design. PCB Design Layout and Rapid Design. PCB Design Layout and Rapid Design. PCB Design Layout and Rapid Design.',
    },
    {
      id: 7,
      title: 'Failure Analysis Lab',
      desc: 'PCB Design Layout and Rapid Design. PCB Design Layout and Rapid Design. PCB Design Layout and Rapid Design. PCB Design Layout and Rapid Design.',
    },
  ];
  return (
    <section className="pt-[120px] lg:pt-[200px]">
      <div className="max-w-[1440px] mx-auto">
        <div className="w-11/12 mx-auto">
          <HeaderBar
            title="PCBA Prototype & Manufacturing Services "
            subtitle="Our Support Services in Boston, MA"
          />
        </div>
      </div>

      <div className="py-10">
        <div className="max-w-[1440px] mx-auto">
          <div className="w-11/12 mx-auto border-b border-black mt-5">
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-10 mb-10">
              <div>
                <p className="mb-5 text-base font-normal text-proDark">
                  Protronics is an experienced electronics manufacturing
                  services (EMS) partner based in San Jose, California and
                  providing quick-turn PCB design, prototype, and production
                  assembly to companies in Boston and its surrounding areas.
                </p>
                <p className="mb-5 text-base font-normal text-proDark">
                  Protronics enables firms of all sizes to improve their
                  production cycle while reducing manufacturing time and costs
                  by ensuring product reliability, accuracy and performance
                  through the utilization of:
                </p>
                <ul className="pl-6">
                  <li className="list-disc mb-1 text-base font-normal text-proDark">
                    State-of-the-art equipment in an ESD-controlled facility
                  </li>
                  <li className="list-disc mb-1 text-base font-normal text-proDark">
                    Experienced and responsive production teams
                  </li>
                  <li className="list-disc mb-1 text-base font-normal text-proDark">
                    Procurement of quality components from trusted supply chain
                    partners.
                  </li>
                </ul>
              </div>
              <div>
                <div className="bg-[#FFECE5] rounded-[10px] p-[26px] h-full">
                  <h3 className="text-proDark text-[40px] font-semibold">
                    Contact your Protronics Rep
                  </h3>
                  <p className="text-proDark text-[20px] font-semibold mb-1">
                    Sandra Goodman
                  </p>
                  <p className="text-proDark text-[20px] font-medium mb-1">
                    <span className="font-semibold">Phone:</span> (408)589-2700
                  </p>
                  <p className="text-proDark text-[20px] font-medium mb-1">
                    <span>Email:</span> sandra.goodman@protronics.com
                  </p>
                  <div className="mt-5">
                    <button className="bg-proOrange rounded px-[24px] py-[10px] font-semibold text-base text-white">
                      Request a Quote
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-10">
        <div className="max-w-[1440px] mx-auto">
          <div className="w-11/12 mx-auto">
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
              {categories.map((category) => (
                <div className="text-center mb-6" key={category.id}>
                  <div className="flex justify-center items-center">
                    <div className="h-[40px] w-[40px] relative">
                      <Image
                        src="/images/3d.svg"
                        className=" object-contain object-center rounded-2xl"
                        fill={true}
                        style={{ objectFit: 'contain' }}
                        alt="product image"
                      />
                    </div>
                  </div>
                  <p className="text-lg font-semibold text-proDark">
                    {category.title}
                  </p>
                  <p className="text-sm font-normal text-[#475367]">
                    {category.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="py-10">
        <div className="max-w-[1440px] mx-auto">
          <div className="w-11/12 mx-auto border-t-2">
            <div className="mb-5">
              <h4 className="text-[28px] font-medium pt-10 mb-4">
                Types of EMS Providers?
              </h4>
              <p className="text-lg font-normal text-proDark">
                Often there are two types of EMS providers, (HMLV) High Mix Low
                Volume and HVLM (HVLM). A provider is classified as HMLV or HVLM
                based on their output volume, unit built, and the complexity or
                variation of assemblies completed by the provider. Protronics
                specializes in HMLV and HVLM quick-turn PCB assembly.
              </p>
            </div>
            <div className="mb-5">
              <p className="text-[28px] font-medium text-proDark mb-4">
                How to Choose an EMS Provider?
              </p>
              <p className="text-lg font-normal text-proDark">
                To choose and EMS partner, you should make sure the company has
                the knowledge, equipment, capabilities and a professionally
                trained team to provide a quality finished product, meet your
                product requirements, and turnaround time. Best practice is to
                choose a certified PCB assembly manufacturer and service
                provider, like Protronics to ensure optimal product performance,
                quality and reliability.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationPage;

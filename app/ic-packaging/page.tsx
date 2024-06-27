'use client';
import HeaderBar from '@/components/common/HeaderBar';
import Image from 'next/image';
import React, { useState } from 'react';

const accordionData = [
  {
    title: 'Design & Development',
    content: (
      <>
        <ul>
          <li className="list-disc mb-2">
            Package design and selection (ceramic and plastic substrates)
          </li>
          <ul className="pl-3">
            <li className="list-disc mb-2">Thermal management</li>
          </ul>
          <li className="list-disc mb-2">
            {' '}
            Materials selection and evaluation
          </li>
          <li className="list-disc mb-2">
            Packaging and assembly process development{' '}
          </li>{' '}
          <li className="list-disc mb-2">
            Full custom microsystems and integration
          </li>
        </ul>
      </>
    ),
  },
  {
    title: 'Die Attach',
    content: (
      <>
        <ul>
          <li className="list-disc mb-2">
            Package design and selection (ceramic and plastic substrates)
          </li>
          <ul className="pl-3">
            <li className="list-disc mb-2">Thermal management</li>
          </ul>
          <li className="list-disc mb-2">
            {' '}
            Materials selection and evaluation
          </li>
          <li className="list-disc mb-2">
            Packaging and assembly process development{' '}
          </li>{' '}
          <li className="list-disc mb-2">
            Full custom microsystems and integration
          </li>
        </ul>
      </>
    ),
  },
  {
    title: 'Die Encapsulation',
    content: (
      <>
        <ul>
          <li className="list-disc mb-2">
            Package design and selection (ceramic and plastic substrates)
          </li>
          <ul className="pl-3">
            <li className="list-disc mb-2">Thermal management</li>
          </ul>
          <li className="list-disc mb-2">
            {' '}
            Materials selection and evaluation
          </li>
          <li className="list-disc mb-2">
            Packaging and assembly process development{' '}
          </li>{' '}
          <li className="list-disc mb-2">
            Full custom microsystems and integration
          </li>
        </ul>
      </>
    ),
  },
  {
    title: 'Wire Bonding',
    content: (
      <>
        <ul>
          <li className="list-disc mb-2">
            Package design and selection (ceramic and plastic substrates)
          </li>
          <ul className="pl-3">
            <li className="list-disc mb-2">Thermal management</li>
          </ul>
          <li className="list-disc mb-2">
            {' '}
            Materials selection and evaluation
          </li>
          <li className="list-disc mb-2">
            Packaging and assembly process development{' '}
          </li>{' '}
          <li className="list-disc mb-2">
            Full custom microsystems and integration
          </li>
        </ul>
      </>
    ),
  },
  {
    title: 'Flip Chip Assembly',
    content: (
      <>
        <ul>
          <li className="list-disc mb-2">
            Package design and selection (ceramic and plastic substrates)
          </li>
          <ul className="pl-3">
            <li className="list-disc mb-2">Thermal management</li>
          </ul>
          <li className="list-disc mb-2">
            {' '}
            Materials selection and evaluation
          </li>
          <li className="list-disc mb-2">
            Packaging and assembly process development{' '}
          </li>{' '}
          <li className="list-disc mb-2">
            Full custom microsystems and integration
          </li>
        </ul>
      </>
    ),
  },
  {
    title: 'Custom Packaging & Assembly',
    content: (
      <>
        <ul>
          <li className="list-disc mb-2">
            Package design and selection (ceramic and plastic substrates)
          </li>
          <ul className="pl-3">
            <li className="list-disc mb-2">Thermal management</li>
          </ul>
          <li className="list-disc mb-2">
            {' '}
            Materials selection and evaluation
          </li>
          <li className="list-disc mb-2">
            Packaging and assembly process development{' '}
          </li>{' '}
          <li className="list-disc mb-2">
            Full custom microsystems and integration
          </li>
        </ul>
      </>
    ),
  },
  {
    title: 'Testing/Characterization/Inspection',
    content: (
      <>
        <ul>
          <li className="list-disc mb-2">
            Package design and selection (ceramic and plastic substrates)
          </li>
          <ul className="pl-3">
            <li className="list-disc mb-2">Thermal management</li>
          </ul>
          <li className="list-disc mb-2">
            {' '}
            Materials selection and evaluation
          </li>
          <li className="list-disc mb-2">
            Packaging and assembly process development{' '}
          </li>{' '}
          <li className="list-disc mb-2">
            Full custom microsystems and integration
          </li>
        </ul>
      </>
    ),
  },
];

const Page = () => {
  const [openItem, setOpenItem] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenItem(openItem === index ? null : index);
  };

  return (
    <section className="pt-[150px]">
      <div className="w-11/12 mx-auto">
        <div className="text-center pt-6">
          <p className="lg:text-[56px] text-3xl font-bold text-[#000000] lg:leading-[54px] mb-5">
            IC Packaging
          </p>
          <p className="lg:text-2xl text-lg font-normal">
            Discover our expertise in PCB Design.
          </p>
        </div>
      </div>

      <div className="mt-10">
        <div className="w-11/12 mx-auto">
          <div className="my-10 w-3/4 mx-auto border-b"></div>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-6 lg:my-28 my-10">
            <div>
              <div className="relative h-[450px] w-full">
                <Image
                  src="/images/ic.svg"
                  className="object-contain object-center rounded-2xl"
                  priority
                  fill={true}
                  style={{ objectFit: 'cover' }}
                  alt="product image"
                />
              </div>
            </div>
            <div className="flex justify-center items-center">
              <div>
                <p className="lg:text-lg text-base font-normal text-[#101928] mb-5">
                  Protronics Packaging services include microelectronics and
                  optics assembly and packaging. Our prototyping Foundry uses
                  methods ranging from 2D die attach and wire bond assembly to
                  multiple 2.5D and 3D integration schemes. Our wirebonding
                  capabilities include manual and automated wedge and ball
                  wirebonders and pull testers.
                </p>

                <p className="lg:text-lg text-base font-normal text-[#101928] mb-5">
                  Our 2.5D packaging platforms include large-format interposers
                  for integration. Our 3D integration technologies range from
                  die stacking and flip-chip bump bonding to advanced
                  integration technologies utilizing through-silicon vias or
                  wafer bonding with high-density, low-capacitance
                  interconnects. Performance needs, form factor, security, and
                  cost all play a role in deciding which approach to use.
                </p>
              </div>
            </div>
          </div>
          <div className="my-10 w-3/4 mx-auto border-b"></div>
        </div>
      </div>

      <div className="mt-10">
        <div className="w-11/12 mx-auto">
          <div id="accordion-collapse" data-accordion="collapse">
            {accordionData.map((item, index) => (
              <div key={index} className="mb-5">
                <h2 id={`accordion-collapse-heading-${index}`}>
                  <button
                    type="button"
                    className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-proDark border border-b-0 border-[#E4E7EC] gap-3 rounded-t-[10px] bg-gray-100 focus:bg-[#E4E7EC]"
                    onClick={() => toggleAccordion(index)}
                    aria-expanded={openItem === index}
                    aria-controls={`accordion-collapse-body-${index}`}
                  >
                    <span>{item.title}</span>
                    <svg
                      data-accordion-icon
                      className={`w-3 h-3 ${
                        openItem === index ? 'rotate-180' : ''
                      } shrink-0`}
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 10 6"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5 5 1 1 5"
                      />
                    </svg>
                  </button>
                </h2>
                <div
                  id={`accordion-collapse-body-${index}`}
                  className={`${openItem === index ? '' : 'hidden'}`}
                  aria-labelledby={`accordion-collapse-heading-${index}`}
                >
                  <div className="p-5 border border-t-0 border-gray-200 bg-[#F0F2F5] rounded-b-[10px] text-[#001633]">
                    {item.content}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;

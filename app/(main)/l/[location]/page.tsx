import HeaderBar from '@/components/common/HeaderBar';
import Image from 'next/image';
import { protronicsStates } from '@/app/utils/protronics-states';
import Partners from '@/components/landing/Partners';
import QualityGrid from '@/components/landing/QualityGrid';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Location - Protronics Inc.',
  description:
    'The quick turn EMS, PCB Design, PCB assembly and IC packaging specialist',
};

const LocationPage = ({ params }: { params: { location: string } }) => {
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

  const state =
    protronicsStates[params.location as keyof typeof protronicsStates];

  return (
    <section className="pt-[120px] lg:pt-[200px]">
      <div className="max-w-[1440px] mx-auto">
        <div className="w-full mx-auto">
          <HeaderBar
            title={`PCBA Prototype & Manufacturing Company in ${state}`}
            subtitle={`Our Support Services in ${state}`}
          />
        </div>
      </div>

      <div className="py-10">
        <div className="max-w-[1440px] mx-auto">
          <div className="w-11/12 mx-auto border-b border-black mt-5">
            <div className="gap-10 mb-10">
              <div>
                <p className="mb-5 text-base font-normal text-proDark">
                  At Protronics Inc., we understand the importance of getting
                  your PCB prototypes right the first time. That&apos;s why our
                  ${state} PCB assembly services offer a unique approach – we
                  provide a few prototype boards on a quick-turn basis, then
                  spread the rest out over 1-2 weeks. This keeps you in debug
                  mode while saving you the expense of getting all your boards
                  in a quick turn.
                </p>
                <p className="mb-5 text-base font-normal text-proDark">
                  Our {state} PCB assembly services include a comprehensive
                  design for manufacturability reports. We provide valuable
                  feedback on any design concerns we identify during the
                  prototype assembly process, offering suggestions that can save
                  you rework and production costs. Leverage our expertise to
                  optimize your circuit board design for maximum efficiency and
                  reliability.
                </p>
                <p className="mb-5 text-base font-normal text-proDark">
                  Protronics Inc. goes the extra mile to ensure your products
                  meet the highest standards. We offer the service of testing
                  your product with customer-supplied test equipment, providing
                  both ambient functional testing and ESS testing (hot-cold
                  cycling and humidity) for complete peace of mind.
                </p>
              </div>
            </div>
          </div>
          <div className="w-11/12 mx-auto border-b border-black mt-5">
            <p className="text-center lg:text-[48px] leading-normal text-3xl  text-proDark font-semibold mb-6">
              Why Choose Protronics as your PCBA Partner?
            </p>
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-10 mb-10">
              <div>
                <p className="mb-5 text-base font-normal text-proDark">
                  Protronics is an experienced electronics manufacturing
                  services (EMS) partner based in Boston, Massachusetts. It
                  provides quick-turn PCB design, prototype, and production
                  assembly to companies in Boston and its surrounding areas.
                </p>
                <p className="mb-5 text-base font-normal text-proDark">
                  With over 31 years of experience working with various
                  industries, including commercial, military, and medical,
                  Protronics Inc. has built everything from circuit boards used
                  in golf balls to those in the brain. Trust our Boston PCB
                  Quality Control Process, which includes 100% inspection of
                  IPC-A-610 criteria, X-ray inspection of BGA and lead-less
                  devices, and semi-automated optical inspection for reliable
                  solder joints and component markings.
                </p>
                <p className="mb-5 text-base font-normal text-proDark">
                  Protronics enables firms of all sizes to improve their
                  production cycle while reducing manufacturing time and costs
                  by ensuring product reliability, accuracy, and performance
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
              <div className="w-full">
                <div className="lg:h-[450px] h-[200px] w-full relative">
                  <Image
                    src="/images/why-pic.svg"
                    className=" object-contain object-center rounded-2xl"
                    fill={true}
                    style={{ objectFit: 'contain' }}
                    alt="product image"
                  />
                </div>
              </div>
            </div>
            <div className="my-10">
              <Partners />
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <div className="max-w-[1440px] mx-auto">
          <div className="w-11/12 mx-auto">
            <div className="mb-5">
              <h4 className="text-[28px] font-medium pt-10 mb-4">
                Types of EMS Providers?
              </h4>
              <p className="text-base font-normal text-proDark">
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
              <p className="text-base font-normal text-proDark">
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
      <QualityGrid />
      <div className="py-10">
        <div className="bg-[#E3EFFC] mx-auto py-10">
          <div className="w-11/12 mx-auto">
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
              {categories.map((category) => (
                <div className="text-center mb-6 mx-14" key={category.id}>
                  <div className="flex justify-center items-center">
                    <div className="h-[40px] w-[40px] relative color-[#F56630]">
                      <Image
                        src="/images/3d-orange.svg"
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
                  <p className="text-sm font-normal text-[#475367] text-center">
                    {category.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-5xl mx-auto py-10">
        <div className="bg-[#FFECE5] rounded-[10px] p-[26px] h-full">
          <h3 className="text-proDark text-[40px] font-semibold">
            Contact your Protronics Rep
          </h3>
          {/* <p className="text-proDark text-[20px] font-semibold mb-1">Sandra Goodman</p> */}
          <p className="text-proDark text-[20px] font-medium mb-1">
            <span className="font-semibold">Phone:</span> +1 919-217-0007
          </p>
          <p className="text-proDark text-[20px] font-medium mb-1">
            <span>Email:</span> sales@protronics-inc.com
          </p>
          <div className="mt-5">
            <button className="bg-proOrange rounded px-[24px] py-[10px] font-semibold text-base text-white">
              Request a Quote
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationPage;

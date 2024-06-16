import Image from 'next/image';
import React from 'react';

const QualityControlSection = () => {
  return (
    <section className="py-10 bg-[#F7F9FC]">
      <div className="mx-auto w-11/12">
        <p className="text-center lg:text-[48px] text-3xl text-proDark font-semibold ">
          Our Quality Control Process
        </p>
        <p className="text-center text-[#514A4A] mb-[40px] font-normal lg:text-lg text-sm">
          All assemblies are 100% inspected to IPC-A-610 criteria. We use X-Ray
          to inspect BGA and lead-less devices for reliable solder joints. We
          use semi-automated optical inspection equipment to inspect all
          components for correct markings and acceptable solder joints.
        </p>
        <div className="mt-6">
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-[32px]">
            <div>
              <div>
                <div>
                  <div className="image-box h-[240px] relative z-10">
                    <Image
                      src="/images/pcb-logos/pcb-xray.svg"
                      className=" object-contain object-center "
                      fill={true}
                      style={{ objectFit: 'cover' }}
                      alt="product image"
                    />
                  </div>
                </div>
                <div className="bg-white px-4 py-5 rounded-sm shadow-md min-h-[120px]">
                  <p className="text-proDark lg:text-[28px] text-lg font-semibold">
                    PCB X-Ray Inspection
                  </p>
                  <p className="text-base font-normal text-[#475367]">
                    100% inspection to IPC-A-610 criteria using X-Ray and
                    semi-automated optical inspection.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div>
                <div>
                  <div className="image-box h-[240px] relative z-10">
                    <Image
                      src="/images/pcb-logos/env-testing.svg"
                      className=" object-contain object-center"
                      fill={true}
                      style={{ objectFit: 'cover' }}
                      alt="product image"
                    />
                  </div>
                </div>
                <div className="bg-white px-4 py-5 rounded-sm shadow-md min-h-[120px]">
                  <p className="text-proDark lg:text-[28px] text-lg font-semibold">
                    Environmental Testing
                  </p>
                  <p className="text-base font-normal text-[#475367]">
                    Ambient functional testing & ESS testing with hot-cold
                    cycling and humidity.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QualityControlSection;

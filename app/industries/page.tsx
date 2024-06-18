import Image from 'next/image';
import React from 'react';

const IndustriesPage = () => {
  const industries = [
    {
      id: 1,
      title: 'Aerospace & Defense',
      desc: '100% inspection to IPC-A-610 criteria using X-Ray and semi-automated optical inspection. 100% inspection to IPC-A-610 criteria using X-Ray and semi-automated optical inspection.',
    },
    {
      id: 2,
      title: 'Communications & Network',
      desc: '100% inspection to IPC-A-610 criteria using X-Ray and semi-automated optical inspection. 100% inspection to IPC-A-610 criteria using X-Ray and semi-automated optical inspection.',
    },
    {
      id: 3,
      title: 'Health Tech',
      desc: '100% inspection to IPC-A-610 criteria using X-Ray and semi-automated optical inspection. 100% inspection to IPC-A-610 criteria using X-Ray and semi-automated optical inspection.',
    },
    {
      id: 4,
      title: 'Consumer Electronics',
      desc: '100% inspection to IPC-A-610 criteria using X-Ray and semi-automated optical inspection. 100% inspection to IPC-A-610 criteria using X-Ray and semi-automated optical inspection.',
    },
    {
      id: 5,
      title: 'IOT',
      desc: '100% inspection to IPC-A-610 criteria using X-Ray and semi-automated optical inspection. 100% inspection to IPC-A-610 criteria using X-Ray and semi-automated optical inspection.',
    },
    {
      id: 6,
      title: 'Education & Universities',
      desc: '100% inspection to IPC-A-610 criteria using X-Ray and semi-automated optical inspection. 100% inspection to IPC-A-610 criteria using X-Ray and semi-automated optical inspection.',
    },
  ];
  return (
    <section className="pt-[100px]">
      <div className="w-11/12 mx-auto">
        <div className="grid grid-cols-2 gap-6 pt-[50px]">
          <div className="flex items-center ">
            <div>
              <p className="font-bold text-[56px] text-black mb-6">
                Industries
              </p>
              <p className="text-lg font-normal text-black mb-12">
                We are trusted by companies, both big and small that rely on
                quality services.
              </p>
            </div>
          </div>
          <div>
            <div className="relative h-[450px] w-full">
              <Image
                src="/images/satelite-pic.svg"
                className=" object-contain object-center rounded-2xl "
                fill={true}
                style={{ objectFit: 'cover' }}
                alt="product image"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5 py-[100px]">
        <div className="w-11/12 mx-auto">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
            {industries.map((industry) => (
              <div>
                <div>
                  <div className="image-box h-[250px] relative z-10">
                    <Image
                      src="/images/pcb-logos/pcb-xray.svg"
                      className=" object-contain object-center rounded-ss-[26px] rounded-se-[10px] rounded-bl-[10px] rounded-br-[37px]"
                      fill={true}
                      style={{ objectFit: 'cover' }}
                      alt="product image"
                    />
                  </div>
                </div>
                <div className="my-6">
                  <p className="text-proDark lg:text-[20px] text-lg font-semibold mb-4">
                    Mastering PCB Layering
                  </p>
                  <p className="text-base font-normal text-proDark">
                    100% inspection to IPC-A-610 criteria using X-Ray and
                    semi-automated optical inspection.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustriesPage;

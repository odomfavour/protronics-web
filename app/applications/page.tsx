import Image from 'next/image';
import React from 'react';

const IndustriesPage = () => {
  const applications = [
    {
      id: 1,
      title: 'Power & Energy System',
      desc: '100% inspection to IPC-A-610 criteria using X-Ray and semi-automated optical inspection. 100% inspection to IPC-A-610 criteria using X-Ray and semi-automated optical inspection.',
    },
    {
      id: 2,
      title: 'HVAC',
      desc: '100% inspection to IPC-A-610 criteria using X-Ray and semi-automated optical inspection. 100% inspection to IPC-A-610 criteria using X-Ray and semi-automated optical inspection.',
    },
    {
      id: 3,
      title: 'Battery Monitoring System',
      desc: '100% inspection to IPC-A-610 criteria using X-Ray and semi-automated optical inspection. 100% inspection to IPC-A-610 criteria using X-Ray and semi-automated optical inspection.',
    },
  ];
  return (
    <section className="pt-[100px]">
      <div className="w-11/12 mx-auto">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-6 pt-[50px]">
          <div className="flex items-center">
            <div>
              <p className="font-bold text-[56px] text-black mb-6">
                Applications
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
      <div className="mt-5 py-[100px] bg-[#EFF1F321]">
        <div className="w-11/12 mx-auto">
          <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
            {applications.map((application) => (
              <div
                className="bg-white rounded-[10px] p-10"
                key={application.id}
              >
                <div className="flex justify-center items-center h-[48px] w-[48px] bg-[#FFF4F0] rounded-full">
                  <div className="h-[20px] w-[20px] relative">
                    <Image
                      src="/images/3d.svg"
                      className=" object-contain object-center rounded-2xl"
                      fill={true}
                      style={{ objectFit: 'contain' }}
                      alt="product image"
                    />
                  </div>
                </div>
                <div className="my-6">
                  <p className="text-proDark lg:text-[20px] text-lg font-semibold mb-4">
                    {application.title}
                  </p>
                  <p className="text-base font-normal text-proDark">
                    {application.desc}
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

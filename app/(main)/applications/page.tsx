import GetStarted from '@/components/landing/GetStarted';
import Image from 'next/image';
import React from 'react';

const IndustriesPage = () => {
  const applications = [
    {
      id: 1,
      title: 'Power & Energy System',
      desc: 'Protronics quickturn PCBs are used in the integration of smart grid technology for real-time monitoring and control of electrical networks, and also to create inverters and converters to change the form of electricity, such as converting DC to AC or vice versa.',
    },
    {
      id: 2,
      title: 'HVAC',
      desc: 'Protronics designed and manufactured custom PCBs used to support sensors & actuators, thermostats, communication modules, and control units for efficient operation of HVAC systems.',
    },
    {
      id: 3,
      title: 'Battery Monitoring System',
      desc: 'Our PCB assembly was trusted for the production of BMS to monitor and manage the charge and discharge of batteries, ensuring safety and efficiency in energy storage systems.',
    },
  ];
  return (
    <section className="pt-[150px] lg:pt-[200px]">
      <div className="max-w-[1440px] mx-auto">
        <div className="w-11/12 mx-auto">
          <div className="grid md:grid-cols-2 grid-cols-1 gap-6 pt-[50px]">
            <div className="flex items-center">
              <div>
                <Image
                  src={'/images/svg/dash.svg'}
                  width={514}
                  height={250}
                  alt="dash"
                />
                <p className="font-bold  text-center text-[44px] lg:text-left lg:text-[56px] text-black pt-4 mb-6">
                  Applications
                </p>
                <p className="text-lg font-normal text-black mb-12">
                  PCBs designed, developed, and assembled by Protronics have
                  been used in a wide range of applications across various
                  industries.
                </p>
              </div>
            </div>
            <div>
              <div className="relative h-[450px] w-full">
                <Image
                  src="/images/application-pic.png"
                  className=" object-contain object-center rounded-2xl"
                  fill={true}
                  style={{ objectFit: 'cover' }}
                  alt="product image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5 py-[100px] bg-[#EFF1F321]">
        <div className="max-w-[1440px] mx-auto">
          <div className="w-11/12 mx-auto">
            <div className="grid md:grid-cols-3 grid-cols-1 gap-6">
              {applications.map((application) => (
                <div
                  className="bg-white rounded-[10px] p-10 shadow-md"
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
      </div>
      <GetStarted />
    </section>
  );
};

export default IndustriesPage;

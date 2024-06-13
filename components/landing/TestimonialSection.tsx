import Image from 'next/image';
import React from 'react';

const TestimonialSection = () => {
  return (
    <section className="py-[80px]">
      <div className="mx-auto w-11/12">
        <p className="text-center text-[48px] text-proDark font-semibold ">
          Here’s what our clients think about us
        </p>
        <div className="mt-8">
          <div className="grid grid-cols-2 gap-8">
            <div className="border p-8 rounded-[10px] shadow-md">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-semibold text-lg text-[#212121]">Scott</p>
                  <p className="font-normal text-base text-[#343A40]">
                    Engineering Technician, Extron Electronics, Inc.
                  </p>
                </div>
                <div className="relative h-[48px] w-[48px]">
                  <Image
                    src="/images/avatar-11.svg"
                    className="object-contain object-center rounded-full "
                    fill={true}
                    style={{ objectFit: 'cover' }}
                    alt="product image"
                  />
                </div>
              </div>
              <div className="mt-3">
                <p className="font-semibold text-[#3E3838] text-[24px]">
                  “Excellent Work”
                </p>
                <p className="font-normal text-lg text-[#343A40]">
                  I wanted to let you know that the rework you did on my 4
                  boards yesterday was fantastic! All of the boards worked
                  great, without error. We want to thank you for the excellent
                  work, the speed at which it was done and for a most reasonable
                  price. We will keep you at the top of our list when it comes
                  to rework on our products. Great job and thanks again!
                </p>
              </div>
            </div>
            <div className="border p-8 rounded-[10px] shadow-md">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-semibold text-lg text-[#212121]">Scott</p>
                  <p className="font-normal text-base text-[#343A40]">
                    Engineering Technician, Extron Electronics, Inc.
                  </p>
                </div>
                <div className="relative h-[48px] w-[48px]">
                  <Image
                    src="/images/avatar-11.svg"
                    className="object-contain object-center rounded-full "
                    fill={true}
                    style={{ objectFit: 'cover' }}
                    alt="product image"
                  />
                </div>
              </div>
              <div className="mt-3">
                <p className="font-semibold text-[#3E3838] text-[24px]">
                  “Excellent Work”
                </p>
                <p className="font-normal text-lg text-[#343A40]">
                  I wanted to let you know that the rework you did on my 4
                  boards yesterday was fantastic! All of the boards worked
                  great, without error. We want to thank you for the excellent
                  work, the speed at which it was done and for a most reasonable
                  price. We will keep you at the top of our list when it comes
                  to rework on our products. Great job and thanks again!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;

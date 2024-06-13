import Image from 'next/image';
import React from 'react';

const Partners = () => {
  return (
    <section>
      <div className="w-2/3 mx-auto">
        <p className="text-center text-[24px] font-bold my-10">
          Trusted by electronic manufacturers and innovators worldwide
        </p>
        <div className="mx-auto mt-10">
          <div className="flex gap-[80px] justify-center items-center">
            <div className="h-[78px] w-[78px] relative">
              <Image
                src="/images/partner-1.svg"
                className=" object-contain object-center rounded-2xl"
                fill={true}
                style={{ objectFit: 'contain' }}
                alt="product image"
              />
            </div>
            <div className="h-[78px] w-[78px] relative">
              <Image
                src="/images/partner-1.svg"
                className=" object-contain object-center rounded-2xl"
                fill={true}
                style={{ objectFit: 'contain' }}
                alt="product image"
              />
            </div>
            <div className="h-[78px] w-[78px] relative">
              <Image
                src="/images/partner-1.svg"
                className=" object-contain object-center rounded-2xl"
                fill={true}
                style={{ objectFit: 'contain' }}
                alt="product image"
              />
            </div>
            <div className="h-[78px] w-[78px] relative">
              <Image
                src="/images/partner-1.svg"
                className=" object-contain object-center rounded-2xl"
                fill={true}
                style={{ objectFit: 'contain' }}
                alt="product image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;

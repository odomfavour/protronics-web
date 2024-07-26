import { partners } from '@/app/utils/data';
import Image from 'next/image';
import React from 'react';

const Partners = () => {
  return (
    <section className="max-w-[1440px] mx-auto">
      <div className="lg:w-[80%] w-11/12 mx-auto">
        <p className="text-center text-[24px] font-bold my-10">
          Trusted by electronic manufacturers and innovators worldwide
        </p>
        <div className="mx-auto mt-10">
          <div className="flex lg:flex-row  flex-wrap gap-[80px] justify-center items-center">
            {partners.map((partner) => (
              <div key={partner.id} className="h-[78px] w-[78px] relative">
                <Image
                  src={partner.logo}
                  className=" object-contain object-center rounded-2xl"
                  fill={true}
                  style={{ objectFit: 'contain' }}
                  alt="product image"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;

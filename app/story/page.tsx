import React from 'react';
import Image from 'next/image';
import HeaderBar from '@/components/common/HeaderBar';

const page = () => {
  return (
    <section className="pt-[100px]">
      <div className="w-11/12 mx-auto">
        <HeaderBar
          title={`Our Story`}
          subtitle={`There's a story behind every wonderful adventure.`}
        />

        <div className="flex md:flex-row flex-col-reverse items-center gap-10 py-10">
          <div className="lg:w-3/5 w-full">
            <p className="lg:text-lg text-base font-normal text-[#101928] mb-5">
              ProTronics, Inc. opened for business in June of 1993 and while
              expanding twice, has remained in the same Knightdale, North
              Carolina location. The original founding partners were Ed
              Valentine and Jan Alford. Prior to ProTronics, Ed and Jan at
              separate times both supervised a prototype lab and a rework and
              repair lab.
            </p>
            <p className="lg:text-lg text-base font-normal text-[#101928] mb-5">
              ProTronics came about when Jan sought Ed's advice about starting a
              Contract Manufacturing business. Apparently on the same
              wave-length already, Ed pulled out a ready-to-go business plan for
              what would soon become ProTronics. After many years together, Ed
              retired and the company is now owned and operated by Jan Alford.
            </p>
            <p className="lg:text-lg text-base font-normal text-[#101928] mb-5">
              Over our 20 year history, ProTronics is proud to say that we have
              strived to treat our employees as family. We have become more than
              just a job shop for our customers… we've become an integral part
              and extension of their businesses!
            </p>
            <p className="lg:text-lg text-base font-normal text-[#101928] mb-5">
              We serve clients nationwide and internationally with most
              customers located throughout North Carolina (NC) and the southeast
              including South Carolina (SC), Georgia (GA), Florida (FL), Alabama
              (AL), Tennesee (TN), and in the Mid-Atlantic States including
              Virginia, Washington DC, Maryland and more.
            </p>
          </div>
          <div className="lg:w-2/5 w-full flex justify-end">
            <div className="relative h-[450px] w-full">
              <Image
                src="/images/story-pic.svg"
                className=" object-contain object-center rounded-2xl "
                fill={true}
                style={{ objectFit: 'cover' }}
                alt="product image"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="py-10">
        <section className=" border-t border-black w-11/12 mx-auto py-5">
          <div className="lg:w-2/3 w-full mx-auto">
            <div className="flex lg:flex-row flex-col gap-8 items-center">
              <div className="lg:w-1/4 w-full">
                <div className="relative h-[280px] w-full">
                  <Image
                    src="/images/mission-pic.svg"
                    className=" object-contain object-center rounded-2xl "
                    fill={true}
                    style={{ objectFit: 'contain' }}
                    alt="product image"
                  />
                </div>
              </div>
              <div className="lg:w-3/4 w-full">
                <p className="mb-3 lg:text-[40px] text-3xl font-semibold text-black">
                  Our Mission
                </p>
                <p className="lg:text-lg text-base font-normal text-[#101928]">
                  Brenda Mabrey brings over 31 years in Electronics
                  Manufacturing Assembly to ProTronics. With 20+ years in
                  Technical Management, he specializes in Quick-turnaround PTH,
                  SMT, and FPT Prototype assemblies. Certified in MIL-STD-2000
                  Category “C” and experienced in Product Quality reporting, Jan
                  also teaches Solder Certification Classes and provides crucial
                  Engineering support.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="border-t w-11/12 mx-auto py-5">
          <div className="lg:w-2/3 w-full  mx-auto">
            <div className="flex lg:flex-row flex-col gap-8 items-center">
              <div className="lg:w-1/4 w-full">
                <div className="relative h-[280px] w-full">
                  <Image
                    src="/images/mission-pic.svg"
                    className=" object-contain object-center rounded-2xl "
                    fill={true}
                    style={{ objectFit: 'contain' }}
                    alt="product image"
                  />
                </div>
              </div>
              <div className="lg:w-3/4 w-full">
                <p className="mb-3 lg:text-[40px] text-3xl font-semibold text-black">
                  Our Mission
                </p>
                <p className="lg:text-lg text-base font-normal text-[#101928]">
                  Brenda Mabrey brings over 31 years in Electronics
                  Manufacturing Assembly to ProTronics. With 20+ years in
                  Technical Management, he specializes in Quick-turnaround PTH,
                  SMT, and FPT Prototype assemblies. Certified in MIL-STD-2000
                  Category “C” and experienced in Product Quality reporting, Jan
                  also teaches Solder Certification Classes and provides crucial
                  Engineering support.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default page;

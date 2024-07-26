import Image from 'next/image';
import HeaderBar from '@/components/common/HeaderBar';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Equipment - Protronics-inc',
  description:
    'The quick turn EMS, PCB Design, PCB assembly and IC packaging specialist',
}

const Page: React.FC = () => {
  return (
    <section className="pt-[200px]">
      <div className="max-w-[1440px] mx-auto">
        <div className="w-11/12 mx-auto">
          <HeaderBar
            title="Equipment"
            subtitle="There's a story behind every wonderful adventure."
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
                ProTronics came about when Jan sought Ed&apos;s advice about
                starting a Contract Manufacturing business. Apparently on the
                same wave-length already, Ed pulled out a ready-to-go business
                plan for what would soon become ProTronics. After many years
                together, Ed retired and the company is now owned and operated
                by Jan Alford.
              </p>
              <p className="lg:text-lg text-base font-normal text-[#101928] mb-5">
                Over our 20 year history, ProTronics is proud to say that we
                have strived to treat our employees as family. We have become
                more than just a job shop for our customers… we&apos;ve become
                an integral part and extension of their businesses! We serve
                clients nationwide and internationally..
              </p>
            </div>
            <div className="lg:w-2/5 w-full flex justify-end">
              <div className="relative h-[450px] w-full">
                <Image
                  src="/images/equipment-pic.svg"
                  className=" object-contain object-center rounded-2xl "
                  fill={true}
                  style={{ objectFit: 'cover' }}
                  alt="product image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-[1440px] mx-auto">
        <div className="py-10 w-11/12 mx-auto">
          <div className="text-center mb-10">
            <p>Our Assembly Capabilities</p>
            <p>Get to know the people behind the premium services we offer.</p>
          </div>

          <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 mb-5">
            <div className="relative h-[300px] w-full">
              <Image
                src="/images/assembly-1.svg"
                className=" object-contain object-center rounded-2xl "
                fill={true}
                style={{ objectFit: 'cover' }}
                alt="product image"
              />
            </div>
            <div>
              <p className="mb-3 font-bold text-black text-3xl">
                Surface Mount Technologies (SMT)
              </p>
              <p className="mb-2 font-medium text-[24px] text-black">
                Five automated surface mount technology placement lines, each
                configured with:
              </p>
              <ul className="pl-10">
                <li className="list-disc text-base font-normal text-proDark">
                  Surface Mount Screen Printers by Ekra & Juki
                </li>
                <li className="list-disc text-base font-normal text-proDark">
                  VI Technologies Solder Paste Inspection - Inline
                </li>
                <li className="list-disc text-base font-normal text-proDark">
                  A minimum of 4 Juki SMT Placement Robots
                </li>
                <li className="list-disc text-base font-normal text-proDark">
                  Convection Reflow Ovens - Vitronics Soltec
                </li>
              </ul>
            </div>
          </div>
          <div className="grid lg:grid-cols-2 grid-col-1 gap-6 mb-5">
            <div className="relative h-[300px] w-full">
              <Image
                src="/images/assembly-2.svg"
                className=" object-contain object-center rounded-2xl "
                fill={true}
                style={{ objectFit: 'cover' }}
                alt="product image"
              />
            </div>
            <div>
              <p className="mb-3 font-bold text-black text-3xl">
                Surface Mount Technologies (SMT)
              </p>
              <p className="mb-2 font-medium text-[24px] text-black">
                Five automated surface mount technology placement lines, each
                configured with:
              </p>
              <ul className="pl-10">
                <li className="list-disc text-base font-normal text-proDark">
                  Surface Mount Screen Printers by Ekra & Juki
                </li>
                <li className="list-disc text-base font-normal text-proDark">
                  VI Technologies Solder Paste Inspection - Inline
                </li>
                <li className="list-disc text-base font-normal text-proDark">
                  A minimum of 4 Juki SMT Placement Robots
                </li>
                <li className="list-disc text-base font-normal text-proDark">
                  Convection Reflow Ovens - Vitronics Soltec
                </li>
              </ul>
            </div>
          </div>
          <div className="grid lg:grid-cols-2 grid-col-1 gap-6 mb-5">
            <div className="relative h-[300px] w-full">
              <Image
                src="/images/assembly-3.svg"
                className=" object-contain object-center rounded-2xl "
                fill={true}
                style={{ objectFit: 'cover' }}
                alt="product image"
              />
            </div>
            <div>
              <p className="mb-3 font-bold text-black text-3xl">
                Surface Mount Technologies (SMT)
              </p>
              <p className="mb-2 font-medium text-[24px] text-black">
                Five automated surface mount technology placement lines, each
                configured with:
              </p>
              <ul className="pl-10">
                <li className="list-disc text-base font-normal text-proDark">
                  Surface Mount Screen Printers by Ekra & Juki
                </li>
                <li className="list-disc text-base font-normal text-proDark">
                  VI Technologies Solder Paste Inspection - Inline
                </li>
                <li className="list-disc text-base font-normal text-proDark">
                  A minimum of 4 Juki SMT Placement Robots
                </li>
                <li className="list-disc text-base font-normal text-proDark">
                  Convection Reflow Ovens - Vitronics Soltec
                </li>
              </ul>
            </div>
          </div>
          <div className="grid lg:grid-cols-2 grid-col-1 gap-6 mb-5">
            <div className="relative h-[300px] w-full">
              <Image
                src="/images/assembly-4.svg"
                className=" object-contain object-center rounded-2xl "
                fill={true}
                style={{ objectFit: 'cover' }}
                alt="product image"
              />
            </div>
            <div>
              <p className="mb-3 font-bold text-black text-3xl">
                Surface Mount Technologies (SMT)
              </p>
              <p className="mb-2 font-medium text-[24px] text-black">
                Five automated surface mount technology placement lines, each
                configured with:
              </p>
              <ul className="pl-10">
                <li className="list-disc text-base font-normal text-proDark">
                  Surface Mount Screen Printers by Ekra & Juki
                </li>
                <li className="list-disc text-base font-normal text-proDark">
                  VI Technologies Solder Paste Inspection - Inline
                </li>
                <li className="list-disc text-base font-normal text-proDark">
                  A minimum of 4 Juki SMT Placement Robots
                </li>
                <li className="list-disc text-base font-normal text-proDark">
                  Convection Reflow Ovens - Vitronics Soltec
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;

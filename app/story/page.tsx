import React from "react";
import Image from "next/image";
import HeaderBar from "@/components/common/HeaderBar";
import Link from "next/link";
import { SlArrowRight } from "react-icons/sl";
const page = () => {
  return (
    <section className="pt-[200px]">
      <div className="w-11/12 mx-auto">
        <HeaderBar
          title={`Our Story`}
          subtitle={`There's a story behind every wonderful adventure.`}
        />

        <div className="flex md:flex-row flex-col-reverse  gap-10 pt-[80px] pb-10">
          <div className="lg:w-3/5 w-full">
            <p className="lg:text-lg text-base font-normal text-[#101928] mb-5">
              Welcome to ProTronics Inc., where dedication meets innovation in
              PCB assembly. With over 20 years of industry expertise, we have
              been a trusted partner to businesses across the globe.
            </p>
            <p className="lg:text-lg text-base font-normal text-[#101928] mb-5">
              Our commitment to quality, reliability, and customer satisfaction
              drives us to deliver tailored PCB assembly solutions that exceed
              expectations
            </p>
            <p className="lg:text-lg text-base font-normal text-[#101928] mb-5">
              Whether you&apos;re a startup exploring new frontiers or an
              established enterprise seeking to optimize efficiency, ProTronics
              is here to partner with you every step of the way.
            </p>
            <p className="lg:text-lg text-base font-normal text-[#101928] mb-5">
              Discover how our passion for precision and our dedication to
              innovation can elevate your electronics manufacturing experience
            </p>

            <div className="flex items-center gap-4 ">
              <Link
                href="/quote"
                className="bg-proOrange w-[200px] rounded-[8px] p-[16px] font-semibold text-base text-white"
              >
                Get a quote
              </Link>
              <Link
                href="/"
                className="text-proOrange  w-[200px] border-[1.5px] p-[15px] rounded-[8px] border-[#034592] flex items-center gap-3"
              >
                Learn More
                <SlArrowRight />
              </Link>
            </div>
          </div>
          <div className="lg:w-2/5 w-full flex justify-end">
            <div className="relative lg:h-[450px] w-full">
              <Image
                src="/images/story-pic.png"
                className=" object-contain object-center rounded-2xl "
                fill={true}
                style={{ objectFit: "cover" }}
                alt="product image"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="py-10">
        <section className=" border-t border-black w-11/12 mx-auto py-10">
          <div className="w-full mx-auto">
            <div className="flex lg:flex-row flex-col gap-8 items-center">
              <div className="lg:w-1/2 w-full">
                <div className=" w-full">
                  <Image
                    src="/images/mission-pic.png"
                    className="w-full rounded-2xl "
                    width={514}
                    height={250}
                    alt="product image"
                  />
                </div>
              </div>
              <div className="lg:w-1/2 w-full">
                <p className="mb-3 lg:text-[40px] text-3xl font-semibold text-black">
                  Our Mission
                </p>
                <p className="lg:text-lg text-base font-normal text-[#101928]">
                  Empowering innovation through precision and reliability, we at
                  Protronics Inc. specialize in delivering exceptional PCB
                  assembly solutions. Our mission is to enable our clients to
                  succeed in their technological endeavors by consistently
                  providing high-quality, customizable electronic manufacturing
                  services.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="border-t w-11/12 mx-auto py-10">
          <div className=" w-full  mx-auto">
            <div className="flex lg:flex-row flex-col gap-8 items-center">
              <div className="lg:w-1/2 w-full">
                <div className="relative lg:h-[280px] w-full">
                  <Image
                    src="/images/vision-pic.png"
                    className=" w-full rounded-2xl "
                    width={514}
                    height={250}
                    alt="product image"
                  />
                </div>
              </div>
              <div className="lg:w-1/2 w-full">
                <p className="mb-3 lg:text-[40px] text-3xl font-semibold text-black">
                  Our Vision
                </p>
                <p className="lg:text-lg text-base font-normal text-[#101928]">
                  To be the leading global provider of PCB assembly solutions,
                  pioneering innovation and excellence in electronic
                  manufacturing. We envision a future where we set the standard
                  for quality, reliability, and technological advancement,
                  empowering industries to thrive through cutting-edge PCB
                  assembly capabilities and unmatched customer satisfaction.
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

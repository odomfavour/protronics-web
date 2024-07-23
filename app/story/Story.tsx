'use client';
import Image from 'next/image';
import HeaderBar from '@/components/common/HeaderBar';
import Link from 'next/link';
import { SlArrowRight } from 'react-icons/sl';
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';

const equipments = [
  {
    title: 'Surface Mount Technologies (SMT)',
    image: '/images/assembly-1.svg',
  },
  {
    title: 'Surface Mount Technologies (SMT)”',
    image: '/images/assembly-2.svg',
  },
];

const StoryPage = () => {
  return (
    <section className="pt-[200px]">
      <div className="max-w-[1440px] mx-auto">
        <div className="w-11/12 mx-auto">
          <HeaderBar
            title={`Our Story`}
            subtitle={`There's a story behind every wonderful adventure.`}
          />

          <div className="flex md:flex-row flex-col-reverse  gap-10 pt-[80px] pb-10">
            <div className="lg:w-3/5 w-full">
              <p className="lg:text-lg text-base font-normal text-[#101928] mb-5">
                Protronics has been a leader in quick-turn contract
                manufacturing for over thirty years. We started with a mission
                to deliver top-quality and fast services to different
                industries, including electronics, commercial, military, medical
                devices, and semiconductors. Our journey is marked by a strong
                commitment to innovation, excellence, and customer satisfaction.
              </p>
              <p className="lg:text-lg text-base font-normal text-[#101928] mb-5">
                Recently, Protronics entered a new phase with a change in
                ownership. Despite this change, our core values and mission stay
                the same. Under the leadership of our current CEO, Quadri
                Oguntade, we continue to build on our 31-year legacy of
                delivering great value to our customers. We specialize in
                quick-turn PCB assembly, and we are expanding our services to
                include full PCB design, assembly, testing, and IC packaging.
              </p>
              <p className="lg:text-lg text-base font-normal text-[#101928] mb-5">
                At Protronics, we are dedicated to providing complete solutions
                that meet the changing needs of our customers' new product
                introductions and developments. Our story is one of continuous
                growth, improvement, and a strong commitment to being the best
                in the industry.
              </p>
              {/* <p className="lg:text-lg text-base font-normal text-[#101928] mb-5">
                Discover how our passion for precision and our dedication to
                innovation can elevate your electronics manufacturing experience
              </p> */}

              <div className="flex items-center gap-4 ">
                <Link
                  href="/quote"
                  className="bg-proOrange w-[141px] flex items-center justify-center rounded-[8px] p-[16px] font-semibold text-sm lg:text-base text-white"
                >
                  Get a quote
                </Link>
                <Link
                  href="/"
                  className="text-proOrange text-sm lg:text-base justify-center  w-[152px] border-[1.5px] p-[15px] rounded-[8px] border-[#034592] flex items-center gap-3"
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
                  style={{ objectFit: 'cover' }}
                  alt="product image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-10">
        <div className="max-w-[1440px] mx-auto">
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
                    Empowering innovation through precision and reliability, we
                    at Protronics Inc. specialize in delivering exceptional PCB
                    assembly solutions. Our mission is to enable our clients to
                    succeed in their technological endeavors by consistently
                    providing high-quality, customizable electronic
                    manufacturing services.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
        <section className="border-t w-11/12 mx-auto py-10">
          <div className="max-w-[1440px] mx-auto">
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
                    manufacturing. We envision a future where we set the
                    standard for quality, reliability, and technological
                    advancement, empowering industries to thrive through
                    cutting-edge PCB assembly capabilities and unmatched
                    customer satisfaction.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Equipment section */}
      <div className="bg-[#E3EFFC]">
        <div className="max-w-[1440px] mx-auto">
          <div className="w-11/12 mx-auto py-[80px] lg:py-[120px]">
            <div>
              <div className="flex items-center gap-4 justify-start">
                <div className="w-[80px] h-[3px] bg-[#1D2130]"></div>
                <p className="text-[#1D2130] font-semibold text-lg lg:text-xl">
                  Our Equipment
                </p>
              </div>
              <div className="mt-8">
                <Swiper
                  modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                  spaceBetween={30}
                  autoplay
                  loop={true}
                  breakpoints={{
                    640: {
                      slidesPerView: 1,
                      spaceBetween: 20,
                    },
                    768: {
                      slidesPerView: 2,
                      spaceBetween: 30,
                    },
                    1024: {
                      slidesPerView: 2,
                    },
                  }}
                >
                  {equipments.map((equipment, index) => (
                    <SwiperSlide key={index}>
                      <div>
                        <div className="flex items-center justify-between">
                          <div className="w-full">
                            <Image
                              src={equipment.image}
                              className=" w-full"
                              width={500}
                              height={500}
                              // fill={true}
                              // style={{ objectFit: "cover" }}
                              alt="product image"
                            />
                          </div>
                        </div>
                        <div className="py-3">
                          <p className="font-bold text-black lg:text-[32px] text-lg">
                            {equipment.title}
                          </p>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StoryPage;

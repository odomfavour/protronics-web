'use client';
import Image from 'next/image';
import React from 'react';
import { FaAngleRight } from 'react-icons/fa';
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
import Link from 'next/link';

const HeroSection = () => {
  const heroSlides = [
    {
      title: 'Rapid Prototyping, Accelerated New Product Innovation',
      subtitle:
        'Streamline your product development with our fast-paced prototyping and iterative design cycles.',
      image: '/images/pcb-design-hero.png',
      quoteText: 'Get a quote',
      learnMoreText: 'Learn More',
    },
    {
      title: 'Seamless PCB Design and Assembly',
      subtitle:
        'We deliver flawless PCB assembly, ensuring your designs are brought to life with the utmost precision and care.',
      image: '/images/hero-pic.svg',
      quoteText: 'Get a quote',
      learnMoreText: 'Learn More',
    },
    {
      title: 'Revive Your Electronics with Our Quality EMS',
      subtitle:
        'Our expert rework and repair services will breathe new life into your circuit boards, restoring them to peak performance.',
      image: '/images/hero-pic.svg',
      quoteText: 'Get a quote',
      learnMoreText: 'Learn More',
    },
    // Add more slides as needed
  ];
  return (
    <section className="mt-[150px] max-w-[1440px] mx-auto">
      <div className="w-11/12 mx-auto">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay
          loop={true}
        >
          {heroSlides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="flex lg:flex-row flex-col items-center lg:pt-[60px] pt-[30px]">
                <div className="lg:w-2/3 w-full">
                  <h1 className="lg:text-[56px] text-3xl font-bold lg:leading-[60px]">
                    {slide.title}
                  </h1>
                  <h2 className="lg:mt-[24px] mt-4 text-[#1D2739] lg:text-xl text-md">
                    {' '}
                    {slide.subtitle}
                  </h2>
                  <div className="flex items-center lg:gap-[24px] gap-4 mt-[20px]">
                    <Link
                      href="/quote"
                      className="bg-proOrange rounded lg:px-[24px] px-4 py-[10px] font-semibold text-base text-white"
                    >
                      Get a quote
                    </Link>
                  </div>
                </div>
                <div className="lg:w-2/3 w-full flex justify-end">
                  <div className="h-[398px] md:w-[428px] w-full relative">
                    <Image
                      src="/images/svg/hero-img.svg"
                      className=" object-contain object-center rounded-2xl"
                      fill={true}
                      style={{ objectFit: 'contain' }}
                      alt="product image"
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default HeroSection;

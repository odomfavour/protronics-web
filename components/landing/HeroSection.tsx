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

const HeroSection = () => {
  const heroSlides = [
    {
      title: 'Experience Seamless PCB Solutions',
      subtitle: 'We offer precision craftsmanship everytime.',
      image: '/images/hero-pic.svg',
      quoteText: 'Get a quote',
      learnMoreText: 'Learn More',
    },
    {
      title: 'Innovative Design and Engineering',
      subtitle: 'Your vision, our expertise.',
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
                  <p className="lg:text-[56px] text-3xl font-bold lg:leading-[84px]">
                    {slide.title}
                  </p>
                  <p className="lg:mt-[24px] mt-4 text-[#1D2739] lg:text-2xl text-lg">
                    {' '}
                    {slide.subtitle}
                  </p>
                  <div className="flex items-center lg:gap-[24px] gap-4 mt-[20px]">
                    <button className="bg-proOrange rounded lg:px-[24px] px-4 py-[10px] font-semibold text-base text-white">
                      Get a quote
                    </button>
                    <button className="border-proOrange border rounded lg:px-[24px] px-4 py-[10px] font-semibold text-base text-proOrange flex items-center gap-2">
                      Learn More <FaAngleRight />
                    </button>
                  </div>
                </div>
                <div className="lg:w-2/3 w-full flex justify-end">
                  <div className="h-[398px] md:w-[428px] w-full relative">
                    <Image
                      src="/images/hero-pic.svg"
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

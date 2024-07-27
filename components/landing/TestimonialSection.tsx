'use client';
import React from 'react';
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
import Image from 'next/image';

const testimonials = [
  {
    name: 'Scott',
    role: 'Engineering Technician, Extron Electronics, Inc.',
    image: '/images/avatar-11.svg',
    title: '“Excellent Work”',
    feedback:
      'I wanted to let you know that the rework you did on my 4 boards yesterday was fantastic! All of the boards worked great, without error. We want to thank you for the excellent work, the speed at which it was done and for a most reasonable price. We will keep you at the top of our list when it comes to rework on our products. Great job and thanks again!',
  },
  {
    name: 'Scott',
    role: 'Engineering Technician, Extron Electronics, Inc.',
    image: '/images/avatar-11.svg',
    title: '“Excellent Work”',
    feedback:
      'I wanted to let you know that the rework you did on my 4 boards yesterday was fantastic! All of the boards worked great, without error. We want to thank you for the excellent work, the speed at which it was done and for a most reasonable price. We will keep you at the top of our list when it comes to rework on our products. Great job and thanks again!',
  },
  // Add more testimonials here as needed
];

const TestimonialSection = () => {
  return (
    <section className="py-[80px]">
      <div className="max-w-[1440px] mx-auto">
        <div className="mx-auto w-11/12">
          <p className="text-center lg:text-[48px] text-3xl text-proDark font-semibold mb-6">
            Here&apos;s what our clients think about us
          </p>
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
              {testimonials.map((testimonial, index) => (
                <SwiperSlide key={index}>
                  <div className="border lg:p-8 p-4 rounded-[10px] shadow-md">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-semibold lg:text-lg text-base text-[#212121]">
                          {testimonial.name}
                        </p>
                        <p className="font-normal lg:text-base text-sm text-[#343A40]">
                          {testimonial.role}
                        </p>
                      </div>
                      <div className="relative h-[48px] w-[48px]">
                        <Image
                          src={testimonial.image}
                          className="object-contain object-center rounded-full"
                          fill={true}
                          style={{ objectFit: 'cover' }}
                          alt="product image"
                        />
                      </div>
                    </div>
                    <div className="mt-3">
                      <p className="font-semibold text-[#3E3838] lg:text-[24px] text-lg">
                        {testimonial.title}
                      </p>
                      <p className="font-normal lg:text-lg text-[#343A40] text-base">
                        {testimonial.feedback}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;

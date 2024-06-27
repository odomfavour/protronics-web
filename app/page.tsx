import HeroSection from '@/components/landing/HeroSection';
import Partners from '@/components/landing/Partners';
import QualityControlSection from '@/components/landing/QualityControlSection';
import QualityGrid from '@/components/landing/QualityGrid';
import ServicesSection from '@/components/landing/ServicesSection';
import TestimonialSection from '@/components/landing/TestimonialSection';
import WhySection from '@/components/landing/WhySection';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="max-w-[1440px] mx-auto">
      <HeroSection />
      <Partners />
      <WhySection />
      <ServicesSection />
      <QualityControlSection />
      <QualityGrid />
      <TestimonialSection />
    </main>
  );
}

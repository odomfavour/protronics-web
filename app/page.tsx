import GetStarted from '@/components/landing/GetStarted';
import HeroSection from '@/components/landing/HeroSection';
import Partners from '@/components/landing/Partners';
import QualityControlSection from '@/components/landing/QualityControlSection';
import QualityGrid from '@/components/landing/QualityGrid';
import ServicesSection from '@/components/landing/ServicesSection';
import SubscribeSection from '@/components/landing/SubscribeSection';
import TestimonialSection from '@/components/landing/TestimonialSection';
import WhySection from '@/components/landing/WhySection';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <Partners />
      <WhySection />
      <ServicesSection />
      <QualityControlSection />
      <QualityGrid />
      <TestimonialSection />
      <GetStarted />
      <SubscribeSection />
    </main>
  );
}

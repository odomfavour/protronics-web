import Image from 'next/image';
import Header from './components/common/Header';
import HeroSection from './components/landing/HeroSection';
import Partners from './components/landing/Partners';
import WhySection from './components/landing/WhySection';
import ServicesSection from './components/landing/ServicesSection';
import QualityControlSection from './components/landing/QualityControlSection';
import QualityGrid from './components/landing/QualityGrid';
import TestimonialSection from './components/landing/TestimonialSection';
import Footer from './components/common/Footer';

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
    </main>
  );
}

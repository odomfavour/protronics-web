import Image from 'next/image';
import Header from './components/common/Header';
import HeroSection from './components/landing/HeroSection';
import Partners from './components/landing/Partners';
import WhySection from './components/landing/WhySection';
import ServicesSection from './components/landing/ServicesSection';

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <Partners />
      <WhySection />
      <ServicesSection />
    </main>
  );
}

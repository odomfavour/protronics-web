import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import Established from "@/components/landing/Established";
import GetStarted from "@/components/landing/GetStarted";
import HeroSection from "@/components/landing/HeroSection";
import Partners from "@/components/landing/Partners";
import QualityControlSection from "@/components/landing/QualityControlSection";
import QualityGrid from "@/components/landing/QualityGrid";
import ServicesSection from "@/components/landing/ServicesSection";
import SubscribeSection from "@/components/landing/SubscribeSection";
import TestimonialSection from "@/components/landing/TestimonialSection";
import WhySection from "@/components/landing/WhySection";

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <Established />
      <Partners />
      <WhySection />
      <ServicesSection />
      <QualityControlSection />
      <QualityGrid />
      <TestimonialSection />
      <GetStarted />
      <SubscribeSection />
      <Footer />
    </main>
  );
}

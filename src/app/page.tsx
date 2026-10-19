import ScrollPinHero from "@/components/animations/scroll-pin-hero/scroll-pin-hero";
import Header from "@/components/header/header";
import StickyCategoryScroll from "@/components/portfolio/sticky-category-scroll/sticky-category-scroll";
import ServicesSection from "@/components/services-section/services-section";
import TestimonialsSection from "@/components/testimonials/testimonials-section";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-neutral-900 selection:bg-[#d4af37]/25 selection:text-neutral-900">
      <Header />
      <ScrollPinHero />
      <StickyCategoryScroll />
      <ServicesSection />
      <TestimonialsSection />
    </main>
  );
}

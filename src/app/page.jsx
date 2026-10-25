
import Hero from '@/components/Hero';
import HeroSlider from '@/components/HeroSlider';
import TrustStrip from '@/components/TrustStrip';
import CategoryProducts from '@/components/CategoryProducts';
import Services from '@/components/Services';
import Survey from '@/components/Survey';
import Contact from '@/components/Contact';
import VideoSlider from '@/components/VideoSlider';
import Partners from '@/components/Partners';
import Companies from '@/components/Companies';

export default function Home() {
  return (
    <>
      <Hero />
      <HeroSlider />
      <TrustStrip />
      <Companies />

      <CategoryProducts />

      <VideoSlider />
      <Services />
      <Partners />

      <section id="survey" className="py-14">
        <div className="wrap grid gap-10 md:grid-cols-2">
          <Survey />
          <Contact />
        </div>
      </section>
    </>
  );
}

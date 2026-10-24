import Hero from '@/components/Hero';
import HeroSlider from '@/components/HeroSlider';
import TrustStrip from '@/components/TrustStrip';
import Shop from '@/components/Shop';
import Services from '@/components/Services';
import Survey from '@/components/Survey';
import Contact from '@/components/Contact';
import VideoSlider from '@/components/VideoSlider';

export default function Home() {
  return (
    <>
      <Hero />
      <HeroSlider />
      <TrustStrip />
      <Shop />
      <VideoSlider />
      <Services />
      <section id="survey" className="py-14">
        <div className="wrap grid gap-10 md:grid-cols-2">
          <Survey />
          <Contact />
        </div>
      </section>
    </>
  );
}

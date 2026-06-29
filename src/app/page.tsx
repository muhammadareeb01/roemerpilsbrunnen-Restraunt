import { Hero } from '@/components/sections/Hero';
import { FeatureStrip } from '@/components/sections/FeatureStrip';
import { MenuPreview } from '@/components/sections/MenuPreview';
import { ExperienceSection } from '@/components/sections/ExperienceSection';
import { Testimonials } from '@/components/sections/Testimonials';
import { Timings } from '@/components/sections/Timings';

export default function Home() {
  return (
    <>
      <Hero />
      <FeatureStrip />
      <MenuPreview />
      <ExperienceSection />
      <Testimonials />
      <Timings />
    </>
  );
}

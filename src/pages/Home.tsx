import { Hero } from '../components/sections/Hero';
import { Marquee } from '../components/ui/Marquee';
import { Pain } from '../components/sections/Pain';
import { Framework } from '../components/sections/Framework';
import { HowItWorks } from '../components/sections/HowItWorks';
import { CaseStudy } from '../components/sections/CaseStudy';
import { Testimonials } from '../components/sections/Testimonials';
import { QuizEmbed } from '../components/sections/QuizEmbed';
import { SkipQuiz } from '../components/sections/SkipQuiz';
import { FAQSection } from '../components/sections/FAQSection';
import { BottomCTABanner } from '../components/ui/BottomCTABanner';

const marqueeItems = ['Built for health practices', 'Operator built', 'Real results'];

export function Home() {
  return (
    <>
      <Hero />
      <Marquee items={marqueeItems} />
      <Pain />
      <Framework />
      <HowItWorks />
      <CaseStudy />
      <Testimonials />
      <QuizEmbed />
      <SkipQuiz />
      <FAQSection />
      <BottomCTABanner
        heading="Stop stitching it together."
        subhead="Two minutes. See where revenue is leaking."
        primaryCta={{ label: 'Get your Practice Growth Score', to: '/quiz' }}
        secondaryCta={{ label: 'Or book the assessment', to: '/assessment' }}
      />
    </>
  );
}

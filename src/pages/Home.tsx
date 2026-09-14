import { Hero } from '../components/sections/Hero';
import { Marquee } from '../components/ui/Marquee';
import { Pain } from '../components/sections/Pain';
import { EarlyProof } from '../components/sections/EarlyProof';
import { LabToProgram } from '../components/sections/LabToProgram';
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
      <EarlyProof />
      <Framework />
      <LabToProgram />
      <HowItWorks />
      <CaseStudy />
      <Testimonials />
      <QuizEmbed />
      <SkipQuiz />
      <FAQSection />
      <BottomCTABanner
        heading="Stop stitching your practice together."
        subhead="Find the gaps. Review your systems. Fix what matters first."
        primaryCta={{ label: 'Get Your Practice Growth Score', to: '/quiz' }}
        secondaryCta={{ label: 'Book a Systems Review', to: '/systems-review' }}
      />
    </>
  );
}

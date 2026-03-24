import Hero from "@/components/hero";
import Credibility from "@/components/credibility";
import Problem from "@/components/problem";
import CalculatorCTA from "@/components/calculator-cta";
import SystemOverview from "@/components/system-overview";
import HowItWorks from "@/components/how-it-works";
import Offer from "@/components/offer";
import Guarantee from "@/components/guarantee";
import About from "@/components/about";
import FAQ from "@/components/faq";
import CTA from "@/components/cta";

export default function Home() {
  return (
    <main>
      <Hero />
      <Credibility />
      <Problem />
      <CalculatorCTA />
      <HowItWorks />
      <SystemOverview />
      <Offer />
      <Guarantee />
      <About />
      <FAQ />
      <CTA />
    </main>
  );
}

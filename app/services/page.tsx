import type { Metadata } from "next";
import Hero from "@/components/hero";
import Credibility from "@/components/credibility";
import Problem from "@/components/problem";
import CalculatorCTA from "@/components/calculator-cta";
import HowItWorks from "@/components/how-it-works";
import SystemOverview from "@/components/system-overview";
import Offer from "@/components/offer";
import Guarantee from "@/components/guarantee";
import About from "@/components/about";
import FAQ from "@/components/faq";
import CTA from "@/components/cta";

export const metadata: Metadata = {
  title: "The Pipeline Engine — B2B Lead Generation Done For You",
  description:
    "Done-for-you B2B lead generation built in 90 days. Inbound, outbound, CRM, content — your complete pipeline system, fuelled monthly, owned by you.",
};

export default function ServicesPage() {
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

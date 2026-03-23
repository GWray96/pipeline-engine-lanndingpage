import Nav from "@/components/nav";
import Hero from "@/components/hero";
import Credibility from "@/components/credibility";
import Problem from "@/components/problem";
import SystemOverview from "@/components/system-overview";
import HowItWorks from "@/components/how-it-works";
import Offer from "@/components/offer";
import Guarantee from "@/components/guarantee";
import About from "@/components/about";
import FAQ from "@/components/faq";
import CTA from "@/components/cta";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Credibility />
        <Problem />
        <HowItWorks />
        <SystemOverview />
        <Offer />
        <Guarantee />
        <About />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}

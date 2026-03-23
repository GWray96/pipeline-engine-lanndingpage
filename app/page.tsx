import Nav from "@/components/nav";
import Hero from "@/components/hero";
import Credibility from "@/components/credibility";
import Problem from "@/components/problem";
import HowItWorks from "@/components/how-it-works";
import Offer from "@/components/offer";
import Pricing from "@/components/pricing";
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
        <About />
        <HowItWorks />
        <Offer />
        <Pricing />
        <Guarantee />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}

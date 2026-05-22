import { ContactBox } from "../components/ContactBox";
import { DevisForm } from "../components/DevisForm";
import { FeaturesSection } from "../components/FeaturesSection";
import { Hero } from "../components/Hero";
import { HowItWorksSection } from "../components/HowItWorksSection";
import { ServicesSection } from "../components/ServicesSection";

export function HomePage() {
  return (
    <main>
      <Hero />
      <ServicesSection />
      <FeaturesSection />
      <HowItWorksSection />
      <DevisForm />
      <section id="contact" className="scroll-mt-24 px-4 py-8 sm:px-6">
        <ContactBox />
      </section>
    </main>
  );
}

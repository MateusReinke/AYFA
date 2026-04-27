import { useEffect, useRef, useState, type ReactNode } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import Services from "@/components/Services";
import Coverage from "@/components/Coverage";
import Clients from "@/components/Clients";     // Nossos Clientes (Grade de Logos)
import FAQ from "@/components/FAQ";
import ContactForm from "@/components/ContactForm"; // Certifique-se que o nome do arquivo é este ou "Contact"
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton"; // Certifique-se que o nome é este ou "FloatingWhatsApp"

const DeferredSection = ({ children, rootMargin = "220px 0px" }: { children: ReactNode; rootMargin?: string }) => {
  const [shouldRender, setShouldRender] = useState(false);
  const markerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const marker = markerRef.current;
    if (!marker) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldRender(true);
          observer.disconnect();
        }
      },
      { rootMargin }
    );

    observer.observe(marker);
    return () => observer.disconnect();
  }, [rootMargin]);

  return (
    <div ref={markerRef}>
      {shouldRender ? children : <div className="min-h-[220px]" aria-hidden="true" />}
    </div>
  );
};

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <Hero />
      <DeferredSection>
        <AboutUs />
      </DeferredSection>
      <DeferredSection>
        <Services />
      </DeferredSection>
      <DeferredSection>
        <Coverage />
      </DeferredSection>
      <DeferredSection>
        <Clients />
      </DeferredSection>
      <DeferredSection>
        <FAQ />
      </DeferredSection>
      <DeferredSection rootMargin="300px 0px">
        <ContactForm />
      </DeferredSection>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;

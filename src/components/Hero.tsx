import { useEffect, useState } from "react";
import { Building2, CalendarCheck, ClipboardCheck, HeartHandshake, ShieldCheck, Users } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";
import aboutImage from "@/assets/about-bg.jpg";
import coverageImage from "@/assets/coverage-bg.jpg";
import logo from "@/assets/ayfa-logo.png";

const serviceSlides = [
  {
    eyebrow: "Seguro para Eventos",
    title: "Proteção para eventos de todos os portes",
    description: "Coberturas especializadas para operação, público, estrutura e responsabilidade civil.",
    image: heroImage,
    icon: CalendarCheck,
    imagePosition: "center",
  },
  {
    eyebrow: "Responsabilidade Civil",
    title: "Segurança jurídica para sua operação",
    description: "Consultoria para reduzir riscos e preservar patrimônio, reputação e continuidade.",
    image: coverageImage,
    icon: ShieldCheck,
    imagePosition: "center",
  },
  {
    eyebrow: "Seguros Pessoais",
    title: "Cuidado para você e sua família",
    description: "Soluções para vida, acidentes pessoais, viagem, automóvel e residência.",
    image: aboutImage,
    icon: HeartHandshake,
    imagePosition: "65% center",
  },
  {
    eyebrow: "Soluções Empresariais",
    title: "Gestão de riscos para empresas",
    description: "Proteção patrimonial, benefícios, frotas e seguros corporativos sob medida.",
    image: aboutImage,
    icon: Building2,
    imagePosition: "80% center",
  },
];

const serviceSelectors = [
  { icon: CalendarCheck, label: "Eventos" },
  { icon: ClipboardCheck, label: "RC Geral" },
  { icon: HeartHandshake, label: "Pessoais" },
  { icon: Building2, label: "Empresarial" },
];

const Hero = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const currentSlide = serviceSlides[activeSlide];
  const CurrentIcon = currentSlide.icon;

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % serviceSlides.length);
    }, 5500);

    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen overflow-hidden bg-background pt-16 md:pt-20 pb-20 lg:pb-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_88%,hsl(var(--accent)/0.13),transparent_32%),radial-gradient(circle_at_88%_18%,hsl(var(--cyan)/0.12),transparent_34%)]" />
      <div
        className="absolute inset-y-0 right-0 hidden w-1/2 opacity-10 lg:block"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="container relative z-10 grid min-h-[calc(100vh-5rem)] items-center gap-10 px-4 py-12 md:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:py-16">
        <div className="max-w-2xl text-center lg:text-left">
          <div className="mb-8 flex justify-center lg:justify-start animate-fade-in opacity-0" style={{ animationDelay: "0.05s", animationFillMode: "forwards" }}>
            <img src={logo} alt="Ayfa Seguros" className="h-20 drop-shadow-lg sm:h-24 md:h-28" />
          </div>

          <div className="relative inline-block animate-fade-in opacity-0" style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}>
            <span className="absolute -left-4 -top-4 h-12 w-12 border-l-[3px] border-t-[3px] border-primary" />
            <span className="absolute -bottom-4 -right-4 h-12 w-12 border-b-[3px] border-r-[3px] border-primary" />
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.35em] text-accent">Corretagem de Seguros</p>
            <h1 className="font-display text-4xl font-bold uppercase leading-tight tracking-tight text-foreground sm:text-5xl md:text-6xl">
              {currentSlide.eyebrow}
            </h1>
          </div>

          <div className="mt-8 min-h-[130px] animate-fade-in opacity-0" style={{ animationDelay: "0.35s", animationFillMode: "forwards" }}>
            <h2 className="text-2xl font-semibold leading-snug text-foreground/90 md:text-3xl">
              {currentSlide.title}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg lg:mx-0">
              {currentSlide.description}
            </p>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4 animate-fade-in opacity-0" style={{ animationDelay: "0.55s", animationFillMode: "forwards" }} aria-label="Selecionar serviço em destaque">
            {serviceSlides.map((slide, index) => {
              const SelectorIcon = serviceSelectors[index].icon;
              const isSelected = activeSlide === index;

              return (
                <button
                  key={slide.eyebrow}
                  type="button"
                  onClick={() => setActiveSlide(index)}
                  className={`group rounded-2xl border px-4 py-4 text-center shadow-card backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 ${
                    isSelected
                      ? "border-primary bg-primary text-primary-foreground shadow-glow"
                      : "border-border/70 bg-card/85 text-foreground hover:border-primary/40 hover:bg-card"
                  }`}
                  aria-label={`Mostrar ${slide.eyebrow}`}
                  aria-pressed={isSelected}
                >
                  <SelectorIcon className={`mx-auto mb-2 h-6 w-6 transition-colors ${isSelected ? "text-primary-foreground" : "text-accent group-hover:text-primary"}`} />
                  <span className="text-sm font-bold">{serviceSelectors[index].label}</span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="relative min-h-[360px] animate-fade-in opacity-0 sm:min-h-[460px] lg:min-h-[620px]" style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}>
          <div className="absolute left-8 top-8 h-[78%] w-[78%] rotate-45 rounded-[2.75rem] bg-primary shadow-2xl shadow-primary/30 sm:left-16 lg:left-20" />
          <div className="absolute left-12 top-12 h-[78%] w-[78%] rotate-45 rounded-[2.5rem] bg-gradient-to-br from-accent to-cyan opacity-90 shadow-glow sm:left-20 lg:left-24" />

          <div className="absolute inset-0 overflow-hidden rounded-[2.25rem] shadow-2xl [clip-path:polygon(28%_0,100%_0,100%_100%,0_100%,0_48%)] sm:rounded-[3rem]">
            {serviceSlides.map((slide, index) => (
              <img
                key={slide.eyebrow}
                src={slide.image}
                alt={slide.eyebrow}
                className={`absolute inset-0 h-full w-full object-cover transition-all duration-1000 ${
                  activeSlide === index ? "scale-100 opacity-100" : "scale-105 opacity-0"
                }`}
                style={{ objectPosition: slide.imagePosition }}
              />
            ))}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/75 via-primary/20 to-transparent" />
          </div>

          <div className="absolute bottom-6 left-4 right-4 rounded-3xl border border-white/25 bg-white/80 p-5 shadow-2xl backdrop-blur-xl dark:bg-card/80 sm:left-10 sm:right-auto sm:max-w-sm">
            <div className="flex items-start gap-4">
              <div className="rounded-2xl bg-gradient-to-br from-primary to-accent p-3 text-white shadow-lg">
                <CurrentIcon className="h-6 w-6" />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-accent">Em destaque</p>
                <h3 className="mt-1 text-left text-lg font-bold leading-tight text-foreground">{currentSlide.eyebrow}</h3>
                <p className="mt-2 text-left text-sm leading-relaxed text-muted-foreground">{currentSlide.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent via-background/80 to-secondary/5" />
      <div className="pointer-events-none absolute -bottom-16 left-1/2 h-32 w-[120vw] -translate-x-1/2 rounded-[50%] bg-secondary/5 shadow-[0_-30px_80px_hsl(var(--accent)/0.08)]" />
    </section>
  );
};

export default Hero;

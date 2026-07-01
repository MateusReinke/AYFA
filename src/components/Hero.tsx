import { useEffect, useState } from "react";
import { ArrowRight, Building2, CalendarCheck, CheckCircle2, ClipboardCheck, HeartHandshake, ShieldCheck } from "lucide-react";
import logo from "@/assets/ayfa-logo.png";

const serviceSlides = [
  {
    eyebrow: "Seguro para Eventos",
    title: "Eventos protegidos do briefing ao encerramento",
    description: "Coberturas para público, montagem, equipamentos, alimentos, artistas e responsabilidade civil.",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1600&q=85",
    icon: CalendarCheck,
    imagePosition: "center",
    metric: "+ segurança para produções",
  },
  {
    eyebrow: "Responsabilidade Civil",
    title: "Decisões seguras para operações complexas",
    description: "Consultoria para mapear riscos, reduzir exposição jurídica e preservar a continuidade do negócio.",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1600&q=85",
    icon: ShieldCheck,
    imagePosition: "center",
    metric: "gestão preventiva de riscos",
  },
  {
    eyebrow: "Seguros Pessoais",
    title: "Proteção para a vida que você constrói",
    description: "Soluções para vida, acidentes pessoais, residência, automóvel, viagem e equipamentos portáteis.",
    image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=1600&q=85",
    icon: HeartHandshake,
    imagePosition: "center",
    metric: "cuidado em cada etapa",
  },
  {
    eyebrow: "Soluções Empresariais",
    title: "Blindagem sob medida para empresas",
    description: "Proteção patrimonial, benefícios, frotas, cyber risk e seguros corporativos personalizados.",
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1600&q=85",
    icon: Building2,
    imagePosition: "center",
    metric: "estratégia para crescer",
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

  const scrollToContact = () => {
    document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-screen overflow-hidden bg-slate-950 pt-16 text-white md:pt-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_8%_16%,hsl(var(--cyan)/0.26),transparent_28%),radial-gradient(circle_at_78%_4%,hsl(var(--accent)/0.24),transparent_34%),linear-gradient(135deg,#020617_0%,#0f172a_46%,#07111f_100%)]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan/60 to-transparent" />
      <div className="absolute -left-24 top-32 h-72 w-72 rounded-full bg-cyan/20 blur-3xl" />
      <div className="absolute -right-32 bottom-12 h-96 w-96 rounded-full bg-accent/20 blur-3xl" />

      <div className="container relative z-10 grid min-h-[calc(100vh-5rem)] items-center gap-12 px-4 py-14 md:px-6 lg:grid-cols-[0.88fr_1.12fr] lg:py-20">
        <div className="max-w-2xl text-center lg:text-left">
          <div className="mb-8 flex justify-center lg:justify-start animate-fade-in opacity-0" style={{ animationDelay: "0.05s", animationFillMode: "forwards" }}>
            <div className="rounded-[2rem] border border-white/10 bg-white/95 px-5 py-4 shadow-2xl shadow-cyan/10 backdrop-blur">
              <img src={logo} alt="Ayfa Seguros" className="h-16 sm:h-20" />
            </div>
          </div>

          <div className="animate-fade-in opacity-0" style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}>
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan/30 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.28em] text-cyan-100 backdrop-blur">
              <ShieldCheck className="h-4 w-4 text-cyan" /> Corretagem de Seguros
            </p>
            <h1 className="font-display text-4xl font-bold leading-[0.95] tracking-tight text-white sm:text-5xl md:text-7xl">
              Proteção inteligente para pessoas, empresas e eventos.
            </h1>
          </div>

          <div className="mt-8 min-h-[128px] animate-fade-in opacity-0" style={{ animationDelay: "0.35s", animationFillMode: "forwards" }}>
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-cyan">{currentSlide.eyebrow}</p>
            <h2 className="mt-3 text-2xl font-semibold leading-snug text-white/95 md:text-3xl">{currentSlide.title}</h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-slate-300 md:text-lg lg:mx-0">{currentSlide.description}</p>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start animate-fade-in opacity-0" style={{ animationDelay: "0.48s", animationFillMode: "forwards" }}>
            <button onClick={scrollToContact} className="inline-flex h-14 items-center justify-center rounded-full bg-gradient-to-r from-cyan to-accent px-8 text-base font-bold text-white shadow-glow transition-transform hover:-translate-y-1">
              Solicitar cotação <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <a href="#servicos" className="inline-flex h-14 items-center justify-center rounded-full border border-white/15 bg-white/10 px-8 text-base font-bold text-white backdrop-blur transition hover:bg-white/15">
              Ver soluções
            </a>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4 animate-fade-in opacity-0" style={{ animationDelay: "0.58s", animationFillMode: "forwards" }} aria-label="Selecionar serviço em destaque">
            {serviceSlides.map((slide, index) => {
              const SelectorIcon = serviceSelectors[index].icon;
              const isSelected = activeSlide === index;

              return (
                <button
                  key={slide.eyebrow}
                  type="button"
                  onClick={() => setActiveSlide(index)}
                  className={`group rounded-2xl border px-4 py-4 text-center backdrop-blur transition-all duration-300 hover:-translate-y-1 ${
                    isSelected
                      ? "border-cyan/60 bg-white text-slate-950 shadow-2xl shadow-cyan/20"
                      : "border-white/10 bg-white/10 text-white hover:border-cyan/40 hover:bg-white/15"
                  }`}
                  aria-label={`Mostrar ${slide.eyebrow}`}
                  aria-pressed={isSelected}
                >
                  <SelectorIcon className={`mx-auto mb-2 h-6 w-6 transition-colors ${isSelected ? "text-accent" : "text-cyan group-hover:text-white"}`} />
                  <span className="text-sm font-bold">{serviceSelectors[index].label}</span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="relative min-h-[430px] animate-fade-in opacity-0 sm:min-h-[540px] lg:min-h-[660px]" style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}>
          <div className="absolute inset-0 rounded-[2.5rem] border border-white/10 bg-white/10 p-3 shadow-2xl shadow-black/30 backdrop-blur-xl lg:rotate-2" />
          <div className="absolute inset-4 overflow-hidden rounded-[2rem] border border-white/10 shadow-2xl">
            {serviceSlides.map((slide, index) => (
              <img
                key={slide.eyebrow}
                src={slide.image}
                alt={slide.eyebrow}
                className={`absolute inset-0 h-full w-full object-cover transition-all duration-1000 ${activeSlide === index ? "scale-100 opacity-100" : "scale-105 opacity-0"}`}
                style={{ objectPosition: slide.imagePosition }}
              />
            ))}
            <div className="absolute inset-0 bg-gradient-to-tr from-slate-950/88 via-slate-950/28 to-transparent" />
          </div>

          <div className="absolute left-0 top-10 hidden rounded-3xl border border-white/15 bg-white/90 p-5 text-slate-950 shadow-2xl backdrop-blur-xl md:block">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-accent">Especialistas</p>
            <p className="mt-1 text-3xl font-black">360°</p>
            <p className="text-sm font-semibold text-slate-600">análise de risco</p>
          </div>

          <div className="absolute bottom-6 left-6 right-6 rounded-3xl border border-white/20 bg-white/90 p-5 text-slate-950 shadow-2xl backdrop-blur-xl sm:left-auto sm:max-w-md">
            <div className="flex items-start gap-4">
              <div className="rounded-2xl bg-gradient-to-br from-primary to-accent p-3 text-white shadow-lg"><CurrentIcon className="h-6 w-6" /></div>
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-accent">{currentSlide.metric}</p>
                <h3 className="mt-1 text-left text-xl font-bold leading-tight">{currentSlide.eyebrow}</h3>
                <p className="mt-2 text-left text-sm leading-relaxed text-slate-600">{currentSlide.description}</p>
              </div>
            </div>
            <div className="mt-4 flex items-center gap-2 text-sm font-bold text-slate-700"><CheckCircle2 className="h-4 w-4 text-cyan" /> Atendimento consultivo e personalizado</div>
          </div>

          <div className="absolute right-4 top-12 hidden rounded-3xl border border-white bg-white/85 px-5 py-4 shadow-[0_20px_60px_rgba(15,23,42,0.14)] backdrop-blur-xl md:block">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-slate-500">Imagem em foco</p>
            <p className="mt-1 text-sm font-bold text-primary">{currentSlide.eyebrow}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

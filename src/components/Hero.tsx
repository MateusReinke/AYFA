import { useEffect, useState } from "react";
import { Building2, CalendarCheck, CheckCircle2, ClipboardCheck, HeartHandshake, ShieldCheck, Sparkles } from "lucide-react";
import logo from "@/assets/ayfa-logo.png";

const serviceSlides = [
  {
    eyebrow: "Seguro para Eventos",
    title: "O tema é claro: proteção inteligente para eventos memoráveis.",
    description: "Coberturas para público, montagem, equipamentos, alimentos, artistas e responsabilidade civil em uma leitura consultiva de risco.",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1600&q=85",
    icon: CalendarCheck,
    imagePosition: "center",
    metric: "+ segurança para produções",
  },
  {
    eyebrow: "Responsabilidade Civil",
    title: "Risco mapeado antes de virar problema.",
    description: "Consultoria para reduzir exposição jurídica, proteger decisões e preservar a continuidade de operações complexas.",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1600&q=85",
    icon: ShieldCheck,
    imagePosition: "center",
    metric: "gestão preventiva de riscos",
  },
  {
    eyebrow: "Seguros Pessoais",
    title: "Cuidado sob medida para a vida em movimento.",
    description: "Soluções para vida, acidentes pessoais, residência, automóvel, viagem e equipamentos portáteis.",
    image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=1600&q=85",
    icon: HeartHandshake,
    imagePosition: "center",
    metric: "cuidado em cada etapa",
  },
  {
    eyebrow: "Soluções Empresariais",
    title: "Proteção corporativa sob medida para cada etapa.",
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
    }, 5200);

    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen overflow-hidden bg-[#f7fbff] pt-16 text-slate-950 md:pt-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(34,211,238,0.16),transparent_30%),radial-gradient(circle_at_84%_10%,rgba(234,179,8,0.12),transparent_28%),linear-gradient(135deg,#ffffff_0%,#f7fbff_48%,#eef7ff_100%)]" />
      <div className="absolute inset-0 opacity-60 [background-image:linear-gradient(rgba(15,23,42,.045)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,.045)_1px,transparent_1px)] [background-size:88px_88px]" />
      <div className="absolute left-1/2 top-24 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-cyan/10 blur-3xl" />
      <div className="absolute -right-32 bottom-12 h-96 w-96 rounded-full bg-accent/10 blur-3xl" />

      <div className="container relative z-10 grid min-h-[calc(100vh-5rem)] items-center gap-10 px-4 py-10 md:px-6 lg:grid-cols-[1.02fr_0.98fr] lg:py-16">
        <div className="mx-auto max-w-3xl text-center lg:text-left">
          <div className="mb-7 flex justify-center lg:justify-start animate-fade-in opacity-0" style={{ animationDelay: "0.05s", animationFillMode: "forwards" }}>
            <div className="relative rounded-[2.25rem] border border-slate-200/80 bg-white px-6 py-5 shadow-[0_28px_90px_rgba(15,23,42,0.10)] backdrop-blur sm:px-8 sm:py-6">
              <span className="absolute -inset-3 -z-10 rounded-[2.75rem] bg-gradient-to-r from-cyan/15 via-accent/10 to-cyan/15 blur-xl animate-gradient" />
              <img src={logo} alt="Ayfa Seguros" className="h-24 w-auto sm:h-32 lg:h-36" />
            </div>
          </div>

          <div className="animate-fade-in opacity-0" style={{ animationDelay: "0.18s", animationFillMode: "forwards" }}>
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan/20 bg-white/80 px-4 py-2 text-xs font-bold uppercase tracking-[0.28em] text-primary shadow-sm backdrop-blur">
              <Sparkles className="h-4 w-4 text-cyan" /> Proteção, estratégia e confiança
            </p>
            <h1 className="font-display text-4xl font-bold leading-[0.93] tracking-tight text-slate-950 sm:text-6xl md:text-7xl">
              Seguros com presença forte, leitura clara e solução sob medida.
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-600 md:text-xl lg:mx-0">
              A AYFA coloca o risco no centro da conversa para transformar proteção em decisão inteligente para eventos, empresas e pessoas.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4 animate-fade-in opacity-0" style={{ animationDelay: "0.42s", animationFillMode: "forwards" }} aria-label="Selecionar serviço em destaque">
            {serviceSlides.map((slide, index) => {
              const SelectorIcon = serviceSelectors[index].icon;
              const isSelected = activeSlide === index;

              return (
                <button
                  key={slide.eyebrow}
                  type="button"
                  onClick={() => setActiveSlide(index)}
                  className={`group rounded-2xl border px-3 py-4 text-center backdrop-blur transition-all duration-300 hover:-translate-y-1 sm:px-4 ${
                    isSelected
                      ? "border-cyan/50 bg-white text-slate-950 shadow-xl shadow-cyan/10"
                      : "border-slate-200/80 bg-white/70 text-slate-700 shadow-sm hover:border-cyan/40 hover:bg-white"
                  }`}
                  aria-label={`Mostrar ${slide.eyebrow}`}
                  aria-pressed={isSelected}
                >
                  <SelectorIcon className={`mx-auto mb-2 h-6 w-6 transition-colors ${isSelected ? "text-accent" : "text-cyan group-hover:text-primary"}`} />
                  <span className="text-xs font-bold sm:text-sm">{serviceSelectors[index].label}</span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="relative min-h-[500px] animate-fade-in opacity-0 sm:min-h-[620px] lg:min-h-[700px]" style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}>
          <div className="absolute left-1/2 top-1/2 h-[84%] w-[84%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan/20 animate-spin-slow" />
          <div className="absolute left-1/2 top-1/2 h-[66%] w-[66%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-slate-200/80" />
          <div className="absolute inset-8 rounded-[3rem] border border-slate-200/80 bg-white/50 p-3 shadow-2xl shadow-slate-200/80 backdrop-blur-xl lg:rotate-3" />
          <div className="absolute inset-12 overflow-hidden rounded-[2.5rem] border border-white shadow-2xl shadow-slate-200/80">
            {serviceSlides.map((slide, index) => (
              <img
                key={slide.eyebrow}
                src={slide.image}
                alt={slide.eyebrow}
                className={`absolute inset-0 h-full w-full object-cover transition-all duration-1000 ${activeSlide === index ? "scale-100 opacity-100" : "scale-110 opacity-0"}`}
                style={{ objectPosition: slide.imagePosition }}
              />
            ))}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/72 via-white/18 to-transparent" />
          </div>

          <div className="absolute bottom-4 left-4 right-4 rounded-3xl border border-slate-200/90 bg-white/95 p-5 text-slate-950 shadow-2xl backdrop-blur-xl sm:bottom-8 sm:left-auto sm:right-0 sm:max-w-md">
            <div className="flex items-start gap-4">
              <div className="rounded-2xl bg-gradient-to-br from-primary to-accent p-3 text-white shadow-lg"><CurrentIcon className="h-6 w-6" /></div>
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-accent">{currentSlide.metric}</p>
                <h2 className="mt-1 text-left text-xl font-bold leading-tight">{currentSlide.eyebrow}</h2>
                <p className="mt-2 text-left text-sm leading-relaxed text-slate-600">{currentSlide.description}</p>
              </div>
            </div>
            <div className="mt-4 flex items-center gap-2 text-sm font-bold text-slate-700"><CheckCircle2 className="h-4 w-4 text-cyan" /> Tema principal explícito e navegação dinâmica</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

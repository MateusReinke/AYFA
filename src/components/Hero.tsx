import { useEffect, useState } from "react";
import { Building2, CalendarCheck, ClipboardCheck, HeartHandshake, ShieldCheck, Sparkles } from "lucide-react";
import logo from "@/assets/ayfa-logo.png";

const serviceSlides = [
  {
    eyebrow: "Seguro para Eventos",
    title: "Eventos protegidos com presença, técnica e elegância.",
    description: "Coberturas para público, montagem, equipamentos, alimentos, artistas e responsabilidade civil.",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1600&q=85",
    icon: CalendarCheck,
    imagePosition: "center",
  },
  {
    eyebrow: "Responsabilidade Civil",
    title: "Riscos mapeados antes de virarem problemas.",
    description: "Consultoria para reduzir exposição jurídica e preservar patrimônio, reputação e continuidade.",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1600&q=85",
    icon: ShieldCheck,
    imagePosition: "center",
  },
  {
    eyebrow: "Seguros Pessoais",
    title: "Cuidado para a vida real, sem fórmulas prontas.",
    description: "Soluções para vida, acidentes pessoais, residência, automóvel, viagem e equipamentos portáteis.",
    image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=1600&q=85",
    icon: HeartHandshake,
    imagePosition: "center",
  },
  {
    eyebrow: "Soluções Empresariais",
    title: "Empresas protegidas para crescer com confiança.",
    description: "Proteção patrimonial, benefícios, frotas, cyber risk e seguros corporativos personalizados.",
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1600&q=85",
    icon: Building2,
    imagePosition: "center",
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
    <section id="hero" className="relative min-h-screen overflow-hidden bg-[#f7fbff] pt-16 text-slate-950 md:pt-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_14%_18%,hsl(var(--cyan)/0.18),transparent_30%),radial-gradient(circle_at_86%_18%,hsl(var(--accent)/0.16),transparent_32%),linear-gradient(180deg,#ffffff_0%,#f7fbff_48%,#eef7ff_100%)]" />
      <div className="absolute -left-36 top-20 h-80 w-80 rounded-full bg-cyan/20 blur-3xl" />
      <div className="absolute -right-40 bottom-16 h-[30rem] w-[30rem] rounded-full bg-accent/15 blur-3xl" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-36 bg-gradient-to-b from-transparent to-background" />

      <div className="container relative z-10 grid min-h-[calc(100vh-5rem)] items-center gap-12 px-4 py-12 md:px-6 lg:grid-cols-[0.86fr_1.14fr] lg:py-16">
        <div className="max-w-2xl text-center lg:text-left">
          <div className="mb-8 flex justify-center lg:justify-start animate-fade-in opacity-0" style={{ animationDelay: "0.05s", animationFillMode: "forwards" }}>
            <div className="relative">
              <div className="absolute -inset-5 rounded-[2.5rem] bg-gradient-to-br from-cyan/20 via-white to-accent/20 blur-xl" />
              <div className="relative rounded-[2rem] border border-white bg-white/90 px-7 py-5 shadow-[0_28px_80px_rgba(15,23,42,0.12)] backdrop-blur-xl sm:px-9 sm:py-6">
                <img src={logo} alt="Ayfa Seguros" className="h-24 drop-shadow-sm sm:h-28 md:h-32" />
              </div>
            </div>
          </div>

          <div className="animate-fade-in opacity-0" style={{ animationDelay: "0.18s", animationFillMode: "forwards" }}>
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan/20 bg-white/80 px-4 py-2 text-xs font-bold uppercase tracking-[0.28em] text-primary shadow-card backdrop-blur">
              <Sparkles className="h-4 w-4 text-cyan" /> Corretagem de Seguros
            </p>
            <h1 className="font-display text-4xl font-bold leading-[0.96] tracking-tight text-slate-950 sm:text-5xl md:text-7xl">
              Proteção com design sob medida para cada risco.
            </h1>
          </div>

          <div className="mt-8 min-h-[132px] animate-fade-in opacity-0" style={{ animationDelay: "0.32s", animationFillMode: "forwards" }}>
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-accent">{currentSlide.eyebrow}</p>
            <h2 className="mt-3 text-2xl font-semibold leading-snug text-slate-900 md:text-3xl">{currentSlide.title}</h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-slate-600 md:text-lg lg:mx-0">{currentSlide.description}</p>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4 animate-fade-in opacity-0" style={{ animationDelay: "0.46s", animationFillMode: "forwards" }} aria-label="Selecionar serviço em destaque">
            {serviceSlides.map((slide, index) => {
              const SelectorIcon = serviceSelectors[index].icon;
              const isSelected = activeSlide === index;

              return (
                <button
                  key={slide.eyebrow}
                  type="button"
                  onClick={() => setActiveSlide(index)}
                  className={`group rounded-[1.35rem] border px-4 py-4 text-center shadow-card backdrop-blur transition-all duration-300 hover:-translate-y-1 ${
                    isSelected
                      ? "border-cyan/40 bg-white text-slate-950 shadow-[0_22px_55px_rgba(14,165,233,0.18)]"
                      : "border-white bg-white/60 text-slate-600 hover:border-cyan/30 hover:bg-white"
                  }`}
                  aria-label={`Mostrar ${slide.eyebrow}`}
                  aria-pressed={isSelected}
                >
                  <SelectorIcon className={`mx-auto mb-2 h-6 w-6 transition-colors ${isSelected ? "text-accent" : "text-cyan group-hover:text-accent"}`} />
                  <span className="text-sm font-bold">{serviceSelectors[index].label}</span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="relative min-h-[430px] animate-fade-in opacity-0 [perspective:1400px] sm:min-h-[560px] lg:min-h-[680px]" style={{ animationDelay: "0.24s", animationFillMode: "forwards" }}>
          <div className="absolute left-1/2 top-1/2 h-[76%] w-[72%] -translate-x-1/2 -translate-y-1/2 rounded-[3rem] bg-gradient-to-br from-cyan/20 to-accent/20 blur-2xl" />
          <div className="absolute left-[8%] top-[12%] h-[72%] w-[76%] rotate-[-8deg] rounded-[3rem] border border-white bg-white/55 shadow-[0_35px_90px_rgba(15,23,42,0.12)]" />
          <div className="absolute right-[4%] top-[6%] h-[74%] w-[80%] rotate-[4deg] rounded-[3.25rem] bg-gradient-to-br from-white to-cyan/10 shadow-[0_45px_120px_rgba(15,23,42,0.16)]" />

          <div className="absolute inset-x-0 top-6 mx-auto h-[78%] w-[92%] max-w-[760px] overflow-hidden rounded-[3rem] border-[10px] border-white bg-white shadow-[0_45px_120px_rgba(15,23,42,0.18)] [clip-path:polygon(10%_0,100%_7%,92%_100%,0_88%)] [transform:rotateY(-10deg)_rotateX(3deg)] sm:w-[88%]">
            {serviceSlides.map((slide, index) => (
              <img
                key={slide.eyebrow}
                src={slide.image}
                alt={slide.eyebrow}
                className={`absolute inset-0 h-full w-full object-cover transition-all duration-1000 ${activeSlide === index ? "scale-100 opacity-100" : "scale-105 opacity-0"}`}
                style={{ objectPosition: slide.imagePosition }}
              />
            ))}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/78 via-white/12 to-transparent" />
          </div>

          <div className="absolute bottom-8 left-3 right-3 rounded-[2rem] border border-white bg-white/90 p-5 text-slate-950 shadow-[0_24px_70px_rgba(15,23,42,0.16)] backdrop-blur-xl sm:left-10 sm:right-auto sm:max-w-md lg:bottom-16">
            <div className="flex items-start gap-4">
              <div className="rounded-2xl bg-gradient-to-br from-primary to-accent p-3 text-white shadow-lg"><CurrentIcon className="h-6 w-6" /></div>
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-accent">{currentSlide.eyebrow}</p>
                <h3 className="mt-1 text-left text-xl font-bold leading-tight">{currentSlide.title}</h3>
                <p className="mt-2 text-left text-sm leading-relaxed text-slate-600">{currentSlide.description}</p>
              </div>
            </div>
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

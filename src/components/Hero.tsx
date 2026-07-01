import { useEffect, useState } from "react";
import { Building2, CalendarCheck, Car, HeartHandshake, Home, ShieldCheck, Users } from "lucide-react";
import logo from "@/assets/ayfa-logo.png";

const serviceSlides = [
  {
    label: "Pessoas",
    image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=1000&q=80&fm=webp",
    imagePosition: "center",
  },
  {
    label: "Empresas",
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1000&q=80&fm=webp",
    imagePosition: "center",
  },
  {
    label: "Veículos",
    image: "https://images.unsplash.com/photo-1542362567-b07e54358753?auto=format&fit=crop&w=1000&q=80&fm=webp",
    imagePosition: "center",
  },
  {
    label: "Patrimônio",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1000&q=80&fm=webp",
    imagePosition: "center",
  },
  {
    label: "Eventos",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1000&q=80&fm=webp",
    imagePosition: "center",
  },
];

const icons = [HeartHandshake, Building2, Car, Home, CalendarCheck];

const Hero = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % serviceSlides.length);
    }, 5200);

    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <section id="hero" className="relative overflow-hidden bg-background pt-20 text-foreground md:pt-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,hsl(var(--primary)/0.18),transparent_34%),radial-gradient(circle_at_85%_10%,hsl(var(--accent)/0.14),transparent_30%),linear-gradient(135deg,hsl(var(--background))_0%,hsl(var(--secondary)/0.42)_52%,hsl(var(--background))_100%)]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/35 to-transparent" />
      <div className="absolute left-1/2 top-24 h-[520px] w-[520px] -translate-x-1/2 rounded-full border border-white/10 opacity-40" />
      <div className="absolute inset-0 opacity-[0.045] [background-image:radial-gradient(currentColor_1px,transparent_1px)] [background-size:28px_28px]" />

      <div className="container relative z-10 px-6 py-14 md:px-8 lg:py-18 xl:py-20">
        <div className="grid min-h-[calc(100vh-6rem)] items-center gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14 xl:min-h-[700px]">
          <div className="mx-auto flex max-w-2xl flex-col items-center text-center lg:mx-0 lg:items-start lg:text-left">
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-border/70 bg-card/70 px-4 py-2 shadow-sm backdrop-blur-md">
              <ShieldCheck className="h-4 w-4 text-primary" strokeWidth={2} />
              <span className="text-xs font-bold uppercase tracking-[0.24em] text-muted-foreground">Consultoria em seguros desde 1993</span>
            </div>

            <img src={logo} alt="Ayfa Seguros" className="mb-7 h-24 w-fit drop-shadow-[0_18px_34px_rgba(0,0,0,0.14)] sm:h-28 lg:h-32" />

            <h1 className="max-w-[760px] text-balance text-4xl font-extrabold leading-[1.04] tracking-tight text-foreground sm:text-5xl lg:text-[3.8rem]">
              Proteção sob medida para pessoas, empresas e eventos.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-8 text-muted-foreground sm:text-lg">
              Atendimento consultivo, coberturas bem estruturadas e acompanhamento próximo para que cada decisão transmita segurança e confiança.
            </p>

            <div className="mt-8 grid w-full max-w-xl grid-cols-1 gap-3 sm:grid-cols-3">
              {["Análise técnica", "Atendimento próximo", "Gestão de riscos"].map((item) => (
                <div key={item} className="rounded-2xl border border-border/70 bg-card/70 px-4 py-3 text-sm font-bold text-foreground shadow-sm backdrop-blur-md">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="flex w-full flex-col items-center gap-6 lg:items-stretch">
            <div className="relative mx-auto w-full max-w-[660px] lg:mr-0">
              <div className="absolute -inset-4 rounded-[34px] bg-gradient-to-br from-primary/20 via-accent/5 to-cyan/15 blur-2xl" />
              <div className="animate-float-subtle relative aspect-[4/3] overflow-hidden rounded-[30px] border border-white/10 bg-card shadow-[0_26px_70px_rgba(0,0,0,.24)]">
                {serviceSlides.map((slide, index) => (
                  <img
                    key={slide.label}
                    src={slide.image}
                    alt={`Seguro para ${slide.label}`}
                    loading={index === 0 ? "eager" : "lazy"}
                    decoding="async"
                    className={`absolute inset-0 h-full w-full object-cover transition-all duration-500 ease-out ${
                      activeSlide === index ? "scale-100 opacity-100" : "scale-[1.03] opacity-0"
                    }`}
                    style={{ objectPosition: slide.imagePosition }}
                  />
                ))}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/45 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 rounded-2xl border border-white/15 bg-slate-950/55 px-4 py-3 text-white shadow-xl backdrop-blur-md">
                  <p className="text-xs font-bold uppercase tracking-[0.22em] text-white/65">Seguro para</p>
                  <p className="mt-1 text-2xl font-extrabold">{serviceSlides[activeSlide].label}</p>
                </div>
              </div>
            </div>

            <div className="w-full max-w-[660px] lg:ml-auto">
              <p className="mb-3 text-center text-xs font-bold uppercase tracking-[0.24em] text-muted-foreground lg:text-left">Escolha uma solução</p>
              <div className="scrollbar-none -mx-6 flex gap-3 overflow-x-auto px-6 pb-2 sm:mx-0 sm:flex-wrap sm:justify-center sm:px-0 lg:justify-start" aria-label="Selecionar imagem por tipo de seguro">
                {serviceSlides.map((slide, index) => {
                  const SelectorIcon = icons[index] || Users;
                  const isSelected = activeSlide === index;

                  return (
                    <button
                      key={slide.label}
                      type="button"
                      onClick={() => setActiveSlide(index)}
                      className={`relative inline-flex h-11 shrink-0 items-center gap-2 overflow-hidden rounded-xl border px-4 text-sm font-bold transition-all duration-300 hover:-translate-y-0.5 ${
                        isSelected
                          ? "border-primary bg-primary text-primary-foreground shadow-[0_14px_30px_rgba(30,64,175,.25)]"
                          : "border-border/80 bg-card/70 text-muted-foreground shadow-sm backdrop-blur-md hover:border-primary/40 hover:text-foreground"
                      }`}
                      aria-label={`Mostrar seguros para ${slide.label}`}
                      aria-pressed={isSelected}
                    >
                      <SelectorIcon className="h-4 w-4" strokeWidth={1.8} />
                      {slide.label}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

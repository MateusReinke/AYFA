import { useEffect, useState } from "react";
import { Building2, CalendarCheck, Car, HeartHandshake, Home, Users } from "lucide-react";
import logo from "@/assets/ayfa-logo.png";

const serviceSlides = [
  {
    label: "Pessoas",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=86&fm=webp",
    imagePosition: "center",
  },
  {
    label: "Empresas",
    image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=88&fm=webp",
    imagePosition: "center",
  },
  {
    label: "Veículos",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=86&fm=webp",
    imagePosition: "center",
  },
  {
    label: "Patrimônio",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=86&fm=webp",
    imagePosition: "center",
  },
  {
    label: "Eventos",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=88&fm=webp",
    imagePosition: "center",
  },
];

const icons = [HeartHandshake, Building2, Car, Home, CalendarCheck];

const Hero = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % serviceSlides.length);
    }, 6000);

    return () => window.clearInterval(intervalId);
  }, []);


  return (
    <section id="hero" className="relative overflow-hidden bg-transparent pt-20 text-foreground md:pt-24">
      <div className="honeycomb-hero-bg absolute inset-0 opacity-85" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,hsl(var(--primary)/0.13),transparent_34%),radial-gradient(circle_at_85%_10%,hsl(var(--accent)/0.10),transparent_30%)]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/35 to-transparent" />
      <div className="absolute left-1/2 top-24 h-[520px] w-[520px] -translate-x-1/2 rounded-full border border-white/10 opacity-40" />
      <div className="absolute inset-0 opacity-[0.045] [background-image:radial-gradient(currentColor_1px,transparent_1px)] [background-size:28px_28px]" />

      <div className="container relative z-10 px-6 py-14 md:px-8 lg:py-18 xl:py-20">
        <div className="grid min-h-[calc(100vh-6rem)] items-center gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:gap-10 xl:min-h-[700px]">
          <div className="mx-auto flex max-w-2xl flex-col items-center text-center lg:mx-0 lg:items-start lg:text-left">
            <img src={logo} alt="Ayfa Seguros" className="mb-8 h-40 w-fit self-center drop-shadow-[0_22px_40px_rgba(0,0,0,0.16)] sm:h-48 lg:h-56 xl:h-60" />

            <h1 className="max-w-[760px] text-balance text-4xl font-extrabold leading-[1.04] tracking-tight text-foreground sm:text-5xl lg:text-[3.8rem]">
              Proteção sob medida para pessoas, empresas e eventos.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-8 text-muted-foreground sm:text-lg">
              Atendimento consultivo, coberturas bem estruturadas e acompanhamento próximo para que cada decisão transmita segurança e confiança.
            </p>
          </div>

          <div className="flex w-full flex-col items-center gap-6 lg:items-stretch">
            <div className="relative mx-auto w-full max-w-[680px] lg:mr-0">
              <div className="absolute -inset-8 rounded-[44px] bg-gradient-to-br from-primary/25 via-cyan/10 to-accent/20 blur-3xl" />
              <div className="relative min-h-[360px] overflow-hidden rounded-[2rem] honeycomb-fade sm:min-h-[500px] lg:min-h-[580px]">
                {serviceSlides.map((slide, index) => {
                  const SelectorIcon = icons[index] || Users;
                  const isSelected = activeSlide === index;
                  const tilePosition = { left: "50%", top: "50%" };

                  return (
                    <button
                      key={slide.label}
                      type="button"
                      onClick={() => setActiveSlide(index)}
                      className={`group absolute honeycomb-tile honeycomb-photo-border isolate -translate-x-1/2 -translate-y-1/2 overflow-hidden text-left shadow-[0_24px_60px_rgba(15,23,42,.18)] transition-all duration-1000 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4 ${
                        isSelected
                          ? "z-20 h-[280px] w-[280px] opacity-100 sm:h-[380px] sm:w-[380px] lg:h-[440px] lg:w-[440px]"
                          : "pointer-events-none hidden opacity-0"
                      }`}
                      aria-label={`Mostrar seguros para ${slide.label}`}
                      aria-pressed={isSelected}
                      style={{
                        left: tilePosition.left,
                        top: tilePosition.top,
                      }}
                    >
                      <img
                        src={slide.image}
                        alt={`Seguro para ${slide.label}`}
                        loading={index === 0 ? "eager" : "lazy"}
                        decoding="async"
                        className={`h-full w-full object-cover transition-transform duration-1000 ease-out ${isSelected ? "scale-100" : "scale-110 group-hover:scale-105"}`}
                        style={{ objectPosition: slide.imagePosition }}
                      />
                      <div className={`absolute inset-0 transition-all duration-1000 ${isSelected ? "bg-gradient-to-t from-slate-950/82 via-slate-950/32 to-slate-950/10" : "bg-slate-950/52"}`} />
                      <div className={`absolute inset-x-5 bottom-7 rounded-3xl border border-white/20 bg-slate-950/70 px-5 py-5 text-center text-white shadow-[0_18px_45px_rgba(2,6,23,.38)] backdrop-blur-md transition-all duration-700 sm:inset-x-8 sm:bottom-9 ${isSelected ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}>
                        <span className="mx-auto mb-3 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-white/15 backdrop-blur-md">
                          <SelectorIcon className="h-5 w-5" strokeWidth={1.8} />
                        </span>
                        <p className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-white/80 sm:text-[0.7rem]">Seguro para</p>
                        <p className="mx-auto mt-1 max-w-[11rem] break-words text-2xl font-extrabold leading-tight drop-shadow-lg sm:max-w-[13rem] sm:text-4xl">{slide.label}</p>
                      </div>
                    </button>
                  );
                })}
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

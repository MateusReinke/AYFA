import { useEffect, useState } from "react";
import { Building2, CalendarCheck, Car, HeartHandshake, Home, Users } from "lucide-react";
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
  const [isTextVisible, setIsTextVisible] = useState(true);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % serviceSlides.length);
    }, 5200);

    return () => window.clearInterval(intervalId);
  }, []);

  useEffect(() => {
    setIsTextVisible(false);
    const timeoutId = window.setTimeout(() => setIsTextVisible(true), 40);
    return () => window.clearTimeout(timeoutId);
  }, [activeSlide]);

  return (
    <section id="hero" className="relative overflow-hidden bg-[#F8FAFC] pt-24 text-slate-950 md:pt-28">
      <div className="absolute left-[-10%] top-[-18%] h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute right-[-8%] top-20 h-96 w-96 rounded-full bg-accent/10 blur-3xl" />
      <div className="absolute bottom-10 left-[45%] h-52 w-52 rotate-45 rounded-[48px] border border-primary/10 bg-white/30" />
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,.8)_0%,rgba(248,250,252,.3)_45%,rgba(219,234,254,.35)_100%)]" />

      <div className="container relative z-10 px-6 py-12 sm:py-16 md:px-8 lg:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-[55fr_45fr] lg:gap-14">
          <div className={`flex flex-col justify-center transition-opacity duration-200 ${isTextVisible ? "opacity-100" : "opacity-0"}`}>
            <img src={logo} alt="Ayfa Seguros" className="mb-10 h-28 w-fit drop-shadow-[0_18px_30px_rgba(15,23,42,0.10)] sm:h-36 lg:h-44" />
            <p className="max-w-3xl text-[2rem] font-extrabold leading-[1.16] tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              Soluções personalizadas em seguros para você, sua família e seu negócio, com atendimento especializado e a segurança de quem cuida de cada detalhe.
            </p>
          </div>

          <div className="relative mx-auto w-full max-w-[500px] lg:mr-0">
            <div className="absolute -inset-4 rounded-[32px] bg-gradient-to-br from-primary/15 via-white/30 to-accent/15 blur-xl" />
            <div className="animate-float-subtle relative h-[320px] overflow-hidden rounded-[24px] bg-white shadow-[0_24px_70px_rgba(15,23,42,.14)] sm:h-[380px] lg:h-[420px]">
              {serviceSlides.map((slide, index) => (
                <img
                  key={slide.label}
                  src={slide.image}
                  alt={`Seguro para ${slide.label}`}
                  loading={index === 0 ? "eager" : "lazy"}
                  decoding="async"
                  className={`absolute inset-0 h-full w-full object-cover transition-all duration-300 ease-out ${
                    activeSlide === index ? "scale-100 opacity-100" : "scale-[.98] opacity-0"
                  }`}
                  style={{ objectPosition: slide.imagePosition }}
                />
              ))}
            </div>
            <div className="pointer-events-none absolute -bottom-5 left-8 right-8 h-10 rounded-full bg-primary/15 blur-2xl" />
          </div>
        </div>

        <div className="mt-12 lg:mt-14">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.22em] text-slate-600">Seguros para:</p>
          <div className="scrollbar-none -mx-6 flex gap-3 overflow-x-auto px-6 pb-2 sm:mx-0 sm:flex-wrap sm:px-0" aria-label="Selecionar imagem por tipo de seguro">
            {serviceSlides.map((slide, index) => {
              const SelectorIcon = icons[index] || Users;
              const isSelected = activeSlide === index;

              return (
                <button
                  key={slide.label}
                  type="button"
                  onClick={() => setActiveSlide(index)}
                  className={`relative inline-flex h-12 shrink-0 items-center gap-2 overflow-hidden rounded-2xl border px-5 text-sm font-bold transition-all duration-300 hover:-translate-y-0.5 ${
                    isSelected
                      ? "border-primary bg-primary text-white shadow-[0_14px_30px_rgba(30,64,175,.22)]"
                      : "border-slate-200 bg-white/80 text-slate-700 shadow-sm hover:border-primary/30 hover:text-primary hover:shadow-[0_10px_24px_rgba(15,23,42,.08)]"
                  }`}
                  aria-label={`Mostrar seguros para ${slide.label}`}
                  aria-pressed={isSelected}
                >
                  <SelectorIcon className="h-4 w-4" strokeWidth={1.8} />
                  {slide.label}
                  {isSelected && <span className="absolute inset-x-4 bottom-1 h-0.5 rounded-full bg-white/80" />}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

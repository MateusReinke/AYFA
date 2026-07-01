import { useEffect, useState } from "react";
import { CalendarCheck, ClipboardCheck, FileText, HeartHandshake, ShieldCheck, Users } from "lucide-react";
import logo from "@/assets/ayfa-logo.png";

const serviceSlides = [
  {
    label: "Pessoas",
    image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=2200&q=90",
    imagePosition: "center",
  },
  {
    label: "Empresas",
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=2200&q=90",
    imagePosition: "center",
  },
  {
    label: "Veículos",
    image: "https://images.unsplash.com/photo-1542362567-b07e54358753?auto=format&fit=crop&w=2200&q=90",
    imagePosition: "center",
  },
  {
    label: "Patrimônio",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=2200&q=90",
    imagePosition: "center",
  },
  {
    label: "Eventos",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=2200&q=90",
    imagePosition: "center",
  },
];

const Hero = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % serviceSlides.length);
    }, 5200);

    return () => window.clearInterval(intervalId);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-screen overflow-hidden bg-slate-950 pt-16 text-slate-950 md:pt-20">
      <div className="absolute inset-0">
        {serviceSlides.map((slide, index) => (
          <img
            key={slide.label}
            src={slide.image}
            alt={`Seguro para ${slide.label}`}
            className={`absolute inset-0 h-full w-full object-cover transition-all [transition-duration:1800ms] ease-out ${
              activeSlide === index ? "scale-100 opacity-100" : "scale-110 opacity-0"
            }`}
            style={{ objectPosition: slide.imagePosition }}
          />
        ))}
        <div className="absolute inset-0 bg-white/68 backdrop-blur-[1.5px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_22%,rgba(255,255,255,0.84),transparent_30%),radial-gradient(circle_at_18%_48%,rgba(34,211,238,0.28),transparent_24%),radial-gradient(circle_at_80%_35%,rgba(59,130,246,0.22),transparent_26%),linear-gradient(180deg,rgba(248,250,252,0.40)_0%,rgba(226,232,240,0.74)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-slate-200/70 via-slate-100/20 to-transparent" />
      </div>

      <div className="container relative z-10 flex min-h-[calc(100vh-5rem)] items-center justify-center px-4 py-10 md:px-6">
        <div className="mx-auto flex w-full max-w-5xl flex-col items-center text-center">
          <div className="animate-fade-in opacity-0" style={{ animationDelay: "0.05s", animationFillMode: "forwards" }}>
            <img src={logo} alt="Ayfa Seguros" className="mx-auto h-36 w-auto drop-shadow-[0_18px_28px_rgba(15,23,42,0.18)] sm:h-44 md:h-52" />
          </div>

          <p className="mt-10 max-w-4xl animate-fade-in text-2xl font-extrabold leading-snug tracking-tight text-slate-900 opacity-0 drop-shadow-sm md:text-3xl" style={{ animationDelay: "0.18s", animationFillMode: "forwards" }}>
            Soluções personalizadas em seguros para você, sua família e seu negócio, com atendimento especializado e a segurança de quem cuida de cada detalhe.
          </p>

          <div className="mt-10 flex w-full animate-fade-in flex-col items-center justify-center gap-4 opacity-0 sm:flex-row" style={{ animationDelay: "0.32s", animationFillMode: "forwards" }}>
            <button onClick={() => scrollToSection("contato")} className="inline-flex h-16 w-full items-center justify-center rounded-2xl bg-gradient-to-r from-primary to-accent px-8 text-lg font-bold text-white shadow-[0_18px_45px_rgba(37,99,235,0.32)] transition hover:-translate-y-1 hover:shadow-[0_22px_55px_rgba(37,99,235,0.42)] sm:w-auto sm:min-w-64">
              Solicitar Cotação
            </button>
            <button onClick={() => scrollToSection("servicos")} className="inline-flex h-16 w-full items-center justify-center rounded-2xl border border-white/70 bg-white/58 px-8 text-lg font-bold text-slate-900 shadow-lg backdrop-blur-md transition hover:-translate-y-1 hover:bg-white/78 sm:w-auto sm:min-w-72">
              Conheça Nossos Serviços
            </button>
            <a href="/apresentacao_seguro_eventos__atual.pdf" target="_blank" rel="noreferrer" className="inline-flex h-16 w-full items-center justify-center gap-3 rounded-2xl border border-white/70 bg-white/58 px-8 text-lg font-bold text-slate-900 shadow-lg backdrop-blur-md transition hover:-translate-y-1 hover:bg-white/78 sm:w-auto sm:min-w-80">
              Apresentação Seguro Eventos <FileText className="h-5 w-5" />
            </a>
          </div>

          <div className="mt-16 animate-fade-in opacity-0" style={{ animationDelay: "0.46s", animationFillMode: "forwards" }}>
            <p className="mb-4 text-base font-bold text-slate-800">Seguros para:</p>
            <div className="flex flex-wrap justify-center gap-3" aria-label="Selecionar imagem por tipo de seguro">
              {serviceSlides.map((slide, index) => {
                const icons = [HeartHandshake, Users, ShieldCheck, ClipboardCheck, CalendarCheck];
                const SelectorIcon = icons[index];
                const isSelected = activeSlide === index;

                return (
                  <button
                    key={slide.label}
                    type="button"
                    onClick={() => setActiveSlide(index)}
                    className={`inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-bold shadow-lg backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 ${
                      isSelected ? "bg-white text-primary ring-2 ring-primary/25" : "bg-white/68 text-slate-700 hover:bg-white"
                    }`}
                    aria-label={`Mostrar seguros para ${slide.label}`}
                    aria-pressed={isSelected}
                  >
                    <SelectorIcon className="h-4 w-4" />
                    {slide.label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

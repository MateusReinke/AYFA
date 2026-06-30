import { Building2, CalendarCheck, ShieldCheck, Users } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";
import logo from "@/assets/ayfa-logo.png";

const highlights = [
  { icon: ShieldCheck, label: "Consultoria", text: "segurança planejada para cada necessidade" },
  { icon: CalendarCheck, label: "Eventos", text: "proteção especializada para operações complexas" },
  { icon: Building2, label: "Empresas", text: "gestão de riscos para negócios e patrimônios" },
  { icon: Users, label: "Pessoas", text: "tranquilidade para você e sua família" },
];

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 md:pt-20">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/75 to-background/35 dark:from-[hsl(222,47%,6%)] dark:via-[hsl(222,47%,6%)]/90 dark:to-[hsl(222,47%,6%)]/70" />
      </div>

      <div className="absolute top-16 right-4 md:right-20 w-32 md:w-96 h-32 md:h-96 bg-accent rounded-full blur-3xl opacity-20" />
      <div className="absolute bottom-16 left-4 md:left-20 w-28 md:w-80 h-28 md:h-80 bg-gold rounded-full blur-3xl opacity-15" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent" />

      <div className="container relative z-10 px-4 md:px-6 py-12 md:py-20 lg:py-28">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-white/55 px-4 py-2 text-xs font-bold uppercase tracking-[0.28em] text-primary shadow-sm backdrop-blur-md dark:bg-white/5 animate-fade-in opacity-0" style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}>
              Ayfa Seguros
            </div>

            <h1 className="mt-6 font-display text-4xl font-bold leading-tight text-foreground drop-shadow-sm sm:text-5xl md:text-6xl lg:text-7xl animate-fade-in opacity-0" style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}>
              Seguros sob medida com <span className="text-gradient">cuidado consultivo</span>.
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base font-medium leading-relaxed text-foreground/85 drop-shadow-sm sm:text-lg md:text-xl lg:mx-0 animate-fade-in opacity-0" style={{ animationDelay: "0.45s", animationFillMode: "forwards" }}>
              Soluções personalizadas em seguros para pessoas, empresas, patrimônio e eventos, unindo experiência, agilidade e atenção aos detalhes para proteger o que mais importa.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:max-w-2xl animate-fade-in opacity-0" style={{ animationDelay: "0.65s", animationFillMode: "forwards" }}>
              {highlights.map(({ icon: Icon, label }) => (
                <div key={label} className="rounded-2xl border border-white/40 bg-white/55 px-3 py-4 text-center shadow-sm backdrop-blur-md dark:border-white/10 dark:bg-white/5">
                  <Icon className="mx-auto mb-2 h-5 w-5 text-accent" />
                  <span className="text-sm font-bold text-foreground">{label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative animate-fade-in opacity-0" style={{ animationDelay: "0.35s", animationFillMode: "forwards" }}>
            <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-br from-primary/20 via-cyan/10 to-accent/20 blur-2xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/40 bg-white/60 p-6 shadow-2xl backdrop-blur-xl dark:border-white/10 dark:bg-white/5 md:p-8">
              <div className="flex justify-center border-b border-border/60 pb-6">
                <img src={logo} alt="Ayfa Seguros" className="h-32 drop-shadow-xl md:h-48 lg:h-56" />
              </div>

              <div className="mt-6 space-y-4">
                {highlights.map(({ icon: Icon, label, text }) => (
                  <div key={label} className="flex items-start gap-4 rounded-2xl bg-background/70 p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-background">
                    <div className="rounded-xl bg-accent/10 p-3 text-accent">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h2 className="font-bold text-foreground">{label}</h2>
                      <p className="text-left text-sm leading-relaxed text-muted-foreground">{text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

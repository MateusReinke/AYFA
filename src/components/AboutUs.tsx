import { Target, Eye, Heart, Shield, Users, CheckCircle, Calendar } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

// Import da imagem
import bgImage from "@/assets/about-bg.jpg";

// --- Componente de Animação (Reutilizável) ---
interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

const Reveal = ({ children, className = "", delay = 0 }: RevealProps) => {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.15 });

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-1000 ease-out transform ${
        isVisible
          ? "opacity-100 translate-y-0 scale-100 blur-0"
          : "opacity-0 translate-y-12 scale-95 blur-sm"
      } ${className}`}
    >
      {children}
    </div>
  );
};

const AboutUs = () => {
  const values = [
    "Ética e respeito.",
    "Humildade.",
    "Profissionalismo.",
    "Atitude.",
    "Comprometimento e dedicação.",
    "Foco nas necessidades do cliente.",
    "Trabalho em equipe e Cooperação.",
    "Soluções eficientes",
  ];

  const stats = [
    { icon: Calendar, value: "15+", label: "Anos de Experiência", color: "text-primary" },
    { icon: Shield, value: "500+", label: "Eventos Segurados", color: "text-cyan" },
    { icon: Users, value: "5k+", label: "Vidas Protegidas", color: "text-accent" },
    { icon: CheckCircle, value: "99%", label: "Satisfação Clientes", color: "text-green-500" },
  ];

  return (
    <section
      id="quem-somos"
      className="min-h-screen flex flex-col py-[50px] md:py-[70px] lg:py-[100px] relative overflow-hidden bg-transparent"
    >
      {/* 1. IMAGEM DE FUNDO */}
      <div className="absolute inset-0 z-0">
        <img
          src={bgImage}
          alt="Background Texture"
          className="w-full h-full object-cover object-[center_20%] md:object-[80%_center] opacity-60 dark:opacity-40 mix-blend-multiply dark:mix-blend-normal transition-all duration-1000"
        />

        {/* Overlay Gradiente */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/25 to-background/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/20 to-transparent" />
      </div>

      {/* 2. TEXTURA E LUZ AMBIENTE */}
      <div className="absolute inset-0 z-0 opacity-[0.04] mix-blend-overlay"
           style={{ backgroundImage: 'radial-gradient(currentColor 1px, transparent 1px)', backgroundSize: '24px 24px' }}>
      </div>

      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0 opacity-40">
        <div className="absolute top-[10%] right-[10%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-[10%] left-[10%] w-[500px] h-[500px] bg-cyan/10 rounded-full blur-[100px]" />
      </div>

      <div className="container px-4 md:px-6 relative z-10">

        {/* LAYOUT PRINCIPAL */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center mb-16 md:mb-24">

          {/* Lado Esquerdo - Texto */}
          <div>
            <div className="relative">
              <div className="space-y-8 relative">

                <Reveal>
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <div className="h-px w-8 bg-cyan"></div>
                      <span className="text-cyan font-bold tracking-widest text-xs uppercase">Sobre a Ayfa Seguros</span>
                    </div>
                    <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground drop-shadow-sm">
                      Mais que seguros,<br />
                      <span className="text-gradient">Cuidado em cada detalhe</span>
                    </h2>
                  </div>
                </Reveal>

                <Reveal delay={200}>
                  {/* AJUSTE: Dark Mode agora usa dark:bg-black/30 (mais vidro) */}
                  <div className="relative p-6 -ml-2 rounded-2xl bg-white/60 dark:bg-black/30 backdrop-blur-md border border-white/30 dark:border-white/10 shadow-sm transition-all hover:bg-white/70 dark:hover:bg-black/40">
                    <p className="text-left text-muted-foreground text-lg leading-relaxed border-l-4 border-primary/50 pl-5">
                      A <strong className="text-primary font-bold">Ayfa Seguros</strong>, fundada em 1993, se destaca no mercado de Consultoria de Seguros pela eficiência, qualidade e ética exemplar. Sob a liderança de Fauze Farhat, com mais de 30 anos de experiência, a empresa é reconhecida por sua confiabilidade e pelo atendimento diferenciado. Além de oferecer uma ampla gama de produtos para atender diversas necessidades, a Ayfa Seguros é especialista no produto de RC Eventos, garantindo não apenas a proteção do patrimônio, mas também tranquilidade e comodidade aos clientes em eventos de todos os portes.
                    </p>
                  </div>
                </Reveal>



              </div>
            </div>
          </div>

          {/* Lado Direito - Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

            {/* Card Missão */}
            <Reveal delay={200}>
              {/* AJUSTE: Sombra Azul Escura (primary) e fundo dark mais leve (black/30) */}
              <div className="bg-white/60 dark:bg-black/30 backdrop-blur-xl border border-white/30 dark:border-white/10 p-6 premium-card rounded-[20px] group hover:border-primary/40 hover:bg-white/70 dark:hover:bg-black/40 h-full">
                <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/5 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500 border border-primary/10">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-xl mb-2 text-foreground">Missão</h3>
                <p className="text-left text-sm text-muted-foreground leading-relaxed">
                  Proporcionar soluções inovadoras, com um atendimento diferenciado e ágil superando as expectativas e agregando valor aos negócios de nossos clientes.
                </p>
              </div>
            </Reveal>

            {/* Card Visão */}
            <Reveal delay={400}>
              {/* AJUSTE: Sombra Ciano e fundo dark mais leve (black/30) */}
              <div className="bg-white/60 dark:bg-black/30 backdrop-blur-xl border border-white/30 dark:border-white/10 p-6 premium-card rounded-[20px] group hover:border-cyan/40 hover:bg-white/70 dark:hover:bg-black/40 h-full">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan/20 to-cyan/5 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500 border border-cyan/10">
                  <Eye className="w-6 h-6 text-cyan" />
                </div>
                <h3 className="font-bold text-xl mb-2 text-foreground">Visão</h3>
                <p className="text-left text-sm text-muted-foreground leading-relaxed">
                  Ser referência de mercado em qualidade de atendimento e estar entre as melhores consultorias no mercado de seguros.
                </p>
              </div>
            </Reveal>

            {/* Card Valores (Centralizado) */}
            <div className="col-span-1 md:col-span-2">
              <Reveal delay={600}>
                {/* AJUSTE: Sombra Accent (Azul Royal) e Gradiente Dark Transparente */}
                <div className="bg-gradient-to-br from-white/60 to-white/30 dark:from-black/40 dark:to-black/10 backdrop-blur-xl border border-white/30 dark:border-white/10 p-8 premium-card rounded-[20px] hover:border-accent/30 hover:from-white/70 hover:to-white/40 dark:hover:from-black/50 dark:hover:to-black/20">
                  <h3 className="font-bold text-xl mb-8 text-foreground flex items-center justify-center gap-3">
                    <div className="p-1.5 bg-accent/10 rounded-lg">
                      <Heart className="w-5 h-5 text-accent fill-accent/20" />
                    </div>
                    Nossos Valores
                  </h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-left">
                    {values.map((value) => (
                      <li key={value} className="flex items-start gap-3 rounded-xl bg-background/70 border border-border/70 px-4 py-3 text-sm font-semibold text-foreground shadow-sm transition-all duration-300 hover:border-accent/40 hover:bg-background">
                        <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                        <span>{value}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>

          </div>
        </div>

        {/* RODAPÉ DE ESTATÍSTICAS */}
        <div className="relative">
          <Reveal delay={800}>
            <div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent mb-12 opacity-50" />

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="flex flex-col items-center text-center group cursor-default">
                  {/* Ícones com fundo translúcido */}
                  <div className={`p-4 rounded-2xl bg-white/40 dark:bg-white/5 backdrop-blur-sm border border-transparent group-hover:border-${stat.color.split('-')[1]}/20 mb-3 transition-all duration-300 group-hover:-translate-y-1 group-hover:bg-white/60 dark:group-hover:bg-white/10 group-hover:shadow-lg group-hover:shadow-${stat.color.split('-')[1]}/10`}>
                    <stat.icon className={`w-8 h-8 ${stat.color} drop-shadow-sm`} />
                  </div>
                  <span className="text-3xl md:text-4xl font-bold text-foreground tracking-tight mb-1">{stat.value}</span>
                  <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest opacity-80">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

      </div>
    </section>
  );
};

export default AboutUs;

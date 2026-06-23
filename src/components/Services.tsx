import { useState } from "react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Briefcase,
  Building,
  Calendar,
  Car,
  CheckCircle,
  Factory,
  FileText,
  Heart,
  Home,
  Monitor,
  Plane,
  Scale,
  ShieldCheck,
  Stethoscope,
  Truck,
  Users,
  type LucideIcon,
} from "lucide-react";

import bgImage from "@/assets/about-bg.jpg";

type Feature = {
  icon: LucideIcon;
  text: string;
  coverages?: string[];
};

type Service = {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  icon: LucideIcon;
  color: string;
  bgIcon: string;
  border: string;
  shadow: string;
  features: Feature[];
  presentationPdf?: string;
};

const eventPresentationPdf = "/APRESENTA%C3%87%C3%83O%20SEGURO%20EVENTOS%20ATUAL%20-%20SITE.pdf";

const services: Service[] = [
  {
    id: 0,
    title: "Para Você",
    subtitle: "Pessoais",
    description: "Proteção completa para você e sua família viverem com tranquilidade.",
    icon: Users,
    color: "text-cyan",
    bgIcon: "bg-cyan",
    border: "hover:border-cyan/60",
    shadow: "shadow-cyan/20",
    features: [
      { icon: Heart, text: "Vida" },
      { icon: ShieldCheck, text: "Acidentes Pessoais" },
      { icon: Monitor, text: "Equipamentos Portáteis" },
      { icon: FileText, text: "Fianças" },
      { icon: Home, text: "Residencial" },
      { icon: Car, text: "Automóvel" },
      { icon: Plane, text: "Viagem" },
    ],
  },
  {
    id: 1,
    title: "Sua Empresa",
    subtitle: "Corporativo",
    description: "Gestão de risco inteligente para blindar seu patrimônio, seus benefícios e sua operação.",
    icon: Building,
    color: "text-primary",
    bgIcon: "bg-primary",
    border: "hover:border-primary/60",
    shadow: "shadow-primary/20",
    features: [
      { icon: Truck, text: "Frotas" },
      { icon: Heart, text: "Vida" },
      { icon: Stethoscope, text: "Saúde e Odonto" },
      { icon: Building, text: "Condomínio" },
      { icon: FileText, text: "Fianças" },
      { icon: Monitor, text: "Cyber Risk" },
      { icon: Scale, text: "Responsabilidade Civil Geral" },
      { icon: Briefcase, text: "RC Profissional" },
      { icon: Briefcase, text: "D&O" },
      { icon: Factory, text: "Empresarial – Patrimonial" },
    ],
  },
  {
    id: 2,
    title: "Eventos",
    subtitle: "Entretenimento",
    description: "Proteção para eventos, equipamentos e participantes, com coberturas especializadas para cada operação.",
    icon: Calendar,
    color: "text-accent",
    bgIcon: "bg-accent",
    border: "hover:border-accent/60",
    shadow: "shadow-accent/20",
    presentationPdf: eventPresentationPdf,
    features: [
      {
        icon: Scale,
        text: "Responsabilidade Civil Eventos",
        coverages: [
          "RC Instalação e Montagem",
          "RC Imóvel",
          "RC Empregador",
          "RC Alimento e Bebidas",
          "RC Erro de Projeto",
          "RC Cruzada",
          "RC Artistas",
          "Danos Morais",
        ],
      },
      {
        icon: Monitor,
        text: "RD - Equipamento",
        coverages: [
          "Equipamentos para Realização do Evento",
          "Marquises Temporárias",
          "Cenografia e Decoração",
          "Equipamentos em Exposição",
          "Instrumentos Musicais",
        ],
      },
      {
        icon: Users,
        text: "AP Acidentes Pessoais",
        coverages: [
          "Morte Acidental",
          "Invalidez Permanente e/ou parcial por acidente",
          "Despesas médicas hospitalares e/ou odontológicas",
        ],
      },
    ],
  },
];

const Services = () => {
  const { ref, isVisible } = useScrollReveal();
  const [activeId, setActiveId] = useState<number | null>(null);
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const scrollToContact = () => {
    document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="servicos"
      className="min-h-screen flex flex-col justify-center relative overflow-hidden bg-background py-24"
      ref={ref}
    >
      <div className="absolute inset-0 z-0">
        <img
          src={bgImage}
          alt="Background"
          className="w-full h-full object-cover opacity-20 dark:opacity-10 mix-blend-multiply dark:mix-blend-normal blur-sm"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-transparent to-background/90" />
      </div>

      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cyan/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container px-4 md:px-6 relative z-10">
        <div className={`text-center mb-8 shrink-0 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <div className="inline-flex items-center gap-2 mb-3 px-3 py-1 rounded-full bg-secondary/80 border border-border/50 backdrop-blur-sm">
            <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Nossas Soluções</span>
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-bold leading-tight">
            Proteção para cada <span className="text-gradient">momento.</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Passe o mouse sobre uma categoria para ver os produtos. Em telas touch, toque para abrir.
          </p>
        </div>

        <div className={`flex flex-col lg:flex-row gap-4 w-full min-h-[620px] lg:h-[66vh] lg:max-h-[720px] transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}`}>
          {services.map((service) => {
            const isActive = hoveredId === service.id || activeId === service.id;

            return (
              <article
                key={service.id}
                onClick={() => setActiveId((current) => (current === service.id ? null : service.id))}
                onMouseEnter={() => setHoveredId(service.id)}
                onMouseLeave={() => setHoveredId(null)}
                className={`relative rounded-3xl border-2 cursor-pointer overflow-hidden transition-all duration-700 ease-out flex flex-col group ${
                  isActive
                    ? `lg:flex-[3] flex-[3] bg-white/95 dark:bg-card/90 border-border/50 shadow-2xl ${service.shadow}`
                    : `lg:flex-1 flex-1 bg-white/30 dark:bg-card/20 backdrop-blur-md border-white/20 dark:border-white/5 ${service.border}`
                }`}
              >
                <service.icon
                  className={`absolute -right-12 -bottom-12 w-80 h-80 opacity-[0.03] dark:opacity-[0.05] transition-transform duration-700 ${
                    isActive ? "scale-100 rotate-0" : "scale-75 rotate-12"
                  } ${service.color}`}
                />

                <div className="absolute inset-0 p-6 md:p-8 flex flex-col h-full w-full">
                  <div className={`flex items-center gap-4 shrink-0 transition-all duration-500 ${isActive ? "translate-x-0" : "justify-center lg:justify-start"}`}>
                    <div className={`rounded-xl flex items-center justify-center shrink-0 transition-all duration-500 shadow-sm ${isActive ? `w-14 h-14 ${service.bgIcon} text-white` : "w-10 h-10 bg-white/40 dark:bg-white/10 text-foreground"}`}>
                      <service.icon className={isActive ? "w-7 h-7" : "w-5 h-5"} />
                    </div>

                    <div className="transition-all duration-500">
                      <p className={`text-xs font-bold uppercase tracking-widest ${isActive ? service.color : "text-muted-foreground group-hover:text-foreground"}`}>
                        {service.subtitle}
                      </p>
                      <h3 className={`font-bold text-3xl text-foreground whitespace-nowrap leading-none mt-1 transition-all duration-500 ${isActive ? "opacity-100 max-w-full" : "opacity-0 max-w-0 hidden"}`}>
                        {service.title}
                      </h3>
                    </div>
                  </div>

                  {!isActive && (
                    <div className="hidden lg:flex flex-1 items-center justify-center relative overflow-hidden">
                      <div className="rotate-90 origin-center absolute whitespace-nowrap">
                        <h3 className="text-3xl font-bold text-foreground/60 tracking-tight group-hover:text-foreground transition-colors duration-300">
                          {service.title}
                        </h3>
                      </div>
                    </div>
                  )}

                  <div className={`flex-1 flex flex-col mt-6 transition-all duration-500 ${isActive ? "opacity-100 translate-y-0 relative" : "opacity-0 translate-y-4 absolute pointer-events-none"}`}>
                    <p className="text-left text-foreground/80 text-base md:text-lg mb-6 leading-relaxed max-w-xl font-medium">
                      {service.description}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-auto w-full overflow-visible">
                      {service.features.map((feature) => (
                        <div key={feature.text} className="text-sm font-semibold text-foreground group/item p-2 rounded-lg hover:bg-secondary/50 transition-colors">
                          <div className="flex items-start gap-3">
                            <div className="p-1.5 rounded-full bg-background border border-border group-hover/item:scale-110 transition-transform shadow-sm">
                              <feature.icon className={`w-4 h-4 ${service.color}`} />
                            </div>
                            <span className="leading-snug">{feature.text}</span>
                          </div>

                          {feature.coverages && (
                            <div className="mt-3 max-h-0 overflow-hidden rounded-2xl border border-transparent bg-card/90 px-4 text-left opacity-0 transition-all duration-300 group-hover/item:max-h-96 group-hover/item:border-border group-hover/item:py-4 group-hover/item:opacity-100">
                              <p className={`mb-2 text-xs font-bold uppercase tracking-widest ${service.color}`}>Coberturas</p>
                              <ul className="space-y-2 text-xs font-medium text-muted-foreground">
                                {feature.coverages.map((coverage) => (
                                  <li key={coverage} className="flex gap-2">
                                    <CheckCircle className={`mt-0.5 h-3.5 w-3.5 shrink-0 ${service.color}`} />
                                    <span>{coverage}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>

                    <div className="pt-6 mt-4 border-t border-border w-full">
                      <div className="flex flex-col sm:flex-row gap-3">
                        <Button
                          className={`w-full sm:w-auto h-14 px-8 text-lg font-bold shadow-lg hover:scale-[1.02] transition-all text-white border-0 ${service.bgIcon}`}
                          onClick={(event) => {
                            event.stopPropagation();
                            scrollToContact();
                          }}
                        >
                          Solicitar Cotação
                          <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>

                        {service.presentationPdf && (
                          <Button
                            asChild
                            variant="outline"
                            className="w-full sm:w-auto h-14 px-8 text-lg font-bold bg-background/80 hover:bg-background border-border shadow-lg hover:scale-[1.02] transition-all"
                            onClick={(event) => event.stopPropagation()}
                          >
                            <a
                              href={service.presentationPdf}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label="Abrir apresentação do Seguro Eventos em PDF em uma nova guia"
                            >
                              Apresentação PDF
                              <FileText className="ml-2 w-5 h-5" />
                            </a>
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>

                  {!isActive && (
                    <div className="hidden lg:flex shrink-0 items-center justify-center pt-4 opacity-70 group-hover:opacity-100 transition-opacity">
                      <span className={`text-[10px] font-bold uppercase tracking-widest ${service.color}`}>Passe o mouse</span>
                    </div>
                  )}

                  {!isActive && (
                    <div className="lg:hidden absolute right-6 top-1/2 -translate-y-1/2 bg-background/50 p-2 rounded-full border border-border">
                      <ArrowRight className="w-5 h-5 text-foreground" />
                    </div>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;

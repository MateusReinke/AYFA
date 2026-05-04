import { useState } from "react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Button } from "@/components/ui/button";
import { 
  Users, Building, Briefcase, Calendar, Truck,
  Scale, Monitor, Heart, Plane, Home, Stethoscope,
  ArrowRight, Factory, MousePointerClick, Car
} from "lucide-react";

import bgImage from "@/assets/about-bg.jpg";

const Services = () => {
  const { ref, isVisible } = useScrollReveal();
  const [activeId, setActiveId] = useState<number>(1);
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const services = [
    {
      id: 0,
      title: "Para Você",
      subtitle: "Pessoais",
      description: "Proteção completa para você e sua família viverem com tranquilidade.",
      icon: Users,
      color: "text-cyan",
      bgIcon: "bg-cyan",
      hoverBorder: "hover:border-cyan", 
      shadow: "shadow-cyan/20",
      features: [
        { icon: Heart, text: "Vida e Acidentes" },
        { icon: Stethoscope, text: "Saúde e Odonto" },
        { icon: Home, text: "Residencial" },
        { icon: Car, text: "Automóvel" },
        { icon: Plane, text: "Viagem" }
      ]
    },
    {
      id: 1,
      title: "RC Eventos",
      subtitle: "Entretenimento",
      description: "Protege organizadores contra imprevistos como acidentes, danos materiais e responsabilidades legais, garantindo tranquilidade do início ao fim.",
      icon: Calendar,
      color: "text-accent",
      bgIcon: "bg-accent",
      hoverBorder: "hover:border-accent",
      shadow: "shadow-accent/20",
      features: [
        { icon: Scale, text: "Resp. Civil Eventos" },
        { icon: Monitor, text: "RD – Equipamentos" },
        { icon: Users, text: "AP – Acidentes Pessoais" }
      ]
    },
    {
      id: 2,
      title: "Sua Empresa",
      subtitle: "Corporativo",
      description: "Gestão de risco inteligente para blindar seu patrimônio e operação.",
      icon: Building,
      color: "text-primary",
      bgIcon: "bg-primary",
      hoverBorder: "hover:border-primary",
      shadow: "shadow-primary/20",
      features: [
        { icon: Truck, text: "Frotas" },
        { icon: Monitor, text: "Cyber Risk" },
        { icon: Scale, text: "Responsabilidade Civil Geral" },
        { icon: Briefcase, text: "D&O e E&O" },
        { icon: Factory, text: "Patrimonial" }
      ]
    }
  ];

  return (
    <section 
      id="servicos" 
      className="h-screen min-h-[700px] flex flex-col justify-center relative overflow-hidden bg-background" 
      ref={ref}
    >
      {/* 1. FUNDO GERAL */}
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

      <div className="container px-4 md:px-6 relative z-10 h-full flex flex-col justify-center py-8">
        
        {/* HEADER */}
        <div className={`text-center mb-8 shrink-0 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 mb-3 px-3 py-1 rounded-full bg-secondary/80 border border-border/50 backdrop-blur-sm">
            <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Nossas Soluções</span>
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-bold leading-tight">
            Proteção para cada <span className="text-gradient">momento.</span>
          </h2>
        </div>

        {/* CONTAINER DOS CARDS */}
        <div className={`flex flex-col lg:flex-row gap-4 w-full h-[60vh] max-h-[650px] min-h-[500px] transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          
          {services.map((service) => {
            const isActive = activeId === service.id;
            const isHovered = hoveredId === service.id;
            
            return (
              <div
                key={service.id}
                onClick={() => setActiveId(service.id)}
                onMouseEnter={() => setHoveredId(service.id)}
                onMouseLeave={() => setHoveredId(null)}
                className={`
                  relative rounded-3xl border-2 cursor-pointer overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]
                  flex flex-col group
                  ${isActive 
                    ? `lg:flex-[3] flex-[3] bg-white/95 dark:bg-card/90 border-border/50 shadow-2xl ${service.shadow}` 
                    : `lg:flex-[1] flex-[1] bg-white/30 dark:bg-card/20 backdrop-blur-md border-white/20 dark:border-white/5 ${service.hoverBorder}`
                  }
                  ${isHovered && !isActive ? 'lg:-translate-y-2 lg:bg-white/40' : ''}
                `}
              >
                {/* Marca D'água */}
                <service.icon 
                  className={`absolute -right-12 -bottom-12 w-80 h-80 opacity-[0.03] dark:opacity-[0.05] transition-transform duration-700 
                    ${isActive ? 'scale-100 rotate-0' : 'scale-75 rotate-12'} ${service.color}`} 
                />

                {/* --- CONTEÚDO DO CARD --- */}
                <div className="absolute inset-0 p-6 md:p-8 flex flex-col h-full w-full">
                  
                  {/* 1. TOPO: Sempre visível (Ícone + Categoria) */}
                  <div className={`flex items-center gap-4 shrink-0 transition-all duration-500 ${isActive ? 'translate-x-0' : 'justify-center lg:justify-start'}`}>
                    {/* Ícone */}
                    <div className={`
                      rounded-xl flex items-center justify-center shrink-0 transition-all duration-500 shadow-sm
                      ${isActive 
                        ? `w-14 h-14 ${service.bgIcon} text-white` 
                        : `w-10 h-10 bg-white/20 text-foreground group-hover:${service.color}`
                      }
                    `}>
                      <service.icon className={`${isActive ? 'w-7 h-7' : 'w-5 h-5'}`} />
                    </div>

                    {/* Categoria (Pessoais/Empresarial) */}
                    <div className={`transition-all duration-500`}>
                      <p className={`text-xs font-bold uppercase tracking-widest ${isActive ? service.color : 'text-muted-foreground group-hover:text-foreground'}`}>
                        {service.subtitle}
                      </p>
                      {/* Título Principal só aparece aqui se estiver ATIVO */}
                      <h3 className={`font-bold text-3xl text-foreground whitespace-nowrap leading-none mt-1 transition-all duration-500 ${isActive ? 'opacity-100 max-w-full' : 'opacity-0 max-w-0 hidden'}`}>
                        {service.title}
                      </h3>
                    </div>
                  </div>

                  {/* 2. CENTRO: Título Vertical (Apenas quando FECHADO) */}
                  {!isActive && (
                    <div className="hidden lg:flex flex-1 items-center justify-center relative overflow-hidden">
                      {/* Texto Vertical */}
                      <div className="rotate-90 origin-center absolute whitespace-nowrap">
                        <h3 className="text-3xl font-bold text-foreground/60 tracking-tight group-hover:text-foreground transition-colors duration-300">
                          {service.title}
                        </h3>
                      </div>
                    </div>
                  )}

                  {/* 3. CENTRO: Conteúdo Expandido (Apenas quando ABERTO) */}
                  <div className={`flex-1 flex flex-col mt-6 transition-all duration-500 ${isActive ? 'opacity-100 translate-y-0 relative' : 'opacity-0 translate-y-4 absolute pointer-events-none'}`}>
                    
                    <p className="text-foreground/80 text-lg mb-8 leading-relaxed max-w-lg font-medium">
                      {service.description}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-auto w-full">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-3 text-sm font-semibold text-foreground group/item p-2 rounded-lg hover:bg-secondary/50 transition-colors">
                          <div className={`p-1.5 rounded-full bg-background border border-border group-hover/item:scale-110 transition-transform shadow-sm`}>
                            <feature.icon className={`w-4 h-4 ${service.color}`} />
                          </div>
                          {feature.text}
                        </div>
                      ))}
                    </div>

                    <div className="pt-6 mt-4 border-t border-border w-full">
                      <Button 
                        className={`w-full sm:w-auto h-14 px-8 text-lg font-bold shadow-lg hover:scale-[1.02] transition-all text-white border-0 ${service.bgIcon}`}
                        onClick={(e) => {
                          e.stopPropagation();
                          document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' });
                        }}
                      >
                        Solicitar Cotação
                        <ArrowRight className="ml-2 w-5 h-5" />
                      </Button>
                    </div>
                  </div>

                  {/* 4. RODAPÉ: Indicador "Clique para ver" (Apenas quando FECHADO) */}
                  {!isActive && (
                    <div className="hidden lg:flex shrink-0 items-center justify-center pt-4 opacity-70 group-hover:opacity-100 transition-opacity">
                      <div className={`flex flex-col items-center gap-2 ${service.color} animate-pulse`}>
                        <span className="text-[10px] font-bold uppercase tracking-widest">Clique para ver</span>
                        <div className={`p-2 rounded-full border border-current bg-white/10`}>
                           <MousePointerClick className="w-5 h-5" />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Seta Mobile (Sempre visível se fechado) */}
                  {!isActive && (
                    <div className="lg:hidden absolute right-6 top-1/2 -translate-y-1/2 bg-background/50 p-2 rounded-full border border-border">
                      <ArrowRight className="w-5 h-5 text-foreground" />
                    </div>
                  )}

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Services;

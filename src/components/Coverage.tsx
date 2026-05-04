import { useState } from "react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Button } from "@/components/ui/button";
import { 
  Shield, Users, Lightbulb, Play, CheckCircle2, ArrowRight 
} from "lucide-react";

import bgImage from "@/assets/coverage-bg.jpg"; 

const Coverage = () => {
  const { ref, isVisible } = useScrollReveal();
  const [activeTab, setActiveTab] = useState(0);

  const coverages = [
    {
      id: 0,
      title: "Responsabilidade Civil Eventos",
      subtitle: "Proteção Financeira",
      icon: Shield,
      color: "text-cyan",
      bg: "bg-cyan",
      border: "border-cyan",
      // Sombra mais forte no modo claro (shadow-lg) e colorida no escuro
      shadow: "shadow-lg shadow-cyan/10 dark:shadow-cyan/25",
      gradient: "from-cyan/10 to-transparent",
      details: [
        "RC Organizador",
        "RC Instalação e Montagem",
        "RC Cruzada",
        "RC Artistas",
        "RC Fornecimento de Alimentos e Bebidas",
        "RC Imóvel",
        "RC Empregador",
        "Lucros Cessantes",
        "Danos Morais"
      ],
      description: "Proteção financeira para o organizador contra reclamações de terceiros."
    },
    {
      id: 1,
      title: "Acidentes Pessoais",
      subtitle: "Proteção para Vidas",
      icon: Users,
      color: "text-green-600 dark:text-green-500",
      bg: "bg-green-600 dark:bg-green-500",
      border: "border-green-600 dark:border-green-500",
      shadow: "shadow-lg shadow-green-600/10 dark:shadow-green-500/25",
      gradient: "from-green-500/10 to-transparent",
      details: [
        "Morte Acidental",
        "Invalidez Permanente e/ou Parcial por Acidente",
        "Despesas Médicas Hospitalares e Odontológicas"
      ],
      description: "Proteção para as vidas envolvidas no evento."
    },
    {
      id: 2,
      title: "Riscos Diversos",
      subtitle: "Danos Materiais",
      icon: Lightbulb,
      color: "text-yellow-600 dark:text-yellow-500",
      bg: "bg-yellow-600 dark:bg-yellow-500",
      border: "border-yellow-600 dark:border-yellow-500",
      shadow: "shadow-lg shadow-yellow-600/10 dark:shadow-yellow-500/25",
      gradient: "from-yellow-500/10 to-transparent",
      details: [
        "Equipamentos para Realização do Evento",
        "Marquises Temporárias",
        "Cenografia e Decoração",
        "Equipamentos em Exposição"
      ],
      description: "Proteção contra danos materiais para itens alugados para realização do evento."
    }
  ];

  const activeContent = coverages[activeTab];

  return (
    <section 
      id="cobertura" 
      className="h-screen min-h-[700px] flex flex-col justify-center relative overflow-hidden bg-gray-50 dark:bg-background pt-24 pb-8 transition-colors duration-500" 
      ref={ref}
    >
      {/* 1. FUNDO GERAL */}
      <div className="absolute inset-0 z-0">
        <img 
          src={bgImage} 
          alt="Background Texture" 
          className="w-full h-full object-cover opacity-5 dark:opacity-20 mix-blend-multiply dark:mix-blend-normal blur-sm transition-all duration-1000"
        />
        {/* Gradiente ajustado para tema claro (branco) e escuro (preto) */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/80 to-white/40 dark:from-background dark:via-background/80 dark:to-background/30" />
      </div>

      <div className="container px-4 md:px-6 relative z-10 h-full flex flex-col justify-center">
        
        {/* HEADER */}
        <div className={`text-left mb-6 shrink-0 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex items-center gap-4 mb-2 pl-1">
            <div className="h-px w-10 bg-cyan-600 dark:bg-cyan/50"></div>
            <span className="text-xs font-bold uppercase tracking-widest text-cyan-700 dark:text-cyan">Cobertura Técnica</span>
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-bold leading-tight max-w-2xl text-gray-900 dark:text-white">
            Proteção detalhada.
          </h2>
        </div>

        {/* LAYOUT SPLIT */}
        <div className={`flex flex-col lg:flex-row gap-6 lg:gap-12 w-full h-[60vh] max-h-[600px] min-h-[500px] transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          
          {/* ESQUERDA: MENU DE NAVEGAÇÃO */}
          <div className="lg:w-1/3 flex flex-col gap-3 h-full overflow-y-auto pr-2 scrollbar-hide">
            {coverages.map((item, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`
                  group flex items-center gap-4 px-5 py-3 rounded-2xl text-left transition-all duration-300 border relative overflow-hidden flex-1
                  
                  ${activeTab === index 
                    /* ESTADO ATIVO: Fundo branco sólido no claro (shadow forte) / Fundo preto translúcido no escuro */
                    ? `bg-white dark:bg-black/60 border-gray-200 dark:border-transparent shadow-lg ${item.shadow} scale-[1.02] z-10` 
                    
                    /* ESTADO INATIVO: Fundo transparente com borda visível no claro */
                    : `bg-white/40 dark:bg-white/5 
                       border-gray-300/50 dark:border-white/5 
                       hover:bg-white dark:hover:bg-white/10 
                       opacity-80 hover:opacity-100 hover:scale-[1.01] hover:shadow-md`
                  }
                `}
              >
                {/* Indicador lateral colorido */}
                {activeTab === index && (
                  <div className={`absolute left-0 top-0 bottom-0 w-1.5 ${item.bg}`} />
                )}

                <div className={`
                  p-2 rounded-xl transition-all duration-300 shadow-sm shrink-0
                  ${activeTab === index 
                    ? `${item.bg} text-white` 
                    : `bg-gray-100 dark:bg-black/20 text-gray-500 dark:text-muted-foreground group-hover:text-gray-900 dark:group-hover:text-foreground`
                  }
                `}>
                  <item.icon className="w-5 h-5" />
                </div>
                
                <div className="flex-1 min-w-0">
                  <h3 className={`font-bold text-sm md:text-base leading-tight truncate transition-colors ${
                    activeTab === index 
                      ? 'text-gray-900 dark:text-foreground' 
                      : 'text-gray-600 dark:text-muted-foreground group-hover:text-gray-900 dark:group-hover:text-foreground'
                  }`}>
                    {item.title}
                  </h3>
                  <p className="text-[10px] uppercase tracking-wider opacity-70 mt-0.5 font-semibold truncate text-gray-500 dark:text-muted-foreground">
                    {item.subtitle}
                  </p>
                </div>

                {activeTab === index && (
                  <Play className={`w-3 h-3 ${item.color} fill-current animate-pulse ml-2`} />
                )}
              </button>
            ))}
          </div>

          {/* DIREITA: CARD DE DETALHES */}
          <div className="lg:w-2/3 h-full relative group perspective-1000">
            
            <div className={`absolute inset-0 bg-gradient-to-br ${activeContent.gradient} opacity-20 blur-3xl transition-all duration-700`} />

            {/* CARD PRINCIPAL - Fundo Branco Sólido no Claro */}
            <div className={`
              relative h-full w-full rounded-[2rem] flex flex-col transition-all duration-500
              p-6 md:p-8 
              bg-white/90 dark:bg-black/60 backdrop-blur-xl 
              border border-gray-200/60 dark:border-white/10 
              shadow-2xl ${activeContent.shadow}
            `}>
              
              <activeContent.icon className={`absolute top-6 right-6 w-32 h-32 opacity-[0.04] ${activeContent.color} rotate-12 transition-transform duration-700 key={activeContent.id}`} />

              {/* Título e Descrição */}
              <div className="mb-4 animate-fade-in key={activeContent.id} relative z-10 shrink-0">
                <div className={`inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-gray-50 dark:bg-black/20 border border-gray-200 dark:border-white/10 w-fit mb-3 ${activeContent.color}`}>
                  <activeContent.icon className="w-3.5 h-3.5" />
                  <span className="text-[10px] font-bold uppercase tracking-wider">{activeContent.subtitle}</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-foreground mb-2 leading-tight">
                  {activeContent.title}
                </h3>
                <p className="text-sm md:text-base text-gray-600 dark:text-muted-foreground leading-relaxed max-w-xl font-medium">
                  {activeContent.description}
                </p>
              </div>

              {/* Lista Técnica (Grid) */}
              <div className="flex-1 relative z-10 mb-2 min-h-0 flex flex-col justify-center"> 
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 w-full">
                  {activeContent.details.map((detail, idx) => (
                    <div 
                      key={`${activeContent.id}-${idx}`}
                      className="flex items-center gap-2.5 p-3 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/5 animate-fade-in hover:bg-gray-100 dark:hover:bg-white/10 transition-colors shadow-sm"
                      style={{ animationDelay: `${idx * 50}ms` }}
                    >
                      <CheckCircle2 className={`w-4 h-4 shrink-0 ${activeContent.color}`} />
                      <span className="text-xs md:text-sm font-semibold text-gray-800 dark:text-foreground/90 leading-tight">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Footer */}
              <div className="pt-4 border-t border-gray-100 dark:border-white/10 shrink-0 flex items-center justify-between gap-4 relative z-10">
                <span className="text-[10px] font-bold text-gray-400 dark:text-muted-foreground uppercase tracking-widest hidden sm:block">
                  Conformidade total com a SUSEP
                </span>
                <Button 
                  size="sm"
                  className={`px-6 h-10 text-sm font-bold shadow-lg transition-all hover:scale-105 text-white border-0 ${activeContent.bg}`}
                  onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Solicitar Cotação
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Coverage;

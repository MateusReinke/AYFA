import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Star, Trophy, Users, Globe, type LucideIcon } from "lucide-react";
import bgImage from "@/assets/coverage-bg.jpg"; 

const Portfolio = () => {
  const { ref, isVisible } = useScrollReveal();

  const majorEvents = [
    "Rock In Rio", "Lollapalooza Brasil", "Comic Con Experience", "Fórmula 1 Rolex", 
    "Oktoberfest SP", "FIFA Fan Fest", "Cirque du Soleil", "Camarote Brahma", 
    "Baile da Vogue", "Skol Sensation", "Shell Open Air", "São Paulo Fashion Week"
  ];

  const corporateEvents = [
    "Google For Education", "Mercedes-Benz Convenção", "Salesforce World Tour", 
    "Nissan Champions League", "Coca-Cola Natal", "Jeep Salão do Automóvel", 
    "Nike na Paulista", "Volvo Launch", "Dior Joy", "Heineken UEFA", "Santander"
  ];

  const agencies = [
    "Bullet", "Banco de Eventos", "Agência Tudo", "Aktuellmix", 
    "Innova AATB", "TracyLocke", "BFerraz", "Hands", "SRCOM", 
    "Dream Factory", "Marketing Vision", "Hold", "Attach Live"
  ];

  const renderMarqueeItems = (items: string[], Icon: LucideIcon, colorClass: string, iconColor: string) => {
    const repeatedItems = Array(6).fill(items).flat();
    return repeatedItems.map((item, i) => (
      <div key={i} className="flex items-center gap-3 px-6 py-3 rounded-full bg-white/60 dark:bg-black/40 border border-white/40 dark:border-white/10 backdrop-blur-md shadow-lg shrink-0">
        <Icon className={`w-4 h-4 ${iconColor}`} />
        <span className="text-lg font-bold text-foreground whitespace-nowrap">{item}</span>
      </div>
    ));
  };

  return (
    <section 
      id="portfolio" 
      className="min-h-[700px] flex flex-col justify-center relative overflow-hidden bg-background py-20" 
      ref={ref}
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0 z-0">
        <img 
          src={bgImage} 
          alt="Background Texture" 
          className="w-full h-full object-cover opacity-10 dark:opacity-5 mix-blend-multiply blur-sm"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-background/80 to-background" />
      </div>

      <div className="relative z-10 w-full flex flex-col justify-center h-full">
        
        {/* HEADER */}
        <div className="container px-4 mx-auto">
          <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-4">
              <Trophy className="w-4 h-4 text-yellow-500" />
              <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Nosso Portfólio</span>
            </div>
            <h2 className="font-display text-4xl md:text-6xl font-bold mb-4">
              Presente nos <span className="text-gradient">maiores eventos</span> do Brasil.
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Nossa expertise é validada pelos maiores players do mercado de entretenimento e corporativo.
            </p>
          </div>
        </div>

        {/* --- MARQUEE SECTIONS --- */}
        <div className="w-full flex flex-col gap-10 overflow-hidden fade-mask">
          
          {/* LINHA 1 */}
          <div className="w-full transform -rotate-1 hover:rotate-0 transition-transform duration-700">
            <div className="flex w-full overflow-hidden group">
              <div className="flex gap-6 animate-marquee w-max py-2">
                {renderMarqueeItems(majorEvents, Star, "text-foreground", "text-cyan fill-cyan")}
              </div>
            </div>
          </div>

          {/* LINHA 2 */}
          <div className="w-full transform rotate-1 hover:rotate-0 transition-transform duration-700">
            <div className="flex w-full overflow-hidden group">
              <div className="flex gap-6 animate-marquee-reverse w-max py-2">
                {renderMarqueeItems(corporateEvents, Globe, "text-foreground", "text-purple-500")}
              </div>
            </div>
          </div>

          {/* LINHA 3 */}
          <div className="w-full transform -rotate-1 hover:rotate-0 transition-transform duration-700">
            <div className="flex w-full overflow-hidden group">
              <div className="flex gap-6 animate-marquee w-max py-2">
                 {Array(6).fill(agencies).flat().map((item, i) => (
                  <div key={i} className="flex items-center gap-2 px-5 py-2 rounded-lg bg-white/30 dark:bg-white/5 border border-white/20 dark:border-white/5 backdrop-blur-sm grayscale hover:grayscale-0 transition-all shrink-0">
                    <Users className="w-4 h-4 text-muted-foreground" />
                    <span className="text-base font-semibold text-muted-foreground group-hover:text-foreground transition-colors whitespace-nowrap">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>

      <style>{`
        .fade-mask {
          mask-image: linear-gradient(to right, transparent, black 5%, black 95%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 5%, black 95%, transparent);
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-reverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-marquee {
          animation: marquee 120s linear infinite;
          padding-left: 24px;
        }
        .animate-marquee-reverse {
          animation: marquee-reverse 120s linear infinite;
          padding-left: 24px;
        }
        .group:hover .animate-marquee,
        .group:hover .animate-marquee-reverse {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default Portfolio;
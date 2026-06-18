import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import bgImage from "@/assets/coverage-bg.jpg"; 

// Importa automaticamente todas as imagens da pasta clients
const clientModules = import.meta.glob<{ default: string }>([
  '/src/assets/clients/*.png',
  '/src/assets/clients/*.jpg',
  '/src/assets/clients/*.jpeg',
  '/src/assets/clients/*.svg',
  '/src/assets/clients/*.webp',
  '/src/assets/clients/*.avif'
], { eager: true });

const clientImages = Object.entries(clientModules)
  .filter(([path]) => !path.includes('.gitkeep'))
  .map(([path, module]) => ({
    src: module.default,
    name: path.split('/').pop()?.replace(/\.[^/.]+$/, '') || 'client'
  }));


const getLogoPresentationClass = (name: string) => {
  const normalizedName = name.toLowerCase();

  if (normalizedName.includes('casulo')) {
    return 'scale-[2.45]';
  }

  if (normalizedName.includes('plenum')) {
    return 'scale-[2.15]';
  }

  if (normalizedName.includes('ydgl') || normalizedName.includes('ydream')) {
    return 'scale-[1.35]';
  }

  return 'scale-110';
};

const Clients = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section 
      id="clientes" 
      className="py-16 md:py-24 lg:py-28 relative overflow-hidden bg-background" 
      ref={ref}
    >
      {/* BACKGROUND SUTIL */}
      <div className="absolute inset-0 z-0">
        <img 
          src={bgImage} 
          alt="Background Texture" 
          className="w-full h-full object-cover opacity-5 dark:opacity-[0.02] grayscale blur-sm"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background" />
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        
        {/* HEADER */}
        <div className={`text-center mb-12 md:mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full bg-secondary/50 border border-border/50 backdrop-blur-sm">
            <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Confiança</span>
          </div>
          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold mb-6">
            Quem confia na <span className="text-gradient">Ayfa Seguros</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Parceiros que buscam excelência, segurança e atendimento personalizado.
          </p>
        </div>

        {/* GRID DE LOGOS */}
        {clientImages.length > 0 ? (
          <div 
            className={`grid grid-cols-1 min-[420px]:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 md:gap-6 lg:gap-8 items-stretch transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            {clientImages.map((logo, index) => (
              <div 
                key={index}
                className="group relative flex min-h-32 w-full items-center justify-center overflow-hidden rounded-2xl border border-border/70 bg-white/95 px-6 py-8 shadow-sm backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:scale-[1.02] hover:border-primary/30 hover:bg-card hover:shadow-elegant dark:bg-card/90 cursor-default"
              >
                {/* TRUQUE DE CSS PARA LOGOS PERFEITOS:
                   1. opacity-60: Deixa o logo sutil inicialmente.
                   2. grayscale: Remove cores (fica preto/cinza no tema claro).
                   3. dark:brightness-0 dark:invert: No tema escuro, transforma PRETO em BRANCO puro.
                   4. hover: Recupera a cor original (opcional) ou aumenta a opacidade.
                */}
                <img 
                  src={logo.src} 
                  alt={logo.name}
                  className={`
                    h-24 max-h-28 w-full object-contain relative z-10 sm:h-28 md:h-32
                    transition-all duration-300
                    ${getLogoPresentationClass(logo.name)}
                    
                    /* ESTADO NORMAL (TEMA CLARO): força contraste para logos claros e com baixa leitura. */
                    opacity-80 grayscale brightness-0
                    
                    /* ESTADO NORMAL (TEMA ESCURO): mantém o logo claro no fundo escuro. */
                    dark:brightness-0 dark:invert

                    /* HOVER: Recupera a marca original quando houver interação. */
                    group-hover:opacity-100
                    group-hover:grayscale-0
                    group-hover:brightness-100
                    group-hover:dark:invert-0 group-hover:dark:brightness-100
                  `}
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-12 border-2 border-dashed border-border rounded-xl bg-secondary/20">
            <p className="text-center text-muted-foreground">
              Adicione os logotipos dos clientes na pasta <code className="text-primary font-bold">src/assets/clients/</code>
            </p>
          </div>
        )}

      </div>
    </section>
  );
};

export default Clients;
import { useEffect, useState } from "react";
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
]);

const Clients = () => {
  const { ref, isVisible } = useScrollReveal();
  const [clientImages, setClientImages] = useState<{ src: string; name: string }[]>([]);

  useEffect(() => {
    if (!isVisible || clientImages.length > 0) return;

    let isCancelled = false;

    const loadClientImages = async () => {
      const logos = await Promise.all(
        Object.entries(clientModules)
          .filter(([path]) => !path.includes(".gitkeep"))
          .map(async ([path, importer]) => {
            const module = await importer();
            return {
              src: module.default,
              name: path.split("/").pop()?.replace(/\.[^/.]+$/, "") || "client",
            };
          })
      );

      if (!isCancelled) {
        setClientImages(logos);
      }
    };

    loadClientImages();

    return () => {
      isCancelled = true;
    };
  }, [clientImages.length, isVisible]);

  return (
    <section 
      id="clientes" 
      className="py-20 md:py-32 relative overflow-hidden bg-background" 
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
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
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
            className={`flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-16 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            {clientImages.map((logo, index) => (
              <div 
                key={index}
                className="group relative px-5 py-4 rounded-xl border border-border/70 bg-card/75 dark:bg-card/40 shadow-sm flex items-center justify-center transition-all duration-500 hover:scale-105 hover:shadow-md cursor-default"
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
                  loading="lazy"
                  decoding="async"
                  className={`
                    h-10 sm:h-12 md:h-14 lg:h-16 w-auto object-contain relative z-10 
                    transition-all duration-300
                    
                    /* ESTADO NORMAL (TEMA CLARO) */
                    opacity-85 grayscale-[0.35] contrast-125 brightness-90
                    
                    /* ESTADO NORMAL (TEMA ESCURO - A MÁGICA ACONTECE AQUI) */
                    dark:grayscale-[0.2] dark:contrast-125 dark:brightness-110

                    /* HOVER (Recupera visibilidade total) */
                    group-hover:opacity-100 
                    group-hover:grayscale-0 
                    group-hover:contrast-100 group-hover:brightness-100
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

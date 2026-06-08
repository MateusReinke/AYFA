import logo from "@/assets/ayfa-logo.png";

const Footer = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-card border-t border-border py-12 md:py-16 lg:py-20">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 lg:gap-16 mb-8 md:mb-12">
          <div className="sm:col-span-2 md:col-span-1">
            <div className="flex items-center mb-4 md:mb-6">
              <img src={logo} alt="Ayfa Seguros" className="h-8 md:h-10 lg:h-12" />
            </div>
            <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
              Especialistas em seguros para eventos, garantindo proteção e tranquilidade para organizadores há mais de 15 anos.
            </p>
          </div>

          <div>
            <h3 className="font-display text-lg md:text-xl lg:text-2xl font-bold mb-4 md:mb-6 text-card-foreground">Serviços</h3>
            <ul className="space-y-2 md:space-y-3 text-muted-foreground text-sm md:text-base">
              <li className="hover:text-primary transition-colors cursor-pointer" onClick={() => scrollToSection("servicos")}>Seguros de Eventos</li>
              <li className="hover:text-cyan transition-colors cursor-pointer" onClick={() => scrollToSection("servicos")}>Responsabilidade Civil</li>
              <li className="hover:text-purple transition-colors cursor-pointer" onClick={() => scrollToSection("servicos")}>Acidentes Pessoais</li>
              <li className="hover:text-accent transition-colors cursor-pointer" onClick={() => scrollToSection("diferenciais")}>Consultoria Especializada</li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-lg md:text-xl lg:text-2xl font-bold mb-4 md:mb-6 text-card-foreground">Contato</h3>
            <ul className="space-y-2 md:space-y-3 text-muted-foreground text-sm md:text-base">
              <li>
                <a href="mailto:atendimento@ayfa.com.br" className="hover:text-primary transition-colors">
                  atendimento@ayfa.com.br
                </a>
              </li>
              <li>
                <a href="tel:+551130681200" className="hover:text-accent transition-colors font-semibold text-lg md:text-xl text-card-foreground">
                  (11) 3068-1200
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-6 md:pt-8 text-center text-muted-foreground">
          <p className="text-xs md:text-sm lg:text-base">&copy; {new Date().getFullYear()} Ayfa Seguros. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
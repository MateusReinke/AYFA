import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import logo from "@/assets/ayfa-logo.png";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  const navItems = [
    { label: "Início", id: "hero" },
    { label: "Quem Somos", id: "quem-somos" },
    { label: "Serviços", id: "servicos" },
    { label: "Clientes", id: "clientes" }, 
    { label: "Contato", id: "contato" },
  ];

  return (
    <nav
      className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "border-b border-white/60 bg-white/82 shadow-[0_10px_30px_rgba(15,23,42,.08)] backdrop-blur-xl dark:border-white/10 dark:bg-background/82"
          : "border-b border-transparent bg-white/55 backdrop-blur-md dark:bg-background/55"
      }`}
    >
      <div className="container px-4 md:px-6 mx-auto max-w-7xl">
        {/* CORREÇÃO: Adicionado 'gap-4 lg:gap-8' para evitar que os menus colem no centro */}
        <div className="flex items-center justify-between h-16 md:h-20 lg:h-24 gap-4 lg:gap-4">
          
          {/* LADO ESQUERDO */}
          <div className="hidden lg:flex items-center gap-4 xl:gap-6 flex-1 justify-end">
            {navItems.slice(0, 3).map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-xs xl:text-sm font-semibold transition-all hover:text-primary uppercase tracking-wide relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-primary after:transition-all ${
                  isScrolled 
                    ? "text-foreground" 
                    : "text-foreground dark:text-white hover:text-primary"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* LOGO CENTRAL */}
          <div 
            className={`hidden lg:flex items-center justify-center transition-all duration-500 overflow-hidden ${
              isScrolled 
                ? "max-w-[260px] opacity-100 scale-100 px-5" 
                : "max-w-0 opacity-0 scale-75 px-0"
            }`}
          >
            <img 
              src={logo} 
              alt="Ayfa Seguros" 
              className="h-14 xl:h-16 cursor-pointer drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]" 
              onClick={() => scrollToSection("hero")}
            />
          </div>

          {/* LADO DIREITO */}
          <div className="hidden lg:flex items-center gap-4 xl:gap-6 flex-1 justify-start">
            {navItems.slice(3).map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-xs xl:text-sm font-semibold transition-all hover:text-primary uppercase tracking-wide relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-primary after:transition-all ${
                  isScrolled 
                    ? "text-foreground hover:text-primary" 
                    : "text-foreground dark:text-white hover:text-primary"
                }`}
              >
                {item.label}
              </button>
            ))}
            
            <div className="flex items-center gap-4 ml-auto">
              <ThemeToggle 
                className={isScrolled ? "" : "text-foreground dark:text-white hover:bg-black/5 dark:hover:bg-white/10"} 
              />
              <Button
                onClick={() => scrollToSection("contato")}
                className="h-12 rounded-[14px] bg-gradient-to-r from-primary to-accent px-5 text-xs font-bold text-white shadow-[0_12px_26px_rgba(37,99,235,.22)] transition-all duration-300 hover:scale-[1.02] hover:-translate-y-0.5 hover:shadow-[0_16px_34px_rgba(37,99,235,.30)] xl:text-sm"
                size="sm"
              >
                Cotação
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="lg:hidden flex items-center justify-between w-full">
            <div 
              className={`transition-all duration-500 ${
                isScrolled 
                  ? "opacity-100 scale-100" 
                  : "opacity-0 scale-75"
              }`}
            >
              <img 
                src={logo} 
                alt="Ayfa Seguros" 
                className="h-11 cursor-pointer" 
                onClick={() => scrollToSection("hero")}
              />
            </div>
            
            <div className="flex items-center gap-2">
              <ThemeToggle className={`${isScrolled ? "" : "text-foreground dark:text-white hover:bg-black/5 dark:hover:bg-white/10"} h-9 w-9`} />
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className={`${isScrolled ? "" : "text-foreground dark:text-white hover:text-primary"} h-9 w-9`}>
                    <Menu className="h-5 w-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[280px] sm:w-[320px]">
                  <div className="flex flex-col gap-2 mt-6">
                    {navItems.map((item) => (
                      <button
                        key={item.id}
                        onClick={() => scrollToSection(item.id)}
                        className="text-left text-base font-medium text-foreground hover:text-primary hover:bg-muted transition-colors py-3 px-3 rounded-lg"
                      >
                        {item.label}
                      </button>
                    ))}
                    <Button
                      onClick={() => scrollToSection("contato")}
                      className="mt-4 h-12 w-full rounded-[14px] bg-gradient-to-r from-primary to-accent font-semibold text-white transition-all duration-300 hover:scale-[1.02]"
                    >
                      Solicitar Cotação
                    </Button>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
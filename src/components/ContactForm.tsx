import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const ContactForm = () => {
  const { toast } = useToast();
  const { ref, isVisible } = useScrollReveal();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const subject = encodeURIComponent(`Solicitação de Cotação - ${formData.eventType}`);
    const body = encodeURIComponent(
      `Nome: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Telefone: ${formData.phone}\n` +
      `Tipo de Evento: ${formData.eventType}\n\n` +
      `Mensagem:\n${formData.message}`
    );
    
    window.location.href = `mailto:atendimento@ayfa.com.br?subject=${subject}&body=${body}`;
    
    toast({
      title: "Formulário enviado!",
      description: "Entraremos em contato em breve.",
    });

    setFormData({
      name: "",
      email: "",
      phone: "",
      eventType: "",
      message: ""
    });
  };

  return (
    <section id="contato" className="py-[50px] md:py-[70px] lg:py-[100px] bg-muted relative overflow-hidden" ref={ref}>
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-48 md:w-96 h-48 md:h-96 bg-cyan rounded-full blur-3xl" style={{ opacity: 0.05 }} />
      <div className="absolute bottom-0 left-0 w-40 md:w-80 h-40 md:h-80 bg-purple rounded-full blur-3xl" style={{ opacity: 0.05 }} />
      
      <div className="container px-4 md:px-6 relative z-10">
        <div className={`text-center mb-12 md:mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">
            <span className="text-gradient">Solicite sua Cotação</span>
          </h2>
          <p className="text-base md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-2">
            Preencha o formulário e nossa equipe entrará em contato em até 6 horas
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10 lg:gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className={`premium-card border border-border bg-card transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="h-1.5 bg-gradient-to-r from-cyan via-purple to-magenta rounded-t-lg" />
            <CardHeader className="pb-4 md:pb-6 p-4 md:p-6">
              <CardTitle className="font-display text-xl md:text-2xl lg:text-3xl font-bold text-card-foreground">Envie sua Mensagem</CardTitle>
            </CardHeader>
            <CardContent className="p-4 md:p-6 pt-0">
              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                <div>
                  <Input
                    placeholder="Seu Nome *"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="border-border bg-background h-12 md:h-14 text-sm md:text-base focus:border-primary focus:ring-primary"
                  />
                </div>
                
                <div>
                  <Input
                    type="email"
                    placeholder="Seu Email *"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="border-border bg-background h-12 md:h-14 text-sm md:text-base focus:border-primary focus:ring-primary"
                  />
                </div>
                
                <div>
                  <Input
                    type="tel"
                    placeholder="Seu Telefone *"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                    className="border-border bg-background h-12 md:h-14 text-sm md:text-base focus:border-primary focus:ring-primary"
                  />
                </div>
                
                <div>
                  <Input
                    placeholder="Tipo de Evento *"
                    value={formData.eventType}
                    onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                    required
                    className="border-border bg-background h-12 md:h-14 text-sm md:text-base focus:border-primary focus:ring-primary"
                  />
                </div>
                
                <div>
                  <Textarea
                    placeholder="Conte-nos mais sobre seu evento *"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    className="min-h-[120px] md:min-h-[160px] border-border bg-background text-sm md:text-base focus:border-primary focus:ring-primary"
                  />
                </div>
                
                <Button
                  type="submit"
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground h-12 md:h-14 text-base md:text-lg font-semibold shadow-glow hover:scale-105 transition-all duration-300"
                  size="lg"
                >
                  Enviar Solicitação
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className={`space-y-4 md:space-y-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`} style={{ transitionDelay: '200ms' }}>
            <Card className="premium-card border border-border bg-card overflow-hidden">
              <div className="h-1 bg-cyan" />
              <CardContent className="p-5 md:pt-8 md:pb-8 md:px-6">
                <div className="flex items-start gap-4 md:gap-6">
                  <div className="w-12 md:w-16 h-12 md:h-16 rounded-xl md:rounded-2xl bg-cyan flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 md:w-8 h-6 md:h-8 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-bold text-card-foreground mb-2 md:mb-4 text-lg md:text-xl">Email</h3>
                    <p className="text-muted-foreground mb-1 md:mb-2 text-sm md:text-base font-medium">Contatos Gerais:</p>
                    <a href="mailto:atendimento@ayfa.com.br" className="text-cyan hover:text-primary transition-colors text-base md:text-lg font-semibold">
                      atendimento@ayfa.com.br
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="premium-card border border-border bg-card overflow-hidden">
              <div className="h-1 bg-accent" />
              <CardContent className="p-5 md:pt-8 md:pb-8 md:px-6">
                <div className="flex items-start gap-4 md:gap-6">
                  <div className="w-12 md:w-16 h-12 md:h-16 rounded-xl md:rounded-2xl bg-accent flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 md:w-8 h-6 md:h-8 text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="font-bold text-card-foreground mb-2 md:mb-4 text-lg md:text-xl">Telefones</h3>
                    <a href="tel:+551130681200" className="text-accent hover:text-primary transition-colors text-xl md:text-2xl font-bold block mb-2 md:mb-3">
                      (11) 3068-1200
                    </a>
                    <div className="space-y-3 text-muted-foreground text-sm md:text-base font-medium leading-relaxed">
                      <a href="https://wa.me/5511972761165" target="_blank" rel="noopener noreferrer" className="flex items-start gap-2 hover:text-[#25D366] transition-colors">
                        <MessageCircle className="mt-0.5 h-4 w-4 flex-shrink-0" />
                        <span>WhatsApp Auto/Empresarial: <strong className="text-card-foreground">(11) 97276-1165</strong></span>
                      </a>
                      <a href="https://wa.me/5511972869455" target="_blank" rel="noopener noreferrer" className="flex items-start gap-2 hover:text-[#25D366] transition-colors">
                        <MessageCircle className="mt-0.5 h-4 w-4 flex-shrink-0" />
                        <span>WhatsApp Eventos: <strong className="text-card-foreground">(11) 97286-9455</strong></span>
                      </a>
                      <a href="https://wa.me/551143441814" target="_blank" rel="noopener noreferrer" className="flex items-start gap-2 hover:text-[#25D366] transition-colors">
                        <MessageCircle className="mt-0.5 h-4 w-4 flex-shrink-0" />
                        <span>WhatsApp Benefícios: <strong className="text-card-foreground">(11) 4344-1814</strong></span>
                      </a>
                      <p className="pt-2">Segunda a Sexta<br />das 9h às 18h</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="premium-card border border-border bg-card overflow-hidden">
              <div className="h-1 bg-purple" />
              <CardContent className="p-5 md:pt-8 md:pb-8 md:px-6">
                <div className="flex items-start gap-4 md:gap-6">
                  <div className="w-12 md:w-16 h-12 md:h-16 rounded-xl md:rounded-2xl bg-purple flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 md:w-8 h-6 md:h-8 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-bold text-card-foreground mb-2 md:mb-4 text-lg md:text-xl">Localização</h3>
                    <p className="text-muted-foreground text-sm md:text-base font-medium leading-relaxed">
                      R. Teixeira da Silva, 660 – CJ 71<br />
                      Paraíso / SP
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
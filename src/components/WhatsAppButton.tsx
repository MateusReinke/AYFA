import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhatsAppButton = () => {
  const phoneNumber = "5511972869455"; // WhatsApp Eventos: country code + number without spaces
  const message = encodeURIComponent("Olá! Gostaria de solicitar uma cotação para seguro de eventos.");

  return (
    <Button
      onClick={() => window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank")}
      className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full bg-[#25D366] hover:bg-[#20BA5A] shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 p-0"
      aria-label="Contato via WhatsApp"
    >
      <MessageCircle className="h-6 w-6 text-white" />
    </Button>
  );
};

export default WhatsAppButton;

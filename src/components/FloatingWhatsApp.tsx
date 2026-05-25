import { FaWhatsapp } from "react-icons/fa";
import { waLink } from "@/lib/whatsapp";

export default function FloatingWhatsApp() {
  return (
    <a
      href={waLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 left-5 z-50 group"
    >
      <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-full bg-foreground text-background text-xs font-medium px-3 py-1.5 opacity-0 group-hover:opacity-100 transition-opacity shadow-card hidden sm:block">
        Chat with us
      </span>
      <span className="grid place-items-center size-14 rounded-full bg-whatsapp text-whatsapp-foreground shadow-elegant animate-float-pulse">
        <FaWhatsapp className="size-7" />
      </span>
    </a>
  );
}

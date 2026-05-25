import { Phone, Zap } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { waLink, PHONE_TEL, PHONE_DISPLAY, BRAND } from "@/lib/whatsapp";

export default function EmergencyBanner() {
  return (
    <section className="container mx-auto px-4">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-emergency p-6 sm:p-10 text-white shadow-elegant">
        <div className="absolute -right-10 -top-10 size-48 rounded-full bg-white/15 blur-2xl" />
        <div className="absolute -left-10 -bottom-16 size-56 rounded-full bg-white/10 blur-2xl" />
        <div className="relative flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          <div className="flex items-start gap-4">
            <span className="grid place-items-center size-12 rounded-2xl bg-white/20 backdrop-blur">
              <Zap className="size-6" />
            </span>
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold">24/7 Emergency AC Service</h3>
              <p className="mt-1 text-white/90 max-w-xl">
                AC not cooling? Water leaking? Strange noise? Our technician reaches you in under 60 minutes.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button asChild size="lg" className="bg-white text-foreground hover:bg-white/90">
              <a href={`tel:${PHONE_TEL}`}>
                <Phone className="size-4" /> Call {PHONE_DISPLAY}
              </a>
            </Button>
            <Button asChild size="lg" className="bg-whatsapp text-whatsapp-foreground hover:opacity-90">
              <a href={waLink(`Hi ${BRAND}, I have an AC emergency. Please send a technician.`)}>
                <FaWhatsapp className="size-5" /> WhatsApp Us
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

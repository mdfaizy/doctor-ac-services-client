import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ShieldCheck, Clock, BadgeCheck, Star } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import heroImg from "@/assets/hero-ac-technician.jpg";
import { waLink } from "@/lib/whatsapp";


export default function Hero() {
  
  return (
    <section className="relative overflow-hidden pt-24 lg:pt-2">
      <div className="absolute inset-0 -z-10 bg-gradient-hero opacity-95" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,oklch(1_0_0/0.25),transparent_60%)]" />

      <div className="container mx-auto grid gap-10 px-4 py-1 lg:grid-cols-2 lg:gap-12 lg:py-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-primary-foreground"
        >
          <span className="inline-flex items-center gap-2 rounded-full glass-card px-4 py-1.5 text-xs font-semibold text-foreground">
            <Star className="size-3.5 fill-accent text-accent" /> Rated 4.9 by 10,000+ happy
            customers
          </span>
          <h1 className="mt-5 text-4xl font-bold leading-[1.1] sm:text-5xl lg:text-6xl">
            Fast & Trusted AC Repair Services at Your Doorstep
          </h1>
          <p className="mt-5 max-w-xl text-base sm:text-lg text-primary-foreground/85">
            Professional AC Installation, Repair, Gas Refilling & Maintenance — by verified
            technicians, with upfront pricing and same-day service.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <Button
              asChild
              size="lg"
              className="bg-background text-primary hover:bg-background/90 shadow-elegant"
            >
              <a href={waLink()}>Book Service</a>
            </Button>
            <Button
              asChild
              size="lg"
              className="bg-whatsapp text-whatsapp-foreground hover:opacity-90 shadow-glow"
            >
              <a href={waLink()}>
                <FaWhatsapp className="size-5" /> WhatsApp Now
              </a>
            </Button>
          </div>

          <div className="mt-8 grid grid-cols-3 gap-3 max-w-md">
            {[
              { icon: ShieldCheck, label: "Verified Techs" },
              { icon: Clock, label: "Same-Day" },
              { icon: BadgeCheck, label: "30-Day Warranty" },
            ].map((b) => (
              <div key={b.label} className="glass-card rounded-xl p-3 text-foreground text-center">
                <b.icon className="mx-auto size-5 text-primary" />
                <div className="mt-1 text-xs font-semibold">{b.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative"
        >
          <div className="absolute -inset-6 bg-gradient-primary opacity-30 blur-3xl rounded-[2rem]" />
          <img
            src={heroImg}
            alt="Professional AC technician servicing a split air conditioner"
            width={1600}
            height={1024}
            className="relative w-full rounded-3xl shadow-elegant ring-1 ring-white/40"
          />
          <div className="absolute -bottom-5 -left-5 hidden sm:block glass-card rounded-2xl px-4 py-3 shadow-card">
            <div className="flex items-center gap-3">
              <div className="size-10 grid place-items-center rounded-xl bg-gradient-primary text-primary-foreground font-bold">
                ₹299
              </div>
              <div>
                <div className="text-xs text-muted-foreground">Starting from</div>
                <div className="text-sm font-semibold">AC Service</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

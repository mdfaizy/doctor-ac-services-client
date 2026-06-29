import { motion } from "framer-motion";
import { Wrench, Snowflake, Droplets, Wind, PackageOpen, Settings2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { waLink, BRAND } from "@/lib/whatsapp";
import cleaningImg from "@/assets/ac-cleaning.jpg";
import installImg from "@/assets/ac-installation.jpg";
import repairImg from "@/assets/service-repair.jpg";

const services = [
  {
    icon: Wrench,
    title: "AC Repair",
    desc: "Cooling issues, leaks, noise, electrical faults — fixed fast.",
    img: repairImg,
  },
  {
    icon: Snowflake,
    title: "AC Installation",
    desc: "Expert split & window AC installation with proper bracketing.",
    img: installImg,
  },
  {
    icon: Droplets,
    title: "Deep Cleaning",
    desc: "Jet & foam jet service for fresher air and better cooling.",
    img: cleaningImg,
  },
  {
    icon: Wind,
    title: "Gas Refilling",
    desc: "Leak detection + R32/R410 gas top-up with pressure check.",
    img: repairImg,
  },
  {
    icon: PackageOpen,
    title: "Uninstall & Shift",
    desc: "Safe AC uninstallation and relocation across the city.",
    img: installImg,
  },
  {
    icon: Settings2,
    title: "AMC & Maintenance",
    desc: "Annual maintenance plans to keep your AC in top shape.",
    img: cleaningImg,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 lg:py-28 bg-gradient-soft">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-wider text-primary">
            Our Services
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold">
            Everything your AC needs — under one roof
          </h2>
          <p className="mt-3 text-muted-foreground">
            From quick repairs to full installations, our certified technicians handle every brand
            and every model.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="glass-card rounded-2xl overflow-hidden hover-lift group"
            >
              <div className="relative h-44 overflow-hidden">
                <img
                  src={s.img}
                  alt={s.title}
                  loading="lazy"
                  className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
                <div className="absolute top-3 left-3 size-10 grid place-items-center rounded-xl bg-background/90 text-primary shadow-card">
                  <s.icon className="size-5" />
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold">{s.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{s.desc}</p>
                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className="mt-4 w-full border-primary/30 hover:bg-primary hover:text-primary-foreground"
                >
                  <a href={waLink(`Hi ${BRAND}, I'd like to book: ${s.title}.`)}>Book Now</a>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

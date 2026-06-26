import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";
import { waLink, BRAND } from "@/lib/whatsapp";

const items = [
  { name: "Site Visit / AC Testing", price: "₹349", tag: null },
  { name: "Normal Service", price: "₹299", tag: "Popular" },
  { name: "Jet Service", price: "₹499", tag: null },
  { name: "Foam Jet Service", price: "₹799", tag: "Deep Clean" },
  { name: "Gas Refilling", price: "₹30", unit: "/ PSI", tag: null },
  { name: "AC Uninstall", price: "₹499", tag: null },
  { name: "AC Install", price: "₹1199", tag: null },
  { name: "Angle Stand", price: "₹799 / ₹1199", tag: null },
  { name: "Copper Pipe", price: "₹279", unit: "/ ft", tag: null },
  { name: "Wrapping Tape", price: "₹299", unit: "/ roll", tag: null },
  { name: "Power Cable", price: "₹49", unit: "/ ft", tag: null },
];

const includes = ["Verified technician", "Upfront pricing", "30-day service warranty"];

export default function PriceList() {
  return (
    <section id="pricing" className="py-20 lg:py-28">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center">
<<<<<<< HEAD
          <span className="text-xs font-semibold uppercase tracking-wider text-primary">
            Transparent Pricing
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold">No hidden charges. Ever.</h2>
          <p className="mt-3 text-muted-foreground">
            Genuine prices, no surprises. Pay only after the work is done.
          </p>
=======
          <span className="text-xs font-semibold uppercase tracking-wider text-primary">Transparent Pricing</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold">No hidden charges. Ever.</h2>
          <p className="mt-3 text-muted-foreground">Genuine prices, no surprises. Pay only after the work is done.</p>
>>>>>>> 6d471f8e5d9a21fa3c562a73002267e0fb03de79
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => (
            <motion.div
              key={it.name}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.35, delay: (i % 6) * 0.05 }}
              className="relative glass-card rounded-2xl p-6 hover-lift"
            >
              {it.tag && (
                <Badge className="absolute -top-2 right-4 bg-gradient-primary text-primary-foreground border-0">
                  {it.tag}
                </Badge>
              )}
              <h3 className="text-base font-semibold text-foreground">{it.name}</h3>
              <div className="mt-3 flex items-baseline gap-1">
                <span className="text-3xl font-bold text-gradient">{it.price}</span>
                {it.unit && <span className="text-sm text-muted-foreground">{it.unit}</span>}
              </div>
              <ul className="mt-4 space-y-1.5">
                {includes.map((inc) => (
                  <li key={inc} className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Check className="size-3.5 text-primary" /> {inc}
                  </li>
                ))}
              </ul>
              <Button
                asChild
                className="mt-5 w-full bg-gradient-primary text-primary-foreground shadow-card"
              >
<<<<<<< HEAD
                <a
                  href={waLink(
                    `Hi ${BRAND}, I'd like to book: ${it.name} (${it.price}${it.unit ?? ""}).`,
                  )}
                >
=======
                <a href={waLink(`Hi ${BRAND}, I'd like to book: ${it.name} (${it.price}${it.unit ?? ""}).`)}>
>>>>>>> 6d471f8e5d9a21fa3c562a73002267e0fb03de79
                  Book on WhatsApp
                </a>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

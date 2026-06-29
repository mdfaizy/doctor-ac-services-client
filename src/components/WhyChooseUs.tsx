import { motion } from "framer-motion";
import {
  ShieldCheck,
  BadgeIndianRupee,
  Clock4,
  Award,
  Sparkles,
  HeartHandshake,
} from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Verified Technicians",
    desc: "Background-checked, trained and uniformed.",
  },
  {
    icon: BadgeIndianRupee,
    title: "Upfront Pricing",
    desc: "Fixed rates shared before work begins.",
  },
  { icon: Clock4, title: "Same-Day Service", desc: "Book before 6pm, served the same day." },
  { icon: Award, title: "30-Day Warranty", desc: "Service warranty on every repair we do." },
  { icon: Sparkles, title: "Genuine Spares", desc: "Only OEM-grade parts and certified gas." },
  {
    icon: HeartHandshake,
    title: "Pay After Service",
    desc: "Cash, UPI, or card — only when you're happy.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 lg:py-28">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-wider text-primary">
            Why Choose Us
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold">
            Built on trust. Powered by experts.
          </h2>
          <p className="mt-3 text-muted-foreground">
            10,000+ households trust Doctor AC for honest pricing and lasting fixes.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.35, delay: i * 0.06 }}
              className="rounded-2xl p-6 bg-card border border-border hover-lift"
            >
              <div className="grid place-items-center size-12 rounded-xl bg-gradient-primary text-primary-foreground shadow-card">
                <f.icon className="size-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">{f.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

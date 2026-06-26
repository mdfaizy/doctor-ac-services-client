import { motion } from "framer-motion";
import { CalendarCheck, Truck, Wrench, IndianRupee } from "lucide-react";
import cleaningImg from "@/assets/ac-cleaning.jpg";

const steps = [
  { icon: CalendarCheck, title: "Book in 30 sec", desc: "Pick a service on WhatsApp or call us." },
<<<<<<< HEAD
  {
    icon: Truck,
    title: "Technician arrives",
    desc: "Verified expert reaches your doorstep on time.",
  },
  { icon: Wrench, title: "Service done right", desc: "Genuine parts, proper tools, neat work." },
  {
    icon: IndianRupee,
    title: "Pay after service",
    desc: "Cash, UPI or card — only after you're happy.",
  },
=======
  { icon: Truck, title: "Technician arrives", desc: "Verified expert reaches your doorstep on time." },
  { icon: Wrench, title: "Service done right", desc: "Genuine parts, proper tools, neat work." },
  { icon: IndianRupee, title: "Pay after service", desc: "Cash, UPI or card — only after you're happy." },
>>>>>>> 6d471f8e5d9a21fa3c562a73002267e0fb03de79
];

export default function ServiceAtHome() {
  return (
    <section id="how" className="py-20 lg:py-28 bg-gradient-soft">
      <div className="container mx-auto grid gap-12 px-4 lg:grid-cols-2 lg:items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <div className="absolute -inset-6 bg-gradient-primary opacity-20 blur-3xl rounded-[2rem]" />
          <img
            src={cleaningImg}
            alt="AC deep cleaning service at home"
            loading="lazy"
            width={1200}
            height={900}
            className="relative w-full rounded-3xl shadow-elegant"
          />
        </motion.div>

        <div>
<<<<<<< HEAD
          <span className="text-xs font-semibold uppercase tracking-wider text-primary">
            Service At Home
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold">
            Doorstep AC service in 4 easy steps
          </h2>
          <p className="mt-3 text-muted-foreground">
            We bring the workshop to your home. No long waits, no inflated bills — just clean,
            professional AC care.
=======
          <span className="text-xs font-semibold uppercase tracking-wider text-primary">Service At Home</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold">Doorstep AC service in 4 easy steps</h2>
          <p className="mt-3 text-muted-foreground">
            We bring the workshop to your home. No long waits, no inflated bills — just clean, professional AC care.
>>>>>>> 6d471f8e5d9a21fa3c562a73002267e0fb03de79
          </p>

          <div className="mt-8 space-y-4">
            {steps.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.08 }}
                className="flex gap-4 glass-card rounded-2xl p-4"
              >
                <div className="grid place-items-center size-12 shrink-0 rounded-xl bg-gradient-primary text-primary-foreground shadow-card">
                  <s.icon className="size-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-primary">STEP {i + 1}</span>
                  </div>
                  <h4 className="text-base font-semibold">{s.title}</h4>
                  <p className="text-sm text-muted-foreground">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

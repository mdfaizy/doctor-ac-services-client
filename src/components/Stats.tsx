import { motion } from "framer-motion";

const stats = [
  { value: "10K+", label: "Services Completed" },
  { value: "4.9★", label: "Customer Rating" },
  { value: "50+", label: "Expert Technicians" },
  { value: "5+ yrs", label: "Trusted Experience" },
];

export default function Stats() {
  return (
    <section className="container mx-auto px-4 -mt-10 relative z-10">
      <div className="glass-card rounded-2xl shadow-card grid grid-cols-2 md:grid-cols-4 gap-4 p-6">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="text-center"
          >
            <div className="text-2xl sm:text-3xl font-bold text-gradient">{s.value}</div>
            <div className="mt-1 text-xs sm:text-sm text-muted-foreground">{s.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

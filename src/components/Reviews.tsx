import { motion } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
<<<<<<< HEAD
  {
    name: "Anjali Sharma",
    area: "Patna",
    text: "Technician arrived in 40 minutes and fixed the cooling issue. Very professional, fair pricing.",
  },
  {
    name: "Rohit Kumar",
    area: "Gaya",
    text: "Best AC jet service I've used. They cleaned it like new and didn't push extra services.",
  },
  {
    name: "Mehak Verma",
    area: "Patna",
    text: "Booked AC install on WhatsApp — done same day with proper bracket and copper pipe.",
  },
  {
    name: "Saurabh Singh",
    area: "Muzaffarpur",
    text: "Honest team. Told me my gas was fine and only needed servicing. Saved me money.",
  },
  {
    name: "Priya Raj",
    area: "Patna",
    text: "Foam jet service was amazing. Cooling improved instantly and the smell is gone.",
  },
  {
    name: "Aakash Jha",
    area: "Bhagalpur",
    text: "Reliable for AMC. They visit on time every quarter and the AC has never broken down.",
  },
=======
  { name: "Anjali Sharma", area: "Patna", text: "Technician arrived in 40 minutes and fixed the cooling issue. Very professional, fair pricing." },
  { name: "Rohit Kumar", area: "Gaya", text: "Best AC jet service I've used. They cleaned it like new and didn't push extra services." },
  { name: "Mehak Verma", area: "Patna", text: "Booked AC install on WhatsApp — done same day with proper bracket and copper pipe." },
  { name: "Saurabh Singh", area: "Muzaffarpur", text: "Honest team. Told me my gas was fine and only needed servicing. Saved me money." },
  { name: "Priya Raj", area: "Patna", text: "Foam jet service was amazing. Cooling improved instantly and the smell is gone." },
  { name: "Aakash Jha", area: "Bhagalpur", text: "Reliable for AMC. They visit on time every quarter and the AC has never broken down." },
>>>>>>> 6d471f8e5d9a21fa3c562a73002267e0fb03de79
];

export default function Reviews() {
  return (
    <section id="reviews" className="py-20 lg:py-28 bg-gradient-soft">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center">
<<<<<<< HEAD
          <span className="text-xs font-semibold uppercase tracking-wider text-primary">
            Customer Love
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold">Trusted by 10,000+ families</h2>
          <p className="mt-3 text-muted-foreground">
            Real reviews from real customers across the region.
          </p>
=======
          <span className="text-xs font-semibold uppercase tracking-wider text-primary">Customer Love</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold">Trusted by 10,000+ families</h2>
          <p className="mt-3 text-muted-foreground">Real reviews from real customers across the region.</p>
>>>>>>> 6d471f8e5d9a21fa3c562a73002267e0fb03de79
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r, i) => (
            <motion.div
              key={r.name}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.35, delay: (i % 3) * 0.07 }}
              className="glass-card rounded-2xl p-6 hover-lift"
            >
              <div className="flex gap-1 text-accent">
                {Array.from({ length: 5 }).map((_, k) => (
                  <Star key={k} className="size-4 fill-current" />
                ))}
              </div>
              <p className="mt-3 text-sm text-foreground/90">"{r.text}"</p>
              <div className="mt-5 flex items-center gap-3">
                <div className="grid place-items-center size-10 rounded-full bg-gradient-primary text-primary-foreground font-semibold">
                  {r.name.charAt(0)}
                </div>
                <div>
                  <div className="text-sm font-semibold">{r.name}</div>
                  <div className="text-xs text-muted-foreground">{r.area}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

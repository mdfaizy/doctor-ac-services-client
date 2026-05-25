import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "How fast can a technician reach my home?", a: "For emergency calls we aim under 60 minutes. Regular bookings are scheduled same-day if booked before 6pm." },
  { q: "Do you service all AC brands?", a: "Yes — Daikin, LG, Voltas, Samsung, Hitachi, Blue Star, Carrier, Lloyd, Mitsubishi and more." },
  { q: "Is there a service warranty?", a: "Every repair comes with a 30-day service warranty. If the same issue returns, we re-service for free." },
  { q: "Are gas refilling charges fixed?", a: "Gas is billed at ₹30 per PSI after a pressure check, so you pay only for what you actually need." },
  { q: "What payment options do you accept?", a: "Cash, UPI (PhonePe, Google Pay, Paytm) and all major debit/credit cards — only after the service is complete." },
  { q: "Do you provide AMC plans?", a: "Yes, we offer 3-visit and 4-visit annual maintenance contracts at discounted bundle pricing." },
];

export default function FAQ() {
  return (
    <section id="faq" className="py-20 lg:py-28">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center">
          <span className="text-xs font-semibold uppercase tracking-wider text-primary">FAQ</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold">Questions, answered</h2>
        </div>
        <Accordion type="single" collapsible className="mt-10">
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="glass-card rounded-2xl mb-3 px-5 border-0">
              <AccordionTrigger className="text-left font-semibold hover:no-underline">{f.q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

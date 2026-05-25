import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, MapPin, Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { waLink, PHONE_DISPLAY, PHONE_TEL, BRAND } from "@/lib/whatsapp";

const serviceOptions = [
  "Normal Service (₹299)",
  "Jet Service (₹499)",
  "Foam Jet Service (₹799)",
  "Gas Refilling (₹30/PSI)",
  "AC Installation (₹1199)",
  "AC Uninstall (₹499)",
  "Site Visit / Testing (₹349)",
  "Other",
];

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", phone: "", service: "", address: "", message: "" });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const msg = `Hi ${BRAND}, I'd like to book a service.
Name: ${form.name}
Phone: ${form.phone}
Service: ${form.service}
Address: ${form.address}
Notes: ${form.message}`;
    window.open(waLink(msg), "_blank");
  }

  return (
    <section id="contact" className="py-20 lg:py-28 bg-gradient-soft">
      <div className="container mx-auto grid gap-10 px-4 lg:grid-cols-2">
        <div>
          <span className="text-xs font-semibold uppercase tracking-wider text-primary">Contact</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold">Book your AC service today</h2>
          <p className="mt-3 text-muted-foreground">
            Tell us what you need and we'll get a technician to your doorstep, fast.
          </p>

          <div className="mt-8 space-y-4">
            <a href={`tel:${PHONE_TEL}`} className="flex items-center gap-4 glass-card rounded-2xl p-4 hover-lift">
              <span className="grid place-items-center size-11 rounded-xl bg-gradient-primary text-primary-foreground"><Phone className="size-5" /></span>
              <div>
                <div className="text-xs text-muted-foreground">Call us</div>
                <div className="font-semibold">{PHONE_DISPLAY}</div>
              </div>
            </a>
            <a href={waLink()} className="flex items-center gap-4 glass-card rounded-2xl p-4 hover-lift">
              <span className="grid place-items-center size-11 rounded-xl bg-whatsapp text-whatsapp-foreground"><FaWhatsapp className="size-5" /></span>
              <div>
                <div className="text-xs text-muted-foreground">WhatsApp</div>
                <div className="font-semibold">{PHONE_DISPLAY}</div>
              </div>
            </a>
            <div className="flex items-center gap-4 glass-card rounded-2xl p-4">
              <span className="grid place-items-center size-11 rounded-xl bg-gradient-primary text-primary-foreground"><MapPin className="size-5" /></span>
              <div>
                <div className="text-xs text-muted-foreground">Service area</div>
                <div className="font-semibold">Available across the city</div>
              </div>
            </div>
            <div className="flex items-center gap-4 glass-card rounded-2xl p-4">
              <span className="grid place-items-center size-11 rounded-xl bg-gradient-primary text-primary-foreground"><Mail className="size-5" /></span>
              <div>
                <div className="text-xs text-muted-foreground">Hours</div>
                <div className="font-semibold">Mon–Sun · 8 AM – 10 PM</div>
              </div>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="glass-card rounded-3xl p-6 sm:p-8 shadow-card space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Your name" />
            </div>
            <div>
              <Label htmlFor="phone">Phone</Label>
              <Input id="phone" required type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="10-digit mobile" />
            </div>
          </div>
          <div>
            <Label>Service</Label>
            <Select value={form.service} onValueChange={(v) => setForm({ ...form, service: v })}>
              <SelectTrigger><SelectValue placeholder="Choose a service" /></SelectTrigger>
              <SelectContent>
                {serviceOptions.map((s) => <SelectItem key={s} value={s}>{s}</SelectItem>)}
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="address">Address</Label>
            <Input id="address" required value={form.address} onChange={(e) => setForm({ ...form, address: e.target.value })} placeholder="Flat / Street / Area" />
          </div>
          <div>
            <Label htmlFor="message">Notes (optional)</Label>
            <Textarea id="message" rows={3} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Tell us about the issue..." />
          </div>
          <Button type="submit" size="lg" className="w-full bg-gradient-primary text-primary-foreground shadow-elegant">
            <FaWhatsapp className="size-5" /> Send Booking on WhatsApp
          </Button>
        </form>
      </div>
    </section>
  );
}

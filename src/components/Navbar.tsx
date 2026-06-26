import { useEffect, useState } from "react";
import {  Menu, Phone, Snowflake } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Link } from "react-router-dom";
import { waLink, PHONE_TEL } from "@/lib/whatsapp";
import logo from "@/assets/logo.jpg";
const links = [
  { href: "#services", label: "Services" },
  { href: "#pricing", label: "Pricing" },
  { href: "#how", label: "How it Works" },
  { href: "#reviews", label: "Reviews" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all ${
        scrolled ? "glass-card shadow-card" : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto flex h-16 items-center justify-between px-4">
        
        <Link to="/" className="flex items-center gap-2 font-bold text-lg">
          <span>
               <img
            src={logo}
            alt="Professional AC technician servicing a split air conditioner"
            
            className="relative  rounded-3xl shadow-elegant ring-1 ring-white/40 h-8 w-8"
          />
          </span>
          <span className="text-3xl font-bold bg-gradient-to-r from-blue-700 to-cyan-400 bg-clip-text text-transparent">
  Doctor AC
</span>
        </Link>

       

        <div className="hidden lg:flex items-center gap-7 text-sm font-medium">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-2">
          <Button asChild variant="ghost" size="sm">
            <a href={`tel:${PHONE_TEL}`}>
              <Phone className="size-4" /> Call
            </a>
          </Button>
          <Button
            asChild
            size="sm"
            className="bg-gradient-primary text-primary-foreground shadow-elegant"
          >
            <a href={waLink()}>Book Service</a>
          </Button>
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="lg:hidden" aria-label="Open menu">
              <Menu />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-72">
            <div className="mt-8 flex flex-col gap-1">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-3 text-base font-medium hover:bg-muted"
                >
                  {l.label}
                </a>
              ))}
              <Button asChild className="mt-4 bg-gradient-primary text-primary-foreground">
                <a href={waLink()}>Book Service</a>
              </Button>
              <Button asChild variant="outline" className="mt-2">
                <a href={`tel:${PHONE_TEL}`}>
                  <Phone className="size-4" /> Call Now
                </a>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
}

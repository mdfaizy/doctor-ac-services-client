import { Snowflake, Phone, MapPin } from "lucide-react";
import { FaWhatsapp, FaFacebook, FaInstagram } from "react-icons/fa";
import { PHONE_DISPLAY, PHONE_TEL, waLink, BRAND } from "@/lib/whatsapp";

export default function Footer() {
  return (
    <footer className="bg-foreground text-background/90">
      <div className="container mx-auto px-4 py-14 grid gap-10 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2 font-bold text-lg">
            <span className="grid place-items-center size-9 rounded-xl bg-gradient-primary text-primary-foreground">
              <Snowflake className="size-5" />
            </span>
            <span>{BRAND}</span>
          </div>
          <p className="mt-3 text-sm text-background/70">
            Fast, trusted AC repair, installation and maintenance — at your doorstep.
          </p>
          <div className="mt-4 flex gap-3">
            <a href={waLink()} aria-label="WhatsApp" className="grid place-items-center size-9 rounded-full bg-whatsapp text-whatsapp-foreground"><FaWhatsapp /></a>
            <a href="https://www.facebook.com/share/1Pe5LqZe3Z/" aria-label="Facebook" className="grid place-items-center size-9 rounded-full bg-background/10 hover:bg-background/20"><FaFacebook /></a>
            <a href="https://www.instagram.com/doctorac.official?igsh=ejlkYjZvZzhrcWw=" aria-label="Instagram" className="grid place-items-center size-9 rounded-full bg-background/10 hover:bg-background/20"><FaInstagram /></a>
          </div>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm text-background/70">
            <li><a href="#services" className="hover:text-background">Services</a></li>
            <li><a href="#pricing" className="hover:text-background">Pricing</a></li>
            <li><a href="#how" className="hover:text-background">How it Works</a></li>
            <li><a href="#reviews" className="hover:text-background">Reviews</a></li>
            <li><a href="#faq" className="hover:text-background">FAQ</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Services</h4>
          <ul className="space-y-2 text-sm text-background/70">
            <li>AC Repair</li>
            <li>AC Installation</li>
            <li>Jet & Foam Cleaning</li>
            <li>Gas Refilling</li>
            <li>Uninstall & Shift</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Contact</h4>
          <ul className="space-y-3 text-sm text-background/70">
            <li className="flex items-start gap-2"><Phone className="size-4 mt-0.5" /><a href={`tel:${PHONE_TEL}`}>{PHONE_DISPLAY}</a></li>
            <li className="flex items-start gap-2"><FaWhatsapp className="size-4 mt-0.5 text-whatsapp" /><a href={waLink()}>WhatsApp us</a></li>
            <li className="flex items-start gap-2"><MapPin className="size-4 mt-0.5" />Service available at home, citywide</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-background/10">
        <div className="container mx-auto px-4 py-5 text-xs text-background/60 flex flex-col sm:flex-row gap-2 sm:justify-between">
          <span>© {new Date().getFullYear()} {BRAND}. All rights reserved.</span>
          <span>Made with care for cool homes.</span>
        </div>
      </div>
    </footer>
  );
}

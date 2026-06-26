// import { createFileRoute } from "@tanstack/react-router";
// import Navbar from "@/components/Navbar";
// import Hero from "@/components/Hero";
// import Stats from "@/components/Stats";
// import Services from "@/components/Services";
// import PriceList from "@/components/PriceList";
// import EmergencyBanner from "@/components/EmergencyBanner";
// import ServiceAtHome from "@/components/ServiceAtHome";
// import WhyChooseUs from "@/components/WhyChooseUs";
// import Reviews from "@/components/Reviews";
// import FAQ from "@/components/FAQ";
// import ContactForm from "@/components/ContactForm";
// import Footer from "@/components/Footer";
// import FloatingWhatsApp from "@/components/FloatingWhatsApp";
// import { BRAND, PHONE_DISPLAY } from "@/lib/whatsapp";

// export const Route = createFileRoute("/")({
//   head: () => ({
//     meta: [
//       { title: `${BRAND} — Fast & Trusted AC Repair, Installation & Service` },
//       {
//         name: "description",
//         content:
//           "Doctor AC Services offers professional AC repair, installation, gas refilling, jet cleaning and maintenance at your doorstep. Verified technicians, upfront pricing, 24/7 emergency service.",
//       },
//       { property: "og:title", content: `${BRAND} — Doorstep AC Repair & Service` },
//       { property: "og:description", content: "Book AC repair, installation, gas refilling and deep cleaning on WhatsApp. Same-day service, verified technicians, no hidden charges." },
//       { property: "og:type", content: "website" },
//     ],
//     scripts: [
//       {
//         type: "application/ld+json",
//         children: JSON.stringify({
//           "@context": "https://schema.org",
//           "@type": "LocalBusiness",
//           name: BRAND,
//           telephone: PHONE_DISPLAY,
//           priceRange: "₹₹",
//           areaServed: "India",
//           openingHours: "Mo-Su 08:00-22:00",
//           description: "AC repair, installation, gas refilling, cleaning and AMC services at your doorstep.",
//         }),
//       },
//     ],
//   }),
//   component: Index,
// });

// function Index() {
//   return (
//     <div className="min-h-screen">
//       <Navbar />
//       <main>
//         <Hero />
//         <Stats />
//         <Services />
//         <PriceList />
//         <EmergencyBanner />
//         <ServiceAtHome />
//         <WhyChooseUs />
//         <Reviews />
//         <FAQ />
//         <ContactForm />
//       </main>
//       <Footer />
//       <FloatingWhatsApp />
//     </div>
//   );
// }

import "./App.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import ServiceAtHome from "./components/ServiceAtHome";
import WhyChooseUs from "./components/WhyChooseUs";
import Stats from "./components/Stats";
import PriceList from "./components/PriceList";
import Reviews from "./components/Reviews";
import FAQ from "./components/FAQ";
import ContactForm from "./components/ContactForm";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import EmergencyBanner from "./components/EmergencyBanner";
import Footer from "./components/Footer";

function App() {
  return (
    <>
    
      <Navbar />
      <Hero />
      <Stats/>
      <Services />
      <ServiceAtHome />
      <WhyChooseUs />
     
      <PriceList />
      <Reviews />
      <FAQ />
      <ContactForm />
      <EmergencyBanner />
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}

export default App;
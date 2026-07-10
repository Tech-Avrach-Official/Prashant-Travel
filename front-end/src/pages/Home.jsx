import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";
import ContactSection from "../components/ContactSection";
import PopularFlightRoutes from "../components/PopularFlightRoutes";
import ContactBookingSection from "./ContactBookingSection";

export default function Home() {
  return (
    <div className="w-full overflow-hidden">
      <Hero />
      <About />
      <Services />
      <PopularFlightRoutes />
      <ContactBookingSection/>
      <Testimonials />
      <ContactSection />
    </div>
  );
}

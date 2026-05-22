import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Pricing from "@/components/Pricing";
import SocialSection from "@/components/SocialSection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ChatBot from "@/components/ChatBot";
import WhatsAppButton from "@/components/WhatsAppButton";
import CustomCursor from "@/components/CustomCursor";

export default function Home() {
  return (
    <div className="min-h-screen bg-background relative">
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Services />
        <Pricing />
        <SocialSection />
        <Contact />
      </main>
      <Footer />
      <ChatBot />
      <WhatsAppButton />
    </div>
  );
}

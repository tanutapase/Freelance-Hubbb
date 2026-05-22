import React from "react";
import { Code2, ArrowUpRight, Instagram, Github, Linkedin } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";

const quickLinks = ["Home", "About", "Projects", "Services", "Pricing", "Contact"];
const services = ["Business Websites", "Portfolio Sites", "Landing Pages", "Booking Systems", "Firebase Integration", "WhatsApp Integration"];

const socials = [
  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
  { icon: Github, href: "https://github.com", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: SiWhatsapp, href: "https://wa.me/91XXXXXXXXXX", label: "WhatsApp" },
];

export default function Footer() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-foreground text-background/80 pt-16 pb-8">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="lg:col-span-1">
            <a href="#home" className="flex items-center gap-2 group mb-5 w-fit">
              <div className="w-10 h-10 rounded-xl bg-primary text-primary-foreground flex items-center justify-center group-hover:rotate-12 transition-transform">
                <Code2 size={22} />
              </div>
              <span className="font-bold text-xl text-background">Studio</span>
            </a>
            <p className="text-sm leading-relaxed text-background/60 mb-6">
              Building beautiful, fast, and affordable websites for businesses and creators across India.
            </p>
            <div className="flex items-center gap-3">
              {socials.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-9 h-9 rounded-xl bg-white/10 hover:bg-primary flex items-center justify-center transition-colors text-background/70 hover:text-white"
                  >
                    <Icon size={16} />
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-background mb-5 text-sm uppercase tracking-wider">Quick Links</h4>
            <ul className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <li key={link}>
                  <button
                    onClick={() => scrollTo(link.toLowerCase())}
                    className="text-sm text-background/60 hover:text-background transition-colors hover:translate-x-1 inline-flex items-center gap-1 group"
                  >
                    {link}
                    <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-background mb-5 text-sm uppercase tracking-wider">Services</h4>
            <ul className="flex flex-col gap-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-sm text-background/60 hover:text-background transition-colors cursor-default">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-background mb-5 text-sm uppercase tracking-wider">Contact</h4>
            <ul className="flex flex-col gap-3 text-sm text-background/60">
              <li>hello@example.com</li>
              <li>+91 XXXXX XXXXX</li>
              <li>Available Mon–Sat</li>
              <li>Response within 24h</li>
            </ul>
            <a
              href="#pricing"
              className="inline-block mt-6 px-5 py-2.5 bg-primary text-white rounded-xl text-sm font-semibold hover:bg-primary/90 transition-colors"
            >
              Start a Project
            </a>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-background/40">
            &copy; {new Date().getFullYear()} Studio. All rights reserved.
          </p>
          <p className="text-sm text-background/40">
            Crafted with care for small businesses & creators
          </p>
        </div>
      </div>
    </footer>
  );
}

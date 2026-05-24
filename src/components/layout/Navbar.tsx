import React, { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import vassoyLogo from "@assets/vassoy-il-logo.png";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const links = [
    { href: "/", label: "Hjemside" },
    { href: "/spinning", label: "Spinning" },
    { href: "/leie", label: "Leie av idrettslokalet" },
    { href: "/diskgolf", label: "Disc Golf" },
    { href: "/backyard", label: "Backyard Ultra" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white border-b border-border py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group" data-testid="link-home-logo">
            <div className="relative overflow-hidden rounded-full bg-white p-1 shadow-sm transition-transform group-hover:scale-105">
              <img src={vassoyLogo} alt="Vassøy IL Logo" className="h-8 w-8 object-contain" />
            </div>
            <span className={`font-bold text-lg tracking-tight transition-colors ${isScrolled ? 'text-primary' : 'text-white'}`}>
              Vassøy IL
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  location === link.href ? "text-primary" : (isScrolled ? "text-foreground/80" : "text-white/90")
                }`}
                data-testid={`link-nav-${link.label.toLowerCase()}`}
              >
                {link.label}
              </Link>
            ))}
            <Button asChild className="rounded-full px-5 h-9 text-sm font-semibold bg-primary text-white hover:bg-primary/90 transition-all">
              <a href="https://www.minidrett.no" target="_blank" rel="noreferrer" data-testid="btn-nav-book">Bli medlem</a>
            </Button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className={`md:hidden p-2 ${isScrolled ? "text-foreground" : "text-white"}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="btn-mobile-menu"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b"
          >
            <nav className="flex flex-col py-4 px-4 gap-4 container mx-auto">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-lg font-medium p-2 rounded-md ${
                    location === link.href ? "bg-primary/10 text-primary" : "text-foreground"
                  }`}
                  data-testid={`link-mobile-nav-${link.label.toLowerCase()}`}
                >
                  {link.label}
                </Link>
              ))}
              <Button asChild className="mt-4 w-full rounded-full bg-primary text-white font-semibold">
                <a href="https://www.minidrett.no" target="_blank" rel="noreferrer">Bli medlem — kun 300,-/år</a>
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

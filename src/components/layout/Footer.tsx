import React from "react";
import { Link } from "wouter";
import { Mail, Phone, MapPin, Anchor } from "lucide-react";
import vassoyLogo from "@assets/vassoy-il-logo.png";

export default function Footer() {
  return (
    <footer className="bg-foreground text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          <div>
            <Link href="/" className="flex items-center gap-3 mb-6 inline-flex" data-testid="link-footer-home">
              <div className="bg-white rounded-full p-1">
                <img src={vassoyLogo} alt="Vassøy IL Logo" className="h-12 w-12 object-contain" />
              </div>
              <span className="font-bold text-2xl tracking-tight">Vassøy IL</span>
            </Link>
            <p className="text-white/80 leading-relaxed max-w-xs">
              Et lite, vennlig idrettslag i hjertet av Vassøy. Vi bygger et sterkt lokalsamfunn gjennom idrett, samhold og glede.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6 tracking-tight">Kontakt Oss</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-white/80">
                <MapPin className="w-5 h-5 shrink-0 mt-0.5" />
                <div>
                  <p>Solvigveien 31</p>
                  <p>4076 VASSØY</p>
                </div>
              </li>
              <li className="flex items-center gap-3 text-white/80">
                <Phone className="w-5 h-5 shrink-0" />
                <a href="tel:51550485" className="hover:underline" data-testid="link-footer-phone">51 55 04 85</a>
              </li>
              <li className="flex items-center gap-3 text-white/80">
                <Mail className="w-5 h-5 shrink-0" />
                <a href="mailto:vassoy.il@gmail.com" className="hover:underline" data-testid="link-footer-email">vassoy.il@gmail.com</a>
              </li>
              <li className="flex items-center gap-3 text-white/80">
                <Anchor className="w-5 h-5 shrink-0" />
                <span>Ferge fra Jorenholmen/Bakerbrygga</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6 tracking-tight">Snarveier</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-white/80 hover:text-white transition-colors" data-testid="link-footer-nav-home">Hjemside</Link>
              </li>
              <li>
                <Link href="/spinning" className="text-white/80 hover:text-white transition-colors" data-testid="link-footer-nav-spinning">Spinning</Link>
              </li>
              <li>
                <Link href="/leie" className="text-white/80 hover:text-white transition-colors" data-testid="link-footer-nav-leie">Leie av lokale</Link>
              </li>
            </ul>
            <div className="mt-8">
              <p className="text-sm text-white/70 mb-1">Styreleder:</p>
              <p className="font-medium text-white/90">Ole Jacob Johannessen</p>
            </div>
          </div>
          
        </div>
        
        <div className="border-t border-white/20 pt-8 text-center text-white/60 text-sm flex flex-col md:flex-row justify-between items-center gap-4">
          <p>&copy; {new Date().getFullYear()} Vassøy Idrettslag. Alle rettigheter reservert.</p>
          <p>Stiftet 2004</p>
        </div>
      </div>
    </footer>
  );
}

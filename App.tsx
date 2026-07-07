
import React, { useState, useEffect } from 'react';
import { Hero } from './components/Hero';
import { Vision } from './components/Vision';
import { Location } from './components/Location';
import { Offer } from './components/Offer';
import { Workshops } from './components/Workshops';
import { ScientificLegacy } from './components/ScientificLegacy';
import { SocialProof } from './components/SocialProof';
import { Logos } from './components/Logos';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen font-sans bg-secondary selection:bg-primary selection:text-white">
      {/* Sticky Top Bar for Urgency */}
      <div className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-secondary/90 backdrop-blur-md py-2 shadow-lg border-b border-white/10' : 'bg-transparent py-4'}`}>
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="font-extrabold text-xl tracking-tighter text-white">CMED<span className="text-primary">2026</span></span>
          </div>
          <nav className="hidden md:flex gap-8 text-white/60 text-sm font-medium">
            <a href="#vision" className="hover:text-white transition-colors">Visão</a>
            <a href="#location" className="hover:text-white transition-colors">Local</a>
            <a href="#scientific" className="hover:text-white transition-colors">Científico</a>
          </nav>
          <a 
            href="#offer" 
            className="hidden md:block bg-primary hover:bg-opacity-80 transition-all text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg"
          >
            GARANTIR ACESSO
          </a>
        </div>
      </div>

      <Hero />
      <div id="vision"><Vision /></div>
      <div id="location"><Location /></div>
      <div id="offer">
        <Offer />
      </div>
      <Workshops />
      <div id="scientific"><ScientificLegacy /></div>
      <SocialProof />
      <Logos />
      <Footer />

      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/5563992421841" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 w-16 h-16 bg-primary rounded-full shadow-2xl flex items-center justify-center text-white hover:scale-110 transition-transform active:scale-95 group"
        aria-label="Contato via WhatsApp"
      >
        <span className="absolute right-full mr-4 bg-white text-secondary px-3 py-1 rounded-lg text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-md">
          Falar com Concierge
        </span>
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
      </a>

      {/* Persistent Mobile CTA */}
      <div className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] z-40">
        <a 
          href="#offer" 
          className="block w-full text-center bg-accent text-darkBlue font-extrabold py-4 rounded-xl shadow-2xl animate-pulse-custom"
        >
          QUERO MEU KIT E MEU INGRESSO
        </a>
      </div>
    </div>
  );
};

export default App;

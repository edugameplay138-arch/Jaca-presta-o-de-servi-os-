import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { RealWorkGallery } from './components/RealWorkGallery';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 font-sans">
      <Header />

      <main className="flex-1">
        <Hero />
        <ServicesSection />
        <RealWorkGallery />
      </main>

      <Footer />

      <FloatingWhatsApp />
    </div>
  );
}

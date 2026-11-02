import React from 'react';
import { Phone, MessageCircle, MapPin } from 'lucide-react';
import { FORMATTED_PHONE, CITY_NAME, getEmergencyWhatsAppUrl } from '../utils/calculator';

export const Header: React.FC = () => {
  const whatsappUrl = getEmergencyWhatsAppUrl();

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 transition-all">
      <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Brand */}
        <a href="#inicio" className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-lg bg-[#0b3b95] text-amber-400 font-black flex items-center justify-center text-sm shadow-xs">
            ★
          </div>
          <div>
            <div className="text-base font-extrabold tracking-tight text-slate-900 leading-none">
              Marido de Aluguel <span className="text-[#0b3b95]">Jaca</span>
            </div>
            <div className="text-[11px] text-slate-500 font-medium flex items-center gap-1 mt-0.5">
              <MapPin className="w-3 h-3 text-slate-400" />
              <span>{CITY_NAME}</span>
              <span className="text-slate-300">·</span>
              <span className="text-emerald-700 font-semibold">Plantão 24h</span>
            </div>
          </div>
        </a>

        {/* Contact actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href="tel:65981588530"
            className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold text-slate-700 hover:text-slate-950 px-3 py-2 rounded-lg hover:bg-slate-100 transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-slate-500" />
            <span>{FORMATTED_PHONE}</span>
          </a>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3.5 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-bold rounded-lg transition-colors shadow-xs"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>WhatsApp</span>
          </a>
        </div>
      </div>
    </header>
  );
};

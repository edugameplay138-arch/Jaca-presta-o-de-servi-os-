import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { FORMATTED_PHONE, CITY_NAME, getEmergencyWhatsAppUrl } from '../utils/calculator';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const whatsappUrl = getEmergencyWhatsAppUrl();

  return (
    <footer className="bg-slate-900 text-slate-300 py-10 pb-20 sm:pb-10 text-xs">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-6 border-b border-slate-800 text-center sm:text-left">
          {/* Brand */}
          <div className="flex items-center gap-2">
            <span className="w-7 h-7 rounded-md bg-[#0b3b95] text-amber-400 font-black flex items-center justify-center text-xs">
              ★
            </span>
            <span className="font-bold text-white text-sm">
              Marido de Aluguel Jaca
            </span>
            <span className="text-slate-500">·</span>
            <span className="text-slate-400">{CITY_NAME}</span>
          </div>

          {/* Quick Contact Links */}
          <div className="flex items-center gap-4">
            <a
              href="tel:65981588530"
              className="hover:text-white transition-colors"
            >
              {FORMATTED_PHONE}
            </a>
            <span className="text-slate-700">·</span>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-400 hover:text-emerald-300 font-semibold"
            >
              Plantão WhatsApp 24h
            </a>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-slate-500 text-[11px] text-center sm:text-left">
          <p>© {currentYear} Marido de Aluguel Jaca. “Seu problema é a nossa especialidade”.</p>
          <p>Pequenos reparos, grandes soluções em Campo Novo do Parecis - MT</p>
        </div>
      </div>
    </footer>
  );
};

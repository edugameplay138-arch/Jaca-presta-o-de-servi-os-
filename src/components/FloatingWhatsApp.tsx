import React from 'react';
import { MessageCircle, Phone } from 'lucide-react';
import { getEmergencyWhatsAppUrl, FORMATTED_PHONE } from '../utils/calculator';

export const FloatingWhatsApp: React.FC = () => {
  const emergencyUrl = getEmergencyWhatsAppUrl();

  return (
    <>
      {/* Discreet Floating Button for Desktop */}
      <div className="hidden sm:block fixed bottom-6 right-6 z-50">
        <a
          href={emergencyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-13 h-13 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full shadow-lg flex items-center justify-center transition-all transform hover:scale-105 active:scale-95"
          aria-label={`WhatsApp ${FORMATTED_PHONE}`}
          title="Falar no WhatsApp"
        >
          <MessageCircle className="w-7 h-7 fill-current" />
        </a>
      </div>

      {/* Clean Bottom Bar for Mobile Only */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 p-2 flex items-center gap-2">
        <a
          href="tel:65981588530"
          className="flex-1 py-2.5 px-3 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-lg text-xs font-bold flex items-center justify-center gap-1.5 transition-colors"
        >
          <Phone className="w-3.5 h-3.5 text-slate-600" />
          <span>Ligar</span>
        </a>

        <a
          href={emergencyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 py-2.5 px-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-xs font-bold flex items-center justify-center gap-1.5 transition-colors shadow-xs"
        >
          <MessageCircle className="w-3.5 h-3.5 fill-current" />
          <span>WhatsApp 24h</span>
        </a>
      </div>
    </>
  );
};

import React from 'react';
import { MessageCircle } from 'lucide-react';
import { getEmergencyWhatsAppUrl, FORMATTED_PHONE } from '../utils/calculator';

export const RealWorkGallery: React.FC = () => {
  const whatsappUrl = getEmergencyWhatsAppUrl();

  return (
    <section className="py-14 bg-white border-b border-slate-200/80">
      <div className="max-w-5xl mx-auto px-4">
        {/* Section title */}
        <div className="text-center max-w-lg mx-auto mb-10">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Fotos dos Nossos Atendimentos
          </h2>
          <p className="mt-1.5 text-sm text-slate-500">
            Equipamentos elétricos profissionais para desobstrução rápida de tubulações.
          </p>
        </div>

        {/* 2 Clean Photo Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Photo 1: Machine */}
          <div className="bg-slate-50 rounded-2xl overflow-hidden border border-slate-200">
            <div className="aspect-[4/3] bg-slate-900 overflow-hidden">
              <img
                src="/assets/aistudio/Screenshot_20261102_042634_Google_b3edd137.jpg"
                alt="Máquina desentupidora elétrica profissional em Campo Novo do Parecis"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="p-4 sm:p-5">
              <h3 className="text-base font-bold text-slate-900">
                Máquina Desentupidora Rotativa
              </h3>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                Cabo espiral de alta potência que desobstrui a rede de ralos, vasos e esgotos com agilidade e limpeza.
              </p>
            </div>
          </div>

          {/* Photo 2: Service in progress */}
          <div className="bg-slate-50 rounded-2xl overflow-hidden border border-slate-200">
            <div className="aspect-[4/3] bg-slate-900 overflow-hidden">
              <img
                src="/assets/aistudio/Screenshot_20261102_042710_Google_04c0c021.jpg"
                alt="Atendimento técnico no local em Campo Novo do Parecis"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="p-4 sm:p-5">
              <h3 className="text-base font-bold text-slate-900">
                Atendimento Técnico no Local
              </h3>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                Manutenção e desentupimento direto em residências, comércios e empresas de Campo Novo do Parecis.
              </p>
            </div>
          </div>
        </div>

        {/* Clean, quiet CTA */}
        <div className="mt-8 text-center">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-bold rounded-xl shadow-xs transition-colors"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>Falar com o Jaca no WhatsApp: {FORMATTED_PHONE}</span>
          </a>
        </div>
      </div>
    </section>
  );
};

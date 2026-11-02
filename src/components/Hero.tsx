import React from 'react';
import { Phone, MessageCircle, Clock, ShieldCheck, Check } from 'lucide-react';
import { FORMATTED_PHONE, CITY_NAME, getEmergencyWhatsAppUrl } from '../utils/calculator';

export const Hero: React.FC = () => {
  const whatsappUrl = getEmergencyWhatsAppUrl();

  return (
    <section id="inicio" className="bg-white py-12 md:py-16 border-b border-slate-200/80">
      <div className="max-w-5xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Clear Text & Actions */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-slate-600 bg-slate-100 px-3 py-1 rounded-full">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                <span>Atendimento 24h em {CITY_NAME}</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-[1.15]">
                Seu problema é a nossa{' '}
                <span className="text-[#0b3b95]">especialidade</span>
              </h1>

              <p className="text-lg font-semibold text-slate-700 italic">
                “Pequenos reparos, grandes soluções!”
              </p>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-xl">
                Serviços especializados em desentupimentos, caça vazamentos, elétrica,
                hidráulica, pintura e reparo de telhados. Trabalho rápido, pontual e transparente.
              </p>
            </div>

            {/* Direct Contact CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm sm:text-base rounded-xl transition-all shadow-sm text-center"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>Chamar no WhatsApp: {FORMATTED_PHONE}</span>
              </a>

              <a
                href="tel:65981588530"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-sm rounded-xl transition-colors text-center"
              >
                <Phone className="w-4 h-4 text-slate-600" />
                <span>Ligar Agora</span>
              </a>
            </div>

            {/* Value checklist */}
            <div className="pt-2 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-600 font-medium">
              <span className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-emerald-600" />
                Plantão 24 Horas
              </span>
              <span className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-emerald-600" />
                Equipamento Próprio
              </span>
              <span className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-emerald-600" />
                Preço Justo
              </span>
            </div>
          </div>

          {/* Right Column: Original Flyer Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative max-w-xs sm:max-w-sm w-full bg-slate-50 p-2 rounded-2xl border border-slate-200 shadow-sm">
              <img
                src="/assets/aistudio/ChatGPT_Image_22_de_set._de_2026__21_59_59_5ac4cdac.png"
                alt="Marido de Aluguel Jaca em Campo Novo do Parecis"
                className="w-full h-auto rounded-xl object-contain"
                width="400"
                height="400"
              />
              <div className="pt-2 pb-1 text-center text-xs font-semibold text-slate-500">
                Qualidade · Confiança · Soluções para o seu lar
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

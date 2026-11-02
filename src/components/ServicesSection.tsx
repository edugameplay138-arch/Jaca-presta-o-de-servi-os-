import React from 'react';
import { 
  Pipette, 
  Droplet, 
  Zap, 
  Wrench, 
  Paintbrush, 
  Home, 
  Umbrella, 
  ArrowRight
} from 'lucide-react';
import { SERVICES_CATALOG, getWhatsAppServiceUrl, getEmergencyWhatsAppUrl } from '../utils/calculator';

const ICON_MAP: Record<string, React.ReactNode> = {
  Pipette: <Pipette className="w-5 h-5 text-[#0b3b95]" />,
  Droplet: <Droplet className="w-5 h-5 text-[#0b3b95]" />,
  Zap: <Zap className="w-5 h-5 text-[#0b3b95]" />,
  Wrench: <Wrench className="w-5 h-5 text-[#0b3b95]" />,
  Paintbrush: <Paintbrush className="w-5 h-5 text-[#0b3b95]" />,
  Home: <Home className="w-5 h-5 text-[#0b3b95]" />,
  Umbrella: <Umbrella className="w-5 h-5 text-[#0b3b95]" />,
};

export const ServicesSection: React.FC = () => {
  const generalWhatsAppUrl = getEmergencyWhatsAppUrl();

  return (
    <section id="servicos" className="py-14 bg-slate-50/50 border-b border-slate-200/80">
      <div className="max-w-5xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-lg mx-auto mb-10">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Nossos Serviços
          </h2>
          <p className="mt-1.5 text-sm text-slate-500">
            Atendimento residencial, comercial e escritórios em Campo Novo do Parecis.
          </p>
        </div>

        {/* 7 Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {SERVICES_CATALOG.map((service) => {
            const whatsappLink = getWhatsAppServiceUrl(service.name);

            return (
              <a
                key={service.id}
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-5 bg-white rounded-xl border border-slate-200 hover:border-[#0b3b95]/40 hover:shadow-sm transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center mb-3 group-hover:bg-blue-100 transition-colors">
                    {ICON_MAP[service.iconName] || <Wrench className="w-5 h-5 text-[#0b3b95]" />}
                  </div>

                  <h3 className="text-base font-bold text-slate-900 group-hover:text-[#0b3b95] transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed capitalize">
                    {service.subtitle}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-emerald-700">
                  <span>Pedir orçamento</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </a>
            );
          })}
        </div>

        {/* Quiet unified CTA */}
        <div className="mt-8 text-center">
          <p className="text-xs text-slate-500">
            Precisa de um serviço específico não listado?{' '}
            <a
              href={generalWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0b3b95] font-semibold hover:underline"
            >
              Consulte no WhatsApp
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

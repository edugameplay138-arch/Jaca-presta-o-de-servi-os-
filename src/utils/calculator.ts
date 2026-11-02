export interface ServiceItem {
  id: string;
  name: string;
  subtitle: string;
  iconName: string;
}

export const SERVICES_CATALOG: ServiceItem[] = [
  {
    id: 'desentupimento',
    name: 'Desentupimento',
    subtitle: 'pias, ralos, vasos e tubulações',
    iconName: 'Pipette',
  },
  {
    id: 'vazamentos',
    name: 'Arruma Vazamentos',
    subtitle: 'paredes, tubos e telhados',
    iconName: 'Droplet',
  },
  {
    id: 'eletrica',
    name: 'Elétrica',
    subtitle: 'instalações, manutenção e troca de fios',
    iconName: 'Zap',
  },
  {
    id: 'hidraulica',
    name: 'Hidráulica',
    subtitle: 'instalações, reparos e troca de peças',
    iconName: 'Wrench',
  },
  {
    id: 'pintura',
    name: 'Pintura',
    subtitle: 'interna e externa, reparos em geral',
    iconName: 'Paintbrush',
  },
  {
    id: 'manutencao',
    name: 'Manutenção em Geral',
    subtitle: 'casa, comércio e escritório',
    iconName: 'Home',
  },
  {
    id: 'telhados',
    name: 'Arruma Vazamento em Telhados',
    subtitle: 'trincas, calhas e telhas',
    iconName: 'Umbrella',
  },
];

export const PHONE_NUMBER = '65981588530';
export const FORMATTED_PHONE = '(65) 9 8158-8530';
export const CITY_NAME = 'Campo Novo do Parecis - MT';

export function getWhatsAppServiceUrl(serviceName?: string): string {
  const serviceText = serviceName ? `para o serviço de *${serviceName}*` : 'para um serviço';
  const msg = `Olá Jaca! Gostaria de solicitar um orçamento ${serviceText} em Campo Novo do Parecis - MT.`;
  return `https://wa.me/55${PHONE_NUMBER}?text=${encodeURIComponent(msg)}`;
}

export function getEmergencyWhatsAppUrl(): string {
  const msg = `🚨 *PLANTÃO 24H - MARIDO DE ALUGUEL JACA*\n\nOlá Jaca! Estou em Campo Novo do Parecis - MT com uma emergência de vazamento/desentupimento. Poderia me atender agora?`;
  return `https://wa.me/55${PHONE_NUMBER}?text=${encodeURIComponent(msg)}`;
}

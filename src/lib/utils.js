import { SITE } from '@/data/site';


export const waUrl = (text) =>
  `https://wa.me/${SITE.wa}` + (text ? `?text=${encodeURIComponent(text)}` : '');

export const openWa = (text) => window.open(waUrl(text), '_blank');

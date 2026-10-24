import { FaWhatsapp } from 'react-icons/fa';
import { waUrl } from '@/lib/utils';

export default function WhatsAppButton() {
  return (
    <a
      href={waUrl()}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-[48px] right-[30px] z-30 rounded-full bg-[#25D366] px-4 py-3 font-medium text-[#e6f0ea] shadow-lg"
    >
      <FaWhatsapp size={20} />
    </a>
  );
}

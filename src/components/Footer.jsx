
import { FaFacebookF, FaWhatsapp } from 'react-icons/fa';
import { SITE } from '@/data/site';
import { waUrl } from '@/lib/utils';

export default function Footer() {
  return (
    <footer className="bg-cable py-7 text-[.9rem] text-[#B8C6CC]">
      <div className="wrap flex flex-wrap justify-between items-center gap-3">
        <span>
          © 2026 PC Club BD. Prices shown are samples and may change.
        </span>

        <span className="flex items-center gap-4">
          <a
            className="flex items-center gap-2 text-white hover:text-blue-400"
            href={SITE.fb}
            target="_blank"
            rel="noreferrer"
          >
            <FaFacebookF size={18} />
            Facebook
          </a>
        </span>
      </div>
    </footer>
  );
}

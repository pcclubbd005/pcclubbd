import { SERVICES } from '@/data/services';

export default function Services() {
  return (
    <section id="services" className="border-y border-line bg-paper py-14">
      <div className="wrap">
        <h2 className="h2">Installation and support services</h2>
        <ul className="grid gap-x-10 md:grid-cols-2">
          {SERVICES.map(([t, d]) => (
            <li key={t} className="border-t border-line py-4">
              <b className="block font-display text-[1.1rem] font-extrabold">{t}</b>
              <span className="text-mut">{d}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

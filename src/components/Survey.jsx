'use client';
import { useState } from 'react';
import { SERVICES } from '@/data/services';
import { openWa } from '@/lib/utils';

export default function Survey() {
  const [f, setF] = useState({ name: '', phone: '', svc: SERVICES[0][0], msg: '' });
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value });
  const submit = (e) => {
    e.preventDefault();
    openWa(`Site survey request\nName: ${f.name}\nPhone: ${f.phone}\nService: ${f.svc}\nDetails: ${f.msg}`);
  };
  const label = 'grid gap-1 text-[.9rem] font-medium';
  return (
    <div>
      <h2 className="h2">Book a site survey</h2>
      <form onSubmit={submit} className="grid gap-3">
        <label className={label}>Your name<input required className="field" value={f.name} onChange={set('name')} /></label>
        <label className={label}>Phone<input required type="tel" className="field" value={f.phone} onChange={set('phone')} /></label>
        <label className={label}>
          Service
          <select className="field" value={f.svc} onChange={set('svc')}>
            {SERVICES.map(([a]) => <option key={a}>{a}</option>)}
          </select>
        </label>
        <label className={label}>
          Where and what do you need?
          <textarea rows={3} className="field" value={f.msg} onChange={set('msg')} />
        </label>
        <button type="submit" className="btn">Send on WhatsApp</button>
      </form>
    </div>
  );
}

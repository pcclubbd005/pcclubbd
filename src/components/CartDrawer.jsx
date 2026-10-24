'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useStore } from '@/context/store';
import { money } from '@/lib/utils';

export default function CartDrawer() {
  const { open, setOpen, items, cart, change, sub, disc, total, applyCode, order } = useStore();
  const [code, setCode] = useState('');

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [setOpen]);

  if (!open) return null;
  return (
    <>
      <div className="fixed inset-0 z-40 bg-ink/55" onClick={() => setOpen(false)} />
      <aside aria-label="Cart" className="fixed inset-y-0 right-0 z-[41] flex w-[min(420px,100%)] animate-slide flex-col bg-paper">
        <div className="flex items-center justify-between p-5">
          <h3 className="font-display text-[1.3rem] font-extrabold">Your cart</h3>
          <button onClick={() => setOpen(false)} aria-label="Close cart">Close</button>
        </div>
        <div className="flex-1 overflow-auto px-5">
          {items.length ? (
            items.map((p) => (
              <div key={p.id} className="grid grid-cols-[64px_1fr] gap-3 border-b border-line py-3">
                <Image src={p.img} alt="" width={64} height={48} unoptimized className="h-12 w-16 rounded object-cover" />
                <div>
                  <div>{p.n}</div>
                  <div>{money(p.p)}</div>
                  <div className="mt-1 flex items-center gap-2">
                    <button onClick={() => change(p.id, -1)} aria-label="Less" className="h-[26px] w-[26px] rounded border border-line">−</button>
                    {cart[p.id]}
                    <button onClick={() => change(p.id, 1)} aria-label="More" className="h-[26px] w-[26px] rounded border border-line">+</button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="mt-5 rounded-lg border border-dashed border-line p-10 text-center text-mut">
              Your cart is empty. Add a camera, switch or server from the shop.
            </div>
          )}
        </div>
        {items.length > 0 && (
          <div className="grid gap-2.5 border-t border-line p-5">
            <div className="flex gap-2">
              <input className="field flex-1 !p-2.5" placeholder="Discount code" value={code} onChange={(e) => setCode(e.target.value)} />
              <button onClick={() => applyCode(code)} className="rounded-md bg-ink px-4 font-medium text-white hover:bg-cable">Apply</button>
            </div>
            <div className="flex justify-between"><span>Subtotal</span><span>{money(sub)}</span></div>
            {disc > 0 && <div className="flex justify-between"><span>Discount</span><span>−{money(disc)}</span></div>}
            <div className="flex justify-between font-display text-[1.2rem] font-extrabold"><span>Total</span><span>{money(total)}</span></div>
            <button onClick={order} className="btn">Order on WhatsApp</button>
          </div>
        )}
      </aside>
    </>
  );
}

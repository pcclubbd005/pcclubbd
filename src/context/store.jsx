'use client';
import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { PRODUCTS } from '@/data/products';
import { CODES } from '@/data/site';
import { openWa, money } from '@/lib/utils';

const Ctx = createContext(null);
export const useStore = () => useContext(Ctx);

export function StoreProvider({ children }) {
  const [cat, setCat] = useState('All');
  const [cart, setCart] = useState({});
  const [open, setOpen] = useState(false);
  const [off, setOff] = useState(0);
  const [toast, setToast] = useState('');
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem('pcclubbd-cart') || '{}');
      setCart(saved);
    } catch {}
    setReady(true);
  }, []);
  useEffect(() => {
    if (ready) localStorage.setItem('pcclubbd-cart', JSON.stringify(cart));
  }, [cart, ready]);
  useEffect(() => {
    if (!toast) return;
    const t = setTimeout(() => setToast(''), 2200);
    return () => clearTimeout(t);
  }, [toast]);

  const add = useCallback((p) => {
    setCart((c) => ({ ...c, [p.id]: (c[p.id] || 0) + 1 }));
    setToast(`${p.n} added to cart`);
  }, []);
  const change = useCallback((id, d) => {
    setCart((c) => {
      const n = (c[id] || 0) + d;
      const x = { ...c };
      if (n <= 0) delete x[id];
      else x[id] = n;
      return x;
    });
  }, []);
  const applyCode = useCallback((code) => {
    const r = CODES[code.trim().toUpperCase()];
    setOff(r || 0);
    setToast(r ? 'Code applied' : 'Code not valid. Try SECURE10 or WELCOME30');
  }, []);
  const pickCategory = useCallback((c) => {
    setCat(c);
    document.getElementById('shop')?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  const items = useMemo(() => PRODUCTS.filter((p) => cart[p.id]), [cart]);
  const count = items.reduce((s, p) => s + cart[p.id], 0);
  const sub = items.reduce((s, p) => s + p.p * cart[p.id], 0);
  const disc = Math.round(sub * off);
  const total = sub - disc;

  const order = () =>
    openWa(
      'Hello PC Club BD, I want to order:\n' +
        items.map((p) => `${cart[p.id]} x ${p.n} - ${money(p.p * cart[p.id])}`).join('\n') +
        (disc ? `\nDiscount: -${money(disc)}` : '') +
        `\nTotal: ${money(total)}`
    );

  const value = { cat, setCat, cart, items, count, sub, disc, total, open, setOpen, toast, add, change, applyCode, pickCategory, order };
  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

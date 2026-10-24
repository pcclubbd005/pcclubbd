'use client';
import { useMemo, useState } from 'react';
import { CATEGORIES, PRODUCTS } from '@/data/products';
import { useStore } from '@/context/store';
import ProductCard from './ProductCard';

export default function Shop() {
  const { cat, setCat } = useStore();
  const [q, setQ] = useState('');
  const [sort, setSort] = useState('pop');

  const list = useMemo(() => {
    let l = PRODUCTS.filter(
      (p) => (cat === 'All' || p.c === cat) && `${p.n} ${p.s}`.toLowerCase().includes(q.toLowerCase())
    );
    if (sort === 'lo') l = [...l].sort((a, b) => a.p - b.p);
    if (sort === 'hi') l = [...l].sort((a, b) => b.p - a.p);
    return l;
  }, [cat, q, sort]);

  return (
    <section id="shop" className="py-14">
      <div className="wrap">
        <h2 className="h2">Shop equipment</h2>
        <div className="mb-[22px] flex flex-wrap gap-2.5">
          <input
            className="field min-w-[200px] flex-1 !w-auto !p-2.5"
            placeholder="Search cameras, switches, servers"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            aria-label="Search products"
          />
          <select className="field !w-auto !p-2.5" value={sort} onChange={(e) => setSort(e.target.value)} aria-label="Sort products">
            <option value="pop">Featured</option>
            <option value="lo">Price: low to high</option>
            <option value="hi">Price: high to low</option>
          </select>
        </div>
        <div className="mb-[22px] flex flex-wrap gap-2">
          {['All', ...CATEGORIES].map((c) => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={`rounded-full border px-3.5 py-[7px] text-[.9rem] ${cat === c ? 'border-ink bg-ink text-white' : 'border-line bg-paper'}`}
            >
              {c}
            </button>
          ))}
        </div>
        {list.length ? (
          <div className="grid grid-cols-[repeat(auto-fill,minmax(235px,1fr))] gap-[18px]">
            {list.map((p) => <ProductCard key={p.id} p={p} />)}
          </div>
        ) : (
          <div className="rounded-lg border border-dashed border-line p-10 text-center text-mut">
            No products match. Clear the search or pick another category.
          </div>
        )}
      </div>
    </section>
  );
}

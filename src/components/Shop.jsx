
'use client';

import { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { CATEGORIES, PRODUCTS } from '@/data/products';
import { useStore } from '@/context/store';
import ProductCard from './ProductCard';

export default function Shop() {
  const { cat, setCat } = useStore();
  const searchParams = useSearchParams();

  const [q, setQ] = useState('');
  const [sort, setSort] = useState('pop');

  // Select category from URLs such as /shop?category=IP%20Camera
  useEffect(() => {
    const category = searchParams.get('category');

    if (category && CATEGORIES.includes(category)) {
      setCat(category);
    } else if (!category) {
      setCat('All');
    }
  }, [searchParams, setCat]);

  const list = useMemo(() => {
    let products = PRODUCTS.filter(
      (p) =>
        (cat === 'All' || p.c === cat) &&
        `${p.n} ${p.s} ${p.brand || ''} ${p.model || ''}`
          .toLowerCase()
          .includes(q.toLowerCase())
    );

    if (sort === 'lo') {
      products = [...products].sort((a, b) => a.p - b.p);
    }

    if (sort === 'hi') {
      products = [...products].sort((a, b) => b.p - a.p);
    }

    return products;
  }, [cat, q, sort]);

  return (
    <section id="shop" className="py-14">
      <div className="wrap">
        <h2 className="h2">IT equipment</h2>

        <div className="mb-[22px] flex flex-wrap gap-2.5">
          <input
            className="field min-w-[200px] flex-1 !w-auto !p-2.5"
            placeholder="Search cameras, switches, servers"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            aria-label="Search products"
          />

          <select
            className="field !w-auto !p-2.5"
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            aria-label="Sort products"
          >
            <option value="pop">Featured</option>
            <option value="lo">Price: low to high</option>
            <option value="hi">Price: high to low</option>
          </select>
        </div>

        <div className="mb-[22px] flex flex-wrap gap-2">
          {['All', ...CATEGORIES].map((category) => (
            <button
              key={category}
              onClick={() => setCat(category)}
              className={`rounded-full border px-3.5 py-[7px] text-[.9rem] ${
                cat === category
                  ? 'border-ink bg-ink text-white'
                  : 'border-line bg-paper'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {list.length ? (
          <div className="grid grid-cols-[repeat(auto-fill,minmax(235px,1fr))] gap-[18px]">
            {list.map((product) => (
              <ProductCard key={product.id} p={product} />
            ))}
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

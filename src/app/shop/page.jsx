
'use client';

import { Suspense, useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { CATEGORIES, PRODUCTS } from '@/data/products';
import { useStore } from '@/context/store';
import ProductCard from '@/components/ProductCard';

function ShopContent() {
  const searchParams = useSearchParams();
  const { cat, setCat } = useStore();

  const [q, setQ] = useState('');
  const [sort, setSort] = useState('pop');

  // Read category from /shop?category=IP%20Camera
  useEffect(() => {
    const category = searchParams.get('category');

    if (category && CATEGORIES.includes(category)) {
      setCat(category);
    } else {
      setCat('All');
    }
  }, [searchParams, setCat]);

  const list = useMemo(() => {
    let result = PRODUCTS.filter((p) => {
      const matchesCategory = cat === 'All' || p.c === cat;
      const searchText =
        `${p.n} ${p.s || ''} ${p.brand || ''} ${p.model || ''}`.toLowerCase();
      const matchesSearch = searchText.includes(q.toLowerCase());

      return matchesCategory && matchesSearch;
    });

    if (sort === 'lo') {
      result = [...result].sort((a, b) => a.p - b.p);
    } else if (sort === 'hi') {
      result = [...result].sort((a, b) => b.p - a.p);
    }

    return result;
  }, [cat, q, sort]);

  return (
    <section id="shop" className="py-14">
      <div className="wrap">
        <h1 className="h2 mb-5">
          {cat === 'All' ? 'IT Equipment' : cat}
        </h1>

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
              type="button"
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

        <p className="mb-4 text-sm text-mut">
          {list.length} product{list.length !== 1 ? 's' : ''} found
        </p>

        {list.length > 0 ? (
          <div className="grid grid-cols-[repeat(auto-fill,minmax(235px,1fr))] gap-[18px]">
            {list.map((product) => (
              <ProductCard key={product.id} p={product} />
            ))}
          </div>
        ) : (
          <div className="rounded-lg border border-dashed border-line p-10 text-center text-mut">
            No products match. Clear the search or select another category.
          </div>
        )}
      </div>
    </section>
  );
}

export default function ShopPage() {
  return (
    <Suspense
      fallback={
        <section className="py-14">
          <div className="wrap">Loading products...</div>
        </section>
      }
    >
      <ShopContent />
    </Suspense>
  );
}

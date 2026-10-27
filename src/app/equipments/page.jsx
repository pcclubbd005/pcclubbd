
'use client';

import { Suspense, useEffect, useMemo, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { CATEGORIES, PRODUCTS } from '@/data/products';
import { useStore } from '@/context/store';
import ProductCard from '@/components/ProductCard';

function ShopContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { cat, setCat } = useStore();

  const [q, setQ] = useState('');
  const [sort, setSort] = useState('pop');

  // URL is the source of truth when opening or refreshing /shop
  const urlCategory = searchParams.get('category');
  const selectedCategory =
    urlCategory && CATEGORIES.includes(urlCategory) ? urlCategory : 'All';

  useEffect(() => {
    if (cat !== selectedCategory) {
      setCat(selectedCategory);
    }
  }, [cat, selectedCategory, setCat]);

  // Clicking a category updates both the URL and store
  function selectCategory(category) {
    setCat(category);

    const params = new URLSearchParams(searchParams.toString());

    if (category === 'All') {
      params.delete('category');
    } else {
      params.set('category', category);
    }

    const query = params.toString();
    router.push(query ? `/equipments?${query}` : '/equipments');
  }

  const list = useMemo(() => {
    let result = PRODUCTS.filter((product) => {
      const matchesCategory =
        selectedCategory === 'All' || product.c === selectedCategory;

      const searchableText =
        `${product.n} ${product.s || ''} ${product.brand || ''} ${product.model || ''}`.toLowerCase();

      return matchesCategory && searchableText.includes(q.toLowerCase());
    });

    if (sort === 'lo') {
      result = [...result].sort((a, b) => a.p - b.p);
    } else if (sort === 'hi') {
      result = [...result].sort((a, b) => b.p - a.p);
    }

    return result;
  }, [selectedCategory, q, sort]);

  return (
    <section id="shop" className="py-14">
      <div className="wrap">
        <h1 className="h2 mb-5">
          {selectedCategory === 'All' ? 'IT Equipment' : selectedCategory}
        </h1>

        <div className="mb-[22px] flex flex-wrap gap-2.5">
          <input
            className="field min-w-[200px] flex-1 !w-auto !p-2.5"
            placeholder="Search cameras, switches, servers"
            value={q}
            onChange={(event) => setQ(event.target.value)}
            aria-label="Search products"
          />

          <select
            className="field !w-auto !p-2.5"
            value={sort}
            onChange={(event) => setSort(event.target.value)}
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
              onClick={() => selectCategory(category)}
              aria-pressed={selectedCategory === category}
              className={`rounded-full border px-3.5 py-[7px] text-[.9rem] ${
                selectedCategory === category
                  ? 'border-ink bg-ink text-white'
                  : 'border-line bg-paper text-ink'
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

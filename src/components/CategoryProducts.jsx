
'use client';

import { useMemo } from 'react';
import Link from 'next/link';
import { CATEGORIES, PRODUCTS } from '@/data/products';
import ProductCard from '@/components/ProductCard';

export default function CategoryProducts() {
  const products = useMemo(() => PRODUCTS, []);

  return (
    <section className="py-10">
      <div className="wrap">
        <h2 className="h2 mb-5">IT Equipment</h2>

        <div className="mb-5 flex flex-wrap gap-2">
          <Link
            href="/"
            className="rounded-full border border-ink bg-ink px-4 py-2 text-sm text-white"
          >
            All Products
          </Link>

          {CATEGORIES.map((category) => (
            <Link
              key={category}
              href={`/shop?category=${encodeURIComponent(category)}`}
              className="rounded-full border border-line bg-paper px-4 py-2 text-sm"
            >
              {category}
            </Link>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {products.slice(0, 3).map((product) => (
            <ProductCard key={product.id} p={product} />
          ))}
        </div>

        <div className="mt-6 text-center">
          <Link
            href="/shop"
            className="inline-block rounded-md bg-ink px-6 py-3 text-sm font-semibold text-white"
          >
            View All Products →
          </Link>
        </div>
      </div>
    </section>
  );
}

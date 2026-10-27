
'use client';

import Link from 'next/link';
import { CATEGORIES, PRODUCTS } from '@/data/products';
import ProductCard from '@/components/ProductCard';

export default function CategoryProducts() {
  return (
    <section id="equipments" className="py-10">
      <div className="wrap">
        <h2 className="h2 mb-5">IT Equipment</h2>

        {/* Clicking a category opens the filtered Shop page */}
        <div className="mb-5 flex flex-wrap gap-2">
          <Link
            href="/equipments"
            className="rounded-full border border-ink bg-ink px-4 py-2 text-sm text-white"
          >
            All Products
          </Link>

          {CATEGORIES.map((category) => (
            <Link
              key={category}
              href={`/equipments?category=${encodeURIComponent(category)}`}
              className="rounded-full border border-line bg-paper px-4 py-2 text-sm text-ink transition-colors hover:border-ink hover:bg-ink hover:text-white"
            >
              {category}
            </Link>
          ))}
        </div>

        {/* One product on mobile, three on desktop */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-[18px]">
          {PRODUCTS.slice(0, 3).map((product, index) => (
            <div
              key={product.id}
              className={index > 0 ? 'hidden md:block' : ''}
            >
              <ProductCard p={product} />
            </div>
          ))}
        </div>

        {/* Open the full catalog */}
        <div className="mt-6 text-center">
          <Link
            href="/equipments"
            className="inline-flex items-center justify-center rounded-md bg-ink px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-cable"
          >
            View More Products →
          </Link>
        </div>
      </div>
    </section>
  );
}

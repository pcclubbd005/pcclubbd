'use client';
import { PRODUCTS, RACK } from '@/data/products';
import { useStore } from '@/context/store';

export default function Rack() {
  const { pickCategory } = useStore();
  return (
    <div role="list" aria-label="What we install" className="grid gap-2 rounded-[10px] border-[6px] border-[#0A1620] bg-rack p-3.5">
      {RACK.map(([name, cat], i) => (
        <button
          key={cat}
          role="listitem"
          onClick={() => pickCategory(cat)}
          className="flex w-full items-center gap-3 rounded border border-[#2C4A5A] bg-rack2 px-3.5 py-[13px] text-left text-[#E6ECEE] hover:border-cable"
        >
          <i
            className={`h-[9px] w-[9px] animate-blink rounded-full ${i % 2 ? 'bg-amber shadow-[0_0_8px_#FFB020]' : 'bg-led shadow-[0_0_8px_#22C55E]'}`}
            style={{ animationDelay: `${(i % 3) * 0.65}s` }}
          />
          <span className="flex-1 font-medium">{name}</span>
          <small className="text-[#8FA6B1]">{PRODUCTS.filter((p) => p.c === cat).length} items</small>
          <em className="flex gap-[3px]">
            {[0, 1, 2, 3].map((k) => (
              <u key={k} className="h-[9px] w-[7px] rounded-[1px] bg-[#0A1620]" />
            ))}
          </em>
        </button>
      ))}
    </div>
  );
}

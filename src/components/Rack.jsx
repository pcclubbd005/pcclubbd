"use client";

import { PRODUCTS, RACK } from "@/data/products";
import { useStore } from "@/context/store";

export default function Rack() {
  const store = useStore();
  const pickCategory = store?.pickCategory;

  return (
    <div
      role="list"
      aria-label="What we install"
      className="grid gap-2 rounded-[10px] border-[6px] border-[#0A1620] bg-rack p-3.5"
    >
      {RACK.map((item, i) => {
        // Support both ["IP Camera", "IP Camera"] and
        // { name: "IP Camera", href: "..." } formats.
        const name = Array.isArray(item)
          ? item[0]
          : item.name;

        const cat = Array.isArray(item)
          ? item[1]
          : item.category ?? item.name;

        const itemCount = PRODUCTS.filter(
          (product) => product.c === cat
        ).length;

        return (
          <button
            key={cat ?? i}
            type="button"
            role="listitem"
            onClick={() => {
              if (typeof pickCategory === "function") {
                pickCategory(cat);
              }
            }}
            className="flex w-full items-center gap-3 rounded border border-[#2C4A5A] bg-rack2 px-3.5 py-[13px] text-left text-[#E6ECEE] hover:border-cable"
          >
            <i
              aria-hidden="true"
              className={`h-[9px] w-[9px] animate-blink rounded-full ${
                i % 2
                  ? "bg-amber shadow-[0_0_8px_#FFB020]"
                  : "bg-led shadow-[0_0_8px_#22C55E]"
              }`}
              style={{
                animationDelay: `${(i % 3) * 0.65}s`,
              }}
            />

            <span className="flex-1 font-medium">{name}</span>

            <small className="text-[#8FA6B1]">
              {itemCount} items
            </small>

            <span aria-hidden="true" className="flex gap-[3px]">
              {[0, 1, 2, 3].map((k) => (
                <span
                  key={k}
                  className="h-[9px] w-[7px] rounded-[1px] bg-[#0A1620]"
                />
              ))}
            </span>
          </button>
        );
      })}
    </div>
  );
}
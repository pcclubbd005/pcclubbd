"use client";

import Image from "next/image";
import { useStore } from "@/context/store";
import { openWa } from "@/lib/utils";
import { ShoppingCart, Tags } from "lucide-react";

export default function ProductCard({ p }) {
  const { add } = useStore();

  const askPrice = () => {
    const message = [
      "Hello Admin, I would like to know the price of this product.",
      "",
      `Product: ${p.n}`,
      `Description: ${p.s || "N/A"}`,
      `Brand: ${p.brand || "Not specified"}`,
      `Model: ${p.model || "Not specified"}`,
      `Category: ${p.c || "N/A"}`,
      "",
      "Please let me know the current price and availability.",
    ].join("\n");

    openWa(message);
  };

  return (
    <article className="flex flex-col overflow-hidden rounded-lg border border-line bg-paper">
      <Image
        src={p.img}
        alt={p.n}
        width={480}
        height={360}
        unoptimized
        className="aspect-[4/3] w-full bg-[#DDE3E5] object-cover"
      />

      <div className="flex flex-1 flex-col gap-2 p-3.5">
        <small className="font-medium text-cable">{p.c}</small>

        <h3 className="text-[1.02rem] font-medium leading-[1.3]">{p.n}</h3>

        <p className="flex-1 text-[.88rem] text-mut">{p.s}</p>

        {/* Ask for price on WhatsApp */}
        <button
          type="button"
          onClick={askPrice}
          className="mt-2 flex items-center justify-center gap-2 rounded-md border border-cable p-2.5 font-semibold text-cable transition-colors hover:bg-cable hover:text-white"
          aria-label={`Ask for price of ${p.n}`}
        >
          <Tags size={18} className="animate-heartbeat" />
          <span>Click here for price</span>
        </button>

        {/* Add to Cart */}
        <button
          type="button"
          onClick={() => add(p)}
          className="flex items-center justify-center gap-2 rounded-md bg-cable p-2.5 font-medium text-white transition-colors hover:bg-ink"
          aria-label={`Add ${p.n} to cart`}
        >
          <ShoppingCart size={18} />
          <span>Add to Cart</span>
        </button>
      </div>
    </article>
  );
}

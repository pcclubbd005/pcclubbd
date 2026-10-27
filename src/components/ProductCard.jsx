
"use client";

import { useState } from "react";
import Image from "next/image";
import { useStore } from "@/context/store";
import { openWa } from "@/lib/utils";
import { ShoppingCart, Tags } from "lucide-react";

const FALLBACK_IMAGE =
  "https://placehold.co/480x360/e8edef/263238?text=Uniview+Product";

export default function ProductCard({ p }) {
  const { add } = useStore();
  const [imageSrc, setImageSrc] = useState(p.img || FALLBACK_IMAGE);

  const askPrice = () => {
    const message = [
      "Hello PC Club BD, I would like to know the price and availability of this product.",
      "",
      `Product: ${p.n}`,
      `Brand: ${p.brand || "Uniview"}`,
      `Model: ${p.model || "Not specified"}`,
      `Category: ${p.c || "N/A"}`,
      `Listed MRP: ${
        typeof p.p === "number"
          ? `৳${p.p.toLocaleString("en-BD")}`
          : "Call for Price"
      }`,
      "",
      "Please confirm the current price and availability.",
    ].join("\n");

    openWa(message);
  };

  const hasPrice = typeof p.p === "number" && p.p > 0;

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-lg border border-line bg-paper">
      <div className="relative aspect-[4/3] w-full bg-[#ffffff]">
        <Image
          src={imageSrc}
          alt={`${p.n} ${p.model || ""}`.trim()}
          fill
          unoptimized
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-contain p-2"
          onError={() => {
            if (imageSrc !== FALLBACK_IMAGE) {
              setImageSrc(FALLBACK_IMAGE);
            }
          }}
        />
      </div>

      <div className="flex flex-1 flex-col gap-2 p-3.5">
        <small className="font-medium text-cable">
          {p.c}
        </small>

        <h3 className="text-[1.02rem] font-semibold leading-[1.3]">
          {p.n}
        </h3>

        {p.model && (
          <p className="break-words text-xs text-mut">
            Model: {p.model}
          </p>
        )}

        <p className="flex-1 text-[.88rem] text-mut">
          {p.s}
        </p>

        <div className="mt-1">
          {hasPrice ? (
            <p className="text-lg font-bold text-cable">
              ৳{p.p.toLocaleString("en-BD")}
              <span className="ml-1 text-xs font-normal text-mut">
                (MRP)
              </span>
            </p>
          ) : (
            <p className="text-base font-bold text-cable">
              Call for Price
            </p>
          )}
        </div>

        <button
          type="button"
          onClick={askPrice}
          className="mt-2 flex items-center justify-center gap-2 rounded-md border border-cable p-2.5 font-semibold text-cable transition-colors hover:bg-cable hover:text-white"
          aria-label={`Ask for price of ${p.n}`}
        >
          <Tags size={18} />
          <span>Ask on WhatsApp</span>
        </button>

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

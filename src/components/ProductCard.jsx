'use client';
import Image from 'next/image';
import { useStore } from '@/context/store';
import { money } from '@/lib/utils';

export default function ProductCard({ p }) {
  const { add } = useStore();
  return (
    <article className="flex flex-col overflow-hidden rounded-lg border border-line bg-paper">
      <Image src={p.img} alt={p.n} width={480} height={360} unoptimized className="aspect-[4/3] w-full bg-[#DDE3E5] object-cover" />
      <div className="flex flex-1 flex-col gap-1.5 p-3.5">
        <small className="font-medium text-cable">{p.c}</small>
        <h3 className="text-[1.02rem] font-medium leading-[1.3]">{p.n}</h3>
        <p className="flex-1 text-[.88rem] text-mut">{p.s}</p>
        <div className="flex items-baseline gap-2 font-display text-[1.2rem] font-extrabold">
          {money(p.p)}
          {p.o && <s className="font-body text-[.85rem] font-normal text-mut">{money(p.o)}</s>}
        </div>
        <button onClick={() => add(p)} className="rounded-md bg-cable p-2.5 font-medium text-white hover:bg-ink">
          Add to cart
        </button>
      </div>
    </article>
  );
}

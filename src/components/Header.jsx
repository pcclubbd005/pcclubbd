
"use client";

import { useStore } from "@/context/store";
import { FaBars, FaCartShopping, FaXmark } from "react-icons/fa6";
import { useState } from "react";

const NAV = [
  ["Shop", "#shop"],
  ["Services", "#services"],
  ["Site survey", "#survey"],
  ["Contact", "#contact"],
];

export default function Header() {
  const { count, setOpen } = useStore();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 border-b border-line bg-paper/95 shadow-sm backdrop-blur">
      <div className="wrap flex min-h-16 items-center gap-3 py-2 sm:gap-4">
        {/* Logo */}
        <a
          href="#top"
          className="flex min-w-0 shrink items-center gap-2"
          onClick={() => setMenuOpen(false)}
        >
          <img
            src="/hello_ecomm2/images/cropped-pcclub.jpg"
            alt="PC Club BD logo"
            className="h-9 w-auto max-w-10 shrink-0 object-contain sm:h-10 sm:max-w-none"
          />

          <span className="truncate font-display text-base font-extrabold tracking-tight sm:text-xl">
            PC CLUB
          </span>
        </a>

        {/* Desktop navigation */}
        <nav className="ml-auto hidden items-center gap-4 lg:flex xl:gap-6">
          {NAV.map(([name, href]) => (
            <a
              key={href}
              href={href}
              className="whitespace-nowrap text-sm font-medium transition-colors hover:text-cable xl:text-base"
            >
              {name}
            </a>
          ))}
        </nav>

        {/* Cart */}
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label={`Open cart, ${count} items`}
          className="ml-auto flex shrink-0 items-center gap-2 rounded-md bg-cable px-3 py-2 text-sm font-medium text-white transition-colors hover:bg-ink sm:px-4 lg:ml-4"
        >
          <FaCartShopping aria-hidden="true" />
          <span>Cart</span>
          <b className="flex h-5 min-w-5 items-center justify-center rounded-full bg-white px-1 text-xs text-ink">
            {count}
          </b>
        </button>

        {/* Mobile menu toggle */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-line text-ink transition-colors hover:bg-gray-100 lg:hidden"
        >
          {menuOpen ? <FaXmark /> : <FaBars />}
        </button>
      </div>

      {/* Mobile navigation */}
      {menuOpen && (
        <nav className="border-t border-line bg-paper px-4 py-2 lg:hidden">
          {NAV.map(([name, href]) => (
            <a
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="block rounded-md px-3 py-3 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-cable"
            >
              {name}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}

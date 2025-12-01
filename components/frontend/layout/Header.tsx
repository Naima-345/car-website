"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full sticky top-0 z-50 bg-[#F5EEDC] shadow-md border-b border-[#E6D9B6]">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* --- Logo Section --- */}
        <Link href="/" className="text-2xl font-bold tracking-wide">
          <span className="text-[#A67B5B]">AL</span>{" "}
          <span className="text-[#008080]">Qawsa</span>{" "}
          <span className="text-[#C19A6B]">Imports</span>
        </Link>

        {/* --- Desktop Menu --- */}
        <nav className="hidden md:flex items-center gap-10 text-[#5A4B3C] font-medium">
          <Link href="/" className="hover:text-[#008080] transition">Home</Link>
          <Link href="/cars" className="hover:text-[#008080] transition">Cars</Link>
          <Link href="/about" className="hover:text-[#008080] transition">About</Link>
          <Link href="/contact" className="hover:text-[#008080] transition">Contact</Link>

          <Link
            href="/inquiry"
            className="
              bg-[#C19A6B]
              text-white
              px-5 py-2
              rounded-xl
              shadow-sm
              hover:bg-[#A67B5B]
              transition-all
            "
          >
            Import Now
          </Link>
        </nav>

        {/* --- Mobile Menu Button --- */}
        <button
          className="md:hidden text-[#5A4B3C]"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* --- Mobile Dropdown Menu --- */}
      {open && (
        <div className="md:hidden bg-[#F5EEDC] border-t border-[#E6D9B6] px-6 py-4 space-y-4 text-[#5A4B3C] font-medium">
          <Link href="/" className="block hover:text-[#008080]">Home</Link>
          <Link href="/cars" className="block hover:text-[#008080]">Cars</Link>
          <Link href="/about" className="block hover:text-[#008080]">About</Link>
          <Link href="/contact" className="block hover:text-[#008080]">Contact</Link>

          <Link
            href="/inquiry"
            className="
              inline-block
              bg-[#C19A6B]
              text-white
              px-5 py-2
              rounded-xl
              shadow-sm
              hover:bg-[#A67B5B]
              transition-all
            "
          >
            Import Now
          </Link>
        </div>
      )}
    </header>
  );
}

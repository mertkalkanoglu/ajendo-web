"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-sm border-slate-200/80 shadow-sm"
          : "bg-white border-transparent"
      }`}
    >
      <div className="mx-auto max-w-6xl px-6 flex items-center justify-between py-3">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo-horizontal.png"
            alt="Ajendo"
            width={0}
            height={0}
            sizes="160px"
            style={{
              height: scrolled ? "26px" : "30px",
              width: "auto",
              transition: "height 0.3s ease",
            }}
            priority
          />
        </Link>
        <a
          href="mailto:support@ajendo.app?subject=Erken Erişim Talebi"
          className="inline-flex items-center gap-2 bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors"
        >
          Erken Erişim
        </a>
      </div>
    </header>
  );
}

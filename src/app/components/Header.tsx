"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone } from "lucide-react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToForm = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#FF6B00] shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center select-none">
          <Image
            src="/logoFR.png"
            alt="FacileRisarcimento"
            width={0}
            height={0}
            sizes="(max-width: 640px) 200px, 280px"
            className={`h-14 sm:h-16 w-auto object-contain transition-all duration-300 ${
              scrolled ? "brightness-0 invert" : ""
            }`}
            priority
          />
        </Link>

        <a
          href="#contact-form"
          onClick={scrollToForm}
          className={`font-bold px-3 sm:px-5 py-2 rounded-full text-sm active:scale-95 transition-all duration-300 flex items-center gap-2 shadow-sm ${
            scrolled
              ? "bg-white text-[#1A365D] hover:bg-blue-50"
              : "bg-[#FF6B00] text-white hover:bg-[#e55f00] border border-white/30"
          }`}
        >
          <Phone size={16} strokeWidth={2.5} />
          <span className="hidden sm:inline">Chiamaci Gratis</span>
        </a>
      </div>
    </header>
  );
}

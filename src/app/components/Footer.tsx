"use client";

import Image from "next/image";
import Link from "next/link";
import { useLocale } from "../i18n/LocaleContext";
import { translations } from "../i18n/translations";

export default function Footer() {
  const { locale } = useLocale();
  const t = translations[locale];

  return (
    <footer className="bg-[#0f2240] text-blue-300 py-10 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left">
            <Image
              src="/logo.svg"
              alt="FacileRisarcimento"
              width={0}
              height={0}
              sizes="280px"
              className="h-[52px] sm:h-[74px] w-auto object-contain brightness-0 invert mb-2 mx-auto sm:mx-0"
            />
            <p className="text-sm text-blue-400">
              {t.footer.tagline}
            </p>
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm justify-center">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">{t.footer.links[0]}</Link>
            <Link href="/cookie-policy" className="hover:text-white transition-colors">{t.footer.links[1]}</Link>
            <Link href="/termini-condizioni" className="hover:text-white transition-colors">{t.footer.links[2]}</Link>
            <a href="#contact-form" className="hover:text-white transition-colors">{t.footer.links[3]}</a>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-6 text-center text-xs text-blue-500 leading-relaxed">
          <p>
            © {new Date().getFullYear()} RisarcimentoSemplice. {t.footer.rights} {t.footer.legal}
          </p>
          <p className="mt-2">
            {t.footer.disclaimer}
          </p>
        </div>
      </div>
    </footer>
  );
}

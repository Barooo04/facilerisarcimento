"use client";

import { MessageCircle } from "lucide-react";
import { useLocale } from "../i18n/LocaleContext";
import { translations } from "../i18n/translations";

export default function FAB() {
  const { locale } = useLocale();
  const t = translations[locale];

  const scrollToForm = () => {
    document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToForm}
      aria-label={t.fab.aria}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#FF6B00] hover:bg-[#e55f00] active:scale-95 text-white shadow-xl hover:shadow-2xl transition-all duration-200 flex items-center justify-center cursor-pointer"
    >
      <MessageCircle size={24} strokeWidth={2} />
    </button>
  );
}

"use client";

import { MessageCircle } from "lucide-react";

export default function FAB() {
  const scrollToForm = () => {
    document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToForm}
      aria-label="Vai al modulo di contatto"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#FF6B00] hover:bg-[#e55f00] active:scale-95 text-white shadow-xl hover:shadow-2xl transition-all duration-200 flex items-center justify-center"
    >
      <MessageCircle size={24} strokeWidth={2} />
    </button>
  );
}

"use client";

import { useState, FormEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, AlertCircle, Send } from "lucide-react";
import { useLocale } from "../i18n/LocaleContext";
import { translations } from "../i18n/translations";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { locale } = useLocale();
  const t = translations[locale];
  const socialProfiles = ["/profiles/p1.jpg", "/profiles/p2.jpg", "/profiles/p3.jpg", "/profiles/p4.jpg", "/profiles/p5.jpg"];

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const form = e.currentTarget;
    const data = new FormData(form);
    const phone = data.get("phone") as string;
    const privacy = data.get("privacy");

    if (!phone?.trim()) {
      setError(t.contact.errors.phone);
      setLoading(false);
      return;
    }
    if (!privacy) {
      setError(t.contact.errors.privacy);
      setLoading(false);
      return;
    }

    // Simulated submission
    setTimeout(() => {
      setSubmitted(true);
      setLoading(false);
    }, 1200);
  };

  return (
    <section
      id="contact-form"
      className="bg-[#1A365D] section-mobile px-4 sm:px-6 scroll-mt-52"
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-white section-header-mobile max-w-3xl">
          <p className="section-eyebrow-mobile text-[#FFB066]">CONTATTI</p>
          <h2 className="font-cal section-title-mobile sm:text-4xl leading-tight">
            <span>{t.contact.title} </span>
            <span className="text-[#FF6B00] block sm:inline">{t.contact.accent}</span>
          </h2>

          <p className="section-desc-mobile text-blue-200">
            {t.contact.desc}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start section-after-desc-mobile">
          <div className="order-2 md:order-2">
            {/* Trust list */}
            <ul className="space-y-3">
              {t.contact.trust.map((item: string) => (
                <li key={item} className="flex items-center gap-3 text-blue-100 text-sm">
                  <CheckCircle2 size={18} className="text-[#28A745] shrink-0" />
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>

            {/* Social proof */}
            <div className="mt-8 pt-6 border-t border-white/10">
              <p className="text-blue-300 text-sm mb-3">{t.contact.social}</p>
              <div className="flex -space-x-2">
                {socialProfiles.map((src, i) => (
                  <div
                    key={i}
                    className="w-9 h-9 rounded-full overflow-hidden border-2 border-[#1A365D]"
                  >
                    <Image src={src} alt={`Cliente ${i + 1}`} width={36} height={36} className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="order-1 bg-white rounded-3xl shadow-2xl p-7 sm:p-9 md:order-1">
            {submitted ? (
              <div className="flex flex-col items-center text-center py-8">
                <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mb-5">
                  <CheckCircle2 size={40} className="text-[#28A745]" />
                </div>
                <h3 className="text-2xl font-black text-[#1A365D] mb-3">
                  {t.contact.successTitle}
                </h3>
                <p className="text-gray-500 leading-relaxed">
                  {t.contact.successDesc}
                </p>
              </div>
            ) : (
              <>
                <h3 className="text-xl font-black text-[#1A365D] mb-1">
                  {t.contact.formTitle}
                </h3>
                <p className="text-gray-400 text-sm mb-6">
                  {t.contact.formSubtitle}
                </p>

                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                  {/* Name */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5" htmlFor="name">
                      {t.contact.labels.name}
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder={t.contact.placeholders.name}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#FF6B00] focus:ring-2 focus:ring-orange-100 outline-none text-gray-800 placeholder-gray-300 transition-all text-sm"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5" htmlFor="phone">
                      {t.contact.labels.phone}{" "}
                      <span className="text-[#FF6B00]">*</span>
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      placeholder={t.contact.placeholders.phone}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#FF6B00] focus:ring-2 focus:ring-orange-100 outline-none text-gray-800 placeholder-gray-300 transition-all text-sm"
                    />
                  </div>

                  {/* Language */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5" htmlFor="language">
                      {t.contact.labels.language}
                    </label>
                    <select
                      id="language"
                      name="language"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#FF6B00] focus:ring-2 focus:ring-orange-100 outline-none text-gray-800 transition-all text-sm bg-white appearance-none cursor-pointer"
                    >
                      <option value="">{t.contact.placeholders.language}</option>
                      {t.contact.languageOptions.map((l: string) => (
                        <option key={l} value={l}>{l}</option>
                      ))}
                    </select>
                  </div>

                  {/* Case type */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5" htmlFor="caseType">
                      {t.contact.labels.caseType}
                    </label>
                    <select
                      id="caseType"
                      name="caseType"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#FF6B00] focus:ring-2 focus:ring-orange-100 outline-none text-gray-800 transition-all text-sm bg-white appearance-none cursor-pointer"
                    >
                      <option value="">{t.contact.placeholders.caseType}</option>
                      {t.contact.caseOptions.map((c: string) => (
                        <option key={c} value={c}>{c}</option>
                      ))}
                    </select>
                  </div>

                  {/* Privacy checkbox */}
                  <div className="flex items-start gap-3 pt-1">
                    <input
                      id="privacy"
                      name="privacy"
                      type="checkbox"
                      className="mt-0.5 w-4 h-4 accent-[#FF6B00] cursor-pointer shrink-0"
                    />
                    <label htmlFor="privacy" className="text-xs text-gray-500 leading-relaxed cursor-pointer">
                      {t.contact.labels.privacy}{" "}
                      <Link href="/privacy-policy" className="text-[#FF6B00] underline hover:no-underline">
                        Privacy Policy
                      </Link>{" "}
                      e{" "}
                      <Link href="/termini-condizioni" className="text-[#FF6B00] underline hover:no-underline">
                        Termini e Condizioni
                      </Link>
                      .
                    </label>
                  </div>

                  {/* Error */}
                  {error && (
                    <div className="flex items-center gap-2 text-red-600 bg-red-50 border border-red-200 rounded-xl px-4 py-3 text-sm">
                      <AlertCircle size={16} className="shrink-0" />
                      {error}
                    </div>
                  )}

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-mobile-unified w-full flex items-center justify-center gap-2 bg-[#FF6B00] hover:bg-[#e55f00] disabled:bg-orange-300 text-white font-black shadow-md hover:shadow-lg active:scale-[0.98] transition-all duration-150 uppercase tracking-wide mt-2"
                  >
                    {loading ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                        {t.contact.loading}
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        {t.contact.submit}
                      </>
                    )}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

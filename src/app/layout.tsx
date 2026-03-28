import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "RisarcimentoSemplice – Ottieni il risarcimento che ti spetta",
  description:
    "Assistenza legale per infortuni sul lavoro, malasanità e incidenti stradali. Zero anticipi, paghi solo se vinci. Traduttori gratuiti nella tua lingua.",
  keywords:
    "risarcimento, infortunio sul lavoro, malasanità, incidente stradale, assistenza legale gratuita",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it" className="scroll-smooth">
      <body className={`${inter.className} antialiased`} suppressHydrationWarning>{children}</body>
    </html>
  );
}

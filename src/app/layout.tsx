import type { Metadata } from "next";
import { Inter } from "next/font/google";
import IubendaScripts from "./components/IubendaScripts";
import MetaPixel from "./components/MetaPixel";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "RisarcimentoSemplice – Ottieni il risarcimento che ti spetta",
  description:
    "Assistenza legale per infortuni sul lavoro e incidenti stradali. Zero anticipi, paghi solo se vinci. Traduttori gratuiti nella tua lingua.",
  keywords:
    "risarcimento, infortunio sul lavoro, incidente stradale, assistenza legale gratuita",
  icons: {
    icon: "/icona.svg",
    shortcut: "/icona.svg",
    apple: "/icona.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it" className="scroll-smooth">
      <head>
        <IubendaScripts />
      </head>
      <body className={`${inter.className} antialiased`} suppressHydrationWarning>
        <MetaPixel />
        {children}
      </body>
    </html>
  );
}

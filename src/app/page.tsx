import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Services from "./components/Services";
import LanguageSupport from "./components/LanguageSupport";
import HowItWorks from "./components/HowItWorks";
import Testimonials from "./components/Testimonials";
import FaqSection from "./components/FaqSection";
import GuidesSection from "./components/GuidesSection";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import FAB from "./components/FAB";
import { LocaleProvider } from "./i18n/LocaleContext";

export default function Home() {
  return (
    <LocaleProvider>
      <Header />
      <main>
        <Hero />

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

        <Features />

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

        <Services />

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

        <LanguageSupport />

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

        <HowItWorks />

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

        <Testimonials />

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

        <FaqSection />

        <ContactForm />

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

        <GuidesSection />
      </main>
      <Footer />
      <FAB />
    </LocaleProvider>
  );
}

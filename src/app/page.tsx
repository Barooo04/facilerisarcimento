import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Services from "./components/Services";
import HowItWorks from "./components/HowItWorks";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import FAB from "./components/FAB";

export default function Home() {
  return (
    <>
      <Header />
      <main className="pt-[90px]">
        <Hero />

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

        <Features />

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

        <Services />

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

        <HowItWorks />

      <ContactForm />
    </main>
      <Footer />
      <FAB />
    </>
  );
}

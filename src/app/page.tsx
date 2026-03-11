import type { Metadata } from "next";
import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import AppLinksBar from "@/components/landing/AppLinksBar";
import WhyPreop360 from "@/components/landing/WhyPreop360";
import CleanInterfaceSection from "@/components/landing/CleanInterfaceSection";
import WhatItSolves from "@/components/landing/WhatItSolves";
import WhoItsFor from "@/components/landing/WhoItsFor";
import HowItWorks from "@/components/landing/HowItWorks";
import Pricing from "@/components/landing/Pricing";
import Testimonials from "@/components/landing/Testimonials";
import TaglineRepeat from "@/components/landing/TaglineRepeat";
import Footer from "@/components/landing/Footer";

export const metadata: Metadata = {
  title: "Preop360 – Guideline-Based Preoperative Cardiac Assessment",
  description:
    "Modern, mobile-friendly preoperative cardiac assessment tool with built-in ACC/AHA guidelines, risk scores, and medication management.",
};

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-bg-slate-soft text-text">
      <Header />
      <main className="flex flex-col">
        <Hero />
        {/* <AppLinksBar /> */}
        <WhyPreop360 />
        <CleanInterfaceSection />
        <WhatItSolves />
        <WhoItsFor />
        <HowItWorks />
        <Pricing />
        <Testimonials />
        <TaglineRepeat />
      </main>
      <Footer />
    </div>
  );
}


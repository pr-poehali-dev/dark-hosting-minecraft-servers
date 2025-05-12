import React from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PricingCards from "@/components/PricingCards";
import FeatureGrid from "@/components/FeatureGrid";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-minecraft-dark">
      <Navbar />
      <main>
        <HeroSection />
        <div id="pricing">
          <PricingCards />
        </div>
        <FeatureGrid />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

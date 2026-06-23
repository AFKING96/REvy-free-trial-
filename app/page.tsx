import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustedBy from "@/components/TrustedBy";
import Problem from "@/components/Problem";
import Features from "@/components/Features";
import Calculator from "@/components/Calculator";
import FreeTrial from "@/components/FreeTrial";
import Enterprise from "@/components/Enterprise";
import Footer from "@/components/Footer";
import NeuralBackground from "@/components/NeuralBackground";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col overflow-hidden bg-revy-bg-primary">
      {/* WebGL/Canvas neural ambient background */}
      <NeuralBackground />

      {/* Navigation */}
      <Navbar />

      {/* Main Page Layout */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero />

        {/* Trusted By Section */}
        <TrustedBy />

        {/* Problem Section */}
        <Problem />

        {/* Features Grid Section */}
        <Features />

        {/* ROI Calculator Section */}
        <Calculator />

        {/* Free Trial Form Section */}
        <FreeTrial />

        {/* Enterprise Section */}
        <Enterprise />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

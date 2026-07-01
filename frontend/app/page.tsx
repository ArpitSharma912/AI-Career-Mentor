import Background from "@/components/common/Background";
import Navbar from "@/components/navbar/Navbar";
import Hero from "@/components/hero/Hero";
import Companies from "@/components/companies/Companies";
import Features from "@/components/features/Features";
import DashboardPreview from "@/components/dashboard/DashboardPreview";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050816] text-white">
      <Background />

      <Navbar />

      <Hero />

      <Companies />

      <Features />

      <DashboardPreview />

      <Footer />
    </main>
  );
}
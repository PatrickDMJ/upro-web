import Hero from "@/components/Hero";
import ElevatorPitchSection from "@/components/ElevatorPitchSection";
import { TestimonialSection } from "@/components/TestimonialSection";
import TrustedByExpertsSection from "../components/TrustedByExpertsSection";
import CallToActionPage from "@/components/CallToActionPage";

// Server Component - rendered on the server
export default function Home() {
  // Generate server time for demonstration
  const serverTime = new Date().toLocaleTimeString();

  return (
    <main className="bg-[#020d02]">
      <Hero />
      <ElevatorPitchSection />
      <TrustedByExpertsSection />
      <TestimonialSection />
      <CallToActionPage />
    </main>
  );
}

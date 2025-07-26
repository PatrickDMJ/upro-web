import { TestimonialSection } from "@/components/TestimonialSection";
import { Hero } from "@/components/Hero";

import { RenderingDemo } from "@/components/RenderingDemo";

import TrustedByExpertsSection from "../components/TrustedByExpertsSection";

import CallToActionPage from "@/components/CallToActionPage";

// Server Component - rendered on the server
export default function Home() {
  // Generate server time for demonstration
  const serverTime = new Date().toLocaleTimeString();

  return (
    <div className="w-full" style={{ backgroundColor: "#020d02" }}>
      {/* Testimonial Section - Full Width */}
      <Hero />

      <div className="min-h-[calc(100vh-4rem)] p-8">
        <TrustedByExpertsSection />
        <TestimonialSection />

        <div className="grid gap-6 mb-8">
          <CallToActionPage />
          <RenderingDemo />
        </div>
      </div>
    </div>
  );
}

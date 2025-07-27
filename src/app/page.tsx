import { TestimonialSection } from "@/components/TestimonialSection";
import { Hero } from "@/components/Hero";
import TrustedByExpertsSection from "../components/TrustedByExpertsSection";
import CallToActionPage from "@/components/CallToActionPage";

// Server Component - rendered on the server
export default function Home() {
  return (
    <div className="w-full" style={{ backgroundColor: "#020d02" }}>
      {/* Testimonial Section - Full Width */}
      <Hero />

      <div className="min-h-[calc(100vh-4rem)] p-8">
        <TrustedByExpertsSection />
        <TestimonialSection />
        <CallToActionPage />
      </div>
    </div>
  );
}

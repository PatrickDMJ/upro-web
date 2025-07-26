import { TestimonialSection } from "@/components/TestimonialSection";

// Server Component - rendered on the server
export default function Home() {
  return (
    <div className="w-full" style={{ backgroundColor: "#020d02" }}>
      {/* Testimonial Section - Full Width */}
      <TestimonialSection />
    </div>
  );
}

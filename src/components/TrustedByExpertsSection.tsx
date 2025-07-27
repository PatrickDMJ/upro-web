import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function TrustedByExpertsSection() {
  return (
    <section
      aria-label="Trusted By Experts"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-[#020d02]"
    >
      <div className="max-w-8xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-24">
          {/* Text Content */}
          <div className="flex-1 space-y-6 lg:space-y-10 text-center lg:text-left">
            <div className="space-y-4 lg:space-y-5">
              <h1
                className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-black leading-tight tracking-tight mb-8 lg:mb-12"
                style={{
                  fontFamily: "THE BOLD FONT",
                  fontWeight: 900,
                  color: "#D7E4D7",
                }}
              >
                BUILT WITH EXPERTS.
                <br className="hidden sm:block" />
                BACKED BY LEADERS.
              </h1>

              <p
                className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-normal leading-relaxed max-w-2xl"
                style={{
                  color: "#D7E4D7",
                  fontFamily:
                    "Montserrat, -apple-system, Roboto, Helvetica, sans-serif",
                  letterSpacing: "-0.12px",
                  lineHeight: "1.33",
                }}
              >
                U-Pro Soccer combines leading-edge technology with real-world
                coaching insight. Our system has been tested by families,
                reviewed by sports scientists, and supported by some of Canada's
                top innovation programs.
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="flex-1 w-full">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/633b73195c921bd63c98f5ff51ff6ce964300c2b?width=1248"
              alt="A child practicing soccer drills in a bright living room with a professional coach demonstrating techniques"
              className="w-full h-auto rounded-xl lg:rounded-3xl border border-transparent shadow-lg"
              style={{
                borderRadius: "20px",
                aspectRatio: "624/485",
                objectFit: "cover",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

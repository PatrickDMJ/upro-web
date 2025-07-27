"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { useRef, useEffect } from "react";

interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  avatar?: string;
}

const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Emily Hawthorne",
    role: "Parent of 10-year-old",
    content:
      "Our son's footwork and confidence have soared. He loves leveling up!",
    avatar:
      "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
  },
  {
    id: "2",
    name: "Oliver Kingston",
    role: "Junior player",
    content: "I feel like I have a coach with me everywhere.",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
  },
  {
    id: "3",
    name: "Sophia Lin",
    role: "Soccer Enthusiast",
    content: "The app makes training easy and fun. Our family loves it!",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
  },
  {
    id: "4",
    name: "Lucas Rivera",
    role: "Parent of 8-year-old",
    content: "U-Pro has transformed our living room into a soccer field.",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
  },
  {
    id: "5",
    name: "Maria Santos",
    role: "Parent of 12-year-old",
    content: "Amazing progress in just weeks! My daughter is now team captain.",
    avatar:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face",
  },
  {
    id: "6",
    name: "James Wilson",
    role: "Youth Coach",
    content: "I recommend this app to all my players. Great training tool!",
    avatar:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face",
  },
  {
    id: "7",
    name: "Sarah Chen",
    role: "Teen Player",
    content: "Love the personalized training plans. Made it to varsity team!",
    avatar:
      "https://images.unsplash.com/photo-1594736797933-d0d9ba7e1c8d?w=150&h=150&fit=crop&crop=face",
  },
];

export function TestimonialSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Add keyboard navigation support
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        container.scrollBy({ left: -320, behavior: "smooth" });
      } else if (e.key === "ArrowRight") {
        container.scrollBy({ left: 320, behavior: "smooth" });
      }
    };

    container.addEventListener("keydown", handleKeyDown);
    return () => container.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <section
      id="testimonials"
      className="w-full py-16 md:py-20 lg:py-24 bg-[#020d02]"
      role="region"
      aria-labelledby="testimonials-heading"
    >
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          id="testimonials-heading"
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 md:mb-16 text-white"
          style={{ fontFamily: "THE BOLD FONT" }}
        >
          What Parents and Kids Say
        </h2>

        {/* Horizontal Scrollable Container */}
        <div
          className="relative"
          role="region"
          aria-label="Customer testimonials carousel"
        >
          {/* Fade shadows for visual indication */}
          <div
            className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#020d02] via-[#020d02]/50 to-transparent z-10 pointer-events-none"
            aria-hidden="true"
          />
          <div
            className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#020d02] via-[#020d02]/50 to-transparent z-10 pointer-events-none"
            aria-hidden="true"
          />

          <div
            ref={scrollContainerRef}
            className="overflow-x-auto scrollbar-hide focus:outline-none focus:ring-2 focus:ring-upro-green focus:ring-offset-2 focus:ring-offset-[#020d02]"
            tabIndex={0}
            role="group"
            aria-label="Scroll through testimonials using arrow keys"
          >
            <div
              className="flex gap-6 pb-4 px-16"
              style={{ width: "max-content" }}
            >
              {testimonials.map(testimonial => (
                <Card
                  key={testimonial.id}
                  className="text-white p-6 rounded-xl border-0 flex-shrink-0 w-80 shadow-lg backdrop-blur-sm focus-within:ring-2 focus-within:ring-upro-green focus-within:ring-offset-2 focus-within:ring-offset-[#182618]"
                  style={{
                    backgroundColor: "#182618",
                  }}
                  role="article"
                  aria-labelledby={`testimonial-${testimonial.id}-name`}
                >
                  <CardContent className="p-0 space-y-4">
                    {/* Avatar and Info */}
                    <header className="flex items-center space-x-4">
                      <Avatar className="size-12 ring-2 ring-white/20">
                        {testimonial.avatar && (
                          <AvatarImage
                            src={testimonial.avatar}
                            alt=""
                            loading="lazy"
                          />
                        )}
                        <AvatarFallback className="bg-gray-700 text-white text-sm font-medium">
                          {testimonial.name
                            .split(" ")
                            .map(n => n[0])
                            .join("")
                            .toUpperCase()}
                        </AvatarFallback>
                      </Avatar>

                      <div className="flex-1">
                        <h3
                          id={`testimonial-${testimonial.id}-name`}
                          className="font-semibold text-white text-sm"
                        >
                          {testimonial.name}
                        </h3>
                        <p className="text-gray-300 text-xs">
                          {testimonial.role}
                        </p>
                      </div>
                    </header>

                    {/* Content section with vertical line */}
                    <div className="flex space-x-4">
                      {/* Vertical line positioned below avatar */}
                      <div
                        className="w-12 flex justify-center"
                        aria-hidden="true"
                      >
                        <div className="border-l border-white/20 h-full" />
                      </div>

                      {/* Testimonial Content */}
                      <blockquote
                        className="flex-1 text-gray-200 text-sm leading-relaxed"
                        cite={`Testimonial from ${testimonial.name}`}
                      >
                        &ldquo;{testimonial.content}&rdquo;
                      </blockquote>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Screen reader instructions */}
          <div className="sr-only">
            Use arrow keys to navigate through testimonials when focused on the
            carousel.
          </div>
        </div>
      </div>
    </section>
  );
}

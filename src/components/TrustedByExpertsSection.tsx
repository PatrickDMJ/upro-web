import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";
import Image from "next/image";

export default function TrustedByExpertPage() {
  const testimonials = [
    {
      name: "Emily Hawthorne",
      role: "Parent of 10-year-old",
      avatar: "/api/placeholder/48/48",
      quote:
        "Our son's footwork and confidence have soared. He loves leveling up!",
    },
    {
      name: "Oliver Kingston",
      role: "Junior Soccer Coach",
      avatar: "/api/placeholder/48/48",
      quote: "I feel like I have a coach with me everywhere.",
    },
    {
      name: "Sophia Lin",
      role: "Soccer Enthusiast",
      avatar: "/api/placeholder/48/48",
      quote: "The app makes training easy and fun. Our family loves it!",
    },
    {
      name: "Lucas Rivera",
      role: "Parent of 8-year-old",
      avatar: "/api/placeholder/48/48",
      quote: "U-Pro has transformed our living room into a soccer field.",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Expert Coaching at Home Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              Expert Coaching at Home
            </h1>
            <p className="text-xl text-gray-300">
              No more hunting for good coaches.
            </p>
            <Button className="bg-green-500 hover:bg-green-600 text-black font-semibold px-8 py-6 text-lg rounded-full">
              Learn More
            </Button>
          </div>
          <div className="relative">
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl overflow-hidden">
              <Image
                src="/api/placeholder/600/400"
                alt="Father and child playing soccer at home"
                width={600}
                height={400}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Flexible Schedule Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 relative">
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl overflow-hidden">
              <Image
                src="/api/placeholder/600/400"
                alt="Child practicing soccer indoors"
                width={600}
                height={400}
                className="w-full h-auto"
              />
            </div>
          </div>
          <div className="order-1 lg:order-2 space-y-6">
            <h2 className="text-5xl lg:text-6xl font-bold leading-tight">
              Flexible Schedule
            </h2>
            <p className="text-xl text-gray-300">Train when you want.</p>
            <Button className="bg-green-500 hover:bg-green-600 text-black font-semibold px-8 py-6 text-lg rounded-full">
              Explore Options
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            What Parents and Kids Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-gray-900 border-gray-800 p-6">
              <div className="flex items-center space-x-3 mb-4">
                <Avatar className="w-12 h-12">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="rounded-full"
                  />
                </Avatar>
                <div>
                  <h3 className="font-semibold text-white">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed">
                &quot;{testimonial.quote}&quot;
              </p>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}

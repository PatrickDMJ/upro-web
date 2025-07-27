import React from "react";

const CallToActionPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-7xl">
        <div className=" py-16 sm:py-20 lg:py-24">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 lg:gap-16">
            {/* Left Content */}
            <div className="flex-1 max-w-2xl">
              <h1
                className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-black leading-tight tracking-tight mb-8 lg:mb-12"
                style={{
                  fontFamily: "THE BOLD FONT",
                  fontWeight: 900,
                  color: "#D7E4D7",
                }}
              >
                READY TO START THE JOURNEY?
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
                Download the app and start your free training experience today.
                No equipment needed — just a phone, a ball, and a love for the
                game.
              </p>
            </div>

            {/* Right Content - App Store Buttons */}
            <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-4 lg:gap-6 flex-shrink-0">
              <button className="w-full bg-upro-green text-black font-public font-medium text-lg lg:text-xl px-8 py-3 lg:py-3 rounded-lg">
                App Store
              </button>
              <button className="w-full bg-upro-green text-black font-public font-medium text-lg lg:text-xl px-8 py-3 lg:py-3 rounded-lg">
                Google Play
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToActionPage;

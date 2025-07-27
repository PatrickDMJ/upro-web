export default function Hero() {
  return (
    <section aria-label="Hero" className="relative overflow-hidden">
      {/* Background gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(172deg, rgba(2, 13, 2, 0.70) 24.02%, rgba(13, 148, 71, 0.70) 141.68%), #020D02",
        }}
      />

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center px-4 lg:px-8">
        {/* Hero text */}
        <div className="mt-12 text-center max-w-7xl mx-auto">
          <h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl leading-tight tracking-tight mb-8 lg:mb-12"
            style={{
              fontFamily: "THE BOLD FONT",
              fontWeight: 900,
              color: "#D7E4D7",
            }}
          >
            Train Like a Pro.
            <br />
            Play Like a Gamer.
          </h1>

          {/* Description */}
          <p className="text-white font-montserrat font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl leading-relaxed max-w-4xl mx-auto mb-12 lg:mb-20">
            U-Pro Soccer turns your living room into a smart training ground —
            powered by AI, fueled by fun, and designed to keep kids moving and
            improving.
          </p>

          {/* Buttons */}
          <div className="flex flex-col gap-12 justify-center items-center">
            <button className="bg-upro-green text-black font-public font-medium text-xl lg:text-2xl px-8 lg:px-12 py-4 lg:py-6 rounded-3xl hover:bg-opacity-90 transition-all duration-200 min-w-48">
              Start Free
            </button>
            <button className="bg-upro-green text-black font-public font-medium text-xl lg:text-2xl px-8 lg:px-12 py-4 lg:py-6 rounded-3xl hover:bg-opacity-90 transition-all duration-200 min-w-64">
              See How It Works
            </button>
          </div>
        </div>

        {/* Mobile phone mockup */}
        <div className="mt-16 lg:mt-24 flex justify-center">
          <div className="relative">
            {/* Phone container */}
            <div
              className="w-64 sm:w-80 lg:w-96 xl:w-[32rem] h-[32rem] sm:h-[40rem] lg:h-[48rem] xl:h-[56rem] bg-black rounded-t-3xl lg:rounded-t-[3rem] relative"
              style={{
                border: "1.5px solid rgba(145, 182, 145, 0.20)",
                borderBottom: "none",
              }}
            >
              {/* U-Pro logo in phone */}
              <div className="absolute top-12 sm:top-16 lg:top-20 left-1/2 transform -translate-x-1/2">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/39a9e7d50e4bcde9141bfcd2f9c08d5e8a3e0587?width=539"
                  alt="U-Pro Soccer Logo"
                  className="w-48 sm:w-56 lg:w-64 xl:w-72 h-auto"
                />
              </div>

              {/* Mock interface elements */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-5/6">
                {/* Progress bars */}
                <div className="w-full h-8 lg:h-10 bg-white bg-opacity-30 rounded-2xl mb-8 lg:mb-12"></div>
                <div className="w-4/5 h-8 lg:h-10 bg-white bg-opacity-30 rounded-2xl mx-auto mb-16 lg:mb-20"></div>
              </div>

              {/* Get Started button in phone */}
              <div className="absolute bottom-16 sm:bottom-20 lg:bottom-24 left-1/2 transform -translate-x-1/2 w-5/6">
                <button className="w-full bg-upro-green text-black font-public font-medium text-lg lg:text-xl py-4 lg:py-5 rounded-2xl">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

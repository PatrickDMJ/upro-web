export default function ElevatorPitchSection() {
  return (
    <div className="relative overflow-hidden">
      <div className="mt-28 text-center max-w-7xl mx-auto">
        <h1
          className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-black leading-tight tracking-tight mb-8 lg:mb-12"
          style={{
            fontFamily: "THE BOLD FONT",
            fontWeight: 900,
            color: "#D7E4D7",
          }}
        >
          A NEW WAY TO TRAIN STARTS HERE
        </h1>

        {/* Description */}
        <p className="text-white font-montserrat font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl leading-relaxed max-w-4xl mx-auto mb-12 lg:mb-20">
          No more boring drills. No more wasted screen time. With U-Pro, kids
          learn real soccer skills through fun, personalized missions — all from
          home.
        </p>
      </div>
    </div>
  );
}

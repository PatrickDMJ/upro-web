"use client";

export default function ProfilePage() {
  return (
    <div className="min-h-[calc(100vh-4rem)] p-8 gap-8 flex flex-col">
      <section className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center">
          More Than Just an App
        </h1>
        <h2 className="text-2xl font-bold mb-8 text-center">
          A Training Partner You Can Trust
        </h2>
      </section>

      <section className="max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold mb-8 text-center">🏠 For Parents</h2>
        <p>
          Turn screen time into skill time. U-Pro helps your child build
          confidence, discipline, and healthy habits — all while having fun at
          home.
        </p>
      </section>

      <section className="max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold mb-8 text-center">⚽ For Coaches</h2>
        <p>
          Give every player more ball touches, targeted drills, and instant
          feedback — even between practices. U-Pro supports your coaching from
          anywhere.
        </p>
      </section>

      <section className="max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold mb-8 text-center">📊 For Clubs</h2>
        <p>
          Need scalable training that works off-field too? U-Pro helps clubs
          deliver consistent development, track player progress, and engage
          families year-round.
        </p>
      </section>
    </div>
  );
}

"use client";

import { useAuth } from "@/contexts/AuthContext";

export default function ProfilePage() {
  const { user } = useAuth();

  return (
    <div className="min-h-[calc(100vh-4rem)] p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center">
          More Than Just an App
        </h1>
        <h2 className="text-2xl font-bold mb-8 text-center">
          A Training Partner You Can Trust
        </h2>
      </div>
    </div>
  );
}

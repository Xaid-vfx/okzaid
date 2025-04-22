'use client';

import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Chapters from "@/components/Chapters";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero />
      <Chapters />
    </main>
  );
}

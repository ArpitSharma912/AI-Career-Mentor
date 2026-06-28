"use client";

import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center px-6">

      <div className="mx-auto max-w-6xl text-center">

        {/* Badge */}
        <div className="mb-8 inline-flex rounded-full border border-cyan-500/30 bg-cyan-500/10 px-5 py-2 text-sm font-medium text-cyan-300">
          🚀 AI Powered Career Platform
        </div>

        {/* Heading */}
        <h1 className="text-5xl font-extrabold leading-tight text-white md:text-7xl">

          Build Your Dream Career

          <br />

          <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
            With Artificial Intelligence
          </span>

        </h1>

        {/* Description */}
        <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-400">

          Upload your resume, receive an ATS score, improve your profile,
          prepare for interviews, and get a personalized AI roadmap that helps
          you land your dream job faster.

        </p>

        {/* Buttons */}
        <div className="mt-12 flex flex-wrap justify-center gap-6">

          <button className="flex items-center gap-2 rounded-xl bg-cyan-500 px-8 py-4 font-semibold text-black transition-all duration-300 hover:scale-105 hover:bg-cyan-400">

            Get Started

            <ArrowRight size={20} />

          </button>

          <button className="rounded-xl border border-white/20 px-8 py-4 text-white transition-all duration-300 hover:bg-white/10">

            Watch Demo

          </button>

        </div>

      </div>

    </section>
  );
}
"use client";

import Stats from "@/components/stats/Stats";
import ProgressBar from "@/components/common/ProgressBar";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center px-6 pt-32">
      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
        {/* Left Side */}
        <div>
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
          <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-400">
            Upload your resume, receive an ATS score, improve your profile,
            prepare for interviews, and get a personalized AI roadmap that
            helps you land your dream job faster.
          </p>

          {/* Buttons */}
          <div className="mt-12 flex flex-wrap gap-6">
            <button className="flex items-center gap-2 rounded-xl bg-cyan-500 px-8 py-4 font-semibold text-black transition-all duration-300 hover:scale-105 hover:bg-cyan-400">
              Get Started
              <ArrowRight size={20} />
            </button>

            <button className="rounded-xl border border-white/20 px-8 py-4 text-white transition-all duration-300 hover:bg-white/10">
              Watch Demo
            </button>
          </div>

          {/* Animated Stats */}
          <Stats />
        </div>

        {/* Right Side */}
        <div className="flex justify-center">
          <div className="w-full max-w-md rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl shadow-2xl">

            <div className="mb-8 flex items-center justify-between">
              <h3 className="text-2xl font-bold text-white">
                Career Analytics
              </h3>

              <span className="rounded-full bg-green-500/20 px-3 py-1 text-xs font-medium text-green-400">
                ● Live
              </span>
            </div>

            {/* Progress Bars */}
            <div className="space-y-6">
              <ProgressBar
                label="ATS Score"
                value={94}
                color="text-cyan-400"
              />

              <ProgressBar
                label="Resume Score"
                value={89}
                color="text-purple-400"
              />

              <ProgressBar
                label="Interview Ready"
                value={91}
                color="text-green-400"
              />

              <ProgressBar
                label="Job Match"
                value={87}
                color="text-pink-400"
              />
            </div>

            {/* AI Suggestion */}
            <div className="mt-8 rounded-2xl border border-cyan-500/20 bg-cyan-500/10 p-5">
              <p className="text-sm font-semibold text-cyan-300">
                🤖 AI Suggestion
              </p>

              <p className="mt-3 text-sm leading-6 text-gray-200">
                Add two more AI projects, improve your GitHub README, and
                practice technical interviews to increase your estimated hiring
                score by <span className="font-bold text-cyan-400">12%</span>.
              </p>
            </div>

            {/* Quick Status */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="rounded-xl bg-black/20 p-4">
                <p className="text-xs text-gray-400">
                  Resume
                </p>

                <p className="mt-2 text-lg font-bold text-green-400">
                  Uploaded ✓
                </p>
              </div>

              <div className="rounded-xl bg-black/20 p-4">
                <p className="text-xs text-gray-400">
                  AI Status
                </p>

                <p className="mt-2 text-lg font-bold text-cyan-400">
                  Ready
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
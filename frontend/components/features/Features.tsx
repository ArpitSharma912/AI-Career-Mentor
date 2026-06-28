"use client";

import {
  FileText,
  BrainCircuit,
  Target,
  Briefcase,
} from "lucide-react";

import FeatureCard from "./FeatureCard";

export default function Features() {
  return (
    <section className="py-32 px-6">
      <div className="mx-auto max-w-7xl">

        <div className="mb-16 text-center">

          <span className="rounded-full bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300">
            FEATURES
          </span>

          <h2 className="mt-6 text-5xl font-black text-white">
            Everything You Need
          </h2>

          <p className="mt-5 text-lg text-gray-400">
            Powered by AI to accelerate your career.
          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          <FeatureCard
            icon={FileText}
            title="Resume Analyzer"
            description="Receive AI-powered feedback and improve your resume instantly."
          />

          <FeatureCard
            icon={Target}
            title="ATS Score"
            description="Check how well your resume matches recruiter expectations."
          />

          <FeatureCard
            icon={BrainCircuit}
            title="Mock Interview"
            description="Practice interviews with AI and improve your confidence."
          />

          <FeatureCard
            icon={Briefcase}
            title="Career Roadmap"
            description="Get a personalized roadmap to reach your dream career."
          />

        </div>

      </div>
    </section>
  );
}
"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const stats = [
  { title: "ATS Score", value: "94%", color: "text-cyan-400" },
  { title: "Resume Score", value: "89%", color: "text-purple-400" },
  { title: "Interview Ready", value: "91%", color: "text-green-400" },
  { title: "Job Match", value: "87%", color: "text-pink-400" },
];

const suggestions = [
  "Optimize your resume keywords",
  "Complete two AI projects",
  "Improve LinkedIn profile",
  "Practice technical interviews",
];

export default function DashboardPreview() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-7xl">

        <div className="mb-12 text-center">
          <span className="rounded-full bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300">
            LIVE DASHBOARD
          </span>

          <h2 className="mt-6 text-5xl font-black">
            Career Analytics
          </h2>

          <p className="mt-4 text-gray-400">
            Monitor your progress with AI-powered insights.
          </p>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">

            {stats.map((item) => (
              <motion.div
                key={item.title}
                whileHover={{ scale: 1.05 }}
                className="rounded-2xl bg-black/20 p-6"
              >
                <p className="text-gray-400">
                  {item.title}
                </p>

                <h3 className={`mt-4 text-4xl font-bold ${item.color}`}>
                  {item.value}
                </h3>
              </motion.div>
            ))}

          </div>

          <div className="mt-12 rounded-2xl bg-black/20 p-6">

            <h3 className="mb-6 text-2xl font-bold">
              AI Suggestions
            </h3>

            <div className="space-y-4">

              {suggestions.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 className="text-green-400" size={20} />

                  <span className="text-gray-300">
                    {item}
                  </span>

                </div>
              ))}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
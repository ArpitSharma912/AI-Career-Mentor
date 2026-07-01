"use client";

import { companies } from "@/data/companies";

export default function Companies() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-6">

        <p className="mb-10 text-center text-sm uppercase tracking-[0.3em] text-gray-500">
          Trusted by students preparing for careers at
        </p>

        <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6">
          {companies.map((company) => (
            <div
              key={company}
              className="rounded-2xl border border-white/10 bg-white/5 py-5 text-center font-semibold text-gray-300 transition-all duration-300 hover:border-cyan-400 hover:text-cyan-400"
            >
              {company}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
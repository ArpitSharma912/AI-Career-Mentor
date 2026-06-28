"use client";

import Link from "next/link";
import { BrainCircuit } from "lucide-react";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full">
      <div className="mx-auto mt-5 flex max-w-7xl items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-8 py-4 backdrop-blur-xl shadow-2xl">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="rounded-xl bg-cyan-500/20 p-2">
            <BrainCircuit className="h-7 w-7 text-cyan-400" />
          </div>

          <span className="text-xl font-bold tracking-wide text-white">
            AI Career Mentor
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 text-gray-300 md:flex">
          <Link href="#" className="transition hover:text-cyan-400">
            Features
          </Link>

          <Link href="#" className="transition hover:text-cyan-400">
            Dashboard
          </Link>

          <Link href="#" className="transition hover:text-cyan-400">
            Resume AI
          </Link>

          <Link href="#" className="transition hover:text-cyan-400">
            Pricing
          </Link>
        </div>

        {/* Button */}
        <button className="rounded-xl bg-cyan-500 px-5 py-3 font-semibold text-black transition-all duration-300 hover:scale-105 hover:bg-cyan-400">
          Get Started
        </button>

      </div>
    </header>
  );
}
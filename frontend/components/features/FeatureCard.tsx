"use client";

import { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function FeatureCard({
  icon: Icon,
  title,
  description,
}: FeatureCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.03 }}
      transition={{ duration: 0.25 }}
      className="group rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/40"
    >
      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500/20">
        <Icon className="h-7 w-7 text-cyan-400" />
      </div>

      <h3 className="mb-3 text-2xl font-bold text-white">
        {title}
      </h3>

      <p className="leading-7 text-gray-400">
        {description}
      </p>
    </motion.div>
  );
}
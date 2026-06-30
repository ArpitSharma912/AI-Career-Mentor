"use client";

import { motion } from "framer-motion";

interface AnalyticsCardProps {
  title: string;
  value: string;
  color: string;
}

export default function AnalyticsCard({
  title,
  value,
  color,
}: AnalyticsCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.04, y: -6 }}
      transition={{ duration: 0.25 }}
      className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl"
    >
      <p className="text-gray-400 text-sm">{title}</p>

      <h3 className={`mt-3 text-3xl font-bold ${color}`}>
        {value}
      </h3>
    </motion.div>
  );
}
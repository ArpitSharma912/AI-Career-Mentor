"use client";

import { motion } from "framer-motion";

export default function Background() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <motion.div
        animate={{
          x: [0, 120, 0],
          y: [0, -80, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-20 left-10 h-80 w-80 rounded-full bg-cyan-500/20 blur-3xl"
      />

      <motion.div
        animate={{
          x: [0, -100, 0],
          y: [0, 120, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-10 right-10 h-[500px] w-[500px] rounded-full bg-violet-500/20 blur-3xl"
      />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#111827_0%,#050816_70%)]" />
    </div>
  );
}